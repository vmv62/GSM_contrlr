$(document).ready(function(){

  'use strict';

  // находим необходимый селектор
  	var btn = document.getElementById('request');
	var resp = document.getElementById('main');

	$.ajax({
		method: "GET",
		url: "info.php",
		data: {name : "Juin", loc : "Santa Barbara"}
	})
	.done(function( msg ) {
    		alert( msg );
  	});


});
