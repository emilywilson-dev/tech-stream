//dropdown nav
const navToggle = document.getElementById("nav-toggle");

const dropdownNav = document.getElementById("dropdown-nav");

navToggle.addEventListener("click", () => {
  dropdownNav.classList.toggle("show");
});

//active nav link
const navLinks = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if(link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});