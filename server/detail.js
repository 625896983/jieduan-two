// JavaScript Document
class Detail{
	constructor(){
		this.goodname=document.getElementById("goodname")
		this.smallimg=document.getElementById("smallimg")
		this.minute=document.getElementById("minute")
		this.second=document.getElementById("second")
		this.hour=document.getElementById("hour")
		this.price=document.getElementById("price")
//		this.d=0
//		this.h=1
//		this.m=59
//		this.s=59
		this.addEvent();
		this.load()
		
	}
	addEvent(){
		var that=this;
		var d=new Date();
		var m=59;
		var s=59;
		var h=23;
		this.minute.innerHTML=m-d.getMinutes();
		this.second.innerHTML=s-d.getSeconds();
		this.hour.innerHTML=h-d.getHours();
		
		setInterval(()=>{
			var d=new Date();
			that.minute.innerHTML=m-d.getMinutes();
			that.second.innerHTML=s-d.getSeconds();
			that.hour.innerHTML=h-d.getHours();
		},1000)
		
			
	
		this.nowmsg=JSON.parse(getCookie("nowMsg"))
		console.log(this.nowmsg)
		this.nowname=this.nowmsg[0].nown;
		this.nowprice=this.nowmsg[0].nowp;
		this.nowsrc=this.nowmsg[0].nows;
	}
	load(){
		var that=this
		window.onload=function(){
			that.goodname.innerHTML=that.nowname
			that.smallimg.src=that.nowsrc
			that.price.innerHTML=that.nowprice
			
		}
		
	}
}
new Detail();