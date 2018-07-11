<?php
//Принимаем запрос от клиента, формируем очередь для занесения в базу.
// INSERT INTO Counter () VALUES ();
//строка запроса dbname=sensors&tbname=Counter
$host = "127.0.0.1";
$user = "root";
$passwd = "23272829";

$keys;
$vals;

print_r($_GET);

foreach($_GET['data'] as $key => $value){
	$keys = $keys . $key.  ", ";
	$vals = $vals . $value.  ", ";
}

$keys = substr($keys, 0, -2);
$vals = substr($vals, 0, -2);

$query = "INSERT INTO Counter (" . $keys . ") VALUES (" . $vals . ");";
echo $query;

$mysqli = new mysqli($host, $user, $passwd, $sensors);
//Запрос на добавление данных
$result = mysqli_query($mysqli, $query);
//Закрываем контекст работы с базами
mysqli_close($mysqli);

?>
