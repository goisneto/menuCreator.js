/* Powered by GoisNeto
   Using: 
   	Functions:
		InitMenuVar(LineHeight, Speed[, Id]); //To initVars and set as default. Use Id to specify you Menu.
		menuId(IndexLoadOfYourMenu) = To get you menu id for use something... Ex: $("#"+menuId(IndexLoadOfYourMenu)).css({something});
		$JQuerySelector = $(YourTagToMenu)
			$JQuerySelector.addMenu(TopicOrLink, LinksArray);
				TopicOrLink = "YourTopicOfMenu"(Ex:"Menu") or LinkInArray (Ex: {"Home": "http://yoursite.com/"})
				LinksArray (Most used for Topic no Link) = {"Home": "http://yoursite.com/", "Galery": "http://yoursite.com/Galery/", "Videos": "http://yoursite.com/Galery/" ...}
			 $JQuerySelector.hands(hoverIn, hoverOut) = HackFix to add Keyboard hover and click on Anchor pressing Enter key.
				 hoverIn = Mouse Enter function.
				 hoverOut = Mouse Leave function.
	Vars:
		menuBuffereds = List of Menus and properties.
		uniqueVar = Random var to create ids.
		menuDivInterval = List of Menus setInterval functions.
		menuDivClearInterval = List of Menus clearInterval functions.
		menuLineHeight = Default Line Height Menus. (Init as function to verify is ok, but future is change to int)Max: The sky's is the limit.
		speedMenu = Decrement and Increment speed to open and close Menus. (Init as function to verify is ok, but future is change to int)Max: Number of links
	Sample Code:
		InitMenuVar(30, 5);
		$("#menu").addMenu({"Home": "http://yoursite.com/"});
		$("#menu").addMenu("Menu", {"Galery": "http://yoursite.com/Galery/", "Videos": "http://yoursite.com/Galery/"}, 30, 2);
	All var change in InitMenuVar() or $("#menu").addMenu(..., ..., !!!, !!!) set defaults;
	Css:
*/
var menuBuffereds = {};
var uniqueVar = "MC"+String.fromCharCode(Math.floor(Math.random() * (97 - 122 + 1)) + 122)+String.fromCharCode(Math.floor(Math.random() * (97 - 122 + 1)) + 122)+String.fromCharCode(Math.floor(Math.random() * (97 - 122 + 1)) + 122);
var uniqueIDtmp;
var menuDivInterval = {};
var menuDivClearInterval = {};
var menuToUp = function(){};
var menuRow = function(){};
var menuLineHeight = function(){};
var menuLineHeightFunc = function(e, i){
	if(i != undefined) menuBuffereds[i].menuLineHeight = e;
	else menuLineHeight = e;
	};
var speedMenu = function(){};
var speedMenuFunc = function(e, i){ 
	if(typeof i == "string") menuBuffereds[i].speedMenu = (e >= $("#"+i+" .menuOl .menuLi").length-1)?menuBuffereds[i].menuLineHeight*($("#"+i+" .menuOl .menuLi").length-1):menuBuffereds[i].menuLineHeight*e;
	else speedMenu = e;
	};
var menuId = function(id){ return Object.keys(menuBuffereds)[id] };
var menuIdGoBack = function(e){ return $("#"+uniqueVar+"d"+e.id.match(/\d+/g)[0])[0] };
var InitMenuVar = function(e, i, c, d, o){
	if(typeof o == "string"){  
		menuBuffereds[o].menuLineHeight = menuLineHeightFunc;
		menuBuffereds[o].speedMenu = speedMenuFunc;
		menuBuffereds[o].menuToUp = (c == undefined || c)?true:false;
		menuBuffereds[o].menuRow = (d == undefined || d)?true:false;
		menuBuffereds[o].menuLineHeight(parseInt(e), o); 
		menuBuffereds[o].speedMenu(i, o);  
		$("#"+o+" .menuDivSize").css({"overflow-y": "hidden", "max-height": menuBuffereds[o].menuLineHeight+"px"});
		
		if(menuBuffereds[o].menuToUp){
			$("#"+o+" .menuOl").css({"bottom": (($("#"+o+" .menuOl .menuLi").length - 1)*menuBuffereds[o].menuLineHeight)+"px", "line-height": menuBuffereds[o].menuLineHeight+"px", "position": "relative", "text-align": "center", "margin": "0", "padding": "0"});
			if(!menuBuffereds[o].menuRow) $("#"+o).css({"display": "table-cell"});
			else $("#"+o).css({"display": "table-row"});
		}
		else{
			$("#"+o+" .menuOl").css({"top": "0px", "line-height": menuBuffereds[o].menuLineHeight+"px", "position": "relative", "text-align": "center", "margin": "0", "padding": "0"});
			if(!menuBuffereds[o].menuRow) $("#"+o).css({"display": "table-cell"});
			else $("#"+o).css({"display": "table-row"});
		}
		if(!menuBuffereds[o].menuRow) $("#"+o+" .menuDivFix").css({"display": "table-row"});
	}
	else{ 
		menuLineHeight = menuLineHeightFunc;
		speedMenu = speedMenuFunc;
		menuToUp = (c == undefined || c)?true:false; 
		menuRow = (d == undefined || d)?true:false; 
		menuLineHeight(parseInt(e));
		speedMenu(i); 
		} 
	};
