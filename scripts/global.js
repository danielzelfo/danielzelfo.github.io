var dirup = true, dirdown = true, clickedA = false;
//var oldScroll = window.scrollY;

$(document).ready(function(){
	if($(window).width() > $(window).height()){
		$("#loading").css({
			width: "75vh",
			height: "75vh"
		});
	} else {
		$("#loading").css({
			width: "75vw",
			height: "75vw"
		});
	}
	
	if(typeof(Storage) !== "undefined") {
		if (localStorage.theme){
			$('#toggle--push--glow').prop( "checked", (localStorage.theme == "light") );
			$("body").addClass(localStorage.theme);
		}
		
	}
	
	$("header a").click(function(){
		clickedA = true;
		hideHeader();
		setTimeout(function(){
			clickedA = false;
		}, 1500);
	});
	
	$('#toggle--push--glow').change(function(){
		
		if($("body").hasClass("dark")){
			$("body").removeClass("dark");
			$("body").addClass("light");
		}else{
			$("body").removeClass("light");
			$("body").addClass("dark");
		}
		if(typeof(Storage) !== "undefined") {
			localStorage.theme = (($('#toggle--push--glow').is(":checked")) ? 'light' : 'dark');
		}
	});
});



$(window).on("load", function(){
	$("header").css("width", $("footer").css("width"));
	$("#loader").hide();

});

$( window ).resize(function() {
	$("header").css("width", $("footer").css("width"));
});



$( document ).on("scroll", function(){
	
	if(this.oldScroll > window.scrollY){
		if (dirdown && !clickedA && !$("header").is(':animated') && $("header").css("top") != "0px"){
			showHeader();
		}
	}else{
		if (dirup && !clickedA && !$("header").is(':animated') && $("header").css("top") == "0px"){
			hideHeader();
		}
	}
	this.oldScroll = window.scrollY;
	if($(window).scrollTop() == 0 && $("header").css("top") != "0px"){
		showHeader();
	}
});



function hideHeader(){
	$("header").animate({
		top: '-110px',
		opacity: '0'
	}, 1000);
	dirup = false;
	dirdown = true;
}
function showHeader(){
	$("header").animate({
		top: '0',
		opacity: '1'
	}, 1000);
	dirup = true;
	dirdown = false;
}
/*
$(document).on("mousedown", function (e1) {
  if (e1.which === 2) {
    $(document).one("mouseup", function (e2) {
      if (e1.target === e2.target) {
        var e3 = $.event.fix(e2);
        e3.type = "middleclick";
        $(e2.target).trigger(e3);
      }
    });
  }
}); 
*/



