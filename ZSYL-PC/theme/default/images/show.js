$(document).ready(function(){
	
	/*主页幻灯片*/
	//$(".slideShow .slideBox .slides li").append("<div>123</div>")
	$("#wrapper .mb .slideShow .slideBox .slides li").append("<div>123</div>");
	
	 
   (function() {
     if (!0) return;
     var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource,transition, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
     var i= e.length;
     while (i--){
         document.createElement(e[i])
     } 
})() 

	
var PageTop= document.body.scrollTop,
    IePage = document.documentElement.scrollTop;
	
        if (PageTop>0 || IePage > 0){
            pageScroll();
        }else if(PageTop === 0 || IePage ===0) {
			$("#mainNav ul ul .kongbai").css("height","20px");
			$("#mainNav ul ul .kongbai").css("transition","all ease .3s");
		}
		
     $(window).on("scroll",function(){
        pageScroll();
     });
	 
	 function pageScroll() {
		 var Offset = $(window).scrollTop();
		 $('.header-outer').addClass("header-roll");
	
		 if (Offset === 0){
			 $(".header-outer").removeClass("header-roll");
			 
			 $("#mainNav ul ul .kongbai").css("height","20px");
			 }else if(Offset > 0){
				 $("#mainNav ul ul .kongbai").css("height","11px");
				 $('.header-outer').addClass("header-roll");
				 
			}
	}
})



$(document).ready(function(){
		//回到顶部
		$("#back-top").click(function(){
			$("html,body").animate({scrollTop: 0}, 500);
		});
		//鼠标移动至切换
		$(".fixed-btn i").each(function(i) {
			var LiNode = $(this)
            $(this).mouseover(function(){
			
					$(".fixed-btn .fixed-cont").removeClass("show-this");
					$(".fixed-btn .fixed-cont").eq(i).addClass("show-this");
				
				}).mouseleave(function(){
					$(".fixed-btn .fixed-cont").removeClass("show-this");
					});
        });
		var PageTop= document.body.scrollTop,
        IePage = document.documentElement.scrollTop;

        if (PageTop>0){
            pageScroll();
        }else if (IePage > 0) {
            pageScroll();
        }
     $(window).on("scroll",function(){
        pageScroll();
     });
    function pageScroll() {
        //获取滚动时距离页面顶部的距离
        var Offset = $(window).scrollTop();
	
			$(".fixed-btn").css("right","-52px");
            if (Offset > 200){
			  $(".fixed-btn").css("right","0");
            }
    };
	
	})

$(document).ready(function(){
	
	//显示产品种类
		$("#mainNav ul li").each(function(i) {
			var LiNode = $(this);
            $(this).click(function(){
					$(".cur").removeClass("cur");
					$("#mainNav ul li").eq(i).addClass("ceshi");
				})
        });
	//产品显示
	
	$(".productList dl").each(function(i) {
        $(this).mouseover(function(){
				$(".productList dd").eq(i).css("top","0");
				$(".productList dd").eq(i).css("transition","all ease .2s");
				$(".productList dd").eq(i).css("-moz-transition","all ease .2s");
				$(".productList dd").eq(i).css("-webkit-transition","all ease .2s");
				$(".productList dd").eq(i).css("-o-transition","all ease .2s");
			}).mouseout(function(){
				$(".productList dd").eq(i).css("top","162px");
				$(".productList dd").eq(i).css("transition","all ease .2s");
				$(".productList dd").eq(i).css("-moz-transition","all ease .2s");
				$(".productList dd").eq(i).css("-webkit-transition","all ease .2s");
				$(".productList dd").eq(i).css("-o-transition","all ease .2s");
			})
    });
	
	//点击显示大图
		var PageHeight= document.body.clientHeight ,
        	IeHeight = document.documentElement.clientHeight;	
			console.log(PageHeight);
		$(".close-btn").click(function(){
			$(".popup-inner").css("display","none");
			$(".popup").height(0);
			$(".popup").css("display","none");
			$("body").css("overflow","auto");
			});
			
		//点击切换
		
		var len = $(".big").length;
		var index;
		$(".big").each(function(i){
			$(this).click(function(){
				index = i;
				showMes(index);
				$(".left").click(function(){
					--index;
					if (index===-1) index=len-1;
					showMes(index);
				})
				$(".right").click(function(){
					++index;
					if (index===len) index=0;
					showMes(index);
				})
		})	
	});
	
	
		function showMes(index){
			var title = $(".productList h3").eq(index).text();
			var ImgSrc = $("#wrapper .product .productList dt img").eq(index).attr("src");
			var ClickLink = $(".productList .name a").eq(index).attr("href");
				console.log(ImgSrc);
				$(".popup").height(PageHeight || IeHeight);
				$(".popup").css("display","block");
				$(".popup-inner").css("display","block");
				$(".popup-inner h3").text(title);
				$(".popup-inner .proImg a img").attr("src",ImgSrc);
				$(".popup-inner .proImg a").attr("href",ClickLink);	
		};
		
		//拖动弹出框
		
		
})
$(document).ready(function(e) {
    $('.popup-inner h3').mousedown( 
				function (event) { 
					var isMove = true; 
					var abs_x = event.pageX - $('div.popup-inner').offset().left; 
					var abs_y = event.pageY - $('div.popup-inner').offset().top; 
						$(document).mousemove(function (event) { 
							if (isMove) { 
								var obj = $('div.popup-inner'); 
								obj.css({'left':event.pageX - abs_x, 'top':event.pageY - abs_y}); 
							} 
						} 
						).mouseup( 
							function () { 
								isMove = false; 
							} 
					); 
				} 
			) 
});

