let show_modal = document.querySelector("[data-show]");
let modal = document.querySelector("[data-modal]");
let cancel = document.querySelector(".button-cancel");

show_modal.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

cancel.addEventListener("click", function () {
  modal.classList.add("hidden");
});
