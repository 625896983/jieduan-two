// JavaScript Document
class Car{
	constructor(){
		
		this.goodlist=document.getElementById("goodlist");
		this.allcheck=document.getElementById("allcheck");
		this.money=document.getElementById("money");
		this.check=document.getElementsByClassName("check");
		this.allnum=document.getElementById("allnum");
		this.jiesuan=document.getElementById("jiesuan");
		this.jiesuanbtn=document.getElementById("jiesuanbtn");
		this.load();
		this.changeNumber();
		this.allCheck();
		this.Money();
		this.jieSuan();

	}
	load(){
		var that=this
		var str=""
		this.goodMsg= getCookie("carMsg")?JSON.parse(getCookie("carMsg")) : [];
		if(this.goodMsg.length==0){str="<h1>购物车空空如也，去购物吧</h1>";this.money.innerHTML=0
			this.allnum.innerHTML=0}else{
		for(let i=0;i<this.goodMsg.length;i++){
			str+=`<li mingzi="${this.goodMsg[i].name}" yanse="${this.goodMsg[i].color}" banbeng="${this.goodMsg[i].version}"><input type="checkbox" checked="checked" class="check"/><img src="${this.goodMsg[i].src}" class="img"><div>${this.goodMsg[i].name}<br><span class="color">${this.goodMsg[i].color}</span><span class="version">${this.goodMsg[i].version}</span></div><span class="price">${this.goodMsg[i].price}</span><div class="gouwu"><p><b class="jian">-</b><span class="number">${this.goodMsg[i].number}</span><b class="add">+</b></p></div><span class="allprice">${((this.goodMsg[i].number-0)*(this.goodMsg[i].price-0)).toFixed(2)}</span><input type="button" value="删除" class="delete"></li>`
		}	
		}
		
		this.goodlist.innerHTML=str;
		window.onload=function(){
			that.allcheck.checked=true;
		}
	}
	changeNumber(){
		var that=this
		this.goodlist.addEventListener("click",function(e){
			var e=e || window.event;
			that.target=e.target ||e.srcElement
			if(that.target.className=="add"){
				
				that.target.previousElementSibling.innerHTML++
				
				that.target.parentElement.parentElement.nextElementSibling.innerHTML=((that.target.parentElement.parentElement.previousElementSibling.innerHTML-0)*(that.target.previousElementSibling.innerHTML-0)).toFixed(2);
//				console.log(target.parentElement.parentElement.previousElementSibling)
				that.nownum=that.target.previousElementSibling.innerHTML
				console.log("执行了")
				that.setMsg();
				that.Money();
				
			}
			if(that.target.className=="jian"){
				if(that.target.nextElementSibling.innerHTML>1){that.target.nextElementSibling.innerHTML--}
				
				
				that.target.parentElement.parentElement.nextElementSibling.innerHTML=((that.target.parentElement.parentElement.previousElementSibling.innerHTML-0)*(that.target.nextElementSibling.innerHTML-0)).toFixed(2);
				that.nownum=that.target.nextElementSibling.innerHTML
//				console.log(that.target)
//				console.log(that.target.parentElement.parentElement.previousElementSibling.innerHTML)
				that.setMsg();
				that.Money();
			}
			if(that.target.className=="delete"){
				that.dEtele()
				that.Money();
			}
			
		})
		
	}
	setMsg(){
		
		this.targetname=this.target.parentElement.parentElement.parentElement.getAttribute("mingzi");
		this.targetcolor=this.target.parentElement.parentElement.parentElement.getAttribute("yanse");
		this.targetversion=this.target.parentElement.parentElement.parentElement.getAttribute("banbeng");
		
		for(let i=0;i<this.goodMsg.length;i++){
			if(this.goodMsg[i].name== this.targetname && this.goodMsg[i].color ==this.targetcolor && this.goodMsg[i].version== this.targetversion){
				this.goodMsg[i].number=this.nownum;
			}
		
		}
		console.log("执行了")
		setCookie("carMsg",JSON.stringify(this.goodMsg))
	}
	dEtele(){
		this.targetname=this.target.parentElement.getAttribute("mingzi");
		this.targetcolor=this.target.parentElement.getAttribute("yanse");
		this.targetversion=this.target.parentElement.getAttribute("banbeng");
		for(let i=0;i<this.goodMsg.length;i++){
			if(this.goodMsg[i].name== this.targetname && this.goodMsg[i].color ==this.targetcolor && this.goodMsg[i].version== this.targetversion){
				this.goodMsg.splice(i,1)
			}
		}
		setCookie("carMsg",JSON.stringify(this.goodMsg))
		this.target.parentElement.remove();
		if(this.goodlist.innerHTML ==""){
			
			this.money.innerHTML=0
			this.allnum.innerHTML=0
			this.goodlist.innerHTML="<h1>购物车空空如也，去购物吧</h1>"
		}
	}
	allCheck(){
//		console.log(this.allcheck)
//		console.log(this.check)
		var that= this
		var type=[]
		for(let i=0;i<that.check.length;i++){
			type.push(1)
		}
//	console.log(type)
		this.allcheck.onclick=function(){
			
			if(that.allcheck.checked ){
			
				for(let i=0;i<that.check.length;i++){
					that.check[i].checked=true
					type[i]=1
				}
			}else{
				that.money.innerHTML=0
			that.allnum.innerHTML=0
				for(let i=0;i<that.check.length;i++){
					
					that.check[i].checked=false
					type[i]=0
					
			}
		}
		that.Money();
	}
	for(let i=0;i<this.check.length;i++){
		this.check[i].onclick=function(){
//			console.log(1)
			if(!this.checked){
						that.allcheck.checked=false
						type[i]=0
					}else if(this.checked){
						type[i]=1
					}
//			console.log(type)
			if(type.indexOf(0) ==-1){
				that.allcheck.checked=true
				
			}else if(type.indexOf(1) ==-1){
				that.money.innerHTML=0
			that.allnum.innerHTML=0
				
			}
//			console.log(type)
			that.Money();
		}
				}	
		}
		
