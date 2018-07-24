function createDiv(var id,
	var className) {
	var div = $("<div></div>")
		.attr("class", className)
		.attr("id", id);
	return div;
}

function createH(var id,
	var className,
		var level) {
	var h = $("<h" + level + "></h" + level + ">")
		.attr("class", className)
		.attr("id", id);
	return h;
}

function createFold(var id,
	var className,
		var collapse,
			var dataParent,
				var href,
					var context) {
	var a = $("<a></a>")
		.attr("data-toggle", collapse)
		.attr("data-parent", dataParent)
		.attr("id", id)
		.attr("href", href)
		.text(context);
	return a;
}

function createPanel(var parent,
	var index,
		var data) {
	var title = data['title'];

	if(parent != null) {
		var timestamp = Date.parse(new Date());
		var ver = index + "_" + timestamp;

		var div_panel = createDiv("panel panel-primary", "div_panel_" + ver);

		var div_panel_head = createDiv("panel-heading", "div_panel_head_" + ver);

		var div_panel_head_h3 = createH("div_panel_head_h3_" + ver, "panel-title", "3");

		var div_panel_head_a = createFold("div_panel_head_a_" + ver, "", "collapse", parent.getAttribute("id"), "div_panel_collapse" + ver, title)

		div_panel_head_h3.appendChild(div_panel_head_a);
		div_panel_head.appendChild(div_panel_head_h3);
		div_panel.appendChild(div_panel_head)

		var div_panel = $("<div></div>")
			.attr("class", "panel panel-primary")
			.attr("id", "div_panel_" + ver);

		<
		div id = "collapseTwo"
		class = "panel-collapse collapse" >
			<
			div class = "panel-body " >
			<
			p >
			<
			button type = "button"
		class = "btn btn-default btn-sm" >
			<
			span class = "glyphicon glyphicon-plus" > < /span>添加 < /
		button > <
			/p>

			<
			div class = "well well-lg" > 您好， 我在大的 Well 中！ < /div>

			<
			div class = "row" >
			<
			div class = "col-sm-4" >
			<
			div class = "panel panel-info" >
			<
			div class = "panel-heading" >
			<
			h3 class = "panel-title" > 面板标题 < /h3> < /
		div > <
			div class = "panel-body" >
			这是一个基本的面板 <
			/div> < /
		div > <
			/div> <
		div class = "col-sm-4" >
			<
			div class = "panel panel-info" >
			<
			div class = "panel-heading" >
			<
			h3 class = "panel-title" > 面板标题 < /h3> < /
		div > <
			div class = "panel-body" >
			这是一个基本的面板 <
			/div> < /
		div > <
			/div> < /
		div >

			<
			/div>

	}
}