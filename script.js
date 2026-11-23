const yearLabel = document.querySelector("[data-current-year]");

if (yearLabel) {
  yearLabel.textContent = String(new Date().getFullYear());
}

// Messages follow the selected language (i18n.js defines window.portfolioT; English is the fallback).
const tr = (key, fallback) => (typeof window.portfolioT === "function" ? window.portfolioT(key, fallback) : fallback);

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const status = document.getElementById("cf-status");
  const button = document.getElementById("cf-submit");
  const nameField = contactForm.elements["name"];
  const emailField = contactForm.elements["email"];
  const messageField = contactForm.elements["message"];

  const setStatus = (text, kind) => {
    status.textContent = text;
    status.className = "contact-status" + (kind ? " is-" + kind : "");
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalid = null;
    [nameField, emailField, messageField].forEach((field) => {
      const value = field.value.trim();
      const bad = !value || (field.type === "email" && !/^\S+@\S+\.\S+$/.test(value));
      field.setAttribute("aria-invalid", bad ? "true" : "false");
      if (bad && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      setStatus(tr("form.err", "Check the highlighted fields: name, a valid email and your message are required."), "error");
      firstInvalid.focus();
      return;
    }

    button.disabled = true;
    setStatus(tr("form.sending", "Sending…"));

    fetch(contactForm.dataset.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
    })
      .then((response) => {
        if (!response.ok) throw new Error("Bad status");
        contactForm.reset();
        // reset() also clears the hidden language field, so restore it
        const langField = document.getElementById("cf-lang");
        if (langField) langField.value = document.documentElement.lang || "en";
        setStatus(tr("form.ok", "Message sent. I’ll reply within two working days."), "ok");
      })
      .catch(() => {
        setStatus(tr("form.fail", "The message didn’t go through. Try again, or message me on WhatsApp or LinkedIn."), "error");
      })
      .finally(() => {
        button.disabled = false;
      });
  });
}

// If the Fashion In Motion logo file is ever missing, show the text wordmark instead of a broken image.
document.querySelectorAll(".demo-logo").forEach((img) => {
  const showWordmark = () => {
    const mark = document.createElement("span");
    mark.className = "demo-mark";
    mark.setAttribute("role", "img");
    mark.setAttribute("aria-label", "Fashion In Motion logo");
    mark.innerHTML = 'FASHION<em>in MOTION</em>';
    img.replaceWith(mark);
  };
  img.addEventListener("error", showWordmark, { once: true });
  if (img.complete && img.naturalWidth === 0) showWordmark();
});

