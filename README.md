menuCreator.js
==============
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
*/
Simply JS to create html5 Menus
