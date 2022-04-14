$(document).ready(function() {
	$(".expandcont").hide();
	$("#subHeadings").hide();
	$(".cell").css("height", $(".cell").width() );
	$(".row .cell").css("margin", 0.0025*$(".row").width());
});

$(window).on("load", function(){
	$("#announcements").height($("#announcements").height()-$("#announcementDemo").height());
	$(".cell").css("height", $(".cell").width() );
	$(".row .cell").css("margin", 0.0025*$(".row").width());
});

/*
$("#announcementDemo, #announcementDemo2").click(function(){
	window.open("https://chrome.google.com/webstore/detail/shopsupreme-supreme-bot/egoidoeijbfliecicioclcnhmpkbnked", "_blank")
});
*/

$(".cell").each(function() {
	var cellName = $(this).attr("class").split(" ")[1];
	$(this).click(function() {
		window.open("portfolio/"+cellName, "_self");
	});
	/*
	$(document).on("middleclick", this, function () {
		window.open("portfolio/"+cellName, "_blank");
	});
	*/
	if( /*$( window ).width() / $( window ).height() > 1.5 && */ !/Mobi|Android/i.test(navigator.userAgent)) {
		$(this).hover(function() {
			//checking if not mobile

			$(this).toggleClass("cellHovered");
			$(this).toggleClass(cellName+"Hovered");

		});
	}
});


$( window ).resize(function() {
	$(".cell").css("height", $(".cell").width() );
	$(".row .cell").css("margin", 0.0025*$(".row").width());
	
	$(".cell").each(function() {
		var cellName = $(this).attr("class").split(" ")[1];
		$(this).removeClass("cellHovered");
		$(this).removeClass(cellName+"Hovered");
	});
});

$(".expand").click(function(){
	if (typeof this.exp == 'undefined') {
		this.exp = false;
	}
	if (!this.exp){
		this.exp = true;
		$( this ).text("show less");
		$( this ).parent().find(".expandcont").show();
	}else{
		this.exp = false;
		$( this ).text("show more");
		$( this ).parent().find(".expandcont").hide();
	}
});


/*
$("#services .left-half").hover(function(){
  $( this ).animate({
    width: "75%"
  }, {duration: 500, queue: false});
  $( "#services .right-half").animate({
    width: "25%"
  }, {duration: 500, queue: false});
}, function(){
  $( this ).animate({
    width: "50%"
  }, {duration: 500, queue: false});
  $( "#services .right-half").animate({
    width: "50%"
  }, {duration: 500, queue: false});
});
  
$("#services .right-half").hover(function(){
  $( this ).animate({
    width: "75%"
  }, {duration: 500, queue: false});
  $( "#services .left-half").animate({
    width: "25%"
  }, {duration: 500, queue: false});
 }, function(){
  $( this ).animate({
    width: "50%"
  }, {duration: 500, queue: false});
  $( "#services .left-half").animate({
    width: "50%"
  }, {duration: 500, queue: false});
});
*/


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
			/*
			$("#services .container div").each(function() {
				var cellName = $(this).attr("class");
				if(isElementInViewport($(this))){
					$( this ).animate({
						height: "75%"
					}, {duration: 500, queue: false});
					
					if(cellName == "right-half"){
						$( "#services .left-half").animate({
							height: "25%"
						}, {duration: 500, queue: false});
					}else{
						$( "#services .right-half").animate({
							height: "25%"
						}, {duration: 500, queue: false});
					}
					
				}
			});
			*/
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
