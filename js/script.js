// ===== DATA: edit di sini =====
const site = { email: "fairuzbaru43@gmail.com", whatsapp: "085755676126", github: "https://github.com/fairuzbaru43-blip", tiktok: "https://www.tiktok.com/@fyruz_10?is_from_webapp=1&sender_device=pc" }; // isi dengan tautan asli
const stack = [["HTML5", "HT", "Struktur web"], ["CSS3", "CS", "Layout & animasi"], ["JavaScript", "JS", "Interaksi & DOM"], ["Git", "Gt", "Version control"], ["GitHub", "GH", "Kolaborasi kode"]];
// Screenshot proyek diambil otomatis dari tautan demo; gambar lokal hanya menjadi cadangan.
const projects = [
  { title: "Website dengan HTML", desc: "Membuat website dengan full HTML.", tech: ["HTML"], image: "img/1.png", demo: "https://tugas1-kelasindustri-ubig.vercel.app/", repo: "https://github.com/fairuzbaru43-blip/tugas1-kelasindustri-ubig" },
  { title: "Website reponsif", desc: "Membuat website menjadi responsif.", tech: ["HTML", "CSS"], image: "img/2.png", demo: "https://tugas2-kelasindustri-ubig.vercel.app/", repo: "https://github.com/fairuzbaru43-blip/tugas2-kelasindustri-ubig" },
  { title: "Website dengan tombol interaktif", desc: "Membuat pop up dan tombol tema.", tech: ["HTML", "CSS", "javascript"], image: "img/3.png", demo: "https://tugas3-kelasindustri-ubig.vercel.app/", repo: "https://github.com/fairuzbaru43-blip/tugas3-kelasindustri-ubig" },
  { title: "Logika js", desc: "Membuat console website dari soal logika.", tech: ["HTML", "JavaScript"], image: "img/4.png", demo: "https://tugas4-kelasindustri-ubig.vercel.app/", repo: "https://github.com/fairuzbaru43-blip/tugas4-kelasindustri-ubig" },
  { title: "Logika js", desc: "Membuat console website dari soal logika.", tech: ["HTML", "JavaScript"], image: "img/4.png", demo: "https://tugas4-kelasindustri-ubig.vercel.app/", repo: "https://github.com/fairuzbaru43-blip/web-kelas" },
  { title: "Drivebox", desc: "Aplikasi untuk menyimpan dan mengelola file.", tech: ["Penyimpanan file", "Autentikasi"], image: "assets/project-previews/drivebox.png", demo: "https://d-on.vercel.app", repo: "https://github.com/fairuzbaru43-blip/filemanager" }
];
const journey = [["HTML & CSS Fundamentals", "Struktur dan gaya halaman."], ["JavaScript", "Membuat halaman interaktif."], ["Git & GitHub", "Mengelola versi kode."], ["Responsive Web Design", "Tampil baik di semua layar."], ["API Integration", "Mengambil dan menampilkan data."]];

// ===== HELPERS =====
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const httpsUrl = (value) => {
  const url = String(value || "").trim();
  if (!url) return "";
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
};
const add = (parent, tag, cls, html) => {
  const container = $(parent);
  if (!container) return;
  const element = document.createElement(tag);
  element.className = cls;
  element.innerHTML = html;
  container.append(element);
};
const ext = (url, label, cls = "") => url ? `<a class="btn ${cls}" href="${esc(httpsUrl(url))}" target="_blank" rel="noopener noreferrer">${label}<span class="arrow">↗</span></a>` : `<a class="btn ghost" role="link" aria-disabled="true" tabindex="-1">${label}</a>`;

