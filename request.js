$(document).ready(function(){

  'use strict';

	$('#request').click(function(){

		$.ajax({
			method: "GET",
			url: "info.php",
			data: {Dbname: "linux", name : "Juin", loc : "Santa Barbara"}
		})
		.done(function( msg ) {
    			$('#request').html(msg);
  		});
	});

});
