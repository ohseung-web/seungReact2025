<?php
include "config.php";

if (isset($_SESSION["user"])) {
    echo json_encode(["login" => true, "user" => $_SESSION["user"]]);
} else {
    echo json_encode(["login" => false]);
}
?>
