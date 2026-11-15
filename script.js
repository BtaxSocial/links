/* =========================================================
   עריכת תוכן — זה החלק היחיד שצריך לשנות בדרך כלל
   ========================================================= */

/**
 * רשימת המדריכים. כל פריט יוצג ככרטיס, לפי הסדר.
 *  title       — שם המדריך
 *  description — תיאור קצר. כדי שכמה מילים לא ייחתכו בין שורות,
 *                מחברים אותן ב-  במקום רווח, למשל: "שלב אחרי שלב"
 *  icon        — שם אייקון מתוך ICONS שבהמשך הקובץ:
 *                home | family | will | coins | layers | scale | key | building | document | bell
 *  url         — כתובת הקישור (כרגע "#" — להחליף בכתובת האמיתית)
 *                להורדת קובץ: שמים את הקובץ בתיקייה assets/guides וכותבים את הנתיב,
 *                למשל "assets/guides/rental.pdf". כרטיס שמפנה לקובץ (PDF וכו')
 *                יוריד את הקובץ ויציג אייקון הורדה במקום חץ.
 *  featured    — true = כרטיס מודגש בזהב
 *  comingSoon  — true = כרטיס "בקרוב": לא לחיץ, עם תווית "בקרוב" במקום חץ.
 *                כשהמדריך מוכן: מוחקים את השורה הזו וממלאים url.
 */
const GUIDES = [
  {
    title: "מדריך שכירות",
    description: "מה לבדוק לפני שמשכירים את הדירה",
    icon: "home",
    url: "assets/guides/landlords-guide.pdf",
    featured: false,
  },
  {
    title: "מדריך התראות בטאבו",
    description: "כך תפעילו את שירות ההתראות של הטאבו, שלב אחרי שלב",
    icon: "bell",
    url: "assets/guides/tabu-alerts-guide.pdf",
    featured: false,
  },
  {
    title: "מדריך העברה בין-דורית",
    description: "להעביר את הרכוש לדור הבא בלי סכסוכים ובלי מס מיותר",
    icon: "family",
    url: "",
    featured: false,
    comingSoon: true,
  },
  {
    title: "לאתר של עו״ד אבי בקר",
    description: "משרד עורכי דין אברהם בקר",
    icon: "globe",
    url: "https://www.abecker-law.co.il/",
    featured: true,
  },
];

/**
 * קישורי התחתית. label משמש כטקסט נגיש לקוראי מסך.
 * icon: globe | whatsapp | facebook | youtube | instagram | tiktok
 * לוואטסאפ: "https://wa.me/972XXXXXXXXX" (מספר בפורמט בינלאומי, בלי 0 ובלי מקפים)
 */
