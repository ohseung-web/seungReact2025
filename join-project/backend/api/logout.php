<?php
include '../config/database.php';

// 세션 삭제
session_destroy();
echo json_encode([
   'status' => 'success', 'message' => '로그아웃 되었습니다.'
])

?>
