
"use strict";

class Zhuce{
	constructor(){
		this.password=document.getElementById("password");
		this.reg1=/^\w{6,12}$/;
		this.addEvent();
	}
	addEvent(){
		
		
		var that=this;
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
	}
}
new Zhuce();