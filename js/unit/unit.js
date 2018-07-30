function otherType(owner, context, styleType, other) {
	if(context != undefined && context != null && context.length > 0) {
		owner.text(context);
	}

	if(styleType != undefined && styleType != null && styleType.length > 0) {
		owner.attr("style", styleType);
	}

	$.each(other, function(key, values) {
		owner.attr(key, values);
	});
}

function createDiv(id,
	className,
	context, styleType, other) {
	var div = $("<div></div>")
		.attr("class", className)
		.attr("id", id);

	otherType(div, context, styleType, other);
	return div;
}

function createH(id,
	className,
	level,
	context, styleType, other) {
	var h = $("<h" + level + "></h" + level + ">")
		.attr("class", className)
		.attr("id", id);

	otherType(h, context, styleType, other);

	return h;
}

function createFold(id,
	className,
	collapse,
	dataParent,
	href,
	context, styleType, other) {
	var a = $("<a></a>")
		.attr("data-toggle", collapse)
		.attr("data-parent", dataParent)
		.attr("id", id)
		.attr("href", href)
		.attr("class", className);

	otherType(a, context, styleType, other);

	return a;
}

function createA(id,
	className,
	href,
	context, styleType, other) {
	var a = $("<a></a>")
		.attr("id", id)
		.attr("href", href)
		.attr("class", className);

	otherType(a, context, styleType, other);

	return a;
}

function createP(id,
	className, context, styleType, other) {
	var p = $("<p></p>")
		.attr("class", className)
		.attr("id", id);

	otherType(p, context, styleType, other);
	return p;
}

function createButton(id,
	className,
	type, context, styleType, other) {
	var button = $("<button></button>")
		.attr("class", className)
		.attr("id", id)
		.attr("type", type);

	otherType(button, context, styleType, other);

	return button;
}

function createSpan(id,
	className,
	context, styleType, other) {
	var span = $("<span></span>")
		.attr("class", className)
		.attr("id", id);

	otherType(span, context, styleType, other);
	return span;
}

function createUl(id,
	className,
	context, styleType, other) {
	var ul = $("<ul></ul>")
		.attr("class", className)
		.attr("id", id);

	otherType(ul, context, styleType, other);
	return ul;
}

function createLi(id,
	className,
	context, styleType, other) {
	var li = $("<li></li>")
		.attr("class", className)
		.attr("id", id);

	otherType(li, context, styleType, other);
	return li;
}