const SOCIALS = [
  { label: "WhatsApp", icon: "whatsapp", url: "#" }, // TODO: https://wa.me/972...
  { label: "Facebook", icon: "facebook", url: "https://www.facebook.com/bybqr.132528/?locale=he_IL" },
  { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/avi.becker.lawyer/" },
  { label: "TikTok", icon: "tiktok", url: "https://www.tiktok.com/@abeckerlaw" },
];

/* =========================================================
   אייקונים (SVG קווי, 24×24, צבע לפי currentColor)
   ========================================================= */
const ICONS = {
  home: '<path d="M3 11.2 12 3.8l9 7.4"/><path d="M5.5 9.3V20h13V9.3"/><path d="M10 20v-5.5h4V20"/>',
  family:
    '<circle cx="12" cy="6.3" r="2.6"/><circle cx="5.2" cy="9" r="2.1"/><circle cx="18.8" cy="9" r="2.1"/>' +
    '<path d="M7.6 20v-3.6a4.4 4.4 0 0 1 8.8 0V20"/><path d="M1.8 20v-2.6a3.4 3.4 0 0 1 5.3-2.8"/><path d="M22.2 20v-2.6a3.4 3.4 0 0 0-5.3-2.8"/>',
  will:
    '<path d="M15 3.5H5.5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5"/>' +
    '<path d="M7.5 8h6M7.5 11.5h4.5M7.5 15h3"/>' +
    '<path d="M21.5 3c-4.2.6-7.4 3.6-8.4 8.9l-.6 3.1 2.2-2.1c4.4-1.2 6.4-5 6.8-9.9z"/><path d="M12.5 15l4-5"/>',
  coins:
    '<ellipse cx="15.5" cy="5.5" rx="5" ry="2"/><path d="M10.5 5.5v3c0 1.1 2.2 2 5 2s5-.9 5-2v-3"/><path d="M10.5 8.5v3c0 1.1 2.2 2 5 2s5-.9 5-2v-3"/>' +
    '<path d="M20.5 11.5v3c0 1.1-2.2 2-5 2"/>' +
    '<ellipse cx="8.5" cy="13" rx="5" ry="2"/><path d="M3.5 13v3c0 1.1 2.2 2 5 2s5-.9 5-2v-3"/><path d="M3.5 16v3c0 1.1 2.2 2 5 2s5-.9 5-2v-3"/>',
  layers:
    '<path d="M12 3.5 21.5 8.3 12 13.1 2.5 8.3z"/><path d="m2.5 12.2 9.5 4.8 9.5-4.8"/><path d="m2.5 16.1 9.5 4.8 9.5-4.8"/>',
  scale:
    '<path d="M12 3.5v17M8 20.5h8M12 5.5 5 7.3M12 5.5l7 1.8"/><path d="M5 7.3 2.3 13.5h5.4zM19 7.3l-2.7 6.2h5.4z"/><path d="M2.3 13.5a2.7 1.7 0 0 0 5.4 0M16.3 13.5a2.7 1.7 0 0 0 5.4 0"/>',
  key: '<circle cx="8" cy="15" r="4.5"/><path d="m11.2 11.8 9.3-9.3M17.5 5.5l2.5 2.5M15 8l2 2"/>',
  building:
    '<path d="M4 21V4.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1V21"/><path d="M15 9.5h4a1 1 0 0 1 1 1V21M2.5 21h19"/><path d="M7.5 7.5h1M10.5 7.5h1M7.5 11h1M10.5 11h1M7.5 14.5h1M10.5 14.5h1M8.5 21v-3h2v3"/>',
  document:
    '<path d="M14 3.5H6.5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8z"/><path d="M14 3.5V8h4.5M8.5 12.5h7M8.5 16h5"/>',
  bell:
    '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/><path d="M12 3v2"/>',
  chevron: '<path d="m14.5 5.5-6.5 6.5 6.5 6.5"/>',
  download: '<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14"/>',

  globe:
    '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.5 5.3 3.5 8.5s-1.1 6.1-3.5 8.5c-2.4-2.4-3.5-5.3-3.5-8.5S9.6 5.9 12 3.5z"/>',
  whatsapp:
    '<path d="M4.2 19.8 5.3 16a8.3 8.3 0 1 1 2.9 2.8z"/>' +
    '<path d="M9.2 8.2c.3-.4.7-.4 1-.2l.9 2c.1.3 0 .5-.2.7l-.5.6c.6 1.3 1.6 2.3 2.9 2.9l.6-.6c.2-.2.5-.3.7-.2l2 .9c.3.2.3.6-.1 1-.6.7-1.5 1-2.4.7a8 8 0 0 1-5.1-5.1c-.3-.9 0-1.8.7-2.4z"/>',
  facebook:
    '<path d="M14.5 7.5h2.5V3.8h-2.8c-2.8 0-4.4 1.8-4.4 4.6V11H7.5v3.7h2.3v6.5h3.8v-6.5h2.9l.5-3.7h-3.4V9c0-1 .4-1.5 1.4-1.5z"/>',
  youtube:
    '<rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="M10.2 9.3v5.4l4.6-2.7z" fill="currentColor"/>',
  instagram:
    '<rect x="3.5" y="3.5" width="17" height="17" rx="4.8"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/>',
  tiktok:
    '<path d="M13.5 3.5v11.3a3.3 3.3 0 1 1-3.3-3.3"/><path d="M13.5 3.5c.3 2.6 2.1 4.4 4.9 4.6"/>',
};

/* =========================================================
   יצירת הכרטיסים — אין צורך לשנות מכאן והלאה
   ========================================================= */
function svgIcon(name, className) {
  const body = ICONS[name] || ICONS.document;
  return (
    `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" ` +
    `stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`
  );
}

/* ב-Samsung Internet מצב לילה מעמעם מסגרות ורקעים, אבל לא קווי SVG —
   לכן שם החץ מוצג בתוך עיגול SVG, כדי שיהיה ברור שהכרטיס לחיץ. */
const IS_SAMSUNG = document.documentElement.classList.contains("is-samsung");

function arrowIcon(name) {
  if (!IS_SAMSUNG) return svgIcon(name, "icon");
  return (
    `<svg class="icon icon--ring" viewBox="-7 -7 38 38" fill="none" stroke="currentColor" ` +
    `stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">` +
    `<circle cx="12" cy="12" r="18"/>${ICONS[name]}</svg>`
  );
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function linkAttrs(url) {
  const safe = escapeHtml(url || "#");
  const external = /^https?:\/\//i.test(url || "");
  return `href="${safe}"` + (external ? ' target="_blank" rel="noopener"' : "");
}

const FILE_RE = /\.(pdf|docx?|pptx?|xlsx?|zip)(?:[?#].*)?$/i;

function isFile(url) {
  return FILE_RE.test(url || "");
}

function renderGuides() {
  const list = document.getElementById("guides");
  if (!list) return;
  list.innerHTML = GUIDES.map((g) => {
    if (g.comingSoon) {
      return (
        `<li><div class="card card--soon" aria-label="${escapeHtml(g.title + " – " + g.description + " (בקרוב)")}" role="group">` +
        `<span class="card__icon">${svgIcon(g.icon, "icon")}</span>` +
        `<span class="card__text">` +
        `<span class="card__title">${escapeHtml(g.title)}</span>` +
        `<span class="card__desc">${escapeHtml(g.description)}</span>` +
        `</span>` +
        `<span class="card__badge" aria-hidden="true">בקרוב</span>` +
        `</div></li>`
      );
    }
    const cls = "card" + (g.featured ? " card--featured" : "");
    const file = isFile(g.url);
    const attrs = file
      ? `href="${escapeHtml(g.url)}" download="${escapeHtml(g.title + " - עו״ד אבי בקר." + g.url.match(FILE_RE)[1].toLowerCase())}" aria-label="${escapeHtml(g.title + " – " + g.description + " (הורדת קובץ)")}"`
      : linkAttrs(g.url);
    return (
      `<li><a class="${cls}" ${attrs}>` +
      `<span class="card__icon">${svgIcon(g.icon, "icon")}</span>` +
      `<span class="card__text">` +
      `<span class="card__title">${escapeHtml(g.title)}</span>` +
      `<span class="card__desc">${escapeHtml(g.description)}</span>` +
      `</span>` +
      `<span class="card__arrow${file ? " card__arrow--download" : ""}">${arrowIcon(file ? "download" : "chevron")}</span>` +
      `</a></li>`
    );
  }).join("");
}

function renderSocials() {
  const list = document.getElementById("socials");
  if (!list) return;
  list.innerHTML = SOCIALS.map(
    (s) =>
      `<li><a class="social" ${linkAttrs(s.url)} aria-label="${escapeHtml(s.label)}" title="${escapeHtml(s.label)}">` +
      `${svgIcon(s.icon, "icon")}</a></li>`
  ).join("");
}

renderGuides();
renderSocials();
