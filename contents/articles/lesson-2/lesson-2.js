var $navItem = $("p span.more").parent().next("ul");
$navItem.addClass("nav nav-pills").attr("id", "sub_menu");

var $subMenu = $("#sub_menu");

//$navItem.find("li:first").addClass("active");

var currentURL = window.location.pathname;
var urlParts = currentURL.split("/");
var isSubPage = currentURL.indexOf(".html");

if(isSubPage === -1) {
	$navItem.find("li").each(function(){
		var el = $(this);
		var tempVal = el.find("a").attr("href");
		tempVal = tempVal.split("/");
		tempVal = tempVal[3];
		tempVal = tempVal.toLowerCase();
		el.find("a").attr("href", tempVal);
	});
}
else {
	$navItem.find("li").each(function(){
		var el = $(this);
		var thisPage = el.find("a").attr("href");
		thisPage = thisPage.split("/");
		if (thisPage[thisPage.length-1] === "#") {
			el.addClass("active")
			el.find("a").attr("href", urlParts[urlParts.length-1]);
		}

	});
}

$(".content h2").each(function(){
	var el =$(this);
	var addID = el.html().toLowerCase();
	el.attr("id", addID);
});

var offset = $subMenu.offset();

$subMenu.affix({
	offset: offset.top
});

$subMenu.scrollspy();