function createDefalutButton(parent, ver) {

	if(parent != null) {
		var div_row = createDiv(parent.attr('id') + "_div_row_" + ver, "row", "", "", "");

		var div_add = createDiv(parent.attr('id') + "_div_row_add_" + ver, "col-sm-1", "", "", "");
		var p_add = createP(parent.attr('id') + "_p_add_" + ver, "", "", "", "");
		var button_add = createButton(parent.attr('id') + "_button_add_" + ver, "btn btn-default btn-sm", "button", "", "", "");
		var span_add = createSpan(parent.attr('id') + "_span_add_" + ver, "glyphicon glyphicon-plus", " 添加", "", "");

		var div_del = createDiv(parent.attr('id') + "_div_row_del_" + ver, "col-sm-1", "", "", "");
		var p_del = createP(parent.attr('id') + "_p_del_" + ver, "", "", "", "");
		var button_del = createButton(parent.attr('id') + "_button_del_" + ver, "btn btn-default btn-sm", "button", "", "color: rgb(224, 22, 6);", "");
		var span_del = createSpan(parent.attr('id') + "_span_del_" + ver, "glyphicon glyphicon-minus", " 删除", "", "");

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

function createAddButton(parent, ver) {

	if(parent != null) {
		var div_row = createDiv(parent.attr('id') + "_div_row_" + ver, "row", "", "", "");

		var div_add = createDiv(parent.attr('id') + "_div_row_add_" + ver, "col-sm-1", "", "", "");
		var p_add = createP(parent.attr('id') + "_p_add_" + ver, "", "", "", "");
		var button_add = createButton(parent.attr('id') + "_button_add_" + ver, "btn btn-default btn-sm", "button", "", "", "");
		var span_add = createSpan(parent.attr('id') + "_span_add_" + ver, "glyphicon glyphicon-plus", " 添加", "", "");

		button_add.append(span_add);
		p_add.append(button_add);
		div_add.append(p_add);

		div_row.append(div_add);

		return div_row;
	}

}

function createCloseBtn(parent) {
	var parentid = parent.attr('id');
	var timestamp = Date.parse(new Date());
	var ver = timestamp;

	var typeMap = {};
	typeMap['aria-label'] = 'Close';

	var typeMapSpan = {};
	typeMap['aria-hidden'] = 'true';

	var closeButton = createButton(parentid + "_close_btn_" + ver, 'close', 'button', '', typeMap);
	var closeSpan = createSpan(parentid + "_close_span_" + ver, '', '×', '', typeMapSpan);

	closeButton.append(closeSpan);
	return closeButton;
}

function createPanel(parent,
	jsonData) {
	var obj = jsonToObject(jsonData);

	var title = obj.title;
	var context = obj.context;
	if(parent != null) {
		var parentid = parent.attr('id');

		var timestamp = Date.parse(new Date());
		var ver = timestamp;

		var div_panel = createDiv("div_panel_" + ver, "panel panel-primary", "", "", "");

		var div_panel_head = createDiv("div_panel_head_" + ver, "panel-heading", "", "", "");

		var h_panel_head = createH("panel_head_h3_" + ver, "panel-title", "3", title, "", "");

		var a_panel_head = createFold("panel_head_a_" + ver, "panel-title", "collapse", parentid, "#div_panel_collapse_" + ver, "", "", "");

		var btn_close_panel_head = createCloseBtn(div_panel_head);

		a_panel_head.append(h_panel_head);
		div_panel_head.append(btn_close_panel_head);
		div_panel_head.append(a_panel_head);
		div_panel.append(div_panel_head)

		var div_collapse = createDiv("div_panel_collapse_" + ver, "panel-collapse collapse", "", "", "");

		var div_panel_body = createDiv("div_panel_body_" + ver, "panel-body", "", "", "");

		var div_panel_body_well = createDiv("div_panel_body_well" + ver, "well well-lg", context, "", "");

		div_panel_body.append(createAddButton(div_panel_body, ver));
		div_panel_body.append(div_panel_body_well);
		div_collapse.append(div_panel_body);
		div_panel.append(div_collapse);

		return div_panel;
	}
}

function createInnerPanel(parentid,
	jsonData) {
	var obj = jsonToObject(jsonData);

	var title = obj.title;
	var context = obj.context;
	if(parentid.length > 0) {
		var timestamp = Date.parse(new Date());
		var ver = timestamp;

		var div_panel = createDiv(parentid + "_div_panel_" + ver, "panel panel-info", "", "", '');

		var div_panel_head = createDiv(parentid + "_div_panel_head_" + ver, "panel-heading", "", "", "");

		var btn_close_panel_head = createCloseBtn(div_panel_head);

		var h_panel_head = createH(parentid + "_panel_head_h3_" + ver, "panel-title", "3", title, "", "");

		div_panel_head.append(btn_close_panel_head);
		div_panel_head.append(h_panel_head);
		div_panel.append(div_panel_head)

		var div_panel_body = createDiv(parentid + "_div_panel_body_" + ver, "panel-body", context, "", "");

		div_panel.append(div_panel_body);

		return div_panel;
	}
}

function createDivGroup(parent, divGroup) {
	var timestamp = Date.parse(new Date());
	var ver = "_" + timestamp;

	var divRow = $("<div></div>")
		.attr("class", 'row')
		.attr("id", parent.attr('id') + '_row_div' + ver);

	for(i = 0; i < divGroup.length; i++) {
		var object = divGroup[i];

		var divCol = $("<div></div>")
			.attr("class", 'col-sm-4')
			.attr("id", parent.attr('id') + '_col_div_' + i + ver);
		divCol.append(object);
		divRow.append(divCol)
	}

	return divRow;
}

function appendInChild(id, className, type, object, parent) {
	if(id != undefined && id != null && id.length > 0) {
		parent.find('#' + id).append(object);
	} else if(className != undefined && className != null && className.length > 0) {
		parent.find(type + '.' + className).append(object);
	} else {
		parent.append(object);
	}
}

function createNav(id,
	className,
	context, styleType, other) {
	var nav = $("<nav></nav>")
		.attr("class", className)
		.attr("id", id);

	otherType(nav, context, styleType, other);
	return nav;
}