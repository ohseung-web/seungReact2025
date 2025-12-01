<?php
// 로그인 유지 확인
include "config.php";

if (isset($_SESSION["user"])) {
    echo json_encode(["login" => true, "user" => $_SESSION["user"]]);
} else {
    echo json_encode(["login" => false]);
}
?>
