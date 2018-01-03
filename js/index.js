$(function(){
	//异步加载头部资源
	$.get("html/header.html",function(data){
		$(".header").append(data);
	});
	//异步加载尾部资源
	$("footer").load("html/footer.html");
	//广告区轮播图
	$(".banner").carousel({
		width : 1263,
		height : 470,
		imgs : [
			{src:"img/bannerpic1.jpg",href:"http://www.baidu.com"},
			{src:"img/bannerpic2.jpg",href:"http://www.baidu.com"},
			{src:"img/bannerpic3.jpg",href:"http://www.baidu.com"},
			{src:"img/bannerpic4.jpg",href:"http://www.baidu.com"},
			{src:"img/bannerpic5.jpg",href:"http://www.baidu.com"},
			{src:"img/bannerpic6.jpg",href:"http://www.baidu.com"},
			{src:"img/bannerpic7.jpg",href:"http://www.baidu.com"},
			{src:"img/bannerpic8.jpg",href:"http://www.baidu.com"}
		],
		isPrevNext : false,
		isAuto : true,
		shiftTime : 4000,
		type : "fade"
	});
	//zh区
	var _zh= $("#zh_ul1").children();
	_zh.each(function(index,element){
		$(this).hover(function(){
			$(this).addClass("color");
		},function(){
			$(this).removeClass("color");
		});
		/*var curentIndex=0,nextIndex=1;
		$("#zh_ul1").on("click",".zh_li1",function(){
			if(index===nextIndex){
				$(".zh_li1").eq(nextIndex).addClass("color").end().eq(curentIndex).removeClass("color");
				$("#zh_box1").children().eq(nextIndex).show().end().eq(curentIndex).hide();
			}
			curentIndex=nextIndex;
			nextIndex++;
			if(nextIndex>4)
			nextIndex=0;
		});*/
	});
	/*$.getJSON("mock/products.json", function(data){
		$.each(data, function(index, product){
			$(".template").clone(true)
						  .show()
						  .removeClass("template").addClass("box")
						  .children(".img").attr("src", product.img).end()
						  .children(".title").html(product.title).end()
						  .children(".price").text(product.price).end()
						  .children(".id").val(product.id).end()
						  .appendTo("#zh_box1");
		});
	});*/
	//白酒馆商品
	$.getJSON("mock/products.json", function(data){
		$.each(data, function(index, product){
			$(".template").clone(true)
						  .show()
						  .removeClass("template").addClass("box")
						  .children(".img").attr("src", product.img).end()
						  .children(".title").html(product.title).end()
						  .children(".price").text(product.price).end()
						  .children(".id").val(product.id).end()
						  .appendTo(".right");
		});
	});
});