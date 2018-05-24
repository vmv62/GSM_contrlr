<?php

ini_set("display_errors","1");
ini_set("display_startup_errors","1");
ini_set('error_reporting', E_ALL);

//Запрос на список таблиц в базе.

switch ($_GET["cmd"]){
	case "list_table": 
			$query_str = "SHOW TABLES";
			save_command($query_str);
			get_data_array($query_str, "work");
			break;
	case "table_struct":
			$query_str = "DESC ".$_GET["sel"];
			save_command($query_str);
			get_data_array($query_str, "work");
			break;
	case "add_to_table":
			$col_name = "";
			$values = "";
			foreach($_GET as $key=>$value){
				if(($key != "cmd") && ($key != "sel")  && ($key != "db")){
					$col_name .= $key.", ";
					if($_GET["db"] == "sensors"){
						$values .= $value.", ";
					}else{
						$values .= '"'.$value.'", ';
					}
				}
			}
			$col_name = substr($col_name, 0, -2);
			$values = substr($values, 0, -2);
			$query_str = "INSERT INTO ".$_GET["sel"]." (".$col_name.") VALUES (".$values.")" ;
			save_command(addcslashes($query_str,'"'));
			echo $query_str;
			if($_GET["db"] == "sensors"){
				send_data($query_str, "sensors");
			}
			else{
				send_data($query_str, "service");
				send_data($query_str, "work");
			}
			break;
	case "last_cmd":
			get_data_array("SELECT Команды FROM service.commands ORDER BY id DESC LIMIT 5", "service");
			break;
}

function get_data_array($query, $bd){
	//Подключаемся к базе
	$mysqli = new mysqli("127.0.0.1", "root", "23272829", $bd);

	//Получаем список таблиц в базе
	$result = mysqli_query($mysqli, $query);

	//помещаем в массив результат.
	$tables = array();
	$tables = $result->fetch_all();

	echo json_encode($tables);

	//Закрываем контекст работы с базами
	mysqli_close($mysqli);
}

function send_data($query, $db){
		//Подключаемся к базе
	$mysqli = new mysqli("127.0.0.1", "root", "23272829", $db);

	//Запрос на добавление данных
	$result = mysqli_query($mysqli, $query);

	//Закрываем контекст работы с базами
	mysqli_close($mysqli);
}

function save_command($command){
		//Подключаемся к базе
	$mysqli = new mysqli("127.0.0.1", "root", "23272829", "service");

	$query = 'INSERT INTO commands (Команды) VALUES ("'.$command.'")';

	//Запрос на добавление данных
	$result = mysqli_query($mysqli, $query);

	//Закрываем контекст работы с базами
	mysqli_close($mysqli);
}


?>
