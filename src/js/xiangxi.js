(function(){
	var shuliang = $('.shuliang')[0];
	var gouwuche = $('.gouwuche')[0];
	var jian = $('.jian')[0];
	var jia = $('.jia')[0];
	var shu = $('.shu')[0];
	var num = 0;
	gouwuche.onclick = function(){
		num++;
		shu.innerHTML = num;
		shuliang.innerHTML = num;
	}
	jia.onclick = function(){
		num++;
		shu.innerHTML = num;
	}
	jian.onclick = function(){
		num--;
		shu.innerHTML = num;
	}
})()
