// JavaScript Document
class Detail{
	constructor(){
		this.goodname=document.getElementById("goodname")
		this.smallimg=document.getElementById("smallimg")
		this.minute=document.getElementById("minute")
		this.selected=document.getElementsByClassName("selected")
		this.second=document.getElementById("second")
		this.jian=document.getElementById("jian")
		this.add=document.getElementById("add")
		this.number=document.getElementById("number")
		this.car=document.getElementById("car")
		this.hour=document.getElementById("hour")
		this.color=document.getElementById("color")
		this.version=document.getElementById("version")
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
		function select(a){
			a.addEventListener("click",function(e){
			var e =e || window.Event;
			var target=e.target ||e.srcElenment;
			console.log(target.tagName)
			
			if(target.tagName == "B"){
				for(var i=0;i<that.color.children.length;i++){
				a.children[i].className=""
			}
				target.className="selected"
				that.selected=document.getElementsByClassName("selected")
			}
			
		})
		}
		select(this.color);
		select(this.version);
		this.add.onclick=function(){
			that.number.innerHTML++
		}
		this.jian.onclick=function(){
			if(that.number.innerHTML>1){
			   that.number.innerHTML--
			   }
			
	}
		this.addCar();
	}
	load(){
		var that=this
		window.onload=function(){
			that.goodname.innerHTML=that.nowname
			that.smallimg.src=that.nowsrc
			that.price.innerHTML=that.nowprice
			
		}
		
	}
	addCar(){
		var that=this
		
		this.carMsg=getCookie("carMsg")?JSON.parse(getCookie("carMsg")) : [];
		var type=0
		this.car.onclick=function(){
			console.log(that.selected[0])
			for(let i=0;i<that.carMsg.length;i++){
				
//				that.carMsg.push(
//					{
//						name:that.nowname,
//						price:that.nowprice,
//						src:that.nowsrc,
//						number:that.number.innerHTML
//						version:that.selected[1],
//						color:that.selected[0],	
//					}
//				)
				
		
			if(that.carMsg[i].name==that.nowname && that.carMsg[i].version==that.selected[1].innerHTML && that.carMsg[i].color==that.selected[0].innerHTML){
				that.carMsg[i].number=(that.carMsg[i].number -0)+ (that.number.innerHTML-0);
				type=1
			}
		}
		if(type==0){
			that.carMsg.push(
					{
						name:that.nowname,
						price:that.nowprice,
						src:that.nowsrc,
						number:that.number.innerHTML,
						version:that.selected[1].innerHTML,
						color:that.selected[0].innerHTML,	
					}
				)
		}
		setCookie("carMsg",JSON.stringify(that.carMsg))
			
			}
			
		}
		
	}

new Detail();