// ===== RENDER =====
window.nextShot = (img) => {
  const rest = JSON.parse(img.dataset.srcs || "[]");
  if (rest.length) { img.dataset.srcs = JSON.stringify(rest.slice(1)); img.src = rest[0]; } else img.remove();
};
stack.forEach(([n, ab, d]) => add("#stack", "div", "tech reveal", `<b aria-hidden="true">${ab}</b><span>${n}<small>${d}</small></span>`));
projects.forEach((p) => {
  const demoUrl = httpsUrl(p.demo);
  // Gunakan gambar lokal jika diisi; jika tidak, ambil screenshot otomatis dari tautan demo.
  const u = encodeURIComponent(demoUrl);
  const sources = [
    p.image,
    demoUrl && `https://image.thum.io/get/width/1200/crop/750/noanimate/${demoUrl}`,
    demoUrl && `https://s.wordpress.com/mshots/v1/${u}?w=1200&h=750`,
    demoUrl && `https://api.microlink.io/?url=${u}&screenshot=true&meta=false&embed=screenshot.url`
  ].filter(Boolean);
  add("#works", "article", "work reveal", `
  <div class="thumb"><span>${esc(p.title)}</span>${sources.length ? `<img src="${esc(sources[0])}" data-srcs='${esc(JSON.stringify(sources.slice(1)))}' alt="Screenshot ${esc(p.title)}" loading="lazy" onload="this.parentElement.classList.add('has-image')" onerror="nextShot(this)">` : ""}</div>
  <div class="work-content"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
  <ul class="tags">${p.tech.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
  <div class="actions">${ext(p.demo, "Live Demo")}${ext(p.repo, "Source Code", "ghost")}</div></div>`);
});
journey.forEach(([t, d]) => add("#timeline", "li", "reveal", `<b>${esc(t)}</b><small>${esc(d)}</small>`));
const social = (href, n) => href ? `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${n}</a>` : "";
const heroSocials = $("#heroSocials");
if (heroSocials) heroSocials.innerHTML = social(site.github, "GitHub") + social(site.tiktok, "TikTok");
const contactIcons = {
  WhatsApp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.48 15.02L2.2 21.8l4.9-1.28A9.9 9.9 0 1 0 12.04 2Zm0 18.04a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-2.9.76.77-2.83-.2-.31a8.14 8.14 0 1 1 6.76 3.69Zm4.47-6.1c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.16 1.52.1.47-.07 1.43-.59 1.63-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/></svg>',
  Email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.2-.5L12 10.1 18.8 5H5.2Zm13.8 2-6.4 4.8a1 1 0 0 1-1.2 0L5 7v11.5c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V7Z"/></svg>',
  GitHub: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.31-3.76-1.31-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.7-1.47-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.34.75 1.02.75 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>',
  TikTok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 3c.5 2.3 2.1 3.8 4.4 4.1v4a11.1 11.1 0 0 1-4.4-1.4v6.1a6.7 6.7 0 1 1-6.7-6.7c.4 0 .8 0 1.2.1v4.2a2.6 2.6 0 1 0 1.4 2.4V3h4.1Z"/></svg>'
};
const contactItems = [
  ["WhatsApp", site.whatsapp ? "https://wa.me/" + site.whatsapp : ""],
  ["Email", site.email && site.email !== "emailanda@example.com" ? "mailto:" + site.email : ""],
  ["GitHub", site.github],
  ["TikTok", site.tiktok]
];
const contactLinks = $("#contactLinks");
if (contactLinks) contactLinks.innerHTML = contactItems.map(([name, href]) => {
  const available = Boolean(href);
  return `<a class="contact-link" ${available ? `href="${esc(href)}"${name !== "Email" ? ' target="_blank" rel="noopener noreferrer"' : ""}` : 'aria-disabled="true" tabindex="-1"'} aria-label="${name}${available ? "" : " (belum diatur)"}" title="${name}${available ? "" : " (belum diatur)"}">${contactIcons[name]}</a>`;
}).join("");
const getInTouch = $("#getInTouch");
if (getInTouch) {
  getInTouch.href = "https://wa.me/" + site.whatsapp;
  getInTouch.target = "_blank";
  getInTouch.rel = "noopener noreferrer";
}
const year = $("#year");
if (year) year.textContent = new Date().getFullYear();

