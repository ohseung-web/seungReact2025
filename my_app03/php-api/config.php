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



<?php
// ---------------------------
// CORS 설정 (Cross-Origin Resource Sharing)
// ---------------------------

// 프론트엔드에서 localhost:5173에서 요청해도 허용
header("Access-Control-Allow-Origin: http://localhost:5173");

// 쿠키를 포함한 요청을 허용
header("Access-Control-Allow-Credentials: true");

// 요청 헤더에 Content-Type 포함 허용
header("Access-Control-Allow-Headers: Content-Type");

// 허용할 HTTP 메서드 지정
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// ---------------------------
// OPTIONS 요청 처리 (브라우저가 사전 요청으로 보내는 요청)
// ---------------------------
// 브라우저가 CORS 요청 전에 보내는 OPTIONS 요청에 대해서
// 별도의 처리 없이 200 응답만 보내고 종료
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ---------------------------
// MySQL 데이터베이스 연결
// ---------------------------

// 데이터베이스 접속 정보
$host = "localhost";       // DB 서버 주소 (로컬 컴퓨터)
$user = "root";            // DB 계정
$pass = "12345678";        // DB 비밀번호 (XAMPP 기본은 빈 문자열)
$dbname = "greendb";       // 사용할 DB 이름
//$port = 3307;             // MySQL 포트를 변경했으면 지정 (기본 3306)

// MySQLi 객체 생성 후 연결 시도
$conn = new mysqli($host, $user, $pass, $dbname, $port);

// 연결 실패 시 스크립트 종료 및 에러 출력
if ($conn->connect_error) {
    die("DB 연결 실패: " . $conn->connect_error);
}

// ---------------------------
// 세션 사용
// ---------------------------
// 로그인 상태 저장 등 세션 기능 사용을 위해 시작
session_start(); 
?>
