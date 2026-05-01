// ===== ANIMATIONS.JS =====

document.addEventListener('DOMContentLoaded', () => {
  initParallax();
  initMagneticButtons();
  initContactForm();
});

// ===== PARALLAX =====
function initParallax() {
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (!parallaxEls.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
}

// ===== MAGNETIC BUTTONS =====
function initMagneticButtons() {
  const magnets = document.querySelectorAll('.magnetic');
  magnets.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

// ===== CONTACT FORM ENHANCEMENTS =====
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  // Floating label focus states
  const inputs = form.querySelectorAll('.form-group input, .form-group textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => input.parentElement.classList.add('focused'));
    input.addEventListener('blur', () => {
      if (!input.value) input.parentElement.classList.remove('focused');
    });
  });
}