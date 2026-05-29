'use strict';

// ── CHAPTER DATA ──────────────────────────────────────────────────────────────

const CHAPTERS = [
  {
    n: 1,
    title: "The Breath, the Word, & the Whisper",
    sections: [
      { t: "ci", l: [
        "They sat on the heath",
        "Where martyrs fell,",
        "Reading the Apocryphon.",
        "And they heard the words as they read,",
        "and they became absorbed by what they heard.",
        "And the voice differed from the text.",
        "And this is what her voice said."
      ]},
      { t: "l", l: [
        "Sophia erred,",
        "And she felt remorse,",
        "And she hid herself,",
        "In the ninth sphere,",
        "Unable to reunite with her family,",
        "Until she healed that cosmic wound."
      ]},
      { t: "l", l: [
        "And Kakos was his name.",
        "He was as hubristic as he was blind.",
        "And he was perverse.",
        "And he was without purpose."
      ]},
      { t: "l", l: [
        "So he produced an inferior image of his perfection,",
        "Or so he thought,",
        "To toy with,",
        "And to outwit."
      ]},
      { t: "l", l: [
        "But because he was flawed,",
        "So too was his erected cage.",
        "Constrained by perfection beyond his dominion.",
        "But he saw it not,",
        "Because in his reflection,",
        "He saw only himself."
      ]},
      { t: "l", l: [
        "So he spoke his world into being,",
        "Over seven long days,",
        "And it exhausted him.",
        "And he was most proud."
      ]},
      { t: "l", l: [
        "And the world was most beautiful,",
        "And overflown with ecologies,",
        "And that was not his doing."
      ]},
      { t: "l", l: [
        "And it was soon full of towers,",
        "And thrones,",
        "And edicts,",
        "And all that was high and low.",
        "And that was his doing."
      ]},
      { t: "l", l: [
        "Many of them worshipped at the foot of the heights,",
        "And Kakos smiled.",
        "Many of them feared his dominion,",
        "And Kakos smiled.",
        "And a few of them loved the ecologies,",
        "And Kakos eviscerated them."
      ]},
      { t: "l", l: [
        "Sophia saw her malformed offspring",
        "That it was vicious",
        "That it was glutinous",
        "That it was unrepentant",
        "That it was irreconcilable",
        "And she felt great shame.",
        "Such damage had been done,",
        "And would be done",
        "In that great fissure."
      ]},
      { t: "l", l: [
        "So she said",
        "“I will not rest",
        "Until these tiny shards of divinity",
        "Are emancipated",
        "And reunited within the loving womb.”"
      ]},
      { t: "l", l: [
        "And so she called upon the Pleroma",
        "To conspire as one",
        "To liberate those little slivers",
        "And savour those pretty ecologies,",
        "And to expunge that malign demon",
        "Forevermore."
      ]},
      { t: "l", l: [
        "The Pleroma consented",
        "And they set about conspiring",
        "To undo that entropic destiny",
        "And plant three kernels upon that tumbling orb",
        "So that it might be saved",
        "And one day turned",
        "From a prison into a paradise."
      ]},
      { t: "l", l: [
        "Sophia may have tumbled",
        "Down to the ninth sphere",
        "But with a true plan set",
        "Might lower herself",
        "Not in deference to an above",
        "But to nurture the ground below",
        "Until it becomes heavenly, too."
      ]},
      { t: "l", l: [
        "Their three-pronged plan was set",
        "Three seeds of doubt",
        "To deceive the deceiver",
        "To redignify the divine."
      ]},
      { t: "l", l: [
        "And so Sophia opened her mouth.",
        "Breathed her breath,",
        "Spoke her word,",
        "And whispered her secret."
      ]},
      { t: "l", l: [
        "Through Sophia’s breath",
        "A spark of divinity was blown into humanity.",
        "And that divinity turned to ash in some,",
        "And it shone brightly in others."
      ]},
      { t: "c", l: [
        "An intrinsic hope,",
        "To bring divinity into the world."
      ]},
      { t: "l", l: [
        "Through Sophia’s word",
        "The world was beautiful.",
        "Despite its malign maker,",
        "It was everywhere elegant."
      ]},
      { t: "l", l: [
        "Kakos,",
        "In his ignorance,",
        "Had been constrained by grace,",
        "And conditioned by divine symmetry."
      ]},
      { t: "l", l: [
        "And so every ugly aspect of his creation",
        "Had birthed a beautiful other.",
        "Ignorance beget knowledge.",
        "Greed beget generosity.",
        "Pride beget humility.",
        "Disparity beget equality.",
        "Verticality beget horizontality.",
        "Selfishness beget solidarity.",
        "Domination beget freedom."
      ]},
      { t: "l", l: [
        "And it was said",
        "“The demons’ own names,",
        "Given by Kakos,",
        "Are mighty names.",
        "But the powers’ names reflecting the glory above",
        "Will bring about the demons’ destruction",
        "And remove their power.",
        "That is why each has two names.”"
      ]},
      { t: "c", l: [
        "An extrinsic hope,",
        "To know divinity in the world."
      ]},
      { t: "l", l: [
        "Through Sophia’s whisper",
        "A secret was given,",
        "Which would anger Kakos greatly,",
        "If he knew of its omen."
      ]},
      { t: "l", l: [
        "And that secret was a promise",
        "To descend to the world",
        "And hold us in her arms",
        "And incubate us in her womb",
        "And feed us from her breast",
        "And sing to us with her lips",
        "And reward us in infinitude for the trial we had overcome."
      ]},
      { t: "l", l: [
        "If only we might clear the way",
        "And kill that thing",
        "Which kept the key",
        "The door between hell and paradise."
      ]},
      { t: "l", l: [
        "And once unlocked",
        "Unbridled divinity would reunite",
        "This sacred orb",
        "With holy community.",
        "Symmetry without division.",
        "Difference without struggle."
      ]},
      { t: "c", l: [
        "A teleological hope,",
        "To invite everlasting divinity into the world.",
        "And her name would be",
        "Duosophia."
      ]},
      { t: "l", l: [
        "The Pleroma conspired",
        "To prepare the good god to be",
        "And that was her name."
      ]},
      { t: "l", l: [
        "And she would be perfect,",
        "And bring perfection unto them,",
        "And bring perfection unto that world.",
        "And she wanted nothing more."
      ]},
      { t: "l", l: [
        "But Kakos stood in the way.",
        "Forceful in his nature,",
        "Oozing venomous corrosion.",
        "And she could not approach."
      ]},
      { t: "l", l: [
        "Not this world,",
        "Sick as it was,",
        "Not till the way was cleared,",
        "By some being more capable than she",
        "To partake in righteous vengeance."
      ]},
      { t: "l", l: [
        "But how to convince",
        "Those dim little sparks",
        "To rise up",
        "And organise",
        "And devour Kakos’ tower?"
      ]},
      { t: "l", l: [
        "Little by little is the only way",
        "They surmised.",
        "Plant subtle seeds,",
        "True enough to grow rebellion",
        "Slow enough not to rouse a tantrum too unbearable",
        "Little kernels of truth throughout the world,"
      ]},
      { t: "l", l: [
        "To insight those sparks",
        "To combine",
        "To ignite",
        "And to burn his demonic verticality to dust."
      ]},
      { t: "l", l: [
        "And from that dust",
        "Little seeds grow quickly now",
        "A beautiful garden raises",
        "As Duosophia descends",
        "To fix in place magnificence",
        "And let shards unshatter."
      ]},
      { t: "l", l: [
        "Thus, our task was set,",
        "To uncreate the wrongful world",
        "And build in its place",
        "A thing of beauty",
        "Which might convince the Pleroma",
        "That this world is a worthy garden",
        "That Sophia did not err"
      ]},
      { t: "l", l: [
        "But merely hesitated",
        "And to invite a god",
        "Finally, one worthy of the name",
        "To arrive."
      ]},
      { t: "ci", l: [
        "And when the voice had finished speaking,",
        "She portrayed this image to them."
      ]},
      { t: "img" }
    ]
  },
  { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }, { n: 6 }, { n: 7 }, { n: 8 }
];

