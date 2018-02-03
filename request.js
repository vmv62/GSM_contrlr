$(document).ready(function(){

  'use strict';

	$('#request').click(function(){
		var unit = $("input[name='Dbname']").val();
		var point = $("input[name='Agent']").val();
		$.ajax({
			method: "GET",
			url: "info.php",
			data: {unit: unit, point: point, brokes: "NULL", fix: "NULL", note: "NULL"}
		})
		.done(function( msg ) {
//    			$('#request').html(msg);
//    			$("input[name='Agent']").val(unit);
  		});
	});

});
