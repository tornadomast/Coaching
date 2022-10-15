<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$textin = $_POST['comment'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mytestproject.js@gmail.com';                 // Наш логин
$mail->Password = 'onqwlzqqnfxrkefr';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('mytestproject.js@gmail.com', 'Coaching cards');   // От кого письмо 
$mail->addAddress('tornadomast@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Замовлення на ресурсний щоденник';
$mail->Body    = '
	<h1>Вам прийшло замовленя на ресурсний щоденник</h1>  <br> 
	Імя: '. $name .' <br>
	Номер телефону: ' . $phone . '<br>
	Повідомлення: ' . $textin . '' ;

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>