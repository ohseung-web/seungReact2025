<?php
// CORS 헤더
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// OPTIONS 요청이면 그냥 종료
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// DB연결
$host = "localhost";
$user = "root";
$pass = "12345678"; // XAMPP MySQL 비밀번호에 맞춰 변경, 없으면 ''
$dbname = "greendb";
//$port = 3307; // XAMPP MySQL 포트 변경했으면 지정

$conn = new mysqli($host, $user, $pass, $dbname, $port);

if ($conn->connect_error) {
    die("DB 연결 실패: " . $conn->connect_error);
}

session_start(); // 세션 사용

?>
