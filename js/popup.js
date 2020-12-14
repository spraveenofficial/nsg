$(document).ready(function() {
  $("#ad-pop-txt").removeClass("hidden");
  $("#close-popup").click(function() {
    $("#ad-pop-txt").addClass("min");
    $(this).hide();
  });
});