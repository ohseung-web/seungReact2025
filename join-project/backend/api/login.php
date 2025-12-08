<?php
include '../config/database.php';

// React나 다른 프론트엔드에서 fetch/axios로 보낸 POST 데이터를
// php://input을 통해 읽고, json_decode로 배열로 변환
$data = json_decode(file_get_contents('php://input'),true);

$userid = $data['userid'];
$userpw = $data['userpw'];

// 빈값 체크
if(empty($userid) || empty($userpw)){
   echo json_encode([
      'stauts' => 'fail', 'message' => '아이디,비밀번호 모두 입력'
   ]);
   exit;
}

// DB에서 사용자 정보 조회
$sql = 'SELECT userid, userpw FROM users WHERE userid=? AND userpw=?';
$stmt= $conn->prepare($sql);
$stmt->bind_param('ss',$userid,$userpw);
$stmt->execute();
$result = $stmt->get_result();

$respones = [];
if($result->num_rows > 0){

   // ⭐ 쿠키 저장 (1시간 유지)
   // setcookie("userid", $userid, time()+3600, "/", "", false, false);

    $respones['status'] = 'success';
    $respones['message'] = '로그인 성공';
    // 로그인 성공 시 userid를 아래처럼 포함 시켜야
    // LoginForm.jsx에서 userid를 화면에 출력할 수 있다.
    $respones['userid'] = $userid;
}else{
    $respones['status']='fail';
    $respones['message']='아이디 또는 비밀번호가 일치하지 않습니다.';
}

// json_encode($respones) 는 => React의 오브젝트 배열로 변환
// {status:'success', message:'로그인성공', userid:'입력받은 id'} 
echo json_encode($respones);
$stmt->close();
$conn->close();

?>