// JavaScript Document

//;(function(){
	"use strict";
	class Scss{
		constructor(){
			this.type=0;
		this.black=document.getElementById("black");
		this.red=document.getElementById("red");
		this.xiamore=document.getElementById("xiamore");
			this.floor=document.getElementById("floor");
			this.xxx=document.getElementById("xxx");
			this.search=document.getElementById("search");
//		this.red=document.getElementById("red");
		this.sbox=document.getElementsByClassName("sbox");
		this.sbox1=document.getElementsByClassName("sbox1");
		this.sbox2=document.getElementsByClassName("sbox2");
		this.zz=document.getElementsByClassName("zz");	
	this.addEvent();	
		}
	
	
  addEvent(){
	  var that=this
	 console.log(12);
	  this.zz[0].onclick=function(){
		that.black.style.display="block"  
	  }
	  this.xxx.onclick=function(){
		that.black.style.display="none"  
	  }
	if(this.type==0){
		this.red.onclick=function(){
		alert("请先登录");
	}
		this.search.onclick=function(){
		alert("请先登录");
	}
		
					this.xiamore.onclick=function(){
					alert("请先登录");
				}
			for(let i=0;i<this.sbox.length;i++){
					this.sbox[i].onclick=function(){
					alert("请先登录");
				}}
				for(let i=0;i<this.sbox1.length;i++){
					this.sbox1[i].onclick=function(){
					alert("请先登录");
				}}
				
	}
	for(let i=0;i<this.sbox2.length;i++){
					this.sbox2[i].onclick=function(){
					alert("直播已结束");
				}}
	
}
		}
	new Scss();
//})();