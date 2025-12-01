<?php
include "config.php";

session_destroy();

echo json_encode(["status" => "logout"]);
?>