var menuOrgFunc = function(a, logic){ 
	var asize = ($("#"+a.id+" .menuLi").length < 2)?menuBuffereds[menuIdGoBack(a).id].menuLineHeight:$("#"+a.id+" .menuLi").length*menuBuffereds[menuIdGoBack(a).id].menuLineHeight;
	if(logic){
		/*if(menuBuffereds[menuIdGoBack(a).id].menuToUp){
				$(menuIdGoBack(a)).parent()[0].style.bottom = ($(window).innerHeight() - ($(menuIdGoBack(a)).parent().offset().top + $(menuIdGoBack(a)).parent().height()))+"px";
				$(menuIdGoBack(a)).parent()[0].style.top = "";
			}
			else{
				$(menuIdGoBack(a)).parent()[0].style.top = $(menuIdGoBack(a)).parent().offset().top+"px";
				$(menuIdGoBack(a)).parent()[0].style.bottom = "";
			}*/
		if($(a).height() < ($("#"+a.id+" .menuLi").length*menuBuffereds[menuIdGoBack(a).id].menuLineHeight)){
			$(a).css({"max-height": ($(a).height()+menuBuffereds[menuIdGoBack(a).id].speedMenu)+"px"});
			if(menuBuffereds[menuIdGoBack(a).id].menuToUp)$("#"+a.id+" .menuOl").css({"bottom": asize-($(a).height())+"px"});
		}
		else{
			clearInterval(menuDivInterval[menuIdGoBack(a).id]);
		}
	}
	else{
		if($(a).height() > menuBuffereds[menuIdGoBack(a).id].menuLineHeight){
			$(a).css({"max-height": ($(a).height()-menuBuffereds[menuIdGoBack(a).id].speedMenu)+"px"}); 
			if(menuBuffereds[menuIdGoBack(a).id].menuToUp)$("#"+a.id+" .menuOl").css({"bottom": asize-($(a).height())+"px"}); 
		}
		else
			clearInterval(menuDivInterval[menuIdGoBack(a).id]);
		
	}
	};
