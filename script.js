// ---------- Cursor emoji trail ----------
const trailEmojis = ['✨','💖','⭐','🌈','🎉'];
let lastTrail = 0;
document.addEventListener('mousemove', e => {
  const now = Date.now();
  if (now - lastTrail < 70) return;
  lastTrail = now;
  const t = document.createElement('div');
  t.className = 'trail';
  t.textContent = trailEmojis[Math.floor(Math.random() * trailEmojis.length)];
  t.style.left = e.clientX + 'px';
  t.style.top = e.clientY + 'px';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 900);
});

// ---------- Confetti ----------
function confetti() {
  const pieces = ['🎉','🎊','💖','⭐','🌈','🍭','🦄','✨'];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    c.style.left = Math.random() * 100 + 'vw';
    c.style.animationDuration = 2 + Math.random() * 3 + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}
document.querySelectorAll('[data-confetti]').forEach(b => b.addEventListener('click', confetti));

// ---------- Split name into letters ----------
const nm = document.querySelector('.name');
if (nm) {
  nm.innerHTML = nm.textContent.split('').map(ch =>
    ch === ' ' ? '<br>' : `<span>${ch}</span>`).join('');
}

// ---------- Party mode ----------
const party = document.getElementById('partyBtn');
if (party) party.addEventListener('click', () => {
  document.body.classList.toggle('party');
  confetti();
});

// ---------- Friend compliments ----------
const compliments = [
  'You are a walking sunshine ☀️', 'Funniest person ever 😂', 'Best hugs in the world 🤗',
  'Always there for me 💖', 'Queen of good vibes 👑', 'My partner in crime 😎',
  'You make every day better 🌈', 'Certified legend 🏆'
];
document.querySelectorAll('.friend').forEach(f => f.addEventListener('click', () => {
  f.querySelector('p').textContent = compliments[Math.floor(Math.random() * compliments.length)];
  confetti();
}));

// ---------- Catch game ----------
const target = document.getElementById('target');
if (target) {
  const arena = document.getElementById('arena');
  const scoreEl = document.getElementById('score');
  let score = 0;
  const faces = ['🐙','🦄','🍕','🐸','🍩','👾','🐱'];
  function jump() {
    target.textContent = faces[Math.floor(Math.random() * faces.length)];
    target.style.left = Math.random() * (arena.clientWidth - 70) + 'px';
    target.style.top = Math.random() * (arena.clientHeight - 70) + 'px';
  }
  target.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;
    if (score % 10 === 0) confetti();
    jump();
  });
  jump();
}

// ---------- Friendship meter ----------
const meterBtn = document.getElementById('meterBtn');
if (meterBtn) meterBtn.addEventListener('click', () => {
  const n = document.getElementById('friendName').value.trim();
  if (!n) return;
  const pct = 80 + Math.floor(Math.random() * 21);
  document.getElementById('meterBar').style.width = pct + '%';
  document.getElementById('meterText').textContent =
    `${n} + Thrisha = ${pct}% BEST FRIENDS 💞`;
  confetti();
});

// ---------- Fortune teller ----------
const fortuneBtn = document.getElementById('fortuneBtn');
if (fortuneBtn) fortuneBtn.addEventListener('click', () => {
  const f = [
    'You will eat something yummy today 🍕', 'A surprise party is coming 🎂',
    'You will laugh until your tummy hurts 😂', 'Your best friend will text you soon 📱',
    'Something amazing happens this week ✨', 'You will find free pizza 🍕🍕'
  ];
  document.getElementById('fortune').textContent = f[Math.floor(Math.random() * f.length)];
});

// ---------- Secret page ----------
const secretBtn = document.getElementById('secretBtn');
if (secretBtn) secretBtn.addEventListener('click', () => {
  document.getElementById('secretBox').style.display = 'block';
  secretBtn.style.display = 'none';
  confetti();
  setTimeout(confetti, 1200);
});
