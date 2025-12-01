<?php
// ---------------------------
// 설정 파일 포함
// ---------------------------
// DB 연결과 세션 시작이 들어있는 config.php를 포함
include "config.php";

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
        "message" => "데이터가 없습니다." // 클라이언트에게 메시지 전달
    ]);
    exit;
}

// ---------------------------
// 입력 데이터 변수에 저장
// ---------------------------
$userid = $data['userid'];
$userpw = $data['userpw'];
$username = $data['username'];

// ---------------------------
// Prepared Statement를 사용한 안전한 INSERT
// ---------------------------
// SQL 인젝션 공격 방지
$sql = "INSERT INTO users (userid, userpw, username) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $userid, $userpw, $username); 
// "sss" : 세 개의 문자열(string) 데이터를 바인딩

// ---------------------------
// 실행 후 결과 확인
// ---------------------------
$response = [];

if ($stmt->execute()) {
    // INSERT 성공
    $response["status"] = "success";
} else {
    // INSERT 실패 (예: 이미 존재하는 userid)
    $response["status"] = "fail";
    $response["message"] = $stmt->error; // 실제 DB 오류 메시지 확인 가능
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
