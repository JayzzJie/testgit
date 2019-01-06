var clear;
var time=3000;
window.onload = function () {
	autoShowPage();
}
var t = 0;//次数
function showPage(){
	++t;
	if(t==3){
		t=0;
	}
	var objs = $('#per_page_ol li');
	for(var i=0;i<objs.length;i++){
		if(t==i){
			jQuery($('#per_page_ol li')[i]).addClass("active");
			jQuery($('#per_page div')[i]).fadeIn("slow");
		}else{
			jQuery($('#per_page_ol li')[i]).removeClass("active");
			jQuery($('#per_page div')[i]).hide();
		}
	}
}
function autoShowPage(){
	clear = setInterval("showPage()", time);
}
function stopShowPage(){
	clearInterval(clear);
}
function reShowPage(){
	clear = setInterval("showPage()", time);
}

