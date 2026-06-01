// ===============================
// Smooth Scroll Button
// ===============================

const scrollBtn = document.getElementById("scrollBtn");
const projects = document.getElementById("projects");

if (scrollBtn && projects) {
  scrollBtn.addEventListener("click", () => {
    projects.scrollIntoView({
      behavior: "smooth"
    });
  });
}

// ===============================
// Reveal Animation
// ===============================

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// Typing Effect
// ===============================

const typingEl = document.getElementById("typing");

if (typingEl) {

  const text =
    "Frontend Developer | Python Learner | UI/UX Enthusiast | Problem Solver";

  let index = 0;

  function typeEffect() {

    if (index < text.length) {

      typingEl.textContent += text.charAt(index);

      index++;

      setTimeout(typeEffect, 70);

    }

  }

  typeEffect();

}

// ===============================
// Mobile Menu
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });

}

// ===============================
// Close Menu On Click
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    if (navLinks) {
      navLinks.classList.remove("active");
    }

  });

});

// ===============================
// Animated Counters
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

  counters.forEach(counter => {

    const target =
      +counter.getAttribute("data-target");

    let count = 0;

    const increment = target / 100;

    const updateCounter = () => {

      if (count < target) {

        count += increment;

        counter.innerText =
          Math.ceil(count);

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText = target;

      }

    };

    updateCounter();

  });

};

const statsSection = document.querySelector(".stats");

if (statsSection) {

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          startCounter();

          observer.disconnect();

        }

      });

    },
    {
      threshold: 0.5
    }
  );

  observer.observe(statsSection);

}

// ===============================
// Scroll Progress Bar
// ===============================

const progressBar =
  document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

  if (!progressBar) return;

  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (scrollTop / scrollHeight) * 100;

  progressBar.style.width =
    progress + "%";

});

// ===============================
// Active Navbar Link
// ===============================

const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.clientHeight;

    if (
      pageYOffset >= sectionTop
      &&
      pageYOffset <
      sectionTop + sectionHeight
    ) {

      current = section.getAttribute("id");

    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      === "#" + current
    ) {

      link.classList.add("active");

    }

  });

});

// ===============================
// Hero Fade Animation
// ===============================

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});

// ===============================
// Floating Card Effect
// ===============================

const cards =
  document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const rotateX =
      (y - rect.height / 2) / 15;

    const rotateY =
      (rect.width / 2 - x) / 15;

    card.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.05)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

  });

});
