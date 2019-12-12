	"use strict";
	//需求分析：在文本框输入内容，根据输入的内容，请求接口，参数将根据内容不同而不同，得到的数据渲染在ul里面
	var div = document.getElementsByClassName('logo_right')[0];
	var input = div.children[0];//关键字输入框
	var ul = div.children[1];//显示结果的盒子
	
	var flag = true;//判断用户是否输入完成，默认是完成的
	input.addEventListener('compositionstart',function(){
		flag = false;
	})
	input.addEventListener('compositionend',function(){
		flag = true;
	})
	input.oninput = function(){
		setTimeout(function(){
			if(flag){
				var keyword = input.value;//输入的关键字
				// //方法一
				// //创建script标签
				// var script = document.createElement('script');
				// //定义一个函数名
				// var cbName = 'phone'+new Date().getTime()+Math.random().toString().slice(2);	
				// //设置该标签的src属性
				// script.src = "https://suggest.taobao.com/sug?code=utf-8&q="+keyword+"&_ksTS=1563970517892_385&callback="+cbName+"&k=1&area=c2c&bucketid=10";								
				// //定义一个函数,以备调用
				// window[cbName] = function(data){
				// 	var result = data.result;//是一个数组
				// 	var str = "";
				// 	result.forEach(function(value){
				// 		str+="<li>"+value[0]+"</li>"
				// 	})
				// 	ul.innerHTML = str;
				// 	script.remove()
				// }
				// document.body.appendChild(script);

				//方法二
				ajax({
					dataType:'jsonp',
					url:'https://suggest.taobao.com/sug',
					data:{
						code:'utf-8',
						q:keyword,
						_ksTS:'1563970517892_385',
						k:1,
						area:'c2c',
						bucketid:10
					},
					success:function(data){
						var result = data.result;//是一个数组
						var str = "";
						result.forEach(function(value){
							str+="<li>"+value[0]+"</li>"
						})
						ul.innerHTML = str;
					}
				})
			}
		})
	}
	
