<?
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
require_once '/PHPMailer/src/Exception.php';
require_once '/PHPMailer/src/PHPMailer.php';
require_once '/PHPMailer/src/SMTP.php';
 
// Для более ранних версий PHPMailer
//require_once '/PHPMailer/PHPMailerAutoload.php';
 
$mail = PHPMailer;
$mail->CharSet = 'UTF-8';
 
// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
 
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->Username = 'mirodomgroup@gmail.com';
$mail->Password = 'lhmgvrthzljksxkx';
 
// От кого
$mail->setFrom('mirodomgroup@gmail.com', 'smtp.gmail.com');        
 
// Кому
$mail->addAddress('mirodomgroup@gmail.com', 'Иван Петров');
 
// Тема письма
$mail->Subject = $subject;
 
// Тело письма
$body = '<p><strong>«Hello, world!» </strong></p>';
$mail->msgHTML($body);
 
// Приложение

 
$mail->send();
?>