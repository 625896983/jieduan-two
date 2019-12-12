define(()=>{
	class List{
	constructor(){

		this.box4=document.getElementById("box4");
		this.all=document.getElementById("all");
		this.dianzi=document.getElementById("dianzi");
		this.sbox4=document.getElementsByClassName("sbox4");
		this.xie=document.getElementById("xie");
		this.dangqian=document.getElementById("dangqian");
		this.keyword=document.getElementById("keyword");
		this.wenhao=document.getElementById("wenhao");
		this.url="goods.json";
		this.load();
		this.addEvent();
	}
	load(){
				var that=this;
				ajaxGet(this.url,function(res){
					that.res=JSON.parse(res);
					console.log(that.res);
					that.display();
				});
			}
	display(){
				var str = ""
				for(var i=0;i<this.res.length;i++){
//					str += `<div class="box" index="${this.res[i].goodsId}">
//								<img src="${this.res[i].img}" alt="">
//								<p>${this.res[i].name}</p>
//								<span>${this.res[i].price}</span>
//								<em class="addCar">加入购物车</em>
//							</div>`;
					str +=`<div class="sbox4" index="${this.res[i].goodsId}">
					<img src="${this.res[i].img}" alt="">
					<h6>
						${this.res[i].name}
					</h6>
					<span>
						￥${this.res[i].price}
					</span>
				</div>`
				}
				this.box4.innerHTML = str;
		console.log(this.sbox4.length)
		this.goDetail();
				//渲染页面
		}
	display1(){
//		console.log("display1执行了")
		var str = ""
		for(var i=0;i<this.res.length;i++){
//			console.log(this.res[i].goodsId)
//			console.log(this.res[i].goodsId.search("d"))
					if(this.res[i].goodsId.search("d")!=-1){
				console.log(this.res[i].goodsId)				
				str +=`<div class="sbox4" index="${this.res[i].goodsId}">
					<img src="${this.res[i].img}" alt="">
					<h6>
						${this.res[i].name}
					</h6>
					<span>
						￥${this.res[i].price}
					</span>
				</div>`	
//			console.log("渲染完成")		
					}
		}
			this.box4.innerHTML = str;	
		this.goDetail();
	}
	display2(){
//		console.log("display1执行了")
		var str = ""
		for(var i=0;i<this.res.length;i++){
//			console.log(this.res[i].goodsId)
//			console.log(this.res[i].goodsId.search("d"))
					if(this.res[i].goodsId.search("x")!=-1){
				console.log(this.res[i].goodsId)				
				str +=`<div class="sbox4" index="${this.res[i].goodsId}">
					<img src="${this.res[i].img}" alt="">
					<h6>
						${this.res[i].name}
					</h6>
					<span>
						￥${this.res[i].price}
					</span>
				</div>`	
//			console.log("渲染完成")		
					}
		}
			this.box4.innerHTML = str;	
		this.goDetail();
	}
	addEvent(){
		var that=this
		this.all.onclick=function(){
			that.dangqian.innerHTML="全部"
			that.all.className="orange"
			that.dianzi.className=""
			that.xie.className=""
			that.display();
			
		}
		this.dianzi.onclick=function(){
			console.log("电子点击了")
			that.dangqian.innerHTML="电子"
			that.all.className=""
			that.dianzi.className="orange"
			that.xie.className=""
			that.display1();
			console.log("电子执行了")
		}
		this.xie.onclick=function(){
			that.dangqian.innerHTML="鞋包"
			that.all.className=""
			that.dianzi.className=""
			that.xie.className="orange"
			that.display2();
		}
		this.souSuo();
		
		
	}
	souSuo(){
		var that=this;
		this.wenhao.onclick=function(){
			console.log("点到问号了")
			console.log(that.keyword.value)
			var type=0;
			var str=""
			if(that.keyword.value==""){
				alert("搜索关键字不得为空")
			}else if(that.keyword.value!=""){
				for(var i=0;i<that.res.length;i++){
//			console.log(this.res[i].goodsId)
//			console.log(this.res[i].goodsId.search("d"))
					console.log(that.keyword.value)
					console.log(that.res[i].name)
								console.log(that.res[i].name.search(that.keyword.value) !=-1)
					if(that.res[i].name.search(that.keyword.value)!=-1){
				console.log(that.res[i].name)				
				str +=`<div class="sbox4" index="${that.res[i].goodsId}">
					<img src="${that.res[i].img}" alt="">
					<h6>
						${that.res[i].name}
					</h6>
					<span>
						￥${that.res[i].price}
					</span>
				</div>`	;
						
						type=1;
						console.log("改了type")
//			console.log("渲染完成")		
					}
					
		}
				console.log(type==0)
					if (type==0){
					str="<h1>很遗憾，什么也没找到，试试其它关键字吧</h1>"
				}
			that.box4.innerHTML = str;		
			}
			
		}
	}
	goDetail(){
		var that=this;
		for(let i=0;i<this.sbox4.length;i++){
			
			this.sbox4[i].onclick=function(){
				var Index=this.getAttribute("index");
				console.log(Index)
				//此处必须是this！
				for(let i=0;i<that.res.length;i++){
//			console.log(this.res[i].goodsId)
//			console.log(this.res[i].goodsId.search("d"))
					
					if(that.res[i].goodsId==Index){
						
						that.nowname=that.res[i].name;
						that.nowprice=that.res[i].price;
						that.nowsrc=that.res[i].img;
						that.setMsg();
//						setCookie()
						location.href="detail.html"
			}
	}
}}}
	setMsg(){
		
					this.msg=[{
						nown:this.nowname,
						nowp:this.nowprice,
						nows:this.nowsrc,
					}]
						
				
				setCookie("nowMsg",JSON.stringify(this.msg));
		
	}
}
	return {
		list:List
	};
})