(function(){
	jQuery.fn.hands = function(handsin, handsout) {
		this.delegate( "li", "focus mouseenter", handsin);
		this.delegate( "li", "blur mouseleave", handsout);
		this.delegate( "a", "keydown", function(e){if(e.which == 13){ this.click();}});
	};
	jQuery.fn.addMenu = function (topic, links, lineheight, speed){
		if(typeof menuLineHeight == "function" || typeof speedMenu == "function" || typeof menuRow == "function" || typeof menuToUp == "function") return console.log("InitMenuVar(LineHeight, Speed); //To init Vars and set as default.");
		links = (links == undefined)?{}:links;
		if(typeof topic == "string"){ var buffer = topic; topic = {}; topic[buffer] = null; }
		uniqueIDtmp = uniqueVar;
		var uniqueID = function(e){uniqueIDtmp += e; return uniqueIDtmp+Object.keys(menuBuffereds).length};
		if(menuToUp)
			links[Object.keys(topic)[0]] = topic[Object.keys(topic)[0]];
		else{
			for(var lin in links)
				topic[lin] = links[lin];
			links = topic;
		}
		var i = 0;
		
		var menuDiv = document.createElement("div");
		menuDiv.className = "menuDiv";
		menuDiv.id = uniqueID("d");
		
		var menuDivFix = document.createElement("div");
		menuDivFix.className = "menuDivFix";
		menuDivFix.id = uniqueID("d");
		
		var menuDivSize = document.createElement("div");
		menuDivSize.className = "menuDivSize";
		menuDivSize.id = uniqueID("d");
		
		var menuOl = document.createElement("ol");
		menuOl.reversed = true;
		menuOl.className = "menuOl";
		menuOl.id = uniqueID("o");
		var liID = uniqueID("l");
		var aID = uniqueID("a");
		for(ell in links){
			
			var menuLi = document.createElement("li");
			menuLi.className = "menuLi";
			menuLi.id = liID+"-"+i;
			$(menuLi).css({"list-style": "none"});
			
			var menuAnchor = document.createElement("a");
			menuAnchor.className = "menuAnchor";
			menuAnchor.innerHTML = ell;
			menuAnchor.tabIndex = (Object.keys(links).length-1 >  i)?-1:1;
			menuAnchor.href = (links[ell] != null)?links[ell]:"javascript:void(0);";
			menuAnchor.id = aID+"-"+i;
			
			menuLi.appendChild(menuAnchor);
			menuOl.appendChild(menuLi);
			
			i++;
			
			}
			
		menuDivSize.appendChild(menuOl)
		menuDivFix.appendChild(menuDivSize)
		menuDiv.appendChild(menuDivFix);
		this[0].appendChild(menuDiv);
		if(this[0].className.search("menu") < 0)this[0].className += (this[0].className.length <= 0)?"menu":" menu";
		
		//Save Menu
		menuBuffereds[menuDiv.id] = new Object({"menu":this[0], "links": links});
		//Security Inits
		InitMenuVar(menuLineHeight, speedMenu, menuToUp, menuRow, menuDiv.id);
		
		//Styles
		$(this[0]).css({"display": "table", "white-space": "nowrap"});
			
		$(".menuDiv").hands(function(e) {
			$("#"+this.id+" a").css({"color": "rgb(216, 216, 216)"});
			$(".menu a").each(function(index, element) {
					element.tabIndex = -1;
			});
			$("#"+$(this).parent().parent().get(0).id+" .menuLi a").each(function(index, element) {
					element.tabIndex = (menuBuffereds[menuIdGoBack(element).id].menuToUp)?$("#"+ menuIdGoBack(element).id +" .menuLi").length - index:index+1;
			});
			var menuIndex = parseInt(menuIdGoBack(this).id.match(/\d+/g)[0]);
			var menuLastIndex = parseInt(Object.keys(menuBuffereds)[Object.keys(menuBuffereds).length - 1].match(/\d+/g)[0]);
			var menuFirstIndex = parseInt(Object.keys(menuBuffereds)[0].match(/\d+/g)[0]);
			$("#"+uniqueVar+"d"+((menuIndex >= menuLastIndex)?menuFirstIndex:menuIndex+1)+" .menuLi:"+(menuBuffereds[Object.keys(menuBuffereds)[((menuIndex >= menuLastIndex)?menuFirstIndex:menuIndex+1)]].menuToUp?"last-of-type":"first-of-type")+" a").get(0).tabIndex = $("#"+menuIdGoBack(this).id+" .menuLi a").length+1;
			clearInterval(menuDivInterval[menuIdGoBack(this).id]);
			menuDivInterval[menuIdGoBack(this).id] = setInterval("menuOrgFunc("+$(this).parent().parent().get(0).id+", true)", 0);
			e.stopPropagation();
		},
		function(e){
			$("#"+this.id+" a").css({"color": "rgb(0, 0, 0)"});
			$(".menu a").each(function(index, element) {
				if(jQuery.inArray($(element).parent().toArray()[0], $(".menu .menuLi:"+(menuBuffereds[menuIdGoBack(element).id].menuToUp?"last-of-type":"first-of-type")).toArray()) > -1)
					element.tabIndex = 1;
				else 
					element.tabIndex = -1;
			});
			clearInterval(menuDivInterval[menuIdGoBack(this).id]);
			menuDivInterval[menuIdGoBack(this).id] = setInterval("menuOrgFunc("+$(this).parent().parent().get(0).id+", false)", 0);
			e.stopPropagation();
			});
		}
})();