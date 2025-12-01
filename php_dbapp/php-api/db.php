<?php
$host ='localhost';
$user='root'; 
$pw=''; // XAMPP 기본 root는 비밀번호 없음
$db='greendb';

$conn = new mysqli($host,$user,$pw,$db);
$conn->set_charset('utf8');
if($conn->connect_error){
   die('DB 연결 실패'.$conn->connect_error);
}
?>