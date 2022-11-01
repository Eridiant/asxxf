<?
require 'phpmailer/class.phpmailer.php';

// $mail -> charSet = "UTF-8";

$name = $_POST['name'];
$email = $_POST['mail'];
$message = $_POST['message'];
$IP = $_SERVER['REMOTE_ADDR'];


//Create a new PHPMailer instance
$mail = new PHPMailer;

// Отправитель
$mail->setFrom('info@yesly.ru');

// Получатель
$mail->addAddress('info@yesly.ru');

// Тема
$mail->Subject = 'С сайта';

// convert HTML into a basic plain-text alternative body
$mail->msgHTML( "   
    <b>Имя:</b> $name<br>
    <b>E-mail:</b> $email<br>
    <b>Сообщение</b> $message<br>
    <b>IP:</b> $IP<br>    
    ");

if (!$mail->send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
        } else {
            echo "Message sent!";  
        }
?>