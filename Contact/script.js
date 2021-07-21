// Menu Control
const nav = document.querySelector("nav");
const burgers = document.querySelectorAll(".hamburger");
burgers.forEach((burger) => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("opened");
  });
});
const navMobileLinks = document.querySelectorAll(".nav-links-mobile a");
navMobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("opened");
  });
});
