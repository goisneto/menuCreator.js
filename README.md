Powered by GoisNeto
===================
Functions:
----------
#### InitMenuVar(LineHeight, Speed[, menuToUp = true, menuRow = true, Id]); 
> //To initVars and set as default. Use Id to specify you Menu.

#### menuId(IndexLoadOfYourMenu);
> //To get you menu id for use something...
` Ex: $("#"+menuId(IndexLoadOfYourMenu)).css({something}); `
	
#### $JQuerySelector.addMenu(TopicOrLink, LinksObject);
> ##### TopicOrLink:
` "Topic" ` or ` LinksObject Obs.: Only one link on Object for this.`

> ##### LinksObject: 
` {"Home": "http://yoursite.com/", "Galery": "http://yoursite.com/Galery/", ...} `

#### $JQuerySelector.hands(hoverIn, hoverOut)
> HackFix to add Keyboard hover and click on Anchor pressing Enter key.

> ` hoverIn = Mouse Enter function. `

> ` hoverOut = Mouse Leave function. `
				 
Sample Code:
------------
```javascript
		InitMenuVar(30, 5);
		$("#menu").addMenu({"Home": "http://yoursite.com/"});
		$("#menu").addMenu("Menu", {"Galery": "http://yoursite.com/Galery/", "Videos": "http://yoursite.com/Galery/"});
```


##### GitHub IO Sample Page: http://goisneto.github.io/menuCreator.js
##### Simply JS to create html5 Menus
