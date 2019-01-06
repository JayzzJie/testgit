var flag = false;
window.onload = function () {
	//alert("AAAAAAAAAAAs");
	shoWelcome();	
	showContentTimeOut();
}
//逐渐显示欢迎页面
function shoWelcome(){
	$('#welcome_id').show("slow");
}
//显示主页
function showContent(){
	window.location.href="index1.html";
	flag = true;
}
//时间够三秒后自动显示主页
function showContentTimeOut(){
	if(!flag){
		setTimeout("showContent()", 3000);
	}
}
//默认主页隐藏其他模块
function hideOther(){
	$('#per_div').show();
	$('#active_center').hide();
	$('#about_center').hide();
	$('#join_center').hide();
	$('#sleep_center').hide();
	$('#product_center').hide();
}
function showActive(){
	$('#active_center').show();
	$('#per_div').hide();
	$('#about_center').hide();
	$('#join_center').hide();
	$('#sleep_center').hide();
	$('#product_center').hide();
}
function showAbout(){
	$('#about_center').show();
	$('#per_div').hide();
	$('#active_center').hide();
	$('#join_center').hide();
	$('#sleep_center').hide();
	$('#product_center').hide();
}
function showJoin(){
	$('#join_center').show();
	$('#per_div').hide();
	$('#active_center').hide();
	$('#about_center').hide();
	$('#sleep_center').hide();
	$('#product_center').hide();
}
function showSleep(){
	$('#sleep_center').show();
	$('#per_div').hide();
	$('#active_center').hide();
	$('#about_center').hide();
	$('#join_center').hide();
	$('#product_center').hide();
}
function showProduct(){
	$('#product_center').show();
	$('#per_div').hide();
	$('#active_center').hide();
	$('#about_center').hide();
	$('#join_center').hide();
	$('#sleep_center').hide();
}
