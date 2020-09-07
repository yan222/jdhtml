$(function(){
    //广告关闭
    $(".head #close").click(function(){
        $(" #adver").slideUp();
    })

var current=0;
var current2=0;
//设置选中当前下面的图标
$("#bt a").eq(current).css("background","#0893ff");

$("bannnerimg img").eq(current).show().siblings().hide();

$(".w2 .item").eq(0).addClass(".w2 .item .itemho");   //鼠标悬停第一张，并显示特效

$(".daily .r1 .top").eq(current2).css("background","#0893ff").css("color","#fff");  //选中第一个标题

/* 每日精选*/
$(".daily .r1 .top").mouseover(function(){
    var i=$(this).index();
    $(".daily .w3 .r2").eq(i).show().siblings().hide();
    $("daily .r1 .top").eq(i).css("background","#0893ff").css("color","#fff").siblings().css("background","#fff").css("color","#0893ff")
})
var time2=setInterval(function(){
    current2=current2+1;
    if(current2>=5){
        current2=0
    }
    $(".daily .r1 .top").eq(current2).mouseover().css("background","#0893ff").css("color","#fff").siblings().css("background","#fff").css("color","#0893ff");


},2000);

//海报切换
$("#bt a").mouseover(function(){
    var i=$(this).index();
    changeimg(i)
})
// 点击向左切换图片  click为动作
$(".slider .left").click(function(){
    // 点击时当前图标减一
    var nowi = current-1; 
    //判断图标下标是否越界
    if(nowi<=-1) {
        nowi = 6; //越界则到最后一张  
    }
    // 调用公共方法
    changeimg(nowi);
})
//向右切换
$(".slider .right").click(function(){
    var nowi = current+1;
    if(nowi>=7){
        nowi=0;
    }
    changeimg(nowi);
})
	// 自动切换
	// 给函数（定时器）设置编号 timerid 相当于变量
	var timerid = setInterval(function(){
		$(".slider .right").click();
    },2000);
    
$(".slider").mouseover(function(){
clearInterval(timerid);
})
$(".slider").mouseout(function(){
    timerid = setInterval(function(){
        $(".slider .right").click();
    },2000);
})


function changeimg(i){
    // 改变文件路径属性，变换图片，做效果在这一句
    //$("#bannerimg").attr("src",imgarr[i]);  
    $("#bannerimg a img").eq(i).fadeIn().siblings().fadeOut();
    $("#bt a").eq(i)   // 找到当前悬停icon
		.css("background","#0893ff")  // 设置当前这个背景黑色
		.siblings()  // 找到兄弟元素
		.css("background-color","rgba(0,0,0,0)");  //变透明

    current = i;
}
    
$(".sidelist #top").click(function(){
    //点击回到顶部
    //window.scroll(0,0)
    $("html,body").animate({scrollTop:"0"},600);   //动画效果
})
})
//页面滚动事件
$(window).scroll(function(){
//得到页面滚动距离
var top =$("html,body").scrollTop();
if(top>=350){
    $(".sidelist").show();
}
else $(".sidelist").hide();
})