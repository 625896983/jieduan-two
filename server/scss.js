// JavaScript Document

//;(function(){
	"use strict";
	class Scss{
		constructor(){
		this.type=""
		this.black=document.getElementById("black");
		this.red=document.getElementById("red");
			this.beimei=document.getElementById("beimei");
			this.erji=document.getElementById("erji");
			this.box=document.getElementsByClassName("box");
			this.sanji=document.getElementById("sanji");
			this.guojia=document.getElementById("guojia");
			this.ouzhou=document.getElementById("ouzhou");
			this.rihan=document.getElementById("rihan");
			this.cjdl=document.getElementById("cjdl");
			this.cjzh=document.getElementById("cjzh");
			this.cjmm=document.getElementById("cjmm");
		this.xiamore=document.getElementById("xiamore");
			this.tou1=document.getElementById("tou1");
			this.tou2=document.getElementById("tou2");
			this.floor=document.getElementById("floor");
			this.xxx=document.getElementById("xxx");
			this.search=document.getElementById("search");
//		this.red=document.getElementById("red");
		this.sbox=document.getElementsByClassName("sbox");
		this.sbox1=document.getElementsByClassName("sbox1");
		this.sbox2=document.getElementsByClassName("sbox2");
		this.zz=document.getElementsByClassName("zz");	
		this.dd=document.getElementsByClassName("dd");	
		this.addEvent();	
		}
	
	
  addEvent(){
	  var that=this;
	 console.log(12);
	 
	  console.log(this.type)
	  
	  window.onload=function(){
		   console.log(getCookie("onoff"))
		  if(getCookie("onoff")){
			  console.log(1)
			  that.type=getCookie("onoff");
		  }else{
			  console.log(2)
			  that.type=0
			   console.log(that.type);
		  }
		  	if(that.type==0){
		that.tou1.innerHTML="登录";
		that.tou2.innerHTML="注册";
				
				
				
		that.dd[0].onclick=function(){
		that.black.style.display="block"  
	  }
	  that.zz[0].onclick=function(){
		location.href="注册.html"
	  }
		that.red.onclick=function(){
		alert("请先登录");
	}
		that.search.onclick=function(){
		alert("请先登录");
	}
		
					that.xiamore.onclick=function(){
					alert("请先登录");
				}
			for(let i=0;i<that.sbox.length;i++){
					that.sbox[i].onclick=function(){
					alert("请先登录");
				}}
				for(let i=0;i<that.sbox1.length;i++){
					that.sbox1[i].onclick=function(){
					alert("请先登录");
				}}
			that.cjdl.onclick=function(){
				that.u=that.cjzh.value;
					that.p=that.cjmm.value;
					that.getMsg();
				console.log("cjdl")
			}
	}else if(that.type==1){
		that.tou1.innerHTML="已登录";
		that.tou2.innerHTML="退出登录";
		that.zz[0].onclick=function(){
		setCookie("onoff",0);
			location.href="index.html"
	}
	that.red.onclick=function(){location.href="list.html"};
				for(let i=0;i<that.sbox.length;i++){
					that.sbox[i].onclick=function(){
						console.log(1)
						location.href="list.html"}
				}
				for(let i=0;i<that.sbox1.length;i++){
					that.sbox1[i].onclick=function(){
						console.log(2)
						location.href="list.html"}
				}
	
}	
	  }
	 for(let i=0;i<this.sbox2.length;i++){
					this.sbox2[i].onclick=function(){
					alert("直播已结束");
				}}
	  this.xxx.onclick=function(){
		that.black.style.display="none" ;
		  that.cjmm.value="";
	  }
	  this.ouzhou.onclick=function(){
		 for(let i=0;i<that.sbox.length;i++){
					that.sbox[i].children[0].src="images/vovq.jpg";
			 that.sbox[i].children[1].innerHTML="VOVA";
			 that.sbox[i].children[2].innerHTML="货通全球，让世界感受欧洲制造"
				}
		  that.beimei.className="";
		  that.rihan.className="";
		  that.ouzhou.className="now"
	  }
	  this.beimei.onclick=function(){
		 for(let i=0;i<that.sbox.length;i++){
					that.sbox[i].children[0].src="images/亚马逊1.jpg";
			 		that.sbox[i].children[1].innerHTML="亚马逊";
			 		that.sbox[i].children[2].innerHTML="打造优质。。。，亚马逊亚马逊亚马逊妈妈妈妈吗讯"
				}
		  that.beimei.className="now";
		  that.rihan.className="";
		  that.ouzhou.className=""
	  }
	  this.rihan.onclick=function(){
		 for(let i=0;i<that.sbox.length;i++){
					that.sbox[i].children[0].src="images/乐天.png";
			 that.sbox[i].children[1].innerHTML="日本乐天";
			 that.sbox[i].children[2].innerHTML="日本知名的B2C网购平台，有互联网超市之美称"
				}
		  that.beimei.className="";
		  that.rihan.className="now";
		  that.ouzhou.className=""
	  }
	 this.erJi();
	  }
//	if(this.type==0){
//		this.tou1.innerHTML="登录";
//		this.tou2.innerHTML="注册";
//		this.dd[0].onclick=function(){
//		that.black.style.display="block"  
//	  }
//	  this.zz[0].onclick=function(){
//		location.href="注册.html"
//	  }
//		this.red.onclick=function(){
//		alert("请先登录");
//	}
//		this.search.onclick=function(){
//		alert("请先登录");
//	}
//		
//					this.xiamore.onclick=function(){
//					alert("请先登录");
//				}
//			for(let i=0;i<this.sbox.length;i++){
//					this.sbox[i].onclick=function(){
//					alert("请先登录");
//				}}
//				for(let i=0;i<this.sbox1.length;i++){
//					this.sbox1[i].onclick=function(){
//					alert("请先登录");
//				}}
//				
//	}else if(this.type==1){
//		this.tou1.innerHTML="已登录";
//		this.tou2.innerHTML="退出登录";
//		this.zz[0].onclick=function(){
//		setCookie("onoff",1);
//			location.href="index.html"
//	}
//	for(let i=0;i<this.sbox2.length;i++){
//					this.sbox2[i].onclick=function(){
//					alert("直播已结束");
//				}}
//	
//}
		
		getMsg(){
			var type1=0;
				this.msg=getCookie("userMsg")?JSON.parse(getCookie("userMsg")):[];
				
				for(var i=0;i<this.msg.length;i++){
					
					if(this.u==this.msg[i].user && this.p == this.msg[i].pass){
						setCookie("onoff",1)
					   location.href="index.html";
						this.msg[i].condition=1;
						
						setCookie("userMsg",JSON.stringify(this.msg));
						type1=1;
						
						
					   }else if(this.u==this.msg[i].user && this.p !== this.msg[i].pass){
						  
						   alert("密码错误"); 
						    type1=2;
					   }
					
					
				}
				if(type1==0 && this.cjzh.value!=""){
						alert("用户名尚未注册")
					}
		}
		erJi(){
			var that=this
			this.guojia.addEventListener("mouseover",function(e){
				var target=e.target
				if(target.tagName=="LI"){
					that.nowindex=target.getAttribute("index");
					that.erji.style.display="block";
					if(parseInt(that.nowindex) >=5){that.erji.style.top=10+5*54 +"px"}else{
						that.erji.style.top=10+parseInt(that.nowindex)*54 +"px"
					}
					
					that.sanji.style.display="none"
				}
				
			})
			this.erji.addEventListener("mouseover",function(e){
			var target=e.target
				if(target.tagName=="LI"){
					that.nowerindex=target.getAttribute("index");
					that.sanji.style.display="block";
					if(parseInt(that.nowindex) >=4){that.sanji.style.top=-54*(2-parseInt(that.nowerindex)) +"px"}else{
						that.sanji.style.top=parseInt(that.nowerindex)*54 +"px"
					}
					
					
				}
				
			})	
			this.box[0].addEventListener("mouseleave",function(){
				that.sanji.style.display="none";
				that.erji.style.display="none";
			})
		}
	}
		
	
	new Scss();
//})();