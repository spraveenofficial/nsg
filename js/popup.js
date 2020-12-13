$('.popup-dismiss').on('mousedown', function(event) {
    $(this).closest('.popup').addClass('rotate');
  
  });
  $('.popup-dismiss').on('click', function(event) {
    $(this).closest('.popup').addClass('rotate');
  });
  $('.popup-dismiss').on('mouseup', function() {
    setTimeout(function() {
      $('.popup').addClass('abandon');
    }, 130);
  });
  
  $(".reload").on('click', function() {
    $('.popup').removeClass('rotate abandon');
  });