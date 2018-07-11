 google.charts.load('current', {'packages':['gauge']});
 google.charts.setOnLoadCallback(drawGauge);

//Установка предельных значений, начала и конца желтой и красной зон.
var gaugeOptions = {min: 0, max: 10000, yellowFrom: 7000, yellowTo: 8000,
	redFrom: 8000, redTo: 10000, minorTicks: 5};
var gauge;

//Функция отрисовки графиков
function drawGauge() {
	gaugeData = new google.visualization.DataTable();
	gaugeData.addColumn('number', 'WattO');
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
				"params":45,
				"dbinfo":16,
				}
		 },
		success: function(data){
			console.log(data); 	//Вывод данных в консоль
			changeTemp(data); 	//Вывод на график.
          	}
	});
}, 1000);

