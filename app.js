// ════════════════════════════════════════════════════════════════
//  app.js — Modul CAT KDKMP Agrinas v4 (FIXED)
//  Fix: tambah tab Bahasa Indonesia, pindah 7a/7b ke TIU
// ════════════════════════════════════════════════════════════════

'use strict';

// ── STATE GLOBAL ──
const STATE = {
  scores: {},
  totalCorrect: 0,
  totalAnswered: 0,
};

// Kode akses yang valid
const VALID_CODES = [
  'KDKMP001','KDKMP002','KDKMP003','KDKMP004','KDKMP005',
  'AGRINAS1','AGRINAS2','AGRINAS3',
  'KOOP2025','PANGAN25','DESA2025','MANAJER1',
  'CAT12345','KATAPANG',
];

// ════════════════════════════════════════════════════════════════
// PAYWALL LOGIC
// ════════════════════════════════════════════════════════════════

function openTrakteer() {
  window.open('https://trakteer.id', '_blank');
}

function doVerify() {
  const input = document.getElementById('verifInput').value.trim().toUpperCase();
  const msg = document.getElementById('verifMsg');

  if (!input) {
    showMsg(msg, 'Masukkan kode akses terlebih dahulu.', 'error');
    return;
  }

  const overlay = document.getElementById('verifOverlay');
  overlay.classList.add('show');

  const steps = ['step1', 'step2', 'step3'];
  let i = 0;

  const interval = setInterval(() => {
    if (i > 0) document.getElementById(steps[i - 1]).style.opacity = '0.4';
    if (i < steps.length) {
      document.getElementById(steps[i]).classList.add('active');
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        if (VALID_CODES.includes(input)) {
          document.getElementById('verifSpinner').style.display = 'none';
          document.getElementById('verifStatus').style.display = 'none';
          document.getElementById('verifSuccess').classList.add('show');
          localStorage.setItem('kdkmp_access', 'granted');
          setTimeout(() => unlockApp(), 1800);
        } else {
          overlay.classList.remove('show');
          document.getElementById('verifSpinner').style.display = '';
          document.getElementById('verifStatus').style.display = '';
          steps.forEach(s => {
            document.getElementById(s).classList.remove('active');
            document.getElementById(s).style.opacity = '';
          });
          i = 0;
          showMsg(msg, '❌ Kode tidak valid. Pastikan kode sesuai yang dikirim via Trakteer.', 'error');
        }
      }, 400);
    }
  }, 700);
}

function skipForDemo() {
  if (localStorage.getItem('kdkmp_access') === 'granted') {
    unlockApp();
    return;
  }
  unlockApp();
}

function showMsg(el, text, type) {
  el.textContent = text;
  el.style.display = 'block';
  el.style.color = type === 'error' ? 'var(--r100)' : 'var(--g100)';
}

function unlockApp() {
  document.getElementById('paywall').classList.add('gone');
  document.getElementById('app').classList.add('on');
  initApp();
}

// ════════════════════════════════════════════════════════════════
// PATCH DOM — pindah 7a/7b ke TIU, tambah tab Bahasa
// Dipanggil sebelum quiz dirender
// ════════════════════════════════════════════════════════════════

