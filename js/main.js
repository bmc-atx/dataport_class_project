// JS for Dataport site

$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  console.log('The distance scrolled is: ' + distanceScrolled);
  if (distanceScrolled > 80) {
    $('header').addClass('scrollBorder');
  } else {
    $('header').removeClass('scrollBorder');
  }
  });

$('#menuButton').on('click', function() {
  $('main').addClass('contentShift');
  $('.headerContent').fadeOut('350ms');
  $('.menuOpenOpacity').show();
  $('nav').addClass('open');
});

$('.closeButton').on('click', function() {
  if($('nav').hasClass('open')) {
    $('nav').removeClass('open');
    $('main').removeClass('contentShift');
    $('.headerContent').fadeIn('350ms');
    $('.menuOpenOpacity').fadeOut('350ms');
  }
});

$('.menuOpenOpacity').on('click', function() {
  if($('nav').hasClass('open')) {
    $('nav').removeClass('open');
    $('main').removeClass('contentShift');
    $('.headerContent').fadeIn('350ms');
    $('.menuOpenOpacity').fadeOut('350ms');
  }
});
