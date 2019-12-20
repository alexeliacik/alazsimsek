
<meta http-equiv="refresh" content="2;URL=http://www.alazsimsek.com/iletisim.html">

<?
require("class.phpmailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();                                   // send via SMTP
$mail->Host     = "mail.yoncu.com"; // SMTP servers
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "alazsimsek@alazsimsek.com";  // SMTP username
$mail->Password = "Alaz2121."; // SMTP password
$mail->CharSet = 'UTF-8';
$mail->Port = 587;
$mail->From     = "alazsimsek@alazsimsek.com"; // smtp kullanycy adynyz ile ayny olmaly
$mail->Fromname = "giden ismi";
$mail->AddAddress("alazsimsek@alazsimsek.com","Websitenizden gelen SipariSiniz.");
$mail->Subject  =  $_POST['isim'];
$mail->Body     =  implode("  ",$_POST);
if(!$mail->Send())
{
   echo "Mesaj Gönderilemedi <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo '<script type="text/javascript">alert("E Postanız  Başarı ile  Gönderilmiştir.");</script>';

?>
