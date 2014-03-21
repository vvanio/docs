rf.StandaloneDashboard(function(db){
	var chart = new ChartComponent();
	chart.setDimensions (4, 4);
	chart.setCaption("A pie chart");	
	chart.setLabels (["Jan", "Feb", "Mar"]);
	chart.setPieValues ([10, 14, 13]);
	db.addComponent (chart);
});