var fillerContent = "Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. Basic Content. ";

var basicContent = {
	"mp": $('<div class="show-example">' +
	'<h2>Story Title</h2>' +
	'<p></p>' +
	'<img src="image.jpg" style="float: left">' +
	'<p></p>' +
	'<p></p>' +
	'</div>'),
	opt: {
		left: "float:left",
		right: "float:right"
	}
};

var basisClear = {
	"mp": $('<div class="show-example">' +
		'<h2>Story Title</h2>' +
		'<p></p>' +
		'<img src="image.jpg" style="float: left">' +
		'<p></p>' +
		'<h3 style="clear:left;">Next Section</h3>'+
		'<p></p>' +
		'<p></p>' +
		'</div>'),
	opt: {
		left: "float:left",
		right: "float:right"
	}
};


var basicFloat = {
	"mp": $('<div class="show-example">' +
		'<ul style="padding: 0;margin: 0">' +
		'<li style="float:left;list-style:none;">Nav Item 1</li>' +
		'<li style="float:left;list-style:none;">Nav Item 2</li>' +
		'<li style="float:left;list-style:none;">Nav Item 3</li>' +
		'<li style="float:left;list-style:none;">Nav Item 4</li>' +
		'</ul>' +
		'</div>'),
	opt: {
		left: "float:left",
		right: "float:right"
	}
};

basicContent.mp.find("p").text(fillerContent);
basisClear.mp.find("p").text(fillerContent);

var _$basic = $("#basic_float");
_$basic.html(basicContent.mp);

var _$clear = $("#basic_clear");
_$clear.html(basisClear.mp);

var _$stack = $("#stacking_content");
_$stack.html(basicFloat.mp);

$("table").addClass("table table-bordered");

$("strong").each(function() {
	var el = $(this);
	var text = el.html();
	if(text == "Note:") {
		el.parent().addClass("alert alert-info");
	}
});

var $ul = $("<div class='navbar'><div class='navbar-inner'><ul class='nav'></ul></div></div");

$(".content h2").each(function(){
	var el =$(this);
	var addID = el.html().toLowerCase().replace(" ", "_");
	var $li = $("<li><a></a></li>").click(function(event) {
		event.stopPropagation();
		$('html, body').animate({
			scrollTop: $("#"+addID).offset().top
		}, 500);
	});
	$li.find("a").attr("href", "#"+addID).text(el.html());
	var addItem = $ul.find(".nav");
	$li.appendTo(addItem);
	el.attr("id", addID);
	var top = $("<span class='scroll-top'>&uarr;Top</span>").click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
	top.appendTo(el);
});

$ul.insertAfter(".content ul");
