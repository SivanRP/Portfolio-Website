document.addEventListener("DOMContentLoaded", () => {
  // Add event listener for the hamburger icon
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  hamburgerIcon.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
