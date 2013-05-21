var $navItem = $("p span.more").parent().next("ul");
$navItem.addClass("nav nav-tabs").attr("id", "sub_menu");

$navItem.find("li:first").addClass("active");

$(".content h2").each(function(){
	var el =$(this);
	var addID = el.html();
	el.attr("id", addID);
});

$("#sub_menu").affix(function() {
	offset: { x: 253 }
});

