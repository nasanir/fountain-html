function createNavGroup(data) {
	var objJson=jsonToObject(data);


	var navId = 'NAV';
	var divContainerId = 'DIV_CONTAINER';

	var divMenuId = 'DIV_MENU';

	var nav = createNav(navId, 'navbar navbar-inverse navbar-fixed-bottom', '', '', '');
	var divContainer = createDiv(divContainerId, 'container-fluid', '', '', '');

	var divMenu = createDiv(divMenuId, 'navbar-header', '', '', '');

	var jsonMenuData = jsonToObject('[{"title":"MENU","herf":"#","other":{"data-toggle":"dropdown"},"styleType":""}]');
	var menu = createMenuLine('',divMenu, jsonMenuData, 'nav navbar-nav', 'dropdown', 'dropdown-toggle');
	var menuLiId = menu.attr('id').replace('_ul', '_ul_li0');
	var menuLineData = objJson[0].menus;
	var menuLine = createMenuLine(menuLiId,'', menuLineData, 'dropdown-menu', '', '');
	appendInChild(menuLiId, '', '', menuLine, menu);

	var homeBtn=createHomeBtn();
	var blank=createBlank(divContainer);
	var messageBtn=createMessageBtn();
	
	divMenu.append(menu);
	divContainer.append(divMenu);
	divContainer.append(homeBtn);
	divContainer.append(blank);
	divContainer.append(messageBtn);
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
		var aId = parentId + '_ul_li' + i + '_a' + ver;

		var aData = data[i];
		var aTile = aData.title;
		var aHerf = aData.herf;
		var other = aData.other;
		var styleType = aData.styleType;

		var li = createLi(liId, liClass, '', '', '');
		var a = createA(aId, aClass, aHerf, aTile, styleType, other);

		li.append(a);
		ul.append(li);
	}
	return ul;
}

function createHomeBtn(){
	var homeBtnID='MENU_HOME_BTN';
	var homeBtn=createButton(homeBtnID,'btn btn-default navbar-btn navbar-right','button','','','');
	var homeSpanID='MENU_HOME_SPAN';
	var homeSpan=createSpan(homeSpanID,'glyphicon glyphicon-home','','','');
	homeBtn.append(homeSpan);
	return homeBtn;
}

function createMessageBtn(){
	var commentSpanID='MENU_COMMENT_SPAN';
	var commentSpan=createSpan(commentSpanID,'glyphicon glyphicon-comment','','','');
	
	var jsonMenuData = jsonToObject('[{"title":"","herf":"#","other":{"data-toggle":"dropdown"},"styleType":""}]');
	var messageBtn = createMenuLine('DIV_CONTAINER','', jsonMenuData, 'nav navbar-nav navbar-right', 'dropdown', 'dropdown-toggle btn-lg');
	var messageBtnLiId = messageBtn.attr('id').replace('_ul', '_ul_li0');
	var messageBtnAId = messageBtn.attr('id').replace('_ul', '_ul_li0_a');
	
	var menuJson='[{"title":"聊天消息","herf":"#","other":"","styleType":""},{"title":"系统提醒","herf":"#","other":"","styleType":""},{"title":"功能提醒","herf":"#","other":"","styleType":""}]';
	var objJson=jsonToObject(menuJson);
	var messageBtnLine = createMenuLine(messageBtnLiId,'', objJson, 'dropdown-menu', '', '');
	
	appendInChild(messageBtnAId, '', '', commentSpan, messageBtn);
	appendInChild(messageBtnLiId, '', '', messageBtnLine, messageBtn);
	
	return messageBtn;
}

function createBlank(parent){
	parentId = parent.attr('id');
	var timestamp = Date.parse(new Date());
	var ver = "_" + timestamp;
	var id=parentId+'_P_BLANK'+ver;
	var blank=createP(parentId,'navbar-text navbar-right','','','');
	return blank
}