function patchDOM() {
  const p3 = document.getElementById('p3');
  const p7 = document.getElementById('p7');
  const p8 = document.getElementById('p8');
  const navInner = document.querySelector('.nav-inner');

  // ── 1. Pindahkan sm-7a dan sm-7b dari p8 ke p3 ──
  if (p3 && p8) {
    const sm7a = document.getElementById('sm-7a');
    const sm7b = document.getElementById('sm-7b');

    if (sm7a) {
      // Tambahkan divider visual sebelum section geometri
      const divider = document.createElement('div');
      divider.style.cssText = 'border-top:2px dashed rgba(114,192,64,.2);margin:8px 0 40px;';
      p3.appendChild(divider);

      // Label kelompok
      const groupLabel = document.createElement('div');
      groupLabel.style.cssText = 'font-size:11px;font-weight:700;color:var(--g300);text-transform:uppercase;letter-spacing:.08em;margin-bottom:20px;';
      groupLabel.textContent = '📐 Geometri & Penalaran Spasial';
      p3.appendChild(groupLabel);

      p3.appendChild(sm7a);
    }
    if (sm7b) p3.appendChild(sm7b);

    // Kosongkan p8 setelah pindah
    p8.innerHTML = '';
    p8.style.display = 'none';
  }

  // ── 2. Update mod-nav p3 — tambah link ke sm-7a dan sm-7b ──
  if (p3) {
    const p3ModNav = p3.querySelector('.mod-nav');
    if (p3ModNav && !p3ModNav.querySelector('[href="#sm-7a"]')) {
      const entries = [
        { href: '#sm-7a', icon: '📐', label: '7a · Bangun Datar & Geometri' },
        { href: '#sm-7b', icon: '🧊', label: '7b · Bangun Ruang 3D & Perspektif' },
      ];
      entries.forEach(e => {
        const a = document.createElement('a');
        a.className = 'mod-nav-btn';
        a.href = e.href;
        a.innerHTML = `${e.icon} ${e.label}`;
        p3ModNav.appendChild(a);
      });
    }

    // Update badge sub-modul di mod-hero p3
    const heroEye = p3.querySelector('.mod-hero-eye');
    if (heroEye) heroEye.textContent = 'Modul 3 · 7 Sub-Modul · 140 Soal';
    const statSm = p3.querySelector('.mod-stat:last-child .mod-stat-v');
    if (statSm) statSm.textContent = '7';
    const statSoal = p3.querySelectorAll('.mod-stat')[1];
    if (statSoal) statSoal.querySelector('.mod-stat-v').textContent = '140';
  }

  // ── 3. Tambah tab Bahasa Indonesia di nav (index 7) ──
  if (navInner && !document.querySelector('.ntab[data-tab="7"]')) {
    const bahasaBtn = document.createElement('button');
    bahasaBtn.className = 'ntab';
    bahasaBtn.setAttribute('data-tab', '7');
    bahasaBtn.setAttribute('onclick', 'showTab(7)');
    bahasaBtn.innerHTML = '<span class="ntab-dot"></span>📝 Bahasa Indonesia';
    // Sisipkan sebelum tab Tips & Strategi (tab ke-6)
    const tabs = navInner.querySelectorAll('.ntab');
    const tipTab = tabs[6]; // Tab Tips & Strategi
    if (tipTab) {
      navInner.insertBefore(bahasaBtn, tipTab);
      // Geser Tips & Strategi ke index 8 (karena Bahasa masuk di 7)
    } else {
      navInner.appendChild(bahasaBtn);
    }
  }

  // ── 4. Fix onclick untuk tab Tips & Strategi yang bergeser ──
  // Setelah insert, tab urutan jadi: 0-6 lama, 7=Bahasa, 8=Tips
  // Tapi panel Tips tetap p6, jadi onclick showTab(6) tetap benar
  // Tidak perlu diubah.

  // ── 5. Tandai sm-7a dan sm-7b dengan class reveal ──
  ['sm-7a', 'sm-7b'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('reveal');
  });
}

// ════════════════════════════════════════════════════════════════
// INIT APP
// ════════════════════════════════════════════════════════════════

function initApp() {
  // Patch DOM dulu sebelum render quiz
  patchDOM();

  // Inisialisasi semua quiz
  const subIds = Object.keys(SUBMODULES);
  subIds.forEach(id => {
    STATE.scores[id] = { correct: 0, wrong: 0, skipped: 0, answered: 0 };
    renderQuiz(id);
  });

  // Setup scroll reveal
  setupReveal();

  // Update progress
  updateGlobalScore();
}

// ════════════════════════════════════════════════════════════════
// TAB NAVIGATION
// ════════════════════════════════════════════════════════════════

