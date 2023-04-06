// header scroll
let header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  header.style.opacity = 1 - +window.pageYOffset / 700 + "";
});

// chevron down
$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});