// ===== TEMA =====
const root = document.documentElement;
const themeBtn = $("#themeBtn");
const updateThemeButton = () => {
  if (!themeBtn) return;
  const isDark = root.dataset.theme === "dark";
  themeBtn.textContent = isDark ? "\u2600" : "\u263e";
  themeBtn.setAttribute("aria-label", isDark ? "Ganti ke tema terang" : "Ganti ke tema gelap");
};
try {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") root.dataset.theme = savedTheme;
} catch (e) { }
updateThemeButton();
themeBtn?.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) { }
  updateThemeButton();
});

// ===== MENU =====
const burger = $("#menuBtn"), menu = $("#navMenu");
if (burger && menu) {
  burger.setAttribute("aria-controls", "navMenu");
  const setMenu = (open) => {
    menu.classList.toggle("show", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Tutup menu navigasi" : "Buka menu navigasi");
    burger.textContent = open ? "\u00d7" : "\u2630";
  };
  setMenu(false);
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("show")));
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
  document.addEventListener("click", (event) => {
    if (menu.classList.contains("show") && !menu.contains(event.target) && !burger.contains(event.target)) setMenu(false);
  });
}

// ===== REVEAL, NAV AKTIF, BACK TO TOP =====
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
  reveals.forEach((r) => io.observe(r));
} else reveals.forEach((r) => r.classList.add("in"));
const toTop = $("#toTop");
if (toTop) {
  addEventListener("scroll", () => { toTop.hidden = scrollY < 600; }, { passive: true });
  toTop.addEventListener("click", () => scrollTo({ top: 0 }));
}

// ===== FORM (WhatsApp Cloud API) =====
const contactForm = $("#contactForm");
contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target, v = (n) => f[n].value.trim();
  const rules = {
    name: v("name").length >= 2 ? "" : "Isi nama minimal 2 karakter.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email")) ? "" : "Masukkan alamat email yang valid.",
    message: v("message").length >= 10 ? "" : "Tulis pesan minimal 10 karakter."
  };
  let ok = true;
  Object.entries(rules).forEach(([k, m]) => { $("#err-" + k).textContent = m; f[k].setAttribute("aria-invalid", !!m); if (m) ok = false; });
  if (!ok) return;
  const button = f.querySelector('[type="submit"]');
  button.disabled = true;
  $("#formStatus").textContent = "Mengirim pesan...";
  fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: v("name"), email: v("email"), message: v("message") })
  })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Pesan gagal dikirim. Silakan coba lagi.");
      $("#formStatus").textContent = result.message;
      if (response.ok) f.reset();
    })
    .catch((error) => {
      $("#formStatus").textContent = error.message || "Pesan gagal dikirim. Silakan coba lagi.";
    })
    .finally(() => { button.disabled = false; });
});

// ===== NAVBAR: ACTIVE LINK =====
const navLinks = [...document.querySelectorAll(".nav-link")];
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateActiveNav() {
  if (!navSections.length) return;

  const atPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 220);
  let activeSection = navSections[0];

  if (atPageBottom) {
    activeSection = navSections[navSections.length - 1];
  } else {
    for (const section of navSections) {
      if (section.offsetTop <= marker) activeSection = section;
    }
  }

  navLinks.forEach((link) => {
    const isActive = link.hash === `#${activeSection.id}`;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

let navUpdateScheduled = false;
window.addEventListener("scroll", () => {
  if (navUpdateScheduled) return;
  navUpdateScheduled = true;
  window.requestAnimationFrame(() => {
    updateActiveNav();
    navUpdateScheduled = false;
  });
}, { passive: true });
window.addEventListener("resize", updateActiveNav);
window.addEventListener("hashchange", updateActiveNav);
updateActiveNav();
