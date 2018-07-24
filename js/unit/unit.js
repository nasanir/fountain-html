function CreatePanel(var parent,
		var index,
	var data) {
	var title=data	
		
		
	if(parent != null) {
		var timestamp = Date.parse(new Date());
		var ver=index + "_" + timestamp;

		var div_panel = $("<div></div>")
		.attr("class", "panel panel-primary")
		.attr("id", "div_panel_" + ver);

		var div_panel_head = $("<div></div>")
		.attr("class", "panel-heading")
		.attr("id", "div_panel_head_" + ver);

		var div_panel_head_h3 = $("<h3></h3>")
		.attr("class", "panel-title")
		.attr("id", "div_panel_head_h3_" + ver);

		var div_panel_head_a = $("<a></a>")
		.attr("data-toggle", "collapse")
		.attr("data-parent", parent.getAttribute("id"))
		.attr("id", "div_panel_head_a_" + ver)
		.attr("href","div_panel_collapse"+ver)
	}
}