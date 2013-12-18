$(function() {
	$("table").addClass("table table-bordered");

	var showNav = false;

	var $ul = $("<div id='localNav'><ul class='btn-group'></ul></div>");

//	$(".content h2").each(function(){
//		var el =$(this);
//		var addID = el.html().toLowerCase().replace(/\&nbsp;/g, "_").replace(/\s+/g, "_");
//		var $li = $("<li class='btn'><a></a></li>").click(function(event) {
//			event.stopPropagation();
//			$('html, body').animate({
//				scrollTop: $("#"+addID).offset().top
//			}, 500);
//		});
//		$li.find("a").attr("href", "#"+addID).html(el.html());
//		var addItem = $ul.find(".btn-group");
//		$li.appendTo(addItem);
//		el.attr("id", addID);
//		var top = $("<span class='scroll-top'>&uarr;Top</span>").click(function() {
//			$('html, body').animate({
//				scrollTop: 0
//			}, 500);
//		});
//		top.appendTo(el);
//		showNav = true;
//	});

	if(showNav)
		$ul.prependTo(".main-content");

	$("strong").each(function() {
		var el = $(this);
		var text = el.html();
		if(text == "Note:") {
			el.parent().addClass("alert alert-info");
		}
	});

	$("a").each(function() {
		var el = $(this);
		var url = el.attr("href");
		//console.log(url)
		if(url.indexOf("example.html") > -1) {
			el.attr("target", "_blank");
		}
		else if(url.indexOf(".txt") > -1) {
			el.attr("target", "_blank");
			el.addClass("btn");
		}
		else if(url.indexOf(".zip") > -1) {
			el.attr("target", "_blank");
			el.addClass("btn move-item");
		}
		else if (url.indexOf("homework.html") > -1) {
			//el.addClass("btn");
		}
	});

	var sideNav = $(".main-content h1 + ul");
	var newSide = sideNav.clone();
	var currentPage = window.location.pathname;
	newSide.find("li").each(function(){
		var el = $(this);
		var item = el.find("a");
		if(item.attr("href").indexOf(currentPage) > -1) {
			el.addClass("active");
			return false;
		}
	});

	$(".move-item").each(function(){
		var el = $(this);
		var item = el.clone();
		item.prependTo(".side-nav-inner");
		el.remove();
	});

	newSide.addClass("nav nav-tabs nav-stacked main-side-nav").prependTo(".side-nav-inner");
	sideNav.remove();

	var sideNav = $(".side-nav-inner");
	sideNav.css("width",sideNav.outerWidth());

	var offset

	offset = sideNav.offset();

	sideNav.affix({
		offset: offset.top
	});


	var localNav = $("#localNav");
	localNav.css("width",localNav.outerWidth());

	offset = localNav.offset();

	localNav.affix({
		offset: offset.top
	});


	hljs.initHighlightingOnLoad();

});