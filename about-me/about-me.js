let sidebarHidden = document.querySelector(".sidebar-hidden");

function burgerMenu(icon) {
  icon.classList.toggle("change");
  sidebarHidden.classList.toggle("sidebar-hidden");
}
