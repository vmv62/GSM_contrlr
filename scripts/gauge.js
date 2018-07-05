 google.charts.load('current', {'packages':['gauge']});
 google.charts.setOnLoadCallback(drawGauge);

//Установка предельных значений, начала и конца желтой и красной зон.
var gaugeOptions = {min: 0, max: 500, yellowFrom: 300, yellowTo: 400,
	redFrom: 400, redTo: 500, minorTicks: 5};
var gauge;

//Функция отрисовки графиков
function drawGauge() {
	gaugeData = new google.visualization.DataTable();
	gaugeData.addColumn('number', 'Proc');
//	gaugeData.addColumn('number', 'Torpedo');
	gaugeData.addRows(2);
	gaugeData.setCell(0, 0, 120);
//	gaugeData.setCell(0, 1, 80);

	gauge = new google.visualization.Gauge(document.getElementById('gauge_div'));
	gauge.draw(gaugeData, gaugeOptions);
	}

//функция задания значения для отображения на графике.
function changeTemp(dir) {
	gaugeData.setValue(0, 0, dir); 
//	gaugeData.setValue(0, 1, dir);
	gauge.draw(gaugeData, gaugeOptions);
	}
//Запросить данные на сервере (функция запроса, которая вызвается при удачном запросе, вызывает сама себя)
setInterval(function(){		//Функция для выполнения запросов через поределенный интервал.
	$.ajax({
		url: './scripts/proc.php', //Скрипт выдает данные для отображения
		data:{	"dbname":"sensors",
			"tbname":"Counter",
			"data":{
				"current":45,
				"actpow":16,
				"tactpow":100
				}
		 },
		success: function(data){
			console.log(data); 	//Вывод данных в консоль
			changeTemp(data); 	//Вывод на график.
          	}
	});
}, 1000);

