package com.chuangdian;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

//添加注释

@Controller				
@RequestMapping("/user")  //匹配请求路径
public class MainNetController {
	@RequestMapping("/login.do") //匹配请求
	@ResponseBody  //JSON输出
	public String execute(
			String name,String password){
		//调用UserService处理登录请求
		String result = "不知道什么鬼";
		return result;
	}
}
