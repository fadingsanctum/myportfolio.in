// ===== PROJECTS.JS =====

document.addEventListener('DOMContentLoaded', () => {
  initProjectFilter();
  initProjectCardLinks();
});

// ===== FILTER =====
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });

  // Hover shimmer cursor coords
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });
}

// ===== PDP CARD LINKS =====
// Maps data-category + title to a project id.
// The data-pdp-id attribute on each .project-card is the cleanest approach —
// add data-pdp-id="oxyprime" etc. to each card in projects.html.
// If data-pdp-id is missing, we do a best-effort slug from the title.

function initProjectCardLinks() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const id = card.getAttribute('data-pdp-id');
    if (!id) return;

    const pdpUrl = `project-detail.html?id=${id}`;

    // Make the title clickable
    const title = card.querySelector('.project-title');
    if (title) {
      title.style.cursor = 'pointer';
      title.addEventListener('click', () => navigateToPDP(pdpUrl));
    }

    // Leave the Netlify overlay button as-is (href set in HTML)

    // Make the entire card image area clickable
    const cardImg = card.querySelector('.project-card-img');
    if (cardImg) {
      cardImg.style.cursor = 'pointer';
      cardImg.addEventListener('click', (e) => {
        // Don't intercept the GitHub/Netlify link if clicked directly
        if (e.target.closest('.overlay-btn')) return;
        navigateToPDP(pdpUrl);
      });
    }

    // Add a "Case Study →" link to the card body
    const body = card.querySelector('.project-card-body');
    if (body && !body.querySelector('.pdp-card-cta')) {
      const cta = document.createElement('a');
      cta.href = pdpUrl;
      cta.className = 'pdp-card-cta';
      cta.innerHTML = `<span>Case Study</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
      body.appendChild(cta);
    }
  });
}

function navigateToPDP(url) {
  // Trigger page transition overlay if it exists (matches existing nav transitions)
  const overlay = document.querySelector('.page-transition-overlay');
  if (overlay) {
    overlay.classList.add('active');
    setTimeout(() => { window.location.href = url; }, 380);
  } else {
    window.location.href = url;
  }
}