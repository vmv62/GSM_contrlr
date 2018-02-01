<?php
	//Подключаемся к базе
	$mysqli = new mysqli("127.0.0.1", "root", "23272829", "linux");

	$db_list = mysqli_query($mysqli, 'SHOW TABLES');

	$row = mysqli_fetch_assoc($db_list);

	print_r($row);

	//Закрываем контекст работы с базами
	mysqli_close($mysqli);
?>
