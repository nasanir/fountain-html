function createNavGroup(parent, data) {
	var objJson=jsonToObject(data);
	
	var timestamp = Date.parse(new Date());
	var ver = "_" + timestamp;

	var navId = parent.attr('id') + '_NAV' + ver;
	var divContainerId = parent.attr('id') + '_DIV_CONTAINER' + ver;

	var divMenuId = parent.attr('id') + '_DIV_MENU' + ver;

	var nav = createNav(navId, 'navbar navbar-default navbar-fixed-bottom', '', '', '');
	var divContainer = createDiv(divContainerId, 'container-fluid', '', '', '');

	var divMenu = createDiv(divMenuId, 'navbar-header', '', '', '');

	var jsonMenuData = jsonToObject('[{"title":"MENU","herf":"#","other":{"data-toggle":"dropdown"},"styleType":""}]');
	var menu = createMenuLine('',divMenu, jsonMenuData, 'nav navbar-nav', 'dropdown', 'dropdown-toggle');
	var menuLiId = menu.attr('id').replace('_ul', '_ul_li0');
	var menuLineData = objJson[0];
	var menuLine = createMenuLine(menuLiId,'', menuLineData, 'dropdown-menu', '', '');
	appendInChild(menuLiId, '', '', menuLine, menu);

	divMenu.append(menu);
	divContainer.append(divMenu);
	nav.append(divContainer);
	return nav;
}

function createMenuLine(id, parent, data, ulClass, liClass, aClass) {
	var timestamp = Date.parse(new Date());
	var ver = "_" + timestamp;

	var parentId = '';
	if(id != undefined && id!= null && id.length > 0) {
		parentId = id
	} else {
		parentId = parent.attr('id');
	}

	var ulId = parentId + '_ul' + ver;

	var ul = createUl(ulId, ulClass, '', '', '');

	for(var i = 0; i < data.length; i++) {
		var liId = parentId + '_ul_li' + i + ver;
		var liId = parentId + '_ul_li' + i + '_a' + ver;

		var aData = data[i];
		var aTile = aData.title;
		var aHerf = aData.herf;
		var other = aData.other;
		var styleType = aData.styleType;

		var li = createLi(liId, liClass, '', '', '');
		var a = createA(liId, aClass, aHerf, aTile, styleType, other);

		li.append(a);
		ul.append(li);
	}
	return ul;
}