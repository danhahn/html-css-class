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

function resetButton() {
	$("#fixWidth").removeClass("active");
}

$("#cntrBoxModel .btn").click(function(){
	var el = $(this);
	el.toggleClass("active");
	resetButton();

	var props = "";

	$("#cntrBoxModel .btn.active").each(function(){
		props = props + " " + $(this).html().replace("&nbsp;", " ");
	});
	$("#displayBoxModel .box-model").attr("style", props);
});

$("#fixWidth").click(function(){
	var el = $(this);
	el.toggleClass("active");

	var fix = $("#total").data("total");
	console.log(fix);
	$("#cntrBoxModel .btn.active").each(function(){
		var size = $(this).data("size");
		if(size)
			fix = fix - (size*2);
	});
	if(el.attr("class").indexOf("active") > -1 ) {
		$("#displayBoxModel .box-model").css("width", fix);
	}
	else {
		$("#displayBoxModel .box-model").css("width", "100%");
	}
});