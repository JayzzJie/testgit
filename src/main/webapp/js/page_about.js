$(function() {
	
	$("#per_page").append("<div class='item active' id='img_div_1'></div>");
	$("#per_page").append("<div class='item' id='img_div_2'></div>");
	$("#img_div_1").append("<img src='images/about1.jpg' id='img1'>");
	$("#img_div_2").append("<img src='images/about2.jpg' id='img2'>");
	cover();
	$(window).resize(function() { // 浏览器窗口变化
		cover();
	});
});

function cover() {
	var win_width = $(window).width();
	var win_height = $(window).height() - $('#header_id').height() - $('#footer_id').height() - 7 ;
	$('#img_div_1').attr({
		width : win_width,
		height : win_height
	});
	$('#img_div_2').attr({
		width : win_width,
		height : win_height
	});
	$('#img1').attr({
		width : win_width,
		height : win_height
	});
	$('#img2').attr({
		width : win_width,
		height : win_height
	});
}