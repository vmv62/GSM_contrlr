<?php

/*
Скрипт должен получать следующие параметры:
	Название таблицы для отображения данных
	Параметры которые надо извлечь
*/

ini_set("display_errors","1");
ini_set("display_startup_errors","1");


        //Подключаемся к базе
$mysqli = new mysqli("194.67.204.166", "root", "23272829", "sensors");

        //Получаем список таблиц в базе
$result = mysqli_query($mysqli, "SELECT Active_power FROM Counter ORDER BY Time DESC LIMIT 1;");

        //помещаем в массив результат.
$tables = array();
$tables = $result->fetch_all();
printf("%d", $tables[0][0]);

//print_r($_GET);

        //Закрываем контекст работы базами
mysqli_close($mysqli);

?>
