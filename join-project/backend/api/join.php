<?php
// DB 연결이 들어있는 config의 database.php를 포함
include '../config/database.php';

// ---------------------------
// 클라이언트에서 보낸 JSON 데이터 읽기
// ---------------------------
// React나 다른 프론트엔드에서 fetch/axios로 보낸 POST 데이터를
// php://input을 통해 읽고, json_decode로 배열로 변환
$data = json_decode(file_get_contents("php://input"), true);

// ---------------------------
// 데이터 유효성 체크
// ---------------------------
// userid, userpw, username이 없으면 오류 반환 후 종료
if (!$data || !isset($data['userid'], $data['userpw'], $data['username'])) {
    echo json_encode([
        "status" => "fail",
        "message" => "필수 데이터가 없습니다." // 클라이언트에게 메시지 전달
    ]);
    exit;
}

// ---------------------------
// 입력 데이터 변수에 저장
// ---------------------------
$userid = $data['userid'];
$username = $data['username'];
$userpw = $data['userpw'];

// 빈 값 체크
if (empty($userid) || empty($username) || empty($userpw)) {
    echo json_encode([
        "status" => "fail",
        "message" => "모든 필드를 입력해주세요."
    ]);
    exit;
}

// 중복 아이디 확인
$stmt = $conn->prepare("SELECT * FROM users WHERE userid=?");
$stmt->bind_param("s", $userid);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["status"=>"fail", "message"=>"이미 존재하는 아이디입니다."]);
    $stmt->close();
    $conn->close();
    exit;
}


// ---------------------------
// Prepared Statement를 사용한 안전한 INSERT
// ---------------------------
// SQL 인젝션 공격 방지
$sql = "INSERT INTO users (userid, username,userpw) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $userid, $username, $userpw); 
// "sss" : 세 개의 문자열(string) 데이터를 바인딩

// ---------------------------
// 실행 후 결과 확인
// ---------------------------
$response = [];

if ($stmt->execute()) {
    // INSERT 성공
    $response["status"] = "success";
    $response["message"] = "회원가입이 완료되었습니다.";
} else {
    // INSERT 실패 (예: 이미 존재하는 userid)
    $response["status"] = "fail";
    $response["message"] = "회원가입 실패: " . $stmt->error;
}

// ---------------------------
// 클라이언트에게 JSON으로 결과 전송
// ---------------------------
echo json_encode($response);

// ---------------------------
// 사용한 Statement와 DB 연결 종료
// ---------------------------
$stmt->close();
$conn->close();
?>

