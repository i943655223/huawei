(function(){
	var products = [
		{
			name:"HUAWEI Mate 30 4G",
			pic:"../images/shouji1.png",
			price:'¥4299',
		},
		{
			name:"HUAWEI nova 5z",
			pic:"../images/shouji2.png",
			price:'¥1399',
		},
		{
			name:"荣耀20i",
			pic:"../images/shouji3.png",
			price:'¥1099',
		}
	];
	class ShoppingCart{
		constructor(containerId,products){
			this.container=document.getElementById(containerId);
			this.products=products;
			this.cartProducts=this.getStorage()||[];
			this.shopList=document.createElement("table");
			this.cartList=document.createElement("table");
			this.container.appendChild(this.shopList);
			this.container.appendChild(this.cartList);
			
		}
		setStorage(json){
			localStorage.setItem("cart",JSON.stringify(json));
		}
		getStorage(){
			return JSON.parse(localStorage.getItem("cart"))||[];
		}
		init(){
			this.initShopList();
			if(this.getStorage().length>0){
				this.rendCartList();
			}
		}
		initShopList(){
			var str='<thead><tr><th>华为专卖</th><th></th><th>单价</th><th>操作</th></tr></thead>';
			str+="<tbody>";
			for(var i=0;i<this.products.length;i++){
				str+='<tr><td class="box" ><div class="small"><img src="'+this.products[i].pic+'"><div class="mask"><img src="'+this.products[i].pic+'"></div><div class="bg"></div></div><div class="big"><img src="'+this.products[i].pic+'" class="bigImg"></div></td><td>'+this.products[i].name+'</td><td>'+this.products[i].price+'</td><td><a href="javascript:;" class="addCart">加入购物车</a></td></tr>';
			}
			str+="</tbody>";
			this.shopList.innerHTML=str;
			this.addCartListEvent();
		}
		addCartListEvent(){
			var that=this;
			var allAddCartBtn=document.querySelectorAll(".addCart");
			allAddCartBtn.forEach((addCartBtn)=>{
				addCartBtn.onclick=function(){
					var tr=this.parentNode.parentNode;
					var currentProduct={
						pic:tr.children[0].children[0].children[0].src,
						name:tr.children[1].innerHTML,
						price:tr.children[2].innerHTML
					}
					that.addToCartProducts(currentProduct);
					that.rendCartList();
				}
			})
		}
		addToCartProducts(currentProduct){
			this.cartProducts=this.getStorage();
			for(var i=0;i<this.cartProducts.length;i++){
				if(this.cartProducts[i].name===currentProduct.name){
					this.cartProducts[i].num++;
					this.setStorage(this.cartProducts);
					return;
				}
			}
			currentProduct.num=1;
			this.cartProducts.push(currentProduct);
			this.setStorage(this.cartProducts);
			this.rendCartList();
		}
		rendCartList(){
			var str='<thead><tr><th>华为专卖</th><th></th><th>数量</th><th>操作</th></tr></thead>';
			str+="<tbody>";
			for(var i=0;i<this.getStorage().length;i++){
				str+='<tr><td><img src="'+this.getStorage()[i].pic+'"></td><td>'+this.getStorage()[i].name+'</td><td class="change"><span class="jian">-</span>'+this.getStorage()[i].num+'<span class="jia">+</span></td><td><a href="javascript:;" class="del">删除</a></td></tr>';
			}
			str+="</tbody>";
			this.cartList.innerHTML=str;
			this.delEvent();
			this.changeNum();
		}
		delEvent(){
			var that=this;
			var allDelBtn=this.container.querySelectorAll(".del");
			allDelBtn.forEach((delBtn)=>{
				delBtn.onclick=function(){
					var name=this.parentNode.parentNode.children[1].innerHTML;
					that.delFromCartProducts(name);
				}
			})
		}
		delFromCartProducts(name){
			this.cartProducts=this.getStorage();
			this.cartProducts=this.cartProducts.filter((product)=>{
				if(product.name===name){
					return false;
				}
				return true;
			});
			this.setStorage(this.cartProducts);
			this.rendCartList();
			if(this.cartProducts.length<1){
				this.cartList.innerHTML="";
			}
		}
		changeNum(){
			var that=this;
			var changeNumTdArr=this.container.querySelectorAll(".change");
			changeNumTdArr.forEach((changeNumTd)=>{
				changeNumTd.onclick=function(e){
					var e=window.event||e;
					var target=e.target||e.srcElement;
					var name=this.parentNode.children[1].innerHTML;
					if(target.className=="jian"){
						that.jianNum(name)
					}
					if(target.className=="jia"){
						that.jiaNum(name)
					}
				}
			})
		}
		jianNum(name){
			this.cartProducts=this.getStorage();
			for(var i=0;i<this.cartProducts.length;i++){
				if(this.cartProducts[i].name===name){
					this.cartProducts[i].num--;
					this.setStorage(this.cartProducts);
					this.rendCartList();
					if(this.cartProducts[i].num<=0){
						this.delFromCartProducts(name);
						return;
					}
					return;
				}
			}
		}
		jiaNum(name){
			this.cartProducts=this.getStorage();
			for(var i=0;i<this.cartProducts.length;i++){
				if(this.cartProducts[i].name===name){
					this.cartProducts[i].num++;
					this.setStorage(this.cartProducts);
					this.rendCartList();
					return;
				}
			}
		}
	}
	var car=new ShoppingCart("cart",products);
	car.init();
})()
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
