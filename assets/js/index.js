$(function() {
  var top = $('.main-menu').offset().top - parseFloat($('.main-menu').css('marginTop').replace(/auto/, 0));
  var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

  var maxY = footTop - $('.main-menu').outerHeight();

  $(window).scroll(function(evt) {
    var y = $(this).scrollTop();
    if (y > top) {
      if (y < maxY) {
        $('.main-menu').addClass('fixed').removeAttr('style');
      } else {
        $('.main-menu').removeClass('fixed').css({
          position: 'absolute',
          top: (maxY - top) + 'px'
        });
      }
    } else {
      $('.main-menu').removeClass('fixed');
    }
  });
});

// Back to top button
(function() {
  $(document).ready(function() {
    return $(window).scroll(function() {
      return $(window).scrollTop() > 200 ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
    }), $("#back-to-top").click(function() {
      return $("html,body").animate({
        scrollTop: "0"
      })
    })
  })
}).call(this);