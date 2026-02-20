// Scroll to projects
document.getElementById("scrollBtn").addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// Reveal on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Typing effect
const text = "Student | Frontend Web Developer | UI Enthusiast";
let index = 0;
const typingEl = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});