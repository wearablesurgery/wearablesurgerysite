// Smooth scroll to Technology section when primary button is clicked
document.querySelector(".primary-btn").addEventListener("click", () => {
  document.querySelector("#technology").scrollIntoView({
    behavior: "smooth"
  });
});

// Smooth scroll for all nav links, including Contact
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Intersection Observer for fade-in/slide-up animations
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = 1;
      }
    });
  },
  { threshold: 0.15 }
);

// Animate cards, stats, team, tech items, and contact section
document.querySelectorAll(".card, .stat, .team-card, .tech-list li, #contact").forEach(el => {
  el.style.transform = "translateY(40px)";
  el.style.opacity = 0;
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});
