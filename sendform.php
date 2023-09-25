<?php
//Сбор данных из полей формы. 
$name = $_POST['user_name'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['telefon_namb']; // Берём данные из input c атрибутом name="phone"
$email = $_POST['email_contact']; // Берём данные из input c атрибутом name="mail"
 
$token = "6423523109:AAGCZc7oMLiQ-7cuIEUfo56euSRmsHnuW7M"; // Тут пишем токен
$chat_id = "-4033364477"; // Тут пишем ID чата, куда будут отправляться сообщения
$sitename = "sharlandia-poltava"; //Указываем название сайта
 
$arr = array(
 
  'Заказ с сайта: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Почта' => $email
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
?>