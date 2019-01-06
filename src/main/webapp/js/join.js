$(function(){
	$('#join_submit').click(joinIn);
	
});

function joinIn(){
	var name = $('#name').val().trim();
	var tel = $('#tel').val().trim();
	var email = $('#email').val().trim();
	var address = $('#address').val().trim();
	var remark = $('#remark').val().trim();
	
	//发起AJAX请求
	var url = 'partner/add.do';
	var data = {name:name, 
			tel:tel, 
			email:email, 
			address:address,
			remark:remark
			};
	//alert(name);
	console.log(data);
	$.post(url, data, function(result){
		console.log(result);
		if(result.state==0){
			alert("恭喜您！加盟成功！工作人员稍后联系您！");
			
		}else{
			alert('网络异常！请直接联系工作人员！');
		}
	});
	
}