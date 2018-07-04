<?php

//Запрос должен содержать название базы данных, таблицу, тип операции
//h_name - имя хоста
//u_name - имя пользователя
//u_paswd - пароль пользователя
//b_name - имя базы данных
//t_name - имя таблици
//c_name - комманда на выполнение
//
print_r($_GET);

//if(($_GET[u_name] == 0) || ($_GET[u_paswd] == 0) || ($_GET[b_name] == 0)){

if($_GET[u_name] == 0){
	echo "You must specify user name, password, db name!\n";
}

$mysqli = new mysqli($_GET[h_name], $_GET[u_name], $_GET[u_paswd], $_GET[b_name]);

function connect(){
}
?>
