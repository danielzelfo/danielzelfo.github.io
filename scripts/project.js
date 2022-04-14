//slideshow script
var n = 0;
var max = $("#slideshow .content img").length;
var autoNext = true;
var slideAnimLen = 100;

$(window).on("load", function(){
	window.scrollTo(0, 0);
	
	$("#slideshow .content img:not(:nth-child(1))").css("display", "none");
	let tempsrc = $("#slideshow .content img:nth-child(1)").attr("src");
    $("#slideshow .content img:nth-child(1)").attr("src", "").attr("src", tempsrc);
	$("#slideshow .content img:nth-child(1)").css("display", "block");
	
	autoSlide();
});

$("#slideshow .next").click(function(){
  autoNext = false;
  n = (n+1)%max;
  display();
});

$("#slideshow .previous").click(function(){
  autoNext = false;
  if(n == 0)
	n = max-1;
  else
	n--;
  display();
});

function display(){
  $("#slideshow .content").fadeTo(slideAnimLen/2, .5, function() {
  
    $("#slideshow .content img:not(:nth-child("+(n+1)+"))").css("display", "none");
    let tempsrc = $("#slideshow .content img:nth-child("+(n+1)+")").attr("src");
    $("#slideshow .content img:nth-child("+(n+1)+")").attr("src", "").attr("src", tempsrc);
    $("#slideshow .content img:nth-child("+(n+1)+")").css("display", "block");
    
    $("#slideshow .content").fadeTo(slideAnimLen/2, 1);
	
   });
}

function autoSlide() {
	if(!autoNext)
		return;
	let $currentImg = $("#slideshow .content img:nth-child("+((n+1)%max+1)+")");
	let time = 5000;
	let attr = $currentImg.attr("data-time");
	if (typeof attr !== typeof undefined && attr !== false && !isNaN(attr))
		time = parseInt(attr) + slideAnimLen/2;
	n = (n+1)%max;
	
	setTimeout(function(){
		display();
		autoSlide();
	}, time);
}