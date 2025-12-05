<?php
// 세션 시작 (반드시 최상단에!)
session_start();

//CORS 설정(React에서 접근 가능하도록 지정)
header("Access-Control-Allow-Origin: http://localhost:5173");//vite 기본 포트
header('Access-Control-Allow-Credentials: true'); // 👈 세션 쿠키 전송 허용
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// OPTIONS 요청 처리 (CORS preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
http_response_code(200);
exit();
}

//데이터베이스 연결정보
define('db_host','localhost');
define('db_user','root'); //학원은 green
define('db_pass',''); //XAMPP는 기본값 비밀번호 없음
define('db_name','greendb');

//데이터베이스 연결함수
function getDBConnection(){
  $conn = new mysqli(db_host,db_user,db_pass,db_name);

  // 연결 오류 체크
    if ($conn->connect_error) {
        die(json_encode([
            "status" => "fail",
            "message" => "DB 연결 실패: " . $conn->connect_error
        ]));
    }
    
    // UTF-8 설정
    $conn->set_charset("utf8mb4");
    
    return $conn;  
}

// 연결 객체 생성 (include 시 바로 사용 가능하도록)
$conn = getDBConnection();
?>