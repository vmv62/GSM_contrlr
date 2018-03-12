<?php

ini_set("display_errors","1");
ini_set("display_startup_errors","1");
ini_set('error_reporting', E_ALL);

//Запрос на список таблиц в базе.
if($_GET["cmd"] == "list_table"){
	//Подключаемся к базе
	$mysqli = new mysqli("127.0.0.1", "root", "23272829", "work");

	//Получаем список таблиц в базе
	$result = mysqli_query($mysqli, "SHOW TABLES");

	//помещаем в массив результат.
	$tables = array();
	$tables = $result->fetch_all();

	echo json_encode($tables);

//	for($i=3; $i > 0;  $i--){
//		print($tables[$i]);
//	}

	//Закрываем контекст работы с базами
	mysqli_close($mysqli);
}

//Запрос
//if(){
//	
//}

?>
