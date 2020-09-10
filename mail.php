<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $content = $name . ' оставил заявку на бронирование урока ' . '. Его телефон: ' . $phone;
    $success = mail("admin@yoga.com", 'Запрос на бронирование урока', $content);

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }
} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}