document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.hash !== "") {
        e.preventDefault();
        const hash = link.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  // Apply reveal class to sections and elements
  document
    .querySelectorAll(
      ".section, .project-card, .feature-card, .about-stats, .skill-card",
    )
    .forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

  // Magnetic effect for cards (Subtle follow cursor)
  const cards = document.querySelectorAll(
    ".glass-card, .feature-card, .project-card, .skill-card",
  );
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      card.style.transition = "transform 0.1s ease-out";
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.5s ease-out";
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });

  // Mobile Navbar Toggle (If needed)
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.querySelector("i").classList.toggle("fa-bars");
      menuBtn.querySelector("i").classList.toggle("fa-times");
    });
  }
});
