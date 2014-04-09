$(function() {
  if ($(window).width() <= 568 && $(window).width() >= 320) {

    var collapsed_height = $('.LR-header').height();
    $('.LR-header a.logo').on('click', function() {
      var header = $('.LR-header');
      if (header.height() == collapsed_height) {
        header.height('auto');
      } else {
        header.height(collapsed_height);
      }
      return false;
    });
  }
});
