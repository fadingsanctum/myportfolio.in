// ===== PROJECT-DETAIL.JS =====
// Reads ?id= from the URL, finds the project in PROJECTS[], and renders the PDP.

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');

  if (!projectId) {
    redirectToProjects();
    return;
  }

  const project = getProjectById(projectId);
  if (!project) {
    redirectToProjects();
    return;
  }

  renderPDP(project);
  initPDPAnimations(project);
  renderAdjacentNav(projectId);
});

// ===== REDIRECT =====
function redirectToProjects() {
  window.location.href = 'projects.html';
}

// ===== RENDER =====
function renderPDP(p) {
  // Tab title
  document.title = `${p.title} — SHAIK MUZAMMIL`;

  // Hero visual — show first project image if available, else fall back to gradient + SVG icon
  const heroVisual = document.getElementById('pdp-hero-visual');
  const iconEl = document.getElementById('pdp-icon');
  const firstImg = p.images && p.images.length > 0 && p.images[0].src ? p.images[0].src : '';

  if (heroVisual) {
    if (firstImg) {
      // Replace inner content with a full-bleed image
      heroVisual.style.background = 'none';
      heroVisual.style.padding = '0';
      heroVisual.style.overflow = 'hidden';
      heroVisual.innerHTML = `<img src="${firstImg}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;" />`;
    } else {
      heroVisual.style.background = p.gradient;
      if (iconEl) iconEl.innerHTML = p.svgIcon;
    }
  }

  // Meta text
  setInner('pdp-title', p.title);
  setInner('pdp-tagline', p.tagline);
  setInner('pdp-category', p.category);
  setInner('pdp-year', p.year);
  setInner('pdp-status', p.status);

  // Accent color via CSS var
  document.documentElement.style.setProperty('--pdp-accent', p.accentColor);

  // Tags
  const tagsEl = document.getElementById('pdp-tags');
  if (tagsEl) {
    tagsEl.innerHTML = p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
  }

  // CTA links
  const netlifyBtn = document.getElementById('pdp-netlify-btn');
  const ghBtn      = document.getElementById('pdp-github-btn');
  if (netlifyBtn) { netlifyBtn.href = p.netlifyUrl; if (p.netlifyUrl === '#') netlifyBtn.classList.add('btn-disabled'); }

  // Hide GitHub button for Soul Library projects (no public repo)
  const noGithubProjects = ['soul-library', 'soul-dash'];
  if (ghBtn) {
    if (noGithubProjects.includes(p.id) || !p.githubUrl) {
      ghBtn.style.display = 'none';
    } else {
      ghBtn.href = p.githubUrl;
      if (p.githubUrl === '#') ghBtn.classList.add('btn-disabled');
    }
  }

  // Long-form text
  setInner('pdp-overview',   p.overview);
  setInner('pdp-challenge',  p.challenge);
  setInner('pdp-solution',   p.solution);

  // Features list
  const featEl = document.getElementById('pdp-features');
  if (featEl) {
    featEl.innerHTML = p.features.map(f => `
      <li class="feature-item">
        <span class="feature-check">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <span>${f}</span>
      </li>`).join('');
  }

  // Slideshow
  renderSlideshow(p);
}

