$(function() {

  var open = true;
  $('#footerSlideButton').click(function () {
      $('#footerSlideContent').animate({ height: '0px' });       
      $(this).css('display', 'none');
       open = true;
  });   
});