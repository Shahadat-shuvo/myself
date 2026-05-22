// Animate skill bars on scroll
  const bars = document.querySelectorAll('.bar-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const w = bar.dataset.w;
        bar.style.transform = `scaleX(${w})`;
        bar.classList.add('active');
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => observer.observe(b));

  // Fade-up sections on scroll
  const sections = document.querySelectorAll('section, .project-card, .service-card, .skill-card');
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.project-card, .service-card, .skill-card, .imp-card, .profile-badge').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    secObs.observe(el);
  });

  // Active nav link highlight
  const navLinks = document.querySelectorAll('.nav-links a');
  const allSections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    allSections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current ? 'var(--amber)' : '';
    });
  });
