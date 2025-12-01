<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['userid'], $data['userpw'])) {
    echo json_encode(["status" => "fail", "message" => "데이터가 없습니다."]);
    exit;
}

$userid = $data["userid"];
$userpw = $data["userpw"];

$sql = "SELECT * FROM users WHERE userid=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $userid);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

$response = [];

if ($user && $user["userpw"] === $userpw) {
    $_SESSION["user"] = $user["username"];
    $response["status"] = "success";
    $response["user"] = $user["username"];
} else {
    $response["status"] = "fail";
}

echo json_encode($response);

$stmt->close();
$conn->close();
?>
