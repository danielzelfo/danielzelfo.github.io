var x = 50, oldscroll = 0, y = 50;
$( document ).ready(function(){
  $( this ).on("scroll", function(){
    x += scrollSide($(this).scrollTop());
    oldscroll = $(this).scrollTop();
    $( "body" ).css("background-position", x + "px 50%");
  })
})

function scrollSide(x){
    if(x < oldscroll){
       return -5;
    }else{
       return 5;
    }
}