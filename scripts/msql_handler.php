<?php

//Запрос должен содержать название базы данных, таблицу, тип операции
//b_name - имя базы данных
//t_name - имя таблици
//c_name - комманда на выполнение
print_r($_GET);

if($_GET[b_name] == "sensors"){
	echo "Now i start select a database!";
}


function connect(){

}
?>
