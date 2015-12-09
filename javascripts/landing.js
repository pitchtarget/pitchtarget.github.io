$( document ).ready(function() {
  var robot = $('.robotcta-img');
  var mainTitle = $('#mainTitle');
  var pMainTitlesCont = $('#product').find('.main-titles-container');
  var sMainTitlesCont = $('#service').find('.main-titles-container');
  var mainTitleSpacer = mainTitle.find('.spacer');
  var vw = $(window).width();
  var vh = $(window).height();
  var topbarH = 64;

  if (mainTitle.length > 0 && vw <= 480) {
    mainTitle.css({ 'margin-top': (vh - mainTitle.outerHeight() + topbarH) / 2 + 'px' });
  }

  // if (pMainTitlesCont.length > 0 && vw <= 480) {
  //   pMainTitlesCont.css({'margin-top': (vh - pMainTitlesCont.outerHeight() + topbarH) / 2 + 'px'})
  // }
  //
  // if (sMainTitlesCont.length > 0 && vw <= 480) {
  //   sMainTitlesCont.css({'margin-top': (vh - sMainTitlesCont.outerHeight() + topbarH) / 2 + 'px'})
  // }

  if (mainTitleSpacer.length > 0) {
    var top = mainTitleSpacer.offset().top;
    robot.css({ top: top + (vw <= 992 ? 10 : 0) });
  }

  if (vw > 480) {
    $(".abp-content:gt(0)").each((i,e) => $(e).css({ top: -($(e).outerHeight() / 2) }));
  }
});
