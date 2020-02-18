$(function() {
  $("#navi-btn").click(function(){
    if (!$("#navi-btn").hasClass("navi-btn-on")) {
      $("#navi-btn").addClass("navi-btn-on");
      $("#navi-btn p").text("CLOSE");
      $("#navi-menu").fadeIn();
    } else {
      $("#navi-btn").removeClass("navi-btn-on")
      $("#navi-btn p").text("MENU");
      $("#navi-menu").fadeOut();
    }
  });
});
