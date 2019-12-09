;(function($){
	"use strict";
	$.fn.banner=function(options){
		this._obj_={
		list:options.list ===false ?false :true,
		movetime:options.moveTime||200,
		delaytime:options.delayTime||2000,
		iPrev:options.items.length-1,
		index:options.index ||0,
		autoplay:options.autoplay ===false ?false :true	
	}
		var that=this;
		this._obj_.init=function(){
			that.css({
				overflow:"hidden"
			});	
			//options前面不用this
			options.items.css({
				position:"absolute",
				left:options.items.eq(0).width(),
				top:0,
			}).eq(this.index).css({
				left:0
			})
		}
		this._obj_.init();
		//开始写左右按钮，传参就做，没传左右按钮就不做,
		if(options.left != undefined && options.left.length > 0 && options.right != undefined && options.right.length > 0 ){
			options.left.click(btnleft)
			options.right.click(btnright)
		}
		function btnleft(){
			if(that._obj_.index==0){
				that._obj_.index=options.items.length-1;
				that._obj_.iPrev=0;
			}else{
				
				that._obj_.index--;
				that._obj_.iPrev=that._obj_.index+1;
				
			}
			that._obj_.btnMove(1);
		}
		function btnright(){
			//报错，漏了（）
			if(that._obj_.index==options.items.length-1){
				that._obj_.iPrev=options.items.length-1;
				that._obj_.index=0;
			}else{
				
				that._obj_.index++;
				that._obj_.iPrev=that._obj_.index-1;
				
			}
			that._obj_.btnMove(-1);
		}
		this._obj_.btnMove=function(type){
			//报错，btnMove=一个函数，不是加（）执行
			options.items.eq(that._obj_.iPrev).css({
				left:0
				//end（）干嘛的
			}).stop().animate({left:options.items.eq(0).width()*type},that._obj_.movetime).end().eq(that._obj_.index).css({
				left:-options.items.eq(0).width()*type
				//多加一个；不需要
			}).stop().animate({left:0},that._obj_.movetime);
			if(!that._obj_.list) return;
			that.find(".list").children().css({
				background:"rgba(200,200,200,0.6)"
			}).eq(that._obj_.index).css({
				background:"red"
			})
		}
		if(this._obj_.autoplay){
			this._obj_.t=setInterval(()=>{
				btnright();
			},this._obj_.delaytime)
			
		this.hover(function(){
				clearInterval(that._obj_.t);
			},function(){
				that._obj_.t = setInterval(()=>{
					
					btnright();
					
				},that._obj_.delayTime)
			})
	}
		//小按钮的样式全部是抄来的
	if(this._obj_.list){
//			4-1.创建小按钮
			var str = "";
			for(var i=0;i<options.items.length;i++){
				str += `<li>${i+1}</li>`;
			}
//			4-2.创建小按钮的框,并设置框和小按钮的样式
			$("<ul class='list'>").html(str).appendTo(this).css({
				width:"100%",
				height:30,
				display:"flex",
				position:"absolute",
				left:0,
				bottom:0,
				margin:0,
				padding:0,
				listStyle:"none"
			}).children().css({
				flex:1,
				borderLeft:"solid 1px black",
				borderRight:"solid 1px black",
				background:"rgba(200,200,200,0.6)",
				lineHeight:"30px",
				textAlign:"center",
				cursor:"pointer"
			}).eq(this._obj_.index).css({
				background:"red"
			});	
		this.find(".list").children("li").click(function(){
//			$(this).css({background:"red"}).siblings().css({background:"rgba(200,200,200,0.6)"})兄弟单位拼写错误
			$(this).css({background:"red"}).siblings().css({background:"rgba(200,200,200,0.6)"})
			if($(this).index()<that._obj_.index){
				that._obj_.listMove($(this).index(),1)
			}else if($(this).index()>that._obj_.index){
				that._obj_.listMove($(this).index(),-1)
			}
			that._obj_.index=$(this).index();
		})
		this._obj_.listMove=function(i,type){
			
				options.items.eq(that._obj_.index).css({left:0}).stop().animate({left:options.items.eq(0).width()*type},that._obj_.movetime).end().eq(i).css({left:-options.items.eq(0).width()*type}).stop().animate({left:0},that._obj_.movetime)
				
			
		
		}
	}
}})(jQuery);