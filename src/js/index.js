 var mySwiper = new Swiper ('.swiper-container', {
	loop: true, // 循环模式选项
	// 如果需要分页器
	pagination: {
	  el: '.swiper-pagination',
	},
	// 如果需要前进后退按钮
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  })      
//Swiper5
  var mySwiper = new Swiper ('.swiper-container', {
	on:{
	  init: function(){
		swiperAnimateCache(this); //隐藏动画元素 
		swiperAnimate(this); //初始化完成开始动画
	  }, 
	  slideChangeTransitionEnd: function(){ 
		swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
		//this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
	  } 
	}
  }) 

var fli = document.getElementsByClassName('fli')[0];
var ful = document.getElementsByClassName('ful')[0];
fli.onmouseenter = function(){
	ful.style.display = 'flex';
	animate(ful,{opacity:100},function(){console.log(1)})
}
fli.onmouseleave = function(){
	ful.style.display = 'none';
	animate(ful,{opacity:0},function(){console.log(1)})
}
$(function(){
	// 免登录
	$.ajax({
		url:"./server.php",
		success:function(data){
			if(data=="1"){
				$('.weidenglu').html("");
				$('.yidenglu').css({display:"block"})
				.children('.us').html(getCookie('username'))
			}
		}
	})
	function getCookie(key){
		var str=document.cookie;
		var arr=str.split("; ");
		for(var i=0;i<arr.length;i++){
			var narr=arr[i].split("=");
			if(narr[0]==key){
				return narr[1];
			}
		}
	}
})()
