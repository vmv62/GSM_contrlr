$(document).ready(function(){

  'use strict';

	$('#request').click(function(){

		$.ajax({
			method: "GET",
			url: "info.php",
			data: {	unit: $("input[name='unit']").val(),
				point: $("input[name='point']").val(), 
				brokes: $("textarea[name='brokes']").val(),
				fix: "NULL", 
				note: $("textarea[name='note']").val(),}
		})
		.done(function(data){ 
    			$("p[name='req_answ']").html(data);
//    			$("input[name='Agent']").val(unit);
  		});
	});

});
