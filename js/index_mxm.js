/**
 * 作者:漫小猫
 * QQ:2535080855
 * 博客:www.lxbkw.com
 * 说明:请尊重作者的劳动成果。
 */
		function an(){
			var s=0;
			var myVar=setInterval(function(){
				s--;
//				console.log(s);
				if(s==-55){
					clearInterval(myVar);
				}else{
					$("#tx").hide(1000);
					$("#an").hide(1000);
					zt(s);
					yt(s);
				}
			},66);
		}
		function zt($i){
			var zt=$("#zt");
			zt.css("left",$i+"%");
		}
		function yt($i){
			var yt=$("#yt");
			yt.css("right",$i+"%");
		}