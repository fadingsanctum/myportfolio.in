// ===== PROJECT DATA STORE =====
// Central source of truth for all project details.
// To add/edit a project: modify this array. The PDP renders from this data.

const PROJECTS = [
  {
    id: "oxyprime",
    title: "OXYPRIME",
    tagline: "Satirical SaaS for premium oxygen subscriptions.",
    category: "Web App",
    year: "2026",
    status: "Live",
    gradient: "linear-gradient(135deg,#0d1b2a,#1b2d3e,#0a1420)",
    accentColor: "#5BA4CF",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://fadingsanctum.github.io/oxyprime.app/",
    netlifyUrl: "https://oxyprime-in.netlify.app/",
    overview: "OXYPRIME is an interactive, satirical SaaS landing page for a premium oxygen subscription service. It features multi-tier pricing, dynamic user-engagement metrics, and a fully simulated fulfillment workflow — all presented with the same polish and straight face as a real enterprise product. The joke is the premise; the execution is completely genuine.",
    challenge: "Making something intentionally absurd feel genuinely premium. Every detail — the copy, the pricing psychology, the fake testimonials, the delivery metrics — had to be convincing enough for the satire to land as a knowing wink rather than an obvious gag. If it looks cheap, the joke doesn't work.",
    solution: "I leaned fully into authentic SaaS design patterns: a hero section with a clear value proposition, social proof rows, a pricing comparison table, and a step-by-step fulfillment workflow explainer. The humor lives entirely in the content, not in the design — which makes the contrast far sharper and more effective.",
    features: [
      "Multi-tier subscription pricing with plan toggle",
      "Dynamic real-time oxygen delivery metrics display",
      "Simulated fulfillment tracking dashboard",
      "Animated testimonial carousel with fake reviews",
      "Mobile-first fully responsive layout"
    ],
    mockColors: ["#0d1b2a", "#1b2d3e", "#5BA4CF", "#E8C97A"],
    svgIcon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="10" y="10" width="60" height="60" rx="10" stroke="#5BA4CF" stroke-width="1.5"/><path d="M24 40h32M24 28h20M24 52h26" stroke="#5BA4CF" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    images: [
      { src: "images/oxy.png", label: "Hero / Landing" },
      { src: "images/oxy1.png", label: "Pricing Plans" },
      { src: "images/oxy2.png", label: "Delivery Dashboard" },
      { src: "images/oxy4.png", label: "Delivery Process" },
      { src: "images/oxy5.png", label: "Delivery Done" }
      
    ]
  },
  {
    id: "soul-tech",
    title: "SOUL TECH",
    tagline: "Parody luxury tech ecosystem with mock-utility tools.",
    category: "Web App",
    year: "2026",
    status: "Live",
    gradient: "linear-gradient(135deg,#1a0a2e,#2d1b69,#11024d)",
    accentColor: "#A78BFA",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://fadingsanctum.github.io/soultech.in/",
    netlifyUrl: "https://soultech-in.netlify.app/",
    overview: "SOUL TECH is a sophisticated, multi-page satirical web application that parodies the luxury tech ecosystem. It features interactive mock-utility tools — all wrapped in a genuinely premium UI that blurs the line between parody and product. Each tool feels real enough to use before you register what it actually does.",
    challenge: "Multi-page satirical apps require real architectural planning. The challenge was making each tool feel genuinely interactive and useful so the satire hits harder when you realize what you've spent 10 minutes configuring. A broken or toy-like tool kills the joke instantly.",
    solution: "Each mock tool is fully functional with real state management. The humor lives exclusively in the product descriptions and pricing, not in broken functionality. That discipline — making every interaction actually work — is what makes the parody land.",
    features: [
      "Multiple fully interactive mock-utility tool pages",
      "Cross-page state persistence between tools",
      "Premium product configurator interfaces",
      "Luxury editorial design language throughout",
      "Multi-page routing architecture"
    ],
    mockColors: ["#1a0a2e", "#2d1b69", "#A78BFA", "#E8C97A"],
    svgIcon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="28" stroke="#A78BFA" stroke-width="1.5"/><path d="M40 12v56M12 40h56" stroke="#A78BFA" stroke-width="1.5"/><circle cx="40" cy="40" r="10" fill="#A78BFA" opacity="0.2"/></svg>`,
    images: [
      { src: "images/tech.png", label: "Product Landing" },
      { src: "images/tech1.png", label: "Our Reviewers" },
      { src: "images/tech2.png", label: "The Keyboard" },
      { src: "images/tech3.png", label: "The Mug" },
      { src: "images/tech4.png", label: "The Homework Generator" },
    ]
  },
  {
    id: "soul-library",
    title: "SOUL LIBRARY v1.0",
    tagline: "Basic digital library and manga reading platform.",
    category: "Web App",
    year: "2025",
    status: "Live",
    gradient: "linear-gradient(135deg,#0a1a0e,#1a3a1e,#0f2d15)",
    accentColor: "#4ADE80",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: null,
    netlifyUrl: "https://soullibrary-app.netlify.app/",
    overview: "SOUL LIBRARY v1.0 is a digital library and manga reading platform featuring a classic catalog interface and adaptive synchronization. It was my first serious attempt at building something that felt like a real product — a clean, browsable platform where the focus stays entirely on the content.",
    challenge: "Getting catalog browsing, page navigation, and a clean reading layout to all work together cohesively without any framework required careful planning of the DOM structure and state management from scratch.",
    solution: "I kept the architecture simple and intentional: a catalog page, a reader view, and smooth transitions between them. Adaptive synchronization keeps the reader in sync with your last position. Every design decision was made to minimize distraction and keep the reading experience front and center.",
    features: [
      "Classic library catalog browsing interface",
      "Manga and book reader view with page navigation",
      "Adaptive reading position synchronization",
      "Clean, distraction-free reading layout",
      "Built with pure HTML, CSS, and JavaScript"
    ],
    mockColors: ["#0a1a0e", "#1a3a1e", "#4ADE80", "#E8C97A"],
    svgIcon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M14 62L32 18l14 28 10-14 18 30H14Z" stroke="#4ADE80" stroke-width="1.5" stroke-linejoin="round"/><circle cx="58" cy="22" r="7" stroke="#4ADE80" stroke-width="1.5"/></svg>`,
    images: [
      { src: "images/library v1.png", label: "The Home Page" },
      { src: "images/library v11.png", label: "The Chapter List" },
      { src: "images/library v12.png", label: "The Reading Experience" }
    ]
  },
  {
    id: "soul-canvas",
    title: "HOLLOW PURPLE SIMULATOR",
    tagline: "Cinematic multi-stage interactive visual experience.",
    category: "Web App",
    year: "2026",
    status: "Live",
    gradient: "linear-gradient(135deg,#1a0a1e,#2d0a2b,#12081a)",
    accentColor: "#C084FC",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://fadingsanctum.github.io/hollowpurplesim.app/",
    netlifyUrl: "https://hollowpurplesim-app.netlify.app/",
    overview: "Hollow Purple Simulator is a cinematic, high-fidelity web simulator built around advanced CSS animations and JavaScript-driven event synchronization. It delivers an immersive, multi-stage interactive visual experience inside a responsive glassmorphic interface — recreating the iconic Hollow Purple technique from Jujutsu Kaisen as an in-browser event.",
    challenge: "Choreographing a convincing multi-stage cinematic sequence entirely in the browser without any video assets. Each stage — the orb charge, the convergence, the blast — needed to feel visually weighty and precisely timed, while staying responsive and running smoothly across all devices.",
    solution: "Built a JavaScript event timeline that fires CSS animation triggers in precise sequence. Glassmorphic UI layers add depth without hurting performance. All visual effects — the glow buildup, the purple burst, the shockwave ripple — are pure CSS keyframe animations orchestrated by a central JS sequencer.",
    features: [
      "Multi-stage cinematic animation sequence",
      "Advanced CSS keyframe animation choreography",
      "JavaScript-driven event synchronization timeline",
      "Responsive glassmorphic interface design",
      "Interactive trigger system for the full sequence"
    ],
    mockColors: ["#1a0a1e", "#2d0a2b", "#C084FC", "#E8C97A"],
    svgIcon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="26" stroke="#C084FC" stroke-width="1.5" stroke-dasharray="6 4"/><path d="M20 54c5-10 15-20 20-14s6 18 14 14" stroke="#C084FC" stroke-width="1.5" stroke-linecap="round"/><circle cx="34" cy="30" r="4" fill="#C084FC" opacity="0.4"/></svg>`,
    images: [
      { src: "images/purple.png", label: "Simulator View" },
      { src: "images/purple1.png", label: "Charge Phase" },
      { src: "images/purple2.png", label: "Blast Sequence" }
    ]
  },
  {
    id: "soul-dash",
    title: "SOUL LIBRARY v2.0",
    tagline: "Professional digital library and e-reading platform.",
    category: "Web App",
    year: "2026",
    status: "Live",
    gradient: "linear-gradient(135deg,#0a0e1a,#0e1428,#080c18)",
    accentColor: "#38BDF8",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: null,
    netlifyUrl: "https://soullibrary-v2.netlify.app/",
    overview: "SOUL LIBRARY v2.0 is a professional, feature-rich digital library and e-reading platform — a complete rebuild of v1.0. It features a modern catalog interface, adaptive theme synchronization that shifts based on the current book's cover art, reading progress tracking, and a proper distraction-free reader mode.",
    challenge: "Upgrading from a basic platform to something genuinely premium. The adaptive theming system — where the entire UI responds to each book's cover colors — required figuring out image color extraction entirely in the browser, then feeding those values into the live interface without any visual jarring.",
    solution: "A canvas-based color extraction pipeline analyzes cover art on load and generates a cohesive UI palette from it. CSS custom properties cascade the extracted colors through every component, so the interface visually breathes with each title you open. The reader mode strips everything non-essential away.",
    features: [
      "Adaptive UI color theming derived from book cover art",
      "Distraction-free full-screen reader mode",
      "Reading progress tracking across titles",
      "Modern catalog interface with search and filter",
      "Bookmarks and reading position persistence"
    ],
    mockColors: ["#0a0e1a", "#0e1428", "#38BDF8", "#E8C97A"],
    svgIcon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="10" y="10" width="60" height="60" rx="8" stroke="#38BDF8" stroke-width="1.5"/><path d="M22 52l12-16 10 10 8-12 10 18" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="22" y="22" width="12" height="10" rx="2" stroke="#38BDF8" stroke-width="1.2" opacity="0.5"/></svg>`,
    images: [
      { src: "images/library v2.png", label: "The Interface" },
      { src: "images/library v21.png", label: "The Chapter list" },
      { src: "images/library v22.png", label: "The experience" }
    ]
  },
  {
    id: "peace-simulator",
    title: "PEACE SIMULATOR v1.0",
    tagline: "Digital sanctuary fusing ambient worlds with a music ecosystem.",
    category: "Web App",
    year: "2026",
    status: "Live",
    gradient: "linear-gradient(135deg,#080e1a,#0e1820,#060c14)",
    accentColor: "#67E8F9",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://fadingsanctum.github.io/peacesim.v1/",
    netlifyUrl: "https://peacesim-v1.netlify.app/",
    overview: "Peace Life is a sophisticated digital sanctuary that fuses high-fidelity ambient visual worlds with a feature-rich, personalized music ecosystem designed for emotional resonance. Users cycle through 8 hand-crafted environments — from forest rain to deep ocean — each paired with a curated generative soundscape that responds to time of day and mood.",
    challenge: "Sound and visuals are easy to combine badly. The challenge was making each environment feel like a genuine emotional space — not a stock video loop with lo-fi beats dropped on top — but a fully cohesive world that users would actually return to when they need focus, sleep, or calm.",
    solution: "Designed a visual language system where each environment has a distinct color story, motion vocabulary, and audio texture. The generative soundscapes are built from layered stems that respond to time of day and user mood input, so no two sessions sound exactly the same.",
    features: [
      "8 hand-crafted ambient visual environments",
      "Generative soundscape engine per environment",
      "Time-of-day adaptive lighting transitions",
      "Mood-based session personalization",
      "Focus, sleep, and meditate modes"
    ],
    mockColors: ["#080e1a", "#0e1820", "#67E8F9", "#E8C97A"],
    svgIcon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M10 50s10-30 30-30 30 30 30 30" stroke="#67E8F9" stroke-width="1.5" stroke-linecap="round"/><path d="M20 60s6-16 20-16 20 16 20 16" stroke="#67E8F9" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><circle cx="40" cy="28" r="6" stroke="#67E8F9" stroke-width="1.5"/></svg>`,
    images: [
      { src: "images/peace.png", label: "The World Selection" },
      { src: "images/peace1.png", label: "The Visual Peace" },
      { src: "images/peace2.png", label: "Soundscape Peace" }
    ]
  },
  {
    id: "soul-gen",
    title: "SOUL GEN",
    tagline: "Typography engine: 52 Unicode styles, real-time.",
    category: "Experimental",
    year: "2026",
    status: "Live",
    gradient: "linear-gradient(135deg,#1a080a,#3a1015,#2a0810)",
    accentColor: "#FB923C",
    tags: ["Vanilla JavaScript", "Unicode", "CSS"],
    liveUrl: "#",
    githubUrl: "https://fadingsanctum.github.io/soulgen.app/",
    netlifyUrl: "https://soulgen-in.netlify.app/",
    overview: "SOULGEN is a high-end typography engine that uses a custom vanilla JavaScript TextEngine to instantly transform any input text into 52 unique Unicode styles. It features real-time search across all style names, one-click copy to clipboard, batch export, and a full style preview gallery — with zero framework dependencies.",
    challenge: "Unicode style conversion sounds simple but is deceptively tricky. Many character ranges have gaps, combining marks behave unexpectedly, and some styles lack full alphabet coverage. Handling every edge case gracefully while keeping the transformation feeling instant was the real problem to solve.",
    solution: "Built a character map with fallback chains — if a Unicode block is missing a character, it cascades to the closest visual equivalent. The TextEngine processes the full input in a single pass at 60fps using a pre-compiled lookup table of all 52 style maps, making every keystroke feel immediate.",
    features: [
      "52 unique Unicode text style transformations",
      "Real-time transformation engine on every keystroke",
      "Full-text search across all style names",
      "One-click copy to clipboard per style",
      "Zero framework dependencies — pure vanilla JS"
    ],
    mockColors: ["#1a080a", "#3a1015", "#FB923C", "#E8C97A"],
    svgIcon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><text x="14" y="50" font-size="36" fill="#FB923C" opacity="0.7" font-weight="bold">Aa</text><path d="M10 60h60" stroke="#FB923C" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    images: [
      { src: "images/gen.png", label: "The Interface" },
      { src: "images/gen1.png", label: "The Preset Styles" }
    ]
  },
  {
    id: "solo-v1",
    title: "SOLO LEVELING SYSTEM v1.0",
    tagline: "Firebase-powered admin dashboard with Solo Leveling aesthetic.",
    category: "Web App",
    year: "2026",
    status: "Live",
    gradient: "linear-gradient(135deg,#1a080a,#3a1015,#2a0810)",
    accentColor: "#C084FC",
    tags: ["Firebase", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://fadingsanctum.github.io/sololeveling.v1/system.html",
    netlifyUrl: "https://sololeveling-v1.netlify.app/",
    overview: "A high-fidelity, Firebase-powered administrative dashboard wearing the aesthetic of the Solo Leveling manhwa. Built for real-time player management, game economy oversight, and system-wide moderation — presented through a dark fantasy UI that makes routine database operations feel genuinely epic.",
    challenge: "Marrying the visual language of a manhwa with the functional requirements of a serious admin tool. Every data table, alert, and form needed to work perfectly as a real interface while also feeling like it belongs inside the System screen from the story itself.",
    solution: "Built a custom design token system layered on top of Firebase's real-time listeners. Data changes ripple through the UI with dramatic particle effects and sound cues, turning routine admin actions into satisfying power moments — without sacrificing any actual functionality.",
    features: [
      "Real-time Firebase data sync across all panels",
      "Player management and profile system",
      "Game economy overview dashboard",
      "Moderation action log with timestamps",
      "Particle effect notification system"
    ],
    mockColors: ["#1a080a", "#3a1015", "#C084FC", "#E8C97A"],
    svgIcon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M14 40C14 25.6 25.6 14 40 14C54.4 14 66 25.6 66 40" stroke="#C084FC" stroke-width="1.5" stroke-linecap="round"/><path d="M66 40C66 54.4 54.4 66 40 66C25.6 66 14 54.4 14 40" stroke="#C084FC" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 4"/><circle cx="40" cy="40" r="8" fill="#C084FC" opacity="0.3"/></svg>`,
    images: [
      { src: "images/solo v1.png", label: "System Screen" },
      { src: "images/solo v11.png", label: "Login Page" },
      { src: "images/solo v12.png", label: "System Dashboard" }
    ]
  },
  {
    id: "solo-v2",
    title: "SOLO LEVELING SYSTEM v2.0",
    tagline: "Secure thematic Solo Leveling interface, next generation.",
    category: "Creative",
    year: "2026",
    status: "Live",
    gradient: "linear-gradient(135deg,#0e1020,#181830,#0a0c1a)",
    accentColor: "#818CF8",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://fadingsanctum.github.io/sololeveling.v2/",
    netlifyUrl: "https://sololeveling-v2.netlify.app/",
    overview: "Solo Leveling System v2.0 is a secure, thematic Solo Leveling interface — a complete next-generation rebuild of v1.0. It refines the System aesthetic into a more polished, stable experience with improved authentication flow, smoother visual transitions, and significantly better performance across all devices.",
    challenge: "Version 1 had performance issues — particularly the particle system on mid-range and mobile devices. V2.0 needed to preserve all the visual drama that makes the concept compelling while being genuinely fast and accessible on hardware that couldn't handle the original.",
    solution: "Replaced Canvas-heavy particle rendering with CSS-only geometric animations for the majority of visual effects. The authentication UI was redesigned to more faithfully mirror the manhwa's System interface. Progressive enhancement ensures the full experience on capable hardware without breaking on weaker devices.",
    features: [
      "Redesigned multi-layer System authentication UI",
      "CSS-only particle and glow effect system",
      "Optimized animation pipeline for mobile performance",
      "Thematic interface faithful to the manhwa aesthetic",
      "Progressive enhancement for lower-end hardware"
    ],
    mockColors: ["#0e1020", "#181830", "#818CF8", "#E8C97A"],
    svgIcon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="10" y="10" width="60" height="60" rx="12" stroke="#818CF8" stroke-width="1.5"/><circle cx="26" cy="26" r="6" stroke="#818CF8" stroke-width="1.5"/><path d="M10 46l16-16 12 12 10-10 18 18" stroke="#818CF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    images: [
      { src: "images/solo v2.png", label: "Auth Interface" },
      { src: "images/solo v21.png", label: "Main System UI" },
      { src: "images/solo v22.png", label: "The Dungeon Phase" }
    ]
  },
  {
    id: "breathing-styles",
    title: "Hinokami Requiem",
    tagline: "Demon Slayer–inspired gesture combat with 13 breathing styles and particle physics.",
    category: "Creative",
    year: "2026",
    status: "Live",
    gradient: "linear-gradient(135deg,#0a0510,#1a0520,#0d0815)",
    accentColor: "#E8C97A",
    tags: ["Vanilla JavaScript", "Canvas 2D", "Web Audio API", "Gesture Input"],
    liveUrl: "#",
    githubUrl: "https://fadingsanctum.github.io/breathing-styles/",
    netlifyUrl: "https:// my net",
    overview: "Breathing Style Combat is an immersive, Demon Slayer–inspired interactive experience built entirely with vanilla JavaScript and Canvas 2D. It features 13 fully realised breathing styles — each with unique particle systems, trail geometry, charged effects, and sound design — all driven by gesture-based combat input. Swipe to slash, hold to charge, long-press to switch style.",
    challenge: "Implementing 13 visually distinct combat styles inside a single Canvas 2D render pipeline without any framework. Each style needed its own particle shapes, trail algorithms, and charged-state effects — all running at 60fps while a gesture detection engine and Web Audio API ran concurrently. Keeping all that state clean and non-leaking across style switches was the hardest part.",
    solution: "Built a modular style system where each breathing style is a self-contained ES module exporting its own drawTrail, chargedEffect, and spawnParticles functions. A central ParticleEngine and CombatSystem orchestrate everything, while a seeded deterministic RNG ensures visual effects are stable across animation frames. The Web Audio engine lazy-loads per style and handles charge/release audio without race conditions.",
    features: [
      "13 breathing styles: Water, Flame, Thunder, Wind, Stone, Sun, Moon, Mist, Serpent, Sound, Insect, Beast, Love",
      "Gesture-based combat — swipe to slash, hold to charge, long-press to switch style",
      "Per-style particle physics with 7 unique particle shapes",
      "Charged slash effects with full-screen radial bursts and ground crack geometry",
      "Combo detection system with 5 named combo patterns",
      "Web Audio API engine with per-style charge and release sounds",
      "SVG breathing style tree for in-combat style switching",
      "Canvas 2D render pipeline running at 60fps with no framework"
    ],
    mockColors: ["#0a0510", "#1a0520", "#E8C97A", "#00BFFF"],
    svgIcon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M40 10 L70 65 L10 65 Z" stroke="#E8C97A" stroke-width="1.5" stroke-linejoin="round"/><path d="M20 55 Q40 20 60 55" stroke="#00BFFF" stroke-width="1.2" stroke-linecap="round" fill="none"/><circle cx="40" cy="40" r="6" fill="#E8C97A" opacity="0.4"/></svg>`,
    images: [
      { src: "images/hino.png", label: "Home Screen" },
      { src: "images/styles.png", label: "Breathing Styles" },
      { src: "images/user exp.png", label: "User Experience" }

]
  }
];

// Lookup helper
function getProjectById(id) {
  return PROJECTS.find(p => p.id === id) || null;
}

// Get adjacent projects for prev/next nav
function getAdjacentProjects(id) {
  const idx = PROJECTS.findIndex(p => p.id === id);
  return {
    prev: idx > 0 ? PROJECTS[idx - 1] : PROJECTS[PROJECTS.length - 1],
    next: idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : PROJECTS[0]
  };
}