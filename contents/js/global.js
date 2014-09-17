$(function() {
	$("table").addClass("table table-condensed");

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

	$(".main-content").find(".more").parent().prev().remove();
	$(".main-content").find(".more").remove();

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
			el.append(' <i class="glyphicon glyphicon-download"></i>');
		}
		else if(url.indexOf(".zip") > -1) {
			el.attr("target", "_blank");
			el.addClass("btn move-item");
		}
		else if (url.indexOf("homework.html") > -1) {
			//el.addClass("btn");
			el.append(' <i class="glyphicon glyphicon-tasks"></i>');
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
		item.append(' <i class="glyphicon glyphicon-download"></i>');
		el.remove();
	});

	newSide.addClass("nav nav-pills nav-stacked main-side-nav bs-sidenav").prependTo(".side-nav-inner");
	sideNav.remove();

	$(window).scroll(function() {
		var winPos =$(window).scrollTop();
		if (winPos > 100) {
			//$("body").removeClass("homepage");
			$(".homepage").addClass("scroll")
		}
		else {
			$(".homepage").removeClass("scroll")
		}

	})

	hljs.initHighlightingOnLoad();

	var homework = function(data) {
		var compiled = _.template('<div><a href="images/<%= imageName %>.png" target="_blank"><img src="images/<%= imageName %>-sm.png" class="img-circle"></a></div>' +
			'<div>' +
			'<h2>Example of Homework</h2>' +
			'<p>Your coded page should look like this when you are done.</p>' +
			'<a href="<%= fileName %>.html" class="btn" target="_blank">Homework Example</a>'+
		'</div>');
		var test = compiled(data);

		$('.homework-view').html(test);
	}

	$('.homework-view').each(function(){
		var lesson = $(this).data('lesson');
		var data = {
			'fileName' : lesson + '-homework',
			'imageName': lesson + '-homework'
		}
		homework(data);
	});

	$('h1').each(function(i){
		var h1 = $(this);
		h1.find("span").replaceWith(h1.find("span").html());
		var simpleH1 = h1.html().replace("&nbsp;", " ")
		var headerText = simpleH1.split(" ");
		console.log(headerText)
		var newHeader = "";
		headerText[0] = "<span class='caps'>"+ headerText[0] +"</span>"
		for(var i=0;i<headerText.length;i++){
			newHeader += headerText[i] + " ";
		}
		h1.html(newHeader);
	});





});