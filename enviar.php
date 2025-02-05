<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$formcontent="
Nombre: $nombre \n
Email: $email \n
Mensaje: $message
";

$recipient = "info@apolofish.com";

$subject = "Mensaje via web de $nombre";

$header = "From: $email \r\n";
$header .= "Content-Type: text/html; charset=utf-8 \r\n";
mail($recipient, $subject, $formcontent, $header) or die("Error!");
header("Location: gracias.html");
?>