	Money(){
		var that=this
		var num=0
		var num1=0
		
		for(let i=0;i<this.check.length;i++){
			if(this.check[i].checked==true){
//				console.log(Number((parseFloat(this.check[i].parentElement.children[3].innerHTML)).toFixed(2)))
//				console.log( Number(this.check[i].parentElement.children[4].children[0].children[1].innerHTML))
				this.zongjia=Number((parseFloat(this.check[i].parentElement.children[3].innerHTML)).toFixed(2))
				this.yixuan=Number(this.check[i].parentElement.children[4].children[0].children[1].innerHTML)
				this.allzongjia=this.yixuan*this.zongjia
				//这个是小计
//				console.log(this.allzongjia)
//				console.log(this.yixuan)
				num=num+this.yixuan
				this.cjyixuan=num
//				console.log(this.cjyixuan)
				num1=num1+this.allzongjia
				this.cjzongjia=num1
//				console.log(this.cjzongjia)
				this.allnum.innerHTML=this.cjyixuan
				this.money.innerHTML=this.cjzongjia.toFixed(2)
				setCookie("money",JSON.stringify([{zongjia:this.money.innerHTML}]))
			}
			}
	
//		this.cccck=Array.from(this.check)
//	this.kong=this.cccck.every(function(){
//		for(let i=0;i<that.check.length;i++){
//			
//		if(that.cccck[i].checked){
//			return false
//		}else{
//			return true
//		}
//		}
//	})
//		console.log(this.kong)
//		//???
//		if(this.kong){
//			this.money.innerHTML=0
//			this.allnum.innerHTML=0
//		}
		
		}
	jieSuan(){
		var that=this
		this.jiesuanbtn.onclick=function(){
			if(that.money.innerHTML>0){location.href="fuqian.html"
			
		}else{alert("还没有选商品")}
	}
	
	}
}

new Car();