// ===== SLIDESHOW =====
function renderSlideshow(p) {
  const screensEl = document.getElementById('pdp-screens');
  if (!screensEl) return;

  const slides = (p.images && p.images.length > 0)
    ? p.images
    : [
        { src: '', label: 'Hero / Landing' },
        { src: '', label: 'Core Feature' },
        { src: '', label: 'Detail View' }
      ];

  const total = slides.length;

  // Build the slideshow HTML
  screensEl.innerHTML = `
    <div class="slideshow" id="pdp-slideshow">

      <!-- Main slide display -->
      <div class="slideshow-stage">
        <div class="slideshow-track" id="ss-track">
          ${slides.map((s, i) => {
            const hasImg = s.src && s.src.trim() !== '';
            return `
            <div class="ss-slide" data-index="${i}">
              ${hasImg
                ? `<img src="${s.src}" alt="${s.label}" class="ss-img" loading="lazy" />`
                : `<div class="ss-placeholder" style="background:${p.gradient};">
                     <div class="ss-placeholder-icon">${p.svgIcon}</div>
                     <div class="ss-placeholder-dots"><span></span><span></span><span></span></div>
                   </div>`
              }
              <div class="ss-slide-label">${s.label}</div>
            </div>`;
          }).join('')}
        </div>

        <!-- Prev / Next arrows -->
        <button class="ss-arrow ss-arrow-prev" id="ss-prev" aria-label="Previous image">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4l-6 6 6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button class="ss-arrow ss-arrow-next" id="ss-next" aria-label="Next image">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>

        <!-- Counter badge -->
        <div class="ss-counter" id="ss-counter">1 / ${total}</div>
      </div>

      <!-- Dot indicators -->
      <div class="ss-dots" id="ss-dots">
        ${slides.map((_, i) => `<button class="ss-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`).join('')}
      </div>

      <!-- Thumbnail strip (only show if 2+ slides) -->
      ${total > 1 ? `
      <div class="ss-thumbs" id="ss-thumbs">
        ${slides.map((s, i) => {
          const hasImg = s.src && s.src.trim() !== '';
          return `
          <button class="ss-thumb${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="${s.label}">
            ${hasImg
              ? `<img src="${s.src}" alt="${s.label}" />`
              : `<div class="ss-thumb-placeholder" style="background:${p.gradient};">${p.svgIcon}</div>`
            }
            <span>${s.label}</span>
          </button>`;
        }).join('')}
      </div>` : ''}

    </div>
  `;

  // Initialise interactive behaviour
  initSlideshowBehaviour(total);
}

function initSlideshowBehaviour(total) {
  let current = 0;

  const track   = document.getElementById('ss-track');
  const prevBtn = document.getElementById('ss-prev');
  const nextBtn = document.getElementById('ss-next');
  const counter = document.getElementById('ss-counter');
  const dots    = document.querySelectorAll('.ss-dot');
  const thumbs  = document.querySelectorAll('.ss-thumb');
  const slides  = document.querySelectorAll('.ss-slide');

  if (!track) return;

  function goTo(index) {
    // Clamp and wrap
    index = ((index % total) + total) % total;

    // Slide
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
      s.classList.toggle('prev',   i === (index - 1 + total) % total && total > 1);
    });

    // Dots
    dots.forEach((d, i) => d.classList.toggle('active', i === index));

    // Thumbs
    thumbs.forEach((t, i) => {
      t.classList.toggle('active', i === index);
      if (i === index) t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });

    // Counter
    if (counter) counter.textContent = `${index + 1} / ${total}`;

    current = index;

    // Arrow visibility — always shown but dim at ends (wrapping so keep them visible)
    if (prevBtn) prevBtn.style.opacity = total <= 1 ? '0' : '1';
    if (nextBtn) nextBtn.style.opacity = total <= 1 ? '0' : '1';
  }

  // Activate first slide
  goTo(0);

  // Buttons
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  // Dots
  dots.forEach(dot => dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index))));

  // Thumbs
  thumbs.forEach(t => t.addEventListener('click', () => goTo(parseInt(t.dataset.index))));

  // Keyboard navigation when hovering the slideshow
  const slideshow = document.getElementById('pdp-slideshow');
  if (slideshow) {
    slideshow.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft')  goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    });
    slideshow.setAttribute('tabindex', '0');
  }

  // Touch / swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) goTo(delta > 0 ? current + 1 : current - 1);
  }, { passive: true });
}

// ===== ADJACENT NAV =====
function renderAdjacentNav(id) {
  const { prev, next } = getAdjacentProjects(id);

  const prevEl = document.getElementById('pdp-prev');
  const nextEl = document.getElementById('pdp-next');

  if (prevEl && prev) {
    prevEl.href = `project-detail.html?id=${prev.id}`;
    const label = prevEl.querySelector('.adj-title');
    if (label) label.textContent = prev.title;
  }
  if (nextEl && next) {
    nextEl.href = `project-detail.html?id=${next.id}`;
    const label = nextEl.querySelector('.adj-title');
    if (label) label.textContent = next.title;
  }
}

// ===== HELPERS =====
function setInner(id, html) {
  const el = document.getElementById(id);
  if (el) el.textContent = html;
}

// ===== PDP ANIMATIONS =====
function initPDPAnimations(p) {
  // Reveal sections on scroll (reuses global initRevealAnimations from main.js)
  // Timeline items
  const timelineItems = document.querySelectorAll('.pdp-timeline-item');
  if (timelineItems.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 100);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    timelineItems.forEach(el => obs.observe(el));
  }

  // Accent color animation for hero
  const hero = document.getElementById('pdp-hero-visual');
  if (hero) {
    hero.style.setProperty('--accent', p.accentColor);
  }
}