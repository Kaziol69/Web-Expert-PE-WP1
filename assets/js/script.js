const openIcon = document.querySelector(".menu-bar .open i");
const closeIcon = document.querySelector(".menu-bar .close i");
const responsiveMenu = document.querySelector("header .responsive-menu");
const openButton = document.querySelector(".menu-bar .open");
const closeButton = document.querySelector(".menu-bar .close");

function toggleActive() {
  responsiveMenu.classList.toggle('active');
  openButton.classList.toggle('active');
  closeButton.classList.toggle('active');
}

openIcon.addEventListener('click', toggleActive);
closeIcon.addEventListener('click', toggleActive);