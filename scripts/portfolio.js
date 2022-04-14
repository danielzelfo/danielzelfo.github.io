$(document).ready(function() {
	$(".cell").css("height", $(".cell").width() );
	$(".row .cell").css("margin", 0.005*$(".row").width());
});

$(window).on("load", function(){
	$(".cell").css("height", $(".cell").width() );
	$(".row .cell").css("margin", 0.005*$(".row").width());
});


$(".cell").each(function() {
	var cellName = $(this).attr("class").split(" ")[1];
	$(this).click(function() {
		if(!$(this).hasClass("dummy")){
			window.open("portfolio/"+cellName, "_self");
		}
	});
	/*
	$(document).on("middleclick", this, function (e) {
		e.preventDefault();
		window.open("portfolio/"+cellName, "_blank");
	});
	*/
	if( /*$( window ).width() / $( window ).height() > 1.5 && */ !/Mobi|Android/i.test(navigator.userAgent) && !$(this).hasClass("dummy")) {
		$(this).hover(function() {
			//checking if not mobile

			$(this).toggleClass("cellHovered");
			$(this).toggleClass(cellName+"Hovered");

		});
	}
});


$( window ).resize(function() {
	$(".cell").css("height", $(".cell").width() );
	$(".row .cell").css("margin", 0.005*$(".row").width());
	
	$(".cell").each(function() {
		var cellName = $(this).attr("class").split(" ")[1];
		$(this).removeClass("cellHovered");
		$(this).removeClass(cellName+"Hovered");
	});
});


$(window).on('DOMContentLoaded load scroll', function(){
	//checking if mobile in portrait
	if($( window ).width() / $( window ).height() <= 1.5 && /Mobi|Android/i.test(navigator.userAgent)) {
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			$(".cell").each(function() {
				var cellName = $(this).attr("class").split(" ")[1];
				if(isElementInViewport($(this))){
					
					$(this).addClass("cellHovered");
					$(this).addClass(cellName+"Hovered");
				}else{
					$(this).removeClass("cellHovered");
					$(this).removeClass(cellName+"Hovered");
				}
			});
		}, 1000));
	}
});


function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}
