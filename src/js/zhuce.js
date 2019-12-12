$(function(){
	$('.btn').click(function(){
		$.ajax({
			url:"./zhuce.php",
			data:{
				us:$('.us').val(),
				psd:$('.psd').val()
			},
			success:function(data){
				console.log(data)
				if(data=="0"){
					$('.text').html("该手机号已被注册,请直接登录")
				}else{
					clearInterval(timer)
					var num=3;
					var timer=setInterval(function(){
						if(num<=0){
							clearInterval(timer)
							location.assign('./denglu.html')
						}else{
							num--;
							$('.txt').html(data+","+num+'秒后自动跳转登录界面'+'<a href="./denglu.html">立即跳转</a>')
						}
					},500)
				}
			}
		})
	})
})