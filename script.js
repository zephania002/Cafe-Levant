/* ===========================
   Café Levant — JavaScript
   =========================== */

// Menu category filter
const catBtns = document.querySelectorAll('.cat-btn');
const menuCards = document.querySelectorAll('.menu-card');

catBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    catBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;

    menuCards.forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Smooth active nav link highlight on scroll
const sections = document.querySelectorAll('section[id], footer');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--caramel)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => observer.observe(sec));

// Animate elements on scroll
const animateOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .review-card, .contact-row').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  animateOnScroll.observe(el);
});