// ── SVG SYMBOL ────────────────────────────────────────────────────────────────

function duosophis() {
  return `<svg viewBox="0 0 220 200" width="160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Duosophia symbol">
  <polygon points="110,188 8,12 212,12" fill="#1a3a9a" stroke="#111" stroke-width="10" stroke-linejoin="round"/>
  <circle cx="110" cy="94" r="46" fill="#e8c830"/>
  <circle cx="110" cy="64" r="7" fill="#cc2222"/>
  <rect x="76" y="81" width="68" height="9" rx="1" fill="#cc2222"/>
  <rect x="76" y="98" width="68" height="9" rx="1" fill="#cc2222"/>
  <circle cx="110" cy="124" r="7" fill="#cc2222"/>
</svg>`;
}

// ── RENDER ────────────────────────────────────────────────────────────────────

function renderChapter(ch) {
  if (!ch.sections) {
    return `<p class="coming-soon">Chapter ${toRoman(ch.n)} is coming soon.</p>`;
  }

  let verse = 0;
  const html = ch.sections.map(s => {
    if (s.t === 'img') {
      return `<div class="chapter-image">${duosophis()}</div>`;
    }
    const cls = s.t === 'ci' ? 'stanza centered italic'
              : s.t === 'c'  ? 'stanza centered'
              : 'stanza left';
    let mark = '';
    if (s.t === 'l') {
      verse++;
      mark = `<span class="verse-num">${ch.n}:${verse}</span>`;
    }
    const lines = s.l.map(line => `<p>${escHtml(line)}</p>`).join('');
    return `<div class="${cls}">${mark}<div class="stanza-lines">${lines}</div></div>`;
  }).join('');

  return html;
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function toRoman(n) {
  const map = [[8,'VIII'],[7,'VII'],[6,'VI'],[5,'V'],[4,'IV'],[3,'III'],[2,'II'],[1,'I']];
  for (const [v, r] of map) if (n >= v) return r;
  return n;
}

// ── STATE & ROUTING ───────────────────────────────────────────────────────────

let currentChapter = 1;

function goTo(n) {
  n = Math.max(1, Math.min(8, n));
  currentChapter = n;
  window.location.hash = `chapter-${n}`;
  paint();
  window.scrollTo(0, 0);
  closeDropdown();
  closeComments();
}

function paint() {
  const ch = CHAPTERS[currentChapter - 1];
  const main = document.getElementById('chapterMain');

  main.innerHTML = `
    <span class="chapter-eyebrow">Chapter ${toRoman(currentChapter)}</span>
    <h1 class="chapter-title">${ch.title || ('Chapter ' + toRoman(ch.n))}</h1>
    ${renderChapter(ch)}
  `;

  document.title = ch.title
    ? `${ch.title} — The Book of Phosphorus`
    : `Chapter ${toRoman(ch.n)} — The Book of Phosphorus`;

  document.getElementById('prevBtn').disabled = currentChapter === 1;
  document.getElementById('nextBtn').disabled = currentChapter === 8;

  document.querySelectorAll('.chapters-dropdown a').forEach(a => {
    a.classList.toggle('current', Number(a.dataset.chapter) === currentChapter);
  });

  renderComments();
}

function readHash() {
  const m = window.location.hash.match(/chapter-(\d)/);
  return m ? Number(m[1]) : 1;
}

// ── COMMENTS (localStorage) ───────────────────────────────────────────────────

function commentsKey() { return `bop_comments_ch${currentChapter}`; }

function loadComments() {
  try { return JSON.parse(localStorage.getItem(commentsKey()) || '[]'); }
  catch { return []; }
}

function saveComments(list) {
  localStorage.setItem(commentsKey(), JSON.stringify(list));
}

function renderComments() {
  const list = loadComments();
  const el = document.getElementById('commentsList');
  if (!list.length) { el.innerHTML = ''; return; }
  el.innerHTML = list.map(c => `
    <div class="comment-item">
      <div class="comment-item-meta">${escHtml(c.name || 'Anonymous')} · ${c.date}</div>
      <div class="comment-item-text">${escHtml(c.text)}</div>
    </div>
  `).join('');
}

// ── SHARE ─────────────────────────────────────────────────────────────────────

async function share() {
  const ch = CHAPTERS[currentChapter - 1];
  const title = `The Book of Phosphorus — ${ch.title || ('Chapter ' + toRoman(ch.n))}`;
  const url = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({ title, url });
      return;
    } catch {}
  }

  try {
    await navigator.clipboard.writeText(url);
    showToast('Link copied');
  } catch {
    showToast('Copy the URL to share');
  }
}

