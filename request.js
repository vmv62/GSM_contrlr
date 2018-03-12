$(document).ready(function(){

  'use strict';

	$.ajax({
		method: "GET",
		url: "db_work.php",
		data: {	cmd: "list_table"},
		success: function(data){
			var arr = [];
			arr = JSON.parse(data);
			alert(arr);
			arr.forEach(){
				$("select_bd").val(item);
				console.log(item);
			};
			$("input").val(arr[1]);

		}
	});

});