function showTab(idx) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

  // Update semua tombol tab
  document.querySelectorAll('.ntab').forEach((t, i) => {
    t.classList.remove('active');
  });

  const panel = document.getElementById('p' + idx);
  if (panel) {
    panel.classList.add('active');
    setTimeout(() => {
      panel.querySelectorAll('.reveal').forEach(el => el.classList.add('vis'));
    }, 50);
  }

  // Aktifkan tab yang diklik berdasarkan onclick attr
  document.querySelectorAll('.ntab').forEach(t => {
    const onclickVal = t.getAttribute('onclick') || '';
    if (onclickVal.includes('showTab(' + idx + ')')) {
      t.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ════════════════════════════════════════════════════════════════
// ACCORDION
// ════════════════════════════════════════════════════════════════

function toggleAcc(btn) {
  const body = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');

  if (isOpen) {
    btn.classList.remove('open');
    body.classList.remove('open');
  } else {
    btn.classList.add('open');
    body.classList.add('open');
  }
}

// ════════════════════════════════════════════════════════════════
// CHECKLIST
// ════════════════════════════════════════════════════════════════

function toggleChk(item) {
  item.classList.toggle('done');
  if (item.classList.contains('done')) {
    item.querySelector('.chk-box').textContent = '✓';
  } else {
    item.querySelector('.chk-box').textContent = '';
  }
}

// ════════════════════════════════════════════════════════════════
// QUIZ ENGINE
// ════════════════════════════════════════════════════════════════

function renderQuiz(subId) {
  const container = document.getElementById('qz-' + subId);
  if (!container) return;
  const sub = SUBMODULES[subId];
  if (!sub) return;

  container.innerHTML = '';

  sub.questions.forEach((q, qi) => {
    const labels = ['A', 'B', 'C', 'D'];
    const card = document.createElement('div');
    card.className = 'qcard';
    card.id = 'qcard-' + subId + '-' + qi;

    const optsHtml = q.opts.map((o, oi) => `
      <button class="opt" onclick="answerQ('${subId}',${qi},${oi})" id="opt-${subId}-${qi}-${oi}">
        <span class="opt-lbl">${labels[oi]}</span>
        <span>${o}</span>
      </button>
    `).join('');

    card.innerHTML = `
      <div class="q-num">Soal ${qi + 1} dari ${sub.questions.length}</div>
      <div class="q-text">${q.q}</div>
      <div class="opts">${optsHtml}</div>
      <div class="exp" id="exp-${subId}-${qi}"></div>
    `;

    container.appendChild(card);
  });
}

function answerQ(subId, qi, selectedIdx) {
  const sub = SUBMODULES[subId];
  const q = sub.questions[qi];
  const isCorrect = selectedIdx === q.ans;

  const labels = ['A', 'B', 'C', 'D'];
  for (let i = 0; i < q.opts.length; i++) {
    const btn = document.getElementById('opt-' + subId + '-' + qi + '-' + i);
    if (!btn) continue;
    btn.disabled = true;
    if (i === q.ans) btn.classList.add('cor');
    else if (i === selectedIdx && !isCorrect) btn.classList.add('wrg');
  }

  const expEl = document.getElementById('exp-' + subId + '-' + qi);
  if (expEl) {
    expEl.textContent = '💡 ' + q.exp;
    expEl.className = 'exp show ' + (isCorrect ? 'ok' : 'no');
  }

  const card = document.getElementById('qcard-' + subId + '-' + qi);
  if (card) card.classList.add('answered');

  const scoreKey = subId + '-' + qi;
  if (!STATE[scoreKey]) {
    STATE[scoreKey] = true;
    STATE.scores[subId].answered++;
    if (isCorrect) {
      STATE.scores[subId].correct++;
      STATE.totalCorrect++;
    } else {
      STATE.scores[subId].wrong++;
    }
    STATE.totalAnswered++;

    updateCounter(subId);
    updateGlobalScore();
    checkSubComplete(subId);
  }
}

function updateCounter(subId) {
  const el = document.getElementById('qc-' + subId);
  if (!el) return;
  const s = STATE.scores[subId];
  el.textContent = s.answered + ' / ' + SUBMODULES[subId].questions.length + ' dijawab';
}

function updateGlobalScore() {
  const correct = STATE.totalCorrect;
  const answered = STATE.totalAnswered;
  const total = getTotalQuestions();

  const gs = document.getElementById('gScore');
  const gt = document.getElementById('gTotal');
  if (gs) gs.textContent = correct;
  if (gt) gt.textContent = answered;

  const pct = total > 0 ? Math.round((answered / total) * 100) : 0;
  const fill = document.getElementById('progFill');
  const pctEl = document.getElementById('progPct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';

  const fs = document.getElementById('floatScore');
  const fScore = document.getElementById('fScore');
  const fTotal = document.getElementById('fTotal');
  if (fScore) fScore.textContent = correct;
  if (fTotal) fTotal.textContent = answered;
  if (fs) {
    if (answered > 0) fs.classList.add('show');
    else fs.classList.remove('show');
  }

  updateTabDots();
}

function getTotalQuestions() {
  return Object.values(SUBMODULES).reduce((sum, sub) => sum + sub.questions.length, 0);
}

function updateTabDots() {
  // Map tab index → sub-modul yang dinaungi
  // Tab 3 = TIU (termasuk 7a, 7b yang sudah dipindah)
  // Tab 7 = Bahasa Indonesia (6a, 6b)
  const moduleMap = {
    1: ['1a','1b','1c'],
    2: ['2a','2b'],
    3: ['3a','3b','3c','3d','3e','7a','7b'],
    4: ['4a','4b'],
    5: ['5a','5b'],
    7: ['6a','6b'],
  };

  Object.entries(moduleMap).forEach(([tabIdx, subIds]) => {
    // Cari tab berdasarkan onclick attribute
    const tabEl = document.querySelector(`.ntab[onclick="showTab(${tabIdx})"]`);
    if (!tabEl) return;

    const allDone = subIds.every(sid => {
      const s = STATE.scores[sid];
      return s && SUBMODULES[sid] && s.answered === SUBMODULES[sid].questions.length;
    });

    if (allDone) tabEl.classList.add('done');
    else tabEl.classList.remove('done');
  });
}

function checkSubComplete(subId) {
  const sub = SUBMODULES[subId];
  const s = STATE.scores[subId];

  if (s.answered >= sub.questions.length) {
    setTimeout(() => showResult(subId), 600);
  }
}

function showResult(subId) {
  const resultEl = document.getElementById('result-' + subId);
  if (!resultEl) return;

  const s = STATE.scores[subId];
  const total = SUBMODULES[subId].questions.length;
  const pct = Math.round((s.correct / total) * 100);
  const skipped = total - s.answered;

  resultEl.classList.add('show');
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const rn  = document.getElementById('rn-'  + subId);
  const rok = document.getElementById('rok-' + subId);
  const rno = document.getElementById('rno-' + subId);
  const rsk = document.getElementById('rsk-' + subId);
  if (rn)  rn.textContent  = s.correct;
  if (rok) rok.textContent = s.correct;
  if (rno) rno.textContent = s.wrong;
  if (rsk) rsk.textContent = skipped;

  animateRing('ring-' + subId, pct);
}

function animateRing(ringId, pct) {
  const ring = document.getElementById(ringId);
  if (!ring) return;

  const circumference = 326.7;
  const offset = circumference * (1 - pct / 100);

  if (pct >= 80)      ring.style.stroke = 'var(--g300)';
  else if (pct >= 60) ring.style.stroke = 'var(--a200)';
  else                ring.style.stroke = 'var(--r200)';

  setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);
}

function resetSub(subId) {
  const sub = SUBMODULES[subId];
  const s   = STATE.scores[subId];

  STATE.totalCorrect  -= s.correct;
  STATE.totalAnswered -= s.answered;
  STATE.scores[subId] = { correct: 0, wrong: 0, skipped: 0, answered: 0 };

  sub.questions.forEach((_, qi) => { delete STATE[subId + '-' + qi]; });

  renderQuiz(subId);

  const resultEl = document.getElementById('result-' + subId);
  if (resultEl) resultEl.classList.remove('show');

  updateCounter(subId);
  updateGlobalScore();

  const qz = document.getElementById('qz-' + subId);
  if (qz) qz.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ════════════════════════════════════════════════════════════════
// SCROLL REVEAL
// ════════════════════════════════════════════════════════════════

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight + 100;
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('vis');
    });
  }, { rootMargin: '0px 0px -50px 0px', threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Panel aktif langsung visible
  document.querySelectorAll('#p0 .reveal').forEach(el => el.classList.add('vis'));
}

// ════════════════════════════════════════════════════════════════
// ANCHOR SMOOTH SCROLL
// ════════════════════════════════════════════════════════════════

document.addEventListener('click', function(e) {
  const anchor = e.target.closest('a.mod-nav-btn');
  if (anchor && anchor.hash) {
    e.preventDefault();
    const target = document.querySelector(anchor.hash);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// ════════════════════════════════════════════════════════════════
// AUTO-UNLOCK jika sudah bayar sebelumnya
// ════════════════════════════════════════════════════════════════

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('kdkmp_access') === 'granted') {
    unlockApp();
  }

  const verifInput = document.getElementById('verifInput');
  if (verifInput) {
    verifInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doVerify();
    });
  }
});