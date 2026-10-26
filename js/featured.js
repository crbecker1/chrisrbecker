/* Feature work: "work roulette". Shows 3 case studies (big cards) and 2 projects
   (half-width cards) and reshuffles them on demand. Add or edit entries in WORK. */
(function () {
  var WORK = [
  {
    "href": "case-study-alle-grow.html",
    "img": "images/case-studies/alle-grow/Alle-Outro.png",
    "title": "Allē Grow: Product Design Vision",
    "sub": "UX strategy and a speculative prototype for the early vision of Allē for Business",
    "tags": [
      "UX",
      "Product Design",
      "Strategy"
    ],
    "kind": "case"
  },
  {
    "href": "case-study-alle-user-journey.html",
    "img": "images/case-studies/Alle-User-Journey/01-User-Journey-Alle-Patient-Support.png",
    "title": "Allē Admin: User Journey Maps",
    "sub": "User research and journey mapping for a 150+ person customer support team",
    "tags": [
      "UX",
      "User Research",
      "Strategy",
      "Facilitation"
    ],
    "kind": "case"
  },
  {
    "href": "case-study-mac-30.html",
    "img": "images/case-studies/mac-30/mac-30-cover.webp",
    "title": "Macintosh 30-Year Anniversary",
    "sub": "",
    "tags": [
      "UX",
      "Product Design",
      "User Research"
    ],
    "kind": "case"
  },
  {
    "href": "case-study-curriculum.html",
    "img": "images/case-studies/ux-ui-bootcamp/UX-UI-Classroom.png",
    "title": "UX/UI Bootcamp: A 24-Week Curriculum",
    "sub": "Designing a bootcamp for career changers with Trilogy and 2U",
    "tags": [
      "EdTech",
      "UX",
      "Strategy",
      "Facilitation"
    ],
    "kind": "case"
  },
  {
    "href": "case-study-designlab.html",
    "img": "images/case-studies/DL-short-course/AUA-1.4-01-You-are-not-the-user.png",
    "title": "Advanced Usability & Accessibility: A Short Course",
    "sub": "A four-week Designlab course built from my book on human-computer interaction",
    "tags": [
      "EdTech",
      "UX",
      "Strategy",
      "User Research"
    ],
    "kind": "case"
  },
  {
    "href": "project-alle-responsive.html",
    "img": "images/projects/alle-responsive/Alle-crb-IA-mockup.png",
    "title": "Allē Responsive Navigation",
    "sub": "One navigation system across desktop, tablet, and mobile",
    "tags": [
      "UX",
      "Design Systems",
      "Navigation UI",
      "Responsive",
      "UX Strategy"
    ],
    "kind": "project"
  },
  {
    "href": "project-osu-robotics.html",
    "img": "images/projects/OSU-robotics-shirt-icon-system/OSU-model-back-man.png",
    "title": "OSU Robotics Icon System",
    "sub": "A family of badges, from concept to a shirt",
    "tags": [
      "Graphic Design",
      "Design System",
      "EdTech"
    ],
    "kind": "project"
  },
  {
    "href": "project-alterra-pitch.html",
    "img": "images/projects/Alterra-Pitch-Work/03-multimedia-prototype.png",
    "title": "Alterra Pitch Work",
    "sub": "A speculative app vision that won the RFP",
    "tags": [
      "UX",
      "Product",
      "Prototyping",
      "Vision"
    ],
    "kind": "project"
  },
  {
    "href": "project-kering-retail.html",
    "img": "images/projects/SYT-Kering-Retail/User-Persona-1-Madelyn-55.png",
    "title": "Kering Retail Strategy Deck",
    "sub": "A pitch deck and omnichannel strategy for a SoHo boutique",
    "tags": [
      "UX/Product",
      "Retail",
      "UX Strategy",
      "Personas"
    ],
    "kind": "project"
  },
  {
    "href": "case-study-du-ia.html",
    "img": "images/case-studies/du-ia/web/DU-22-nav-desktop.jpg",
    "title": "DU.edu: Information Architecture",
    "sub": "Card sorting and navigation for the University of Denver website redesign",
    "tags": ["Information Architecture", "UX", "UI Design", "User Research"],
    "kind": "case"
  },
  {
    "href": "project-uxpa-poster.html",
    "img": "images/projects/UXPA-2023-Poster/web/UXPA-08-exquisite-corpse-diagram.jpg",
    "title": "Facilitating Fun: UXPA 2023 Poster",
    "sub": "How UX helps teams collaborate and have more fun",
    "tags": ["UX", "Facilitation", "Creative Management", "Collaboration"],
    "kind": "project"
  },
  {
    "href": "project-waid-folksonomy.html",
    "img": "images/projects/WAID-Taxonomy-workshop/web/WAID-23.jpg",
    "title": "AI Folksonomy Workshop: WIAD 2026",
    "sub": "A 50-minute lecture and workshop with 55+ designers",
    "tags": ["Facilitation", "Information Architecture", "Workshops", "Teaching"],
    "kind": "project"
  },
  {
    "href": "project-ladwp-workshop.html",
    "img": "images/projects/LADWP-DT-workshop/web/LADWP-day1-ICF-user-persona.jpg",
    "title": "LADWP Design Thinking Workshop",
    "sub": "A 2½-day, hands-on workshop for LADWP employees",
    "tags": ["Design Thinking", "Workshop", "Ideation", "Facilitation"],
    "kind": "project"
  },
  {
    "href": "project-ideation-workshop.html",
    "img": "images/projects/Deutsch-Inc-5-hat-ideation-workshop/09-Deutsch-5hat-ideas.png",
    "title": "Five Hats Ideation Workshop",
    "sub": "Two 90-minute remote sessions for Open Door Consulting",
    "tags": [
      "Ideation",
      "Workshops",
      "UX Strategy",
      "Education"
    ],
    "kind": "project"
  }
];

  var grid = document.getElementById('feat-grid');
  var btn = document.getElementById('roulette');
  var status = document.getElementById('feat-status');
  if (!grid || !btn) return;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function card(d) {
    var big = d.kind === 'case';
    return '<li class="feat feat--' + (big ? 'big' : 'small') + '"><a class="feat__link" href="' + d.href + '">' +
      '<span class="feat__media"><img src="' + d.img + '" alt="" loading="lazy"></span>' +
      '<span class="feat__body"><span class="feat__type">' + (big ? 'Case study' : 'Project') + '</span>' +
      '<h3>' + esc(d.title) + '</h3>' + (d.sub ? '<p class="feat__sub">' + esc(d.sub) + '</p>' : '') +
      '<ul class="feat__tags" aria-label="Type of work">' + d.tags.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
      '<span class="featured__more">' + (big ? 'Read case study' : 'See project') + '<span class="visually-hidden">: ' + esc(d.title) + '</span>' +
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#i-arrow"/></svg></span></span></a></li>';
  }
  function current() { return [].map.call(grid.querySelectorAll('.feat__link'), function (a) { return a.getAttribute('href'); }); }
  function pick() {
    var cases = WORK.filter(function (d) { return d.kind === 'case'; });
    var projects = WORK.filter(function (d) { return d.kind === 'project'; });
    var prev = current().sort().join('|'), set, tries = 0;
    do {
      set = shuffle(cases).slice(0, 3).concat(shuffle(projects).slice(0, 2));
      tries++;
    } while (tries < 20 && set.map(function (d) { return d.href; }).sort().join('|') === prev);
    return set;
  }

  var busy = false;
  btn.addEventListener('click', function () {
    if (busy) return;
    busy = true;
    var set = pick();
    function swap() {
      grid.innerHTML = set.map(card).join('');
      [].forEach.call(grid.children, function (li, i) { li.style.setProperty('--i', i); });
      status.textContent = 'Showing ' + set.map(function (d) { return d.title; }).join(', ');
    }
    if (reduce) { swap(); busy = false; return; }
    // 1. pull the lever down  2. reels drop out  3. new work rolls in  4. lever springs back
    btn.classList.add('is-pulled');
    setTimeout(function () {
      [].forEach.call(grid.children, function (li, i) { li.style.setProperty('--i', i); });
      grid.classList.add('is-out');
    }, 260);
    setTimeout(function () {
      swap();
      grid.classList.remove('is-out');
      grid.classList.add('is-in');
      btn.classList.remove('is-pulled');
    }, 260 + 320 + 4 * 60);
    setTimeout(function () {
      grid.classList.remove('is-in');
      busy = false;
    }, 260 + 320 + 4 * 60 + 500 + 4 * 60);
  });
})();
