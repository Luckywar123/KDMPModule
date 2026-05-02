// ════════════════════════════════════════════════════════════════
//  app.js — Modul CAT KDKMP Agrinas v4
//  Mengelola: paywall, quiz engine, progress, accordion, tabs, reveal
// ════════════════════════════════════════════════════════════════

'use strict';

// ── STATE GLOBAL ──
const STATE = {
  scores: {},       // { subId: { correct, wrong, skipped, answered } }
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

  // Tampilkan overlay verifikasi
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
          // Sukses
          document.getElementById('verifSpinner').style.display = 'none';
          document.getElementById('verifStatus').style.display = 'none';
          document.getElementById('verifSuccess').classList.add('show');
          localStorage.setItem('kdkmp_access', 'granted');
          setTimeout(() => unlockApp(), 1800);
        } else {
          // Gagal
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
  // Cek localStorage dulu
  if (localStorage.getItem('kdkmp_access') === 'granted') {
    unlockApp();
    return;
  }
  // Demo: langsung buka
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
// INIT APP
// ════════════════════════════════════════════════════════════════

function initApp() {
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

  // Cek akses tersimpan
  if (localStorage.getItem('kdkmp_access') === 'granted') {
    // sudah di unlock dari luar, no-op
  }
}

// ════════════════════════════════════════════════════════════════
// TAB NAVIGATION
// ════════════════════════════════════════════════════════════════

function showTab(idx) {
  // Sembunyikan semua panel
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ntab').forEach(t => t.classList.remove('active'));

  // Tampilkan panel yang dipilih
  const panel = document.getElementById('p' + idx);
  if (panel) {
    panel.classList.add('active');
    // Trigger reveal untuk panel ini
    setTimeout(() => {
      panel.querySelectorAll('.reveal').forEach(el => {
        if (isInViewport(el) || true) el.classList.add('vis');
      });
    }, 50);
  }

  // Aktifkan tab
  const tabs = document.querySelectorAll('.ntab');
  if (tabs[idx]) tabs[idx].classList.add('active');

  // Scroll ke atas
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

  // Disable semua opsi
  const labels = ['A', 'B', 'C', 'D'];
  for (let i = 0; i < q.opts.length; i++) {
    const btn = document.getElementById('opt-' + subId + '-' + qi + '-' + i);
    if (!btn) continue;
    btn.disabled = true;
    if (i === q.ans) btn.classList.add('cor');
    else if (i === selectedIdx && !isCorrect) btn.classList.add('wrg');
  }

  // Tampilkan penjelasan
  const expEl = document.getElementById('exp-' + subId + '-' + qi);
  if (expEl) {
    expEl.textContent = '💡 ' + q.exp;
    expEl.className = 'exp show ' + (isCorrect ? 'ok' : 'no');
  }

  // Tandai kartu sebagai dijawab
  const card = document.getElementById('qcard-' + subId + '-' + qi);
  if (card) card.classList.add('answered');

  // Update state (hanya jika belum dijawab)
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

  // Header score
  const gs = document.getElementById('gScore');
  const gt = document.getElementById('gTotal');
  if (gs) gs.textContent = correct;
  if (gt) gt.textContent = answered;

  // Progress bar
  const pct = total > 0 ? Math.round((answered / total) * 100) : 0;
  const fill = document.getElementById('progFill');
  const pctEl = document.getElementById('progPct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';

  // Float score
  const fs = document.getElementById('floatScore');
  const fScore = document.getElementById('fScore');
  const fTotal = document.getElementById('fTotal');
  if (fScore) fScore.textContent = correct;
  if (fTotal) fTotal.textContent = answered;
  if (fs) {
    if (answered > 0) fs.classList.add('show');
    else fs.classList.remove('show');
  }

  // Update tab dots untuk modul yang sudah selesai
  updateTabDots();
}

function getTotalQuestions() {
  return Object.values(SUBMODULES).reduce((sum, sub) => sum + sub.questions.length, 0);
}

function updateTabDots() {
  // Cek tiap modul apakah semua sub-modulnya selesai
  const moduleMap = {
    1: ['1a','1b','1c'],
    2: ['2a','2b'],
    3: ['3a','3b'],
    4: ['4a','4b'],
    5: ['5a','5b'],
  };

  const tabs = document.querySelectorAll('.ntab');

  Object.entries(moduleMap).forEach(([modIdx, subIds]) => {
    const tabIdx = parseInt(modIdx);
    const allDone = subIds.every(sid => {
      const s = STATE.scores[sid];
      return s && s.answered === SUBMODULES[sid].questions.length;
    });
    const anyAnswered = subIds.some(sid => {
      const s = STATE.scores[sid];
      return s && s.answered > 0;
    });

    if (tabs[tabIdx]) {
      if (allDone) tabs[tabIdx].classList.add('done');
      else tabs[tabIdx].classList.remove('done');
    }
  });
}

function checkSubComplete(subId) {
  const sub = SUBMODULES[subId];
  const s = STATE.scores[subId];

  if (s.answered >= sub.questions.length) {
    // Tampilkan result panel
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

  // Tampilkan panel
  resultEl.classList.add('show');
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Update angka
  const rn = document.getElementById('rn-' + subId);
  const rok = document.getElementById('rok-' + subId);
  const rno = document.getElementById('rno-' + subId);
  const rsk = document.getElementById('rsk-' + subId);
  if (rn) rn.textContent = s.correct;
  if (rok) rok.textContent = s.correct;
  if (rno) rno.textContent = s.wrong;
  if (rsk) rsk.textContent = skipped;

  // Animasikan ring
  animateRing('ring-' + subId, pct);
}

function animateRing(ringId, pct) {
  const ring = document.getElementById(ringId);
  if (!ring) return;

  const circumference = 326.7;
  const offset = circumference * (1 - pct / 100);

  // Set warna berdasarkan skor
  if (pct >= 80) ring.style.stroke = 'var(--g300)';
  else if (pct >= 60) ring.style.stroke = 'var(--a200)';
  else ring.style.stroke = 'var(--r200)';

  setTimeout(() => {
    ring.style.strokeDashoffset = offset;
  }, 100);
}

function resetSub(subId) {
  // Reset state
  const sub = SUBMODULES[subId];
  const s = STATE.scores[subId];

  // Kurangi dari total
  STATE.totalCorrect -= s.correct;
  STATE.totalAnswered -= s.answered;
  STATE.scores[subId] = { correct: 0, wrong: 0, skipped: 0, answered: 0 };

  // Hapus state jawaban per soal
  sub.questions.forEach((_, qi) => {
    delete STATE[subId + '-' + qi];
  });

  // Re-render quiz
  renderQuiz(subId);

  // Sembunyikan result
  const resultEl = document.getElementById('result-' + subId);
  if (resultEl) resultEl.classList.remove('show');

  // Update counter
  updateCounter(subId);
  updateGlobalScore();

  // Scroll ke atas quiz
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
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
      }
    });
  }, { rootMargin: '0px 0px -50px 0px', threshold: 0.05 });

  revealEls.forEach(el => observer.observe(el));

  // Segera visible untuk panel aktif
  document.querySelectorAll('#p0 .reveal').forEach(el => el.classList.add('vis'));
}

// ════════════════════════════════════════════════════════════════
// ANCHOR SMOOTH SCROLL (untuk mod-nav-btn)
// ════════════════════════════════════════════════════════════════

document.addEventListener('click', function(e) {
  const anchor = e.target.closest('a.mod-nav-btn');
  if (anchor && anchor.hash) {
    e.preventDefault();
    const target = document.querySelector(anchor.hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

// ════════════════════════════════════════════════════════════════
// AUTO-UNLOCK jika sudah bayar sebelumnya
// ════════════════════════════════════════════════════════════════

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('kdkmp_access') === 'granted') {
    unlockApp();
  }

  // Enter key pada input verifikasi
  const verifInput = document.getElementById('verifInput');
  if (verifInput) {
    verifInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doVerify();
    });
  }
});