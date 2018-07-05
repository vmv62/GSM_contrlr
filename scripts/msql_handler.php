<?php
//Принимаем запрос от клиента, формируем очередь для занесения в базу.
// INSERT INTO Counter () VALUES ();
//строка запроса dbname=sensors&tbname=Counter
$host = "127.0.0.1";
$user = "root";
$passwd = "23272829";

$keys;
$vals;

foreach($_GET['data'] as $key => $value){
	$keys = $keys . ", " . $key;
	$vals = $vals . ", " . $value;
}

$query = "INSERT INTO Counter (" . $keys . ") VALUES (" . $vals . ");";
echo $query;
/*
$mysqli = new mysqli($host, $user, $passwd, $bdname);
//Запрос на добавление данных
$result = mysqli_query($mysqli, $query);
//Закрываем контекст работы с базами
mysqli_close($mysqli);
*/
?>
