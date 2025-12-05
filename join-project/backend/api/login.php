<?php
include '../config/database.php';

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

     // 👇 세션에 사용자 정보 저장
    // $_SESSION['userid'] = $user['userid'];
    // $_SESSION['userpw'] = $user['userpw'];

    $respones['status'] = 'success';
    $respones['message'] = '로그인 성공';
    // 로그인 성공 시 userid를 아래처럼 포함 시켜야
    // LoginForm.jsx에서 userid를 화면에 출력할 수 있다.
    $respones['userid'] = $userid;
}else{
    $respones['status']='fail';
    $respones['message']='아이디 또는 비밀번호가 일치하지 않습니다.';
}
echo json_encode($respones);
$stmt->close();
$conn->close();

?>