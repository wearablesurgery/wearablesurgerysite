// Smooth scroll to technology section
document.querySelector(".primary-btn").addEventListener("click", () => {
  document.querySelector("#technology").scrollIntoView({
    behavior: "smooth"
  });
});

// Intersection Observer for animations
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

// Animate cards, stats, team, and tech items
document.querySelectorAll(".card, .stat, .team-card, .tech-list li").forEach(el => {
  el.style.transform = "translateY(40px)";
  el.style.opacity = 0;
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});
