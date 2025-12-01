<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"), true);

// null 체크
if (!$data || !isset($data['userid'], $data['userpw'], $data['username'])) {
    echo json_encode(["status" => "fail", "message" => "데이터가 없습니다."]);
    exit;
}

$userid = $data['userid'];
$userpw = $data['userpw'];
$username = $data['username'];

// Prepared Statement
$sql = "INSERT INTO users (userid, userpw, username) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $userid, $userpw, $username);

$response = [];

if ($stmt->execute()) {
    $response["status"] = "success";
} else {
    $response["status"] = "fail";
    $response["message"] = $stmt->error; // 실제 오류 확인
}

echo json_encode($response);

$stmt->close();
$conn->close();
?>
