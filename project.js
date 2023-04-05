$(window).on("load", function () {
  $("#header").vide("./video/cover", {
    bgColor: "#908585",
  });
});

$(document).ready(function () {
  $("#checkbox").change(function () {
    $("body").toggleClass("dark");
  });
});
