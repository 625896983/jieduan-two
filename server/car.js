// JavaScript Document
class Car{
	constructor(){
		this.goodlist=document.getElementById("goodlist");
		this.load();
		this.changeNumber();
	}
	load(){
		var str=""
		this.goodMsg= getCookie("carMsg")?JSON.parse(getCookie("carMsg")) : [];
		for(let i=0;i<this.goodMsg.length;i++){
			str+=`<li><input type="checkbox" checked="checked" class="check"/><img src="${this.goodMsg[i].src}" class="img"><div>${this.goodMsg[i].name}<br><span class="color">${this.goodMsg[i].color}</span><span class="version">${this.goodMsg[i].version}</span></div><span class="price">${this.goodMsg[i].price}.00</span><div class="gouwu"><p><b class="jian">-</b><span class="number">${this.goodMsg[i].number}</span><b class="add">+</b></p></div><span class="allprice">${(this.goodMsg[i].number-0)*(this.goodMsg[i].price-0)}.00</span><input type="button" value="删除" class="delete"></li>`
		}
		this.goodlist.innerHTML=str;
	}
	changeNumber(){
		this.goodlist.addEventListener("click",function(e){
			var e=e || window.event;
			var target=e.target ||e.srcElement
			if(target.className=="add"){
				
				target.previousElementSibling.innerHTML++
				
				target.parentElement.parentElement.nextElementSibling.innerHTML=(target.parentElement.parentElement.previousElementSibling.innerHTML-0)*(target.previousElementSibling.innerHTML-0)
//				console.log(target.parentElement.parentElement.previousElementSibling)
			}
			if(target.className=="jian"){
				if(target.nextElementSibling.innerHTML>1){target.nextElementSibling.innerHTML--}
				
				
				target.parentElement.parentElement.nextElementSibling.innerHTML=(target.parentElement.parentElement.previousElementSibling.innerHTML-0)*(target.nextElementSibling.innerHTML-0)
			}
		})
		
	}
}
new Car();