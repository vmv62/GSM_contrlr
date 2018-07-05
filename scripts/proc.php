<?php

ini_set("display_errors","1");
ini_set("display_startup_errors","1");
/*
ini_set('error_reporting', E_ALL);

        //Подключаемся к базе
        $mysqli = new mysqli("127.0.0.1", "root", "23272829", "sensors");

        //Получаем список таблиц в базе
        $result = mysqli_query($mysqli, "SELECT");

        //помещаем в массив результат.
        $tables = array();
        $tables = $result->fetch_all();

        echo json_encode($tables);

        //Закрываем контекст работы с базами
        mysqli_close($mysqli);
*/

print_r($_GET);
?>
