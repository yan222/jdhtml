$(function(){
	/*顶部广告关闭*/
	$('.close-hook').click(function(){
		$(this).parent().parent('.top_ad').slideUp();
	})
	
	/*点击按钮，界面跳转*/ 
	$('.search-hook').click(function(){
		window.location.href='search.html';
	})
	
	/*左侧大广告关闭*/
	$('.icon-close-hook').click(function(){
		$(this).parent('.leftAd_pic').hide();
	})
	
	/*大图轮播*/
	var c=0;
	//自动轮播
	timer=setInterval(run,2000);
	function run(){
		c++
		if(c==8){
			c=0;
		}
		$('#lunbo li').eq(c).fadeIn().siblings().fadeOut();
		$('#circle li').eq(c).css({'background':'rgba(255,255,255,0.3)'}).siblings().css({'background':'rgba(0,0,0,0.4)'});
	}
	//鼠标移进轮播图区域就停止定时器
	$('.carousel').mouseenter(function(){
		clearInterval(timer);
	});
	$('.carousel').mouseleave(function(){
		clearInterval(timer);
		timer=setInterval(run,2000);
	});
	//鼠标放上小圆点的效果
	$("#circle li").mouseenter(function(){
		var a=$(this);
		c=$(this).index();
		$('#lunbo li').eq(c).stop().fadeIn().siblings().stop().fadeOut();
		a.css({'background':'rgba(255,255,255,0.3)'}).siblings().css({'background':'rgba(0,0,0,0.4)'});
	});
	//pre前一个
	$('.pre').eq(0).click(function(){
		c--;
		if(c==-1){
			c=7;
		}
		$('#lunbo li').eq(c).stop().fadeIn().siblings().stop().fadeOut();
		$('#circle li').eq(c).css({'background':'rgba(255,255,255,0.3)'}).siblings().css({'background':'rgba(0,0,0,0.4)'});	
	})
	//next下一个
	$('.next').eq(0).click(function(){
		c++;
		if(c==8){
			c=0;
		}
		$('#lunbo li').eq(c).stop().fadeIn().siblings().stop().fadeOut();
		$('#circle li').eq(c).css({'background':'rgba(255,255,255,0.3)'}).siblings().css({'background':'rgba(0,0,0,0.4)'});	
	})
	/*大图轮播结束*/
	
	/*picscroll*/
	var page=0;
	$('.picscroll .pre').click(function(){
		page--;
			if(page==-1){
				page=2;
			}
		$('.picscroll').find('ul').stop().animate({
			'left':-800*page+'px'
		},500)
	})
	$('.picscroll .next').click(function(){
		page++;
			if(page==3){
				page=0;
			}
		$('.picscroll').find('ul').stop().animate({
			'left':-800*page+'px'
		},500)
	})
	/*picscroll end*/
	
	/*内容区2 最右侧轮播*/ 
	scroll('right',200,2,1,2000);
	function scroll(classname,width,totalpage,isauto,time){
		//类名，每次滚动的宽度，总页数,是否自动播放,自动切换的时间毫秒
		var s_page=0;
		var timer;
		//加载后判断是否自动播放
		if(isauto){
			timer=setInterval(run,time);
			//鼠标经过 清理定时器
			$('.'+classname).mouseenter(function(){
				clearInterval(timer);
			})
			//鼠标离开开启定时器
			$('.'+classname).mouseleave(function(){
				timer=setInterval(run,time);
			})
		}
		
		$('.'+classname).find('.dot a').mouseenter(function(){
				s_page=$(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				$('.'+classname).find('.ullist').stop().animate({
					'left':-width*s_page+'px'
				},500)
			})		
		function run(){
			s_page++;
	
			if(s_page==totalpage){
				s_page=0;
			}
			$('.'+classname).find('.dot a').eq(s_page).addClass('active').siblings().removeClass('active');
			
			$('.'+classname).find('.ullist').stop().animate({
				'left':-width*s_page+'px'
			},500)
		}
	}
	/*内容区2 最右侧轮播 end*/ 
	
	/*右边固定栏点击事件*/
	$(".right-fixed ul .miaosha").click(function(){
		$("html,body").animate({scrollTop:"740"},600);//回到京东秒杀
	})
	$(".right-fixed ul .texuan").click(function(){
		$("html,body").animate({scrollTop:"980"},600);//回到特色优选
	})
	$(".right-fixed ul .guangchang").click(function(){
		$("html,body").animate({scrollTop:"2000"},600);//回到频道广场
	})
	$(".right-fixed ul .tuijian").click(function(){
		$("html,body").animate({scrollTop:"2620"},600);//回到为你推荐
	})
	$(".right-fixed ul .gotop").click(function(){
		$("html,body").animate({scrollTop:"0"},600);//回到顶部
	})
	
})

/*页面滚动事件*/
$(window).scroll(function(){
	//判断页面滚动距离
	var top=$("html,body").scrollTop();
	if(top>=700){
		$('.xfsearch').slideDown();//顶部悬浮搜索框
	}else{
		$('.xfsearch').slideUp();
	}
	
	if(top>=740)
	{
		$('.right-fixed').show();//右侧固定栏
		// 秒杀 变样式
		$('.right-fixed ul .miaosha').css("color","#E1251B").siblings().css("color","#333");
		$('.right-fixed .gotop').css("color","#E1251B");
	}else{
		$('.right-fixed').hide();
		
	}
	
	if(top>=980){
		$('.right-fixed .texuan').css("color","#E1251B").siblings().css("color","#333");//京东特选
		$('.right-fixed .gotop').css("color","#E1251B");
	}
	
	if(top>=1000)
	{
		$('.right-fixed ul .gotop').show();//“回到顶部”显现
	}
	else{
		$('.right-fixed ul .gotop').hide();
	}
	
	if(top>=2000){
		$('.right-fixed .guangchang').css("color","#E1251B").siblings().css("color","#333");//频道广场
		$('.right-fixed .gotop').css("color","#E1251B");
	}
	if(top>=2620){
		$('.right-fixed .tuijian').css("color","#E1251B").siblings().css("color","#333");//为你推荐
		$('.right-fixed .gotop').css("color","#E1251B");
	}
	// 悬浮第二栏
	if(top >= 2693){
		$('.xfnav').slideDown();
		$('.right-fixed').css('top','130px');
	}else{
		$('.xfnav').slideUp();
		$('.right-fixed').css('top','75px');
	}
		
	// console.log(top);
})