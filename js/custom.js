/* parallax*/
$(window).scroll(function(){
   var st =$(this).scrollTop();
    $(".header img").css({
       "transform" : "translate(0%, " + st/50 + "%"
    });
});


/* load*/



/* placeholder*/
$(function () {
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });
});
/* pop-up*/
$(document).ready(function() {
  $('#myModal').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });
});    