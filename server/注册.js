
"use strict";

class Zhuce{
	constructor(){
		this.password=document.getElementById("password");
		this.account=document.getElementById("account");
		this.ljzc=document.getElementById("ljzc");
		this.agree=document.getElementById("agree");
		this.reg1=/^\w{6,12}$/;
		this.addEvent();
	}
	addEvent(){
		
		
		var that=this;
		window.onload=function(){
			this.password.value="";
		}
		this.password.onblur=function(){
		console.log(that.password.value)
			if(!that.reg1.test(that.password.value)){
				that.password.value="密码长度不符";
				that.password.style.color="red";
				that.password.onfocus=function(){
					that.password.value="";	
					that.password.style.color="black";
				}
			}
		}
		this.zhuCe();
	}
	zhuCe(){
		var that=this;
		this.ljzc.onclick=function(){
			console.log(that.account.innerHTML)
			if(that.reg1.test(that.password.value) && that.agree.checked==true && that.account.value!=""){
				that.n=that.account.value;
				that.p=that.password.value;
				that.setMsg();
				
				
				
				
			}else{
				alert("请正确输入账号和密码，并同意用户服务协议")
			}
		}
	}
	setMsg(){
		this.msg=getCookie("userMsg")?JSON.parse(getCookie("userMsg")):[];
				//查重
				console.log(this.msg)
				var type=this.msg.some((val,idx)=>{
					return val.user===this.n
					
				})
				if(type){
					//重了
					
					alert("用户名重复");
				}else{
					this.msg.push({
						user:this.n,
						pass:this.p,
						condition:0
					})
					this.Success()	
					
				}
				setCookie("userMsg",JSON.stringify(this.msg));
		
	}
	Success(){
		setCookie("onoff",1);
				alert("注册成功 确定后将自动登录");
				setTimeout(()=>{
					location.href="index.html"
				},500)
			}
}
new Zhuce();