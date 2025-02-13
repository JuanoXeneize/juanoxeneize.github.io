
<?php
header('Content-Type: text/html; charset=UTF-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
$mail = new PHPMailer(true);

try {
    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'mail.apolofish.com'; 
    $mail->SMTPAuth = true;
    $mail->Username = 'info@apolofish.com';
    $mail->Password = 'MCjKoNsDlqN6'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Configuración del email
    $mail->setFrom($email, $nombre);
    $mail->addAddress('info@apolofish.com');
    $mail->Subject = "Mensaje vía web de $nombre";
    $mail->Body = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";

    $mail->send();
    header('Location: gracias.htm');
} catch (Exception $e) {
    echo "Error al enviar el correo: {$mail->ErrorInfo}";
}
?>