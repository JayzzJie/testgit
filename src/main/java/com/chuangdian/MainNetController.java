package com.chuangdian;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

//���ע��

@Controller				
@RequestMapping("/user")  //ƥ������·��
public class MainNetController {
	@RequestMapping("/login.do") //ƥ������
	@ResponseBody  //JSON���
	public String execute(
			String name,String password){
		//����UserService�����¼����
		String result = "��֪��ʲô��";
		return result;
	}
}
