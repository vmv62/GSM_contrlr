//При построении графика использовать нужную базу данных.
//Нужно сделать вывод выбранных трендов на графике.


	var ctx = document.getElementById("dataChart");

	var chart = new Chart(ctx, {
        	 // The type of chart we want to create
        	type: 'line',

        	 // The data for our dataset
        	data: {
                	labels: ["11.11.2018", "12.11.2018", "13.11.2018", "14.11.2018", "15.11.2018", "16.11.2018", "17.11.2018"],
                	datasets: [{
                        	label: "My First dataset",
                        	data: [0, 10, 5, 2, 20, 30, 45],
                        	},
				{
				label: "Second data",
				data: [5, 15, 25, 2, 16, 21, 30],
				}],
        	},

        // Configuration options go here
        //options: {}
});
