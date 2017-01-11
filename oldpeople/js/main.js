var winWidth,winHeight;//窗口大小
var pageNum=8;//页码总数
var pageNow=0;//当前页码数;
var voteallLeft=2003;//遇到过的投票数
var voteallRight=2002;//没有遇到过的投票数
//初始化函数
$(function(){
	getWindowSize();
	$(".oldpeople-wrap").css({
		"height":winHeight
	});
	$(".plusvoteall.left").click(function(){
		votingLeft();
	})
	$(".plusvoteall.right").click(function(){
		votingRight();
	})
	$(".top").click(function(){
		  moveUp();
	})
	$(".buttom").click(function(){
		 moveDown();
	})
	setInterval(function(){
		$(".plusvoteall .plusvoteitem").removeClass('page_moveVote');
	},1000);
	topArrow();
})
//键盘事件
$(document).keydown( function( event ){
    event.preventDefault();
    switch( event.keyCode ){
        case 38: //up
            moveUp();
            break;
        case 40: //down
            moveDown();
            break;
        default: //default
            break;
    }
})
//投票函数
function votingLeft(){
	voteallLeft++;
	$(".plusvoteall.left .plusvotecount").text(voteallLeft);
	$(".plusvoteall.left .plusvoteitem").addClass('page_moveVote');
}
//投票函数
function votingRight(){
	voteallRight++;
	$(".plusvoteall.right .plusvotecount").text(voteallLeft);
	$(".plusvoteall.right .plusvoteitem").addClass('page_moveVote');
}
//向上翻页函数
function moveUp(){
	$(".oldpeople-li").eq(pageNow).addClass("none");
	if (pageNow>0){
		pageNow--;
	}
	topArrow();
	console.log(pageNow);
	$(".oldpeople-li").eq(pageNow).removeClass("none");
}
//向下翻页函数
function moveDown(){
	$(".oldpeople-li").eq(pageNow).addClass("none");
	if (pageNow<pageNum-1) {
		pageNow++;
	}else{
		pageNow=0;
	}
	topArrow();
	console.log(pageNow);
	$(".oldpeople-li").eq(pageNow).removeClass("none");
}
//方上翻页箭头显示函数
function topArrow(){
	if(pageNow==0){
		$(".top").stop().hide();
	}else{
		$(".top").show();
	}
}
//获取窗口大小函数
function getWindowSize(){
//获取窗口宽度
if (window.innerWidth){
	 winWidth = window.innerWidth;
	}
else if ((document.body) && (document.body.clientWidth)){
	 winWidth = document.body.clientWidth;
	}
//获取窗口高度
if (window.innerHeight){
	 winHeight = window.innerHeight;
	}
else if ((document.body) && (document.body.clientHeight)){
	 winHeight = document.body.clientHeight;
	}
//通过深入Document内部对body进行检测，获取窗口大小
if (document.documentElement  && document.documentElement.clientHeight &&document.documentElement.clientWidth){
   winHeight = document.documentElement.clientHeight;
   winWidth = document.documentElement.clientWidth;
	}
}

