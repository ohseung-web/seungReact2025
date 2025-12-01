<?php
// 기존 코드
//header("Access-Control-Allow-Origin: http://localhost:5173");

// 이렇게 변경! (별표는 모든 출처 허용)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=utf-8");

include "db.php";

$data = json_decode(file_get_contents("php://input"),true);
$userid = $data['userid'];
$userpw = $data['userpw'];
$username = $data['username'];

$sql = "insert into users (userid,userpw,username) values('$userid','$userpw','$username')";

if($conn->query($sql) === true){
   echo json_encode(['result' => 'success']);
}else{
   echo json_encode(['result' => 'fail']);
}

// OPTIONS 요청 처리 (이게 핵심!)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}
?>