// Intro splash (every visit, about 4.4 s): particles gather into the "A/" monogram, morph into the name,
// then the screen opens in two halves. Skip with the button or Escape.
(function () {
  const root = document.documentElement;
  if (!root.classList.contains("intro-active")) return;

  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  let finished = false, raf = 0;
  const end = (fast) => {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(raf);
    if (fast) {
      root.classList.add("intro-leaving");
      setTimeout(() => root.classList.remove("intro-active", "intro-leaving"), 700);
    } else {
      root.classList.remove("intro-active");
    }
  };
  setTimeout(() => end(false), 4450);

  const count = document.getElementById("intro-count");
  const t0 = performance.now();

  // ---- particle canvas ----
  const canvas = document.getElementById("intro-canvas");
  const ctx = canvas && canvas.getContext && canvas.getContext("2d");
  if (ctx) {
    const FONT = '800 {s}px Inter, "Segoe UI", system-ui, -apple-system, sans-serif';
    const ORANGE = [242, 107, 61], WHITE = [255, 255, 255];
    let W = 0, H = 0, dpr = 1, N = 0, parts = [], phase = 0, pointer = null;

    const sample = (draw, step) => {
      const c = document.createElement("canvas");
      c.width = W; c.height = H;
      const x = c.getContext("2d");
      draw(x);
      const d = x.getImageData(0, 0, W, H).data, pts = [];
      for (let y = 0; y < H; y += step) for (let xx = 0; xx < W; xx += step) {
        const i = (y * W + xx) * 4;
        if (d[i + 3] > 140) pts.push([xx, yy(y), d[i], d[i + 1], d[i + 2]]);
      }
      return pts;
    };
    const yy = (y) => y;

    const monogram = (x) => {
      const fs = Math.min(W, H) * 0.34;
      x.font = FONT.replace("{s}", fs);
      const wa = x.measureText("A").width, ws = x.measureText("/").width, tot = wa + ws - fs * 0.08;
      const sx = (W - tot) / 2, base = H * 0.44 + fs * 0.34;
      x.fillStyle = "#fff"; x.fillText("A", sx, base);
      x.fillStyle = "rgb(242,107,61)"; x.fillText("/", sx + wa - fs * 0.08, base);
    };
    const nameText = (x) => {
      const text = "ASSER NAFTI";
      x.font = FONT.replace("{s}", 100);
      const adv = [...text].map((ch) => x.measureText(ch).width + 16);
      const total = adv.reduce((a, b) => a + b, 0) - 16;
      const fs = Math.min(100 * (W * 0.84) / total, 96, H * 0.16);
      x.font = FONT.replace("{s}", fs);
      const k = fs / 100;
      const tw = total * k;
      let px = (W - tw) / 2;
      const base = H * 0.44 + fs * 0.34;
      x.fillStyle = "#fff";
      [...text].forEach((ch, i) => { x.fillText(ch, px, base); px += adv[i] * k; });
    };

    const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
    let targets = [[], []];
    const build = () => {
      const step = W < 560 ? 3 : 2;
      targets = [shuffle(sample(monogram, step)), shuffle(sample(nameText, step))];
      N = Math.min(W < 560 ? 1900 : 3800, Math.max(targets[0].length, targets[1].length));
    };
    const assign = (ph, kick) => {
      const t = targets[ph];
      for (let i = 0; i < N; i++) {
        const p = parts[i], q = t[i % t.length];
        p.tx = q[0]; p.ty = q[1]; p.tr = q[2]; p.tg = q[3]; p.tb = q[4];
        if (kick) { p.vx += (Math.random() - 0.5) * 9; p.vy += (Math.random() - 0.5) * 9; }
      }
    };
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.round(canvas.clientWidth); H = Math.round(canvas.clientHeight);
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      const first = parts.length === 0;
      while (parts.length < N) {
        const a = Math.random() * 6.283, r = Math.max(W, H) * (0.55 + Math.random() * 0.5);
        parts.push({ x: W / 2 + Math.cos(a) * r, y: H / 2 + Math.sin(a) * r, vx: 0, vy: 0,
          k: 0.05 + Math.random() * 0.06, r: 255, g: 255, b: 255, tr: 255, tg: 255, tb: 255, tx: 0, ty: 0, s: 0.85 + Math.random() * 0.5 });
      }
      parts.length = N;
      assign(phase, false);
      if (first && reduce) parts.forEach((p) => { p.x = p.tx; p.y = p.ty; });
    };
    resize();
    window.addEventListener("resize", () => { if (!finished) resize(); });
    window.addEventListener("pointermove", (e) => { const r = canvas.getBoundingClientRect(); pointer = { x: e.clientX - r.left, y: e.clientY - r.top }; });

    const frame = (now) => {
      if (finished) return;
      const t = (now - t0) / 1000;
      if (phase === 0 && t > 1.55) { phase = 1; assign(1, !reduce); }
      ctx.clearRect(0, 0, W, H);
      const fade = Math.min(1, t / 0.5);
      for (let i = 0; i < N; i++) {
        const p = parts[i];
        const wob = phase === 1 && t > 2.4 ? 0.3 : 0.2;
        const tx = p.tx + Math.sin(t * 2 + i) * wob, ty = p.ty + Math.cos(t * 1.7 + i * 1.3) * wob;
        p.vx += (tx - p.x) * p.k; p.vy += (ty - p.y) * p.k;
        if (pointer) {
          const dx = p.x - pointer.x, dy = p.y - pointer.y, d2 = dx * dx + dy * dy;
          if (d2 < 6400 && d2 > 1) { const f = (80 - Math.sqrt(d2)) * 0.06; p.vx += dx / Math.sqrt(d2) * f; p.vy += dy / Math.sqrt(d2) * f; }
        }
        p.vx *= 0.82; p.vy *= 0.82; p.x += p.vx; p.y += p.vy;
        p.r += (p.tr - p.r) * 0.08; p.g += (p.tg - p.g) * 0.08; p.b += (p.tb - p.b) * 0.08;
        ctx.fillStyle = "rgba(" + (p.r | 0) + "," + (p.g | 0) + "," + (p.b | 0) + "," + fade + ")";
        ctx.fillRect(p.x, p.y, p.s * 1.5, p.s * 1.5);
      }
      if (count) {
        const p = Math.min(1, t / 3.3);
        count.textContent = Math.round((1 - Math.pow(1 - p, 2)) * 100) + "%";
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
  }

  const skip = document.getElementById("intro-skip");
  if (skip) {
    skip.addEventListener("click", () => end(true));
    skip.focus({ preventScroll: true });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") end(true);
  });
})();
