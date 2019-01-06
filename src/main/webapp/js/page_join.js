$(function() {
	cover();
	$(window).resize(function() { // 浏览器窗口变化
		cover();
	});
});

function cover() {
	var win_width = $(window).width();
	var win_height = $(window).height() - $('#header_id').height() - $('#footer_id').height() - 70 - $('#title_id').height() - $('#product_center').height();
	console.log(win_height);
	$('#product_center').css('marginBottom',win_height-7);
}