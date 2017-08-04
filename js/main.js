$('#menuButton').on('click', function() {
  $('main').addClass('contentShift');
  $('.headerContent').addClass('contentShift');
  $('.menuOpenOpacity').show();
  $('nav').removeClass('sidebar');
});
$('.closeButton').on('click', function() {
  $('main').removeClass('contentShift');
  $('.headerContent').removeClass('contentShift');
  $('.menuOpenOpacity').fadeOut('350ms');
  $('nav').addClass('sidebar');
})
