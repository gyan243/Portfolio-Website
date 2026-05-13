// Mobile menu open/close
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Menu link click hone par menu close
const navLinks = document.querySelectorAll("#menu a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("menu").classList.remove("show");
  });
});

// Smooth active navbar effect
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Simple welcome message
window.addEventListener("load", function() {
  console.log("Gyanendra Singh Portfolio Loaded Successfully ✅");
});