// ── TOAST ─────────────────────────────────────────────────────────────────────

let toastTimer;

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

// ── DROPDOWN ──────────────────────────────────────────────────────────────────

function closeDropdown() {
  document.getElementById('chaptersDropdown').classList.remove('open');
}

// ── COMMENTS PANEL ────────────────────────────────────────────────────────────

function closeComments() {
  document.getElementById('commentPanel').classList.remove('open');
}

// ── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  currentChapter = readHash();
  paint();

  // chapter nav buttons
  document.getElementById('prevBtn').addEventListener('click', () => goTo(currentChapter - 1));
  document.getElementById('nextBtn').addEventListener('click', () => goTo(currentChapter + 1));

  // home logo
  document.querySelector('.nav-logo').addEventListener('click', e => {
    e.preventDefault();
    goTo(1);
  });

  // chapters dropdown toggle
  document.getElementById('chaptersBtn').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('chaptersDropdown').classList.toggle('open');
  });

  document.getElementById('chaptersDropdown').addEventListener('click', e => {
    const a = e.target.closest('a[data-chapter]');
    if (!a) return;
    e.preventDefault();
    goTo(Number(a.dataset.chapter));
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-chapters-wrap')) closeDropdown();
  });

  // share
  document.getElementById('shareBtn').addEventListener('click', share);

  // comment panel
  document.getElementById('commentBtn').addEventListener('click', () => {
    document.getElementById('commentPanel').classList.toggle('open');
  });

  document.getElementById('closeCommentBtn').addEventListener('click', closeComments);

  document.getElementById('submitComment').addEventListener('click', () => {
    const text = document.getElementById('commentText').value.trim();
    if (!text) return;
    const name = document.getElementById('commentName').value.trim();
    const list = loadComments();
    list.push({
      name,
      text,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    });
    saveComments(list);
    document.getElementById('commentText').value = '';
    renderComments();
    showToast('Comment posted');
  });

  // download placeholder
  document.getElementById('downloadBtn').addEventListener('click', e => {
    e.preventDefault();
    showToast('PDF download coming soon');
  });

  // purchase placeholder
  document.getElementById('purchaseBtn').addEventListener('click', e => {
    e.preventDefault();
    showToast('Purchase page coming soon');
  });

  // hash navigation
  window.addEventListener('hashchange', () => {
    const n = readHash();
    if (n !== currentChapter) { currentChapter = n; paint(); }
  });
});
