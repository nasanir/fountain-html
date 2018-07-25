function otherType(owner, context, styleType) {
	if(context.length > 0) {
		owner.text(context);
	}

	if(styleType.length > 0) {
		owner.attr("style", styleType);
	}
}

function createDiv(id,
	className,
	context, styleType) {
	var div = $("<div></div>")
		.attr("class", className)
		.attr("id", id);

	otherType(div, context, styleType);
	return div;
}

function createH(id,
	className,
	level,
	context,styleType) {
	var h = $("<h" + level + "></h" + level + ">")
		.attr("class", className)
		.attr("id", id);

	otherType(h, context, styleType);

	return h;
}

function createFold(id,
	className,
	collapse,
	dataParent,
	href,
	context,styleType) {
	var a = $("<a></a>")
		.attr("data-toggle", collapse)
		.attr("data-parent", dataParent)
		.attr("id", id)
		.attr("href", href)
		.attr("class", className);

	otherType(a, context, styleType);

	return a;
}

function createP(id,
	className, context,styleType) {
	var p = $("<p></p>")
		.attr("class", className)
		.attr("id", id);

	otherType(p, context, styleType);
	return p;
}

function createButton(id,
	className,
	type, context, styleType) {
	var button = $("<button></button>")
		.attr("class", className)
		.attr("id", id)
		.attr("type", type);

	otherType(button, context, styleType);

	return button;
}

function createSpan(id,
	className,
	context,styleType) {
	var span = $("<span></span>")
		.attr("class", className)
		.attr("id", id);

	otherType(span, context, styleType);
	return span;
}

function createDefalutButton(parent, ver) {

	if(parent != null) {
		var div_row = createDiv(parent.attr('id') + "_div_row_" + ver, "row", "", "");

		var div_add = createDiv(parent.attr('id') + "_div_row_add_" + ver, "col-sm-1", "", "");
		var p_add = createP(parent.attr('id') + "_p_add_" + ver, "", "", "");
		var button_add = createButton(parent.attr('id') + "_button_add_" + ver, "btn btn-default btn-sm", "button", "", "");
		var span_add = createSpan(parent.attr('id') + "_span_add_" + ver, "glyphicon glyphicon-plus", " 添加", "");

		var div_del = createDiv(parent.attr('id') + "_div_row_del_" + ver, "col-sm-1", "", "");
		var p_del = createP(parent.attr('id') + "_p_del_" + ver, "", "", "");
		var button_del = createButton(parent.attr('id') + "_button_del_" + ver, "btn btn-default btn-sm", "button", "", "color: rgb(224, 22, 6);");
		var span_del = createSpan(parent.attr('id') + "_span_del_" + ver, "glyphicon glyphicon-minus", " 删除", "");

		button_add.append(span_add);
		p_add.append(button_add);
		div_add.append(p_add);

		button_del.append(span_del);
		p_del.append(button_del);
		div_del.append(p_del);

		div_row.append(div_add);
		div_row.append(div_del);

		return div_row;
	}

}

function createPanel(parentid,
	index,
	data) {
	var title = data['title'];
	var context = data['context'];
	if(parentid.length > 0) {
		var timestamp = Date.parse(new Date());
		var ver = index + "_" + timestamp;

		var div_panel = createDiv("div_panel_" + ver, "panel panel-primary", "", "");

		var div_panel_head = createDiv("div_panel_head_" + ver, "panel-heading", "", "");

		var h_panel_head = createH("panel_head_h3_" + ver, "panel-title", "3", title, "");

		var a_panel_head = createFold("panel_head_a_" + ver, "panel-title", "collapse", parentid, "#div_panel_collapse_" + ver, "", "");

		a_panel_head.append(h_panel_head);
		div_panel_head.append(a_panel_head);
		div_panel.append(div_panel_head)

		var div_collapse = createDiv("div_panel_collapse_" + ver, "panel-collapse collapse", "", "");

		var div_panel_body = createDiv("div_panel_body_" + ver, "panel-body", "", "");

		var div_panel_body_well = createDiv("div_panel_body_well" + ver, "well well-lg", context, "");

		div_panel_body.append(createDefalutButton(div_panel_body, ver));
		div_panel_body.append(div_panel_body_well);
		div_collapse.append(div_panel_body);
		div_panel.append(div_collapse);

		return div_panel;
	}
}