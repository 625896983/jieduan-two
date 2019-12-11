// JavaScript Document
class Magnifier{
			constructor(){
				this.sBox = document.querySelector("#imgbox");
//				this.sImg = document.querySelector("#smallimg");
				this.sSpan = document.querySelector("#imgbox span");
				this.bleft = document.querySelector("#bleft");
				this.bBox = document.querySelector("#bbimgbox");
				this.bImg = document.querySelector("#bbimg");
				
				this.init()
			}
			init(){
				var that = this;
//				绑定事件
//				进入
				this.sBox.onmouseover = function(){
//					3.显示隐藏的内容
					that.over()
				}
//				移动
				this.sBox.onmousemove = function(eve){
					var e = eve || window.event;
//					4.移动时计算比例
					that.move(e)
				}
//				离开
				this.sBox.onmouseout = function(){
//					5.隐藏
					that.out()
				}
				
			}
			over(){
//				显示
				this.sSpan.style.display = "block";
				this.bBox.style.display = "block";
//				根据右边图和框的比例,计算span的宽高
				this.sSpanW = (this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth);
				this.sSpanH = (this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight);
//				console.log(this.sSpanW )
//				console.log(this.sSpanH)
//				设置span的宽高
				this.sSpan.style.width = this.sSpanW + "px";
				this.sSpan.style.height = this.sSpanH + "px";
				
//				提前获取尺寸,方便将来使用
				this.sW = this.sBox.offsetWidth;
				this.sH = this.sBox.offsetHeight;

				this.bW = this.bBox.offsetWidth;
				this.bH = this.bBox.offsetHeight;

				this.bImgW = this.bImg.offsetWidth;
				this.bImgH = this.bImg.offsetHeight;
			}
			move(e){
//				计算span要移动的left和top
//				console.log(e.clientX - this.sBox.offsetLeft - this.sSpan.offsetWidth/2)
				var l = e.clientX - this.bleft.offsetLeft - this.sSpan.offsetWidth/2-60;
				var t = e.clientY + document.documentElement.scrollTop-this.bleft.offsetTop - this.sSpan.offsetHeight/2-111;
//				console.log(l)
				
				console.log(document.documentElement.scrollTop)
				
//				console.log(this.sSpan.offsetWidth/2)
//				console.log(e.offsetX)
//				span的边界限定
				if(l<0) l=0;
				if(t<0) t=0;
				//115 60 111
//				console.log(this.sW - this.sSpanW)
				if(l>111){
					l = 111;
				}
//				console.log(this.sH - this.sSpanH)
				if(t>111){
					t = 111;
				}
//				设置span的位置
				console.log(l)
				console.log(t)
				this.sSpan.style.left = l + "px";
				this.sSpan.style.top = t + "px";
//				根据span移动的位置,计算出比例,在根据比例,计算右边大图要移动的距离
				this.bImg.style.left = l / (this.sW - this.sSpanW) * (this.bW - this.bImgW) + "px";
				this.bImg.style.top = t / (this.sH - this.sSpanH) * (this.bH - this.bImgH) + "px";
			}
			out(){
//				隐藏
				this.sSpan.style.display = "none";
				this.bBox.style.display = "none";
			}
		}
		
		new Magnifier();
		
		