$(function() {
  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });

  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
  $(".fade").click(function() {
    $("#initially-fadedin").fadeToggle();
    $("#initially-fadedout").fadeToggle();
  });
  $(".slide").click(function() {
    $("#initially-slide-up").slideToggle();
    $("#initially-slide-down").slideToggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("#text").click(function() {
    $("#text").removeClass();
    $("#text").addClass("black-background");
    $("#text").addClass("color-blue");
  });
});
