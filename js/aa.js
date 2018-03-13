/*
* @Author: Administrator
* @Date:   2018-03-07 16:08:10
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-11 17:10:31
*/
//banner
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".paperbox li");
	let banner=document.querySelector("#banner");
	pagers.forEach(
		function(ele,index){
		ele.onclick=function(){
				for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				}
				this.classList.add("active");
				imgs[index].classList.add("active");
				n=index;
				}
			});
			let flag=true;
			let next=document.querySelector(".next");
			let prev=document.querySelector(".prev");
			next.onclick=function(){
				if(flag){
					flag=false;
				move();
			}
		};
			prev.onclick=function(){
				if(flag){
				flag=false;
				n-=2;
				move();
			}};

		imgs.forEach(function(ele,index){
			ele.addEventListener("transitionend",function(){
				flag=true;
			})
		})


	 let t=setInterval(move,3000);
	 var n=0;
	 	function move(){
		n++;
	 	// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
}
//shangou
{
	const prev=document.querySelector(".buy-prev");
	const next=document.querySelector(".buy-next");
	const inner=document.querySelector(".buy-inner");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
	prev.onclick=function(){
			n--;
			next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}

}
{
	function content(parent){
	const types=parent.querySelectorAll(".type");
	const goods=parent.querySelectorAll(".goodlist");
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<types.length;i++){
				types[i].classList.remove("active");
				goods[i].classList.remove("active");
			}
			this.classList.add("active");
			goods[index].classList.add("active");
		}
	})
	}
	const contentList=document.querySelectorAll(".dapei");
	contentList.forEach(function(ele){
		content(ele);
	})
}
{function wheel(parent){
		let prev=parent.querySelector(".prev1");
		let next=parent.querySelector(".next1");
		let inner=parent.querySelector(".inner");
		let contents=parent.querySelectorAll(".content1");
		let pagers=parent.querySelectorAll(".pager");
		console.dir(pagers)
		let n=0;
		next.onclick=function(){
			n++;
	
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.left=n*-296+"px";
			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
			obj=pagers[n];
			
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.left=n*-296+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
	
		}
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				n=index;
				inner.style.left=n*-296+"px";
			}
			
		})}
		let items=document.querySelectorAll(".item");
		items.forEach(function(ele){
			wheel(ele);
		})}
	{
		let labels=document.querySelectorAll(".label");
		let menus=document.querySelectorAll(".menu");
		let obj=menus[0];
		labels.forEach(function(ele,index){
			ele.onmouseenter=function(){
				obj.style.display="none";
				menus[index].style.display="block";
				obj=menus[index];
			}
			ele.onmouseleave=function(){
				menus[index].style.display="none";
			}
		})
	}



// {
// 	// let top=document.querySelector(".nav_wenzi");
// 	// let bottom=document.querySelector(".nav_bottom");
// 	// top.onmouseenter=function(){
// 	// 	bottom.style.height="230px";
// 	// 	bottom.style.borderTop="1px solid #e0e0e0";
// 	// 	bottom.style.boxShadow="0 3px 5px 0px rgba(133,133,133,0.5)";
// 	// }
// 	// top.onmouseleave=function(){
// 	// 	bottom.style.height="0";
// 	// 	bottom.style.borderTop="none";
// 	// 	bottom.style.boxShadow="none";
// 	// }
		
// }


{
	// function content(parent){
	// 	const types=parent.querySelectorAll(".type");
	// 	const goods=parent.querySelectorAll(".nav_bottom_items");
	// 	const contentlist=parent.querySelectorAll(".nav_zong");
	// 	types.forEach(function(ele,index){
	// 		ele.onmouseover=function(){
	// 			for(let i=0;i<types.length;i++){
	// 				types[i].classList.remove("active");
	// 				goods[i].classList.remove("active");
	// 			}
	// 			this.classList.add("active");
	// 			goods[index].classList.add("active");
	// 		}
	// 	})
	// }
	// const contentlist=document.querySelectorAll(".nav_zong");
	// contentlist.forEach(function(ele){
	// 	content(ele);
	// })
	let top=document.querySelector(".nav_wenzi");
	let bottom=document.querySelector(".nav_bottom");
	let wenzis=document.querySelectorAll(".daohang_wenzi");
	let navitems=document.querySelectorAll(".nav_bottom_item");
			top.onmouseenter=function(){
				bottom.style.height="230px";
				wenzis.forEach(function(ele,index){
						ele.onmouseenter=function(){
							for(let i=0;i<wenzis.length;i++){
								wenzis[i].classList.remove("active");
								navitems[i].classList.remove("active");
							}
							this.classList.add("active");
							navitems[index].classList.add("active");
						}
					});
			}
			top.onmouseleave=function(){
				bottom.style.height="0";
			}
}