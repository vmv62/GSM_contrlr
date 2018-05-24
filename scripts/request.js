$(document).ready(function(){

//var arr = [];

  'use strict';
	//Подгрузка данных при з агрузке страницы.
	request("list_table", "scripts/db_work.php", {	cmd: "list_table"});
	request("last_cmd", "scripts/db_work.php", { cmd: "last_cmd"});

	//Добавляем кнопки
	$("#db_selector").append('<button id="btn_choose">Выбрать</button>');
	$("#btn").append('<button id="btn_send">Отправить</button>');

	//Прячем кнопку
	$("#btn_send").hide();

	//Обработка нажатия кнопок
	$("#btn_choose").click(function(){
		var arr = {};
		arr["cmd"] = "table_struct";
		arr["sel"] = $("#select_bd option:selected").text();
		request("btn_choose", "scripts/db_work.php", arr);
	});

	$("#btn_send").click(function(){
			var arr = {};
			var data = $('#db_s').serializeArray();
			arr["cmd"] = "add_to_table";
			arr["sel"] = $("#select_bd option:selected").text();
			var i = 0;
			for(i in data){
				arr[data[i].name] =  data[i].value;
			}
			request("btn_send", "scripts/db_work.php", arr);
			$("textarea").val(' ');

	});



	//Отправка запросов на сервер в зависимости от кнопки о обработка ответов
	function request(selec, url, query){
		var arr = [];
		$.ajax({
			method: "GET",
			url: url,
			data: query,
			dataType: 'json',
			contentType: 'application/json',
    			json: true,
    			success: function(data){
    				var arr = [];
				arr = data;
				if(selec == "btn_choose"){   //обрабатываем запрос от кнопки выбрать.
					$("#btn_send").show();
					$("form").html(' ');
					arr.forEach(function(arr){
						if((arr[0] != "id") && (arr[0] != "time")){
							$("form").append('<p>'+arr[0]+'<br><textarea type="text" name="'+arr[0]+'" cols="80" rows="4" type="text"></textarea></p>');
						}
					});
				}
				if(selec == "btn_send"){   //обрабатываем запрос от кнопки отправить.

    				}

    				if(selec == "list_table"){
    					arr = data;
					arr.forEach(function(item){
						$("#select_bd").append('<option name="'+item+'">'+item+'</select>');
						console.log(item);
						});
					$("input").val(arr[1]);
    				}

    				if(selec == "last_cmd"){   //обрабатываем запрос от кнопки отправить.
					arr = data;
					arr.forEach(function(item){
						$("#lenta").append('<p class="lenta">'+item+'</p>');
						console.log(item);
						});
    				}
    			}
		})
	}

});

