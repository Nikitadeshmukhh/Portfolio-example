$(document).ready(function(){

   SVGAElement('menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
   });

   $(window).on('scroll load',function(){
    $('menu').removeClass('fa-times');
    $('header').toggleClass('toggle');

    if($(window).scrollTop()>0){
      $('.top').show();
    }else{
      $('.top').hide();
    }
   });
   //smooth scrolling
   $('a[herf*="#]').on('click',function(e){
       e.preventDefault();
       $('html,body').animate({
         scrollTop:$($(this).attr('href')).offset().top,
       }, 500, 'linear'
       );
   });
});