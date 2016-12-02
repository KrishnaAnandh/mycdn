
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll >=600) {
    	$('.header').addClass( "scrolled");
    	$('.h-about').css("margin-top","65px");
    }
    if (scroll <600) {
    	$('.header').removeClass( "scrolled");
    	$('.h-about').css("margin-top","0px");
    }
    var slideY = 0.5*scroll;
    $('.h-slider').css('background-position', '0px -' + slideY + 'px');
});


$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 500);
       return false;
      }
    }
  });
});