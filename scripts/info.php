<?php
	//Подключаемся к базе
	$mysqli = new mysqli("127.0.0.1", "root", "23272829", "work");

	mysqli_query($mysqli, 'CREATE TABLE ka(id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, time TIMESTAMP, orgz TINYTEXT, vector TINYTEXT, equip TEXT, note TEXT)');
	$row = mysqli_fetch_assoc($db_list);

	print_r($row);

	$query_string = "INSERT INTO ka (orgz, vector, equip,  note) VALUES (\"$_GET[orgz]\", \"$_GET[vector]\", \"$_GET[equip]\", \"$_GET[note]\")";
	echo $query_string;
	$db_list = mysqli_query($mysqli, $query_string);

	if($db_list == FALSE){
		print("Query is false!");
	}

	//Закрываем контекст работы с базами
	mysqli_close($mysqli);

/*
server = 127.0.0.1;
db = work;
table = parts;

id INT AUTO INCREMENT,
time TIMESTAMP,
unit TINYTEXT,
point TINYTEXT,
brokes TEXT,
fix TEXT,
note TEXT,
*/


?>
