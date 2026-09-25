"use strict";

/* =========================================================
   ToolBox
   Client Side Tools
========================================================= */


/* =========================================================
   HELPERS
========================================================= */

const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  [...document.querySelectorAll(selector)];


/* =========================================================
   TOOLS DATABASE
========================================================= */

const tools = [

  /* =========================
     TEXT
  ========================== */

  {
    id: "text-counter",
    name: "عداد الكلمات والحروف",
    icon: "🔢",
    category: "text",
    categoryName: "النصوص",
    description: "احسب الكلمات والحروف والأسطر والمسافات.",
    aliases: "word counter character counter",
    render: renderTextCounter
  },

  {
    id: "case-converter",
    name: "تحويل حالة النص",
    icon: "Aa",
    category: "text",
    categoryName: "النصوص",
    description: "حوّل النص إلى أحرف كبيرة أو صغيرة أو عنوان.",
    aliases: "uppercase lowercase",
    render: renderCaseConverter
  },

  {
    id: "remove-duplicates",
    name: "إزالة الأسطر المكررة",
    icon: "♻️",
    category: "text",
    categoryName: "النصوص",
    description: "احذف الأسطر المتكررة من النص.",
    aliases: "duplicate lines",
    render: renderRemoveDuplicates
  },

  {
    id: "sort-lines",
    name: "ترتيب الأسطر",
    icon: "↕️",
    category: "text",
    categoryName: "النصوص",
    description: "رتب الأسطر أبجديًا أو رقميًا.",
    render: renderSortLines
  },

  {
    id: "reverse-text",
    name: "عكس النص",
    icon: "🔄",
    category: "text",
    categoryName: "النصوص",
    description: "اعكس ترتيب الأحرف أو الأسطر.",
    render: renderReverseText
  },

  {
    id: "remove-empty-lines",
    name: "حذف الأسطر الفارغة",
    icon: "🧹",
    category: "text",
    categoryName: "النصوص",
    description: "احذف الأسطر والمسافات الفارغة.",
    render: renderRemoveEmptyLines
  },

  {
    id: "slug-generator",
    name: "مولد Slug",
    icon: "🔗",
    category: "text",
    categoryName: "النصوص",
    description: "حوّل العنوان إلى رابط مناسب للمواقع.",
    render: renderSlug
  },

  {
    id: "text-cleaner",
    name: "منظف النص",
    icon: "✨",
    category: "text",
    categoryName: "النصوص",
    description: "نظف النص من المسافات الزائدة والأسطر غير الضرورية.",
    render: renderTextCleaner
  },

  {
    id: "line-counter",
    name: "عداد الأسطر",
    icon: "📏",
    category: "text",
    categoryName: "النصوص",
    description: "احسب عدد الأسطر غير الفارغة في النص.",
    render: renderLineCounter
  },


  /* =========================
     DEVELOPER
  ========================== */

  {
    id: "json-formatter",
    name: "منسق JSON",
    icon: "{ }",
    category: "developer",
    categoryName: "البرمجة",
    description: "نسق JSON أو اضغطه وتحقق من صحته.",
    aliases: "json formatter minifier",
    render: renderJSON
  },

  {
    id: "base64",
    name: "Base64 Encoder / Decoder",
    icon: "64",
    category: "developer",
    categoryName: "البرمجة",
    description: "تشفير وفك ترميز النص باستخدام Base64.",
    render: renderBase64
  },

  {
    id: "url-encoder",
    name: "URL Encoder",
    icon: "🌐",
    category: "developer",
    categoryName: "البرمجة",
    description: "ترميز وفك ترميز روابط URL.",
    render: renderURL
  },

  {
    id: "html-escape",
    name: "HTML Escape",
    icon: "</>",
    category: "developer",
    categoryName: "البرمجة",
    description: "تحويل رموز HTML إلى نص آمن والعكس.",
    render: renderHTMLEscape
  },

  {
    id: "regex-tester",
    name: "اختبار Regex",
    icon: ".*",
    category: "developer",
    categoryName: "البرمجة",
    description: "اختبر التعبيرات النمطية مباشرة.",
    render: renderRegex
  },

  {
    id: "timestamp",
    name: "Unix Timestamp",
    icon: "⏱️",
    category: "developer",
    categoryName: "البرمجة",
    description: "حوّل الوقت بين Timestamp والتاريخ.",
    render: renderTimestamp
  },

  {
    id: "color-code",
    name: "محول HEX / RGB",
    icon: "🎨",
    category: "developer",
    categoryName: "البرمجة",
    description: "حوّل الألوان بين HEX وRGB.",
    render: renderColorCode
  },


  /* =========================
     SECURITY
  ========================== */

  {
    id: "password-generator",
    name: "مولد كلمات المرور",
    icon: "🔐",
    category: "security",
    categoryName: "الأمان",
    description: "أنشئ كلمات مرور قوية وعشوائية.",
    render: renderPassword
  },

  {
    id: "uuid-generator",
    name: "مولد UUID",
    icon: "🆔",
    category: "security",
    categoryName: "الأمان",
    description: "أنشئ UUID v4 عشوائيًا.",
    render: renderUUID
  },

  {
    id: "sha256",
    name: "SHA-256",
    icon: "#",
    category: "security",
    categoryName: "الأمان",
    description: "أنشئ بصمة SHA-256 للنص محليًا.",
    render: renderSHA256
  },

  {
    id: "random-token",
    name: "مولد Random Token",
    icon: "🎲",
    category: "security",
    categoryName: "الأمان",
    description: "أنشئ رموزًا عشوائية بصيغة Hex أو Base64.",
    render: renderRandomToken
  },

  {
    id: "password-strength",
    name: "فحص قوة كلمة المرور",
    icon: "🛡️",
    category: "security",
    categoryName: "الأمان",
    description: "قيّم قوة كلمة المرور محليًا.",
    render: renderPasswordStrength
  },


  /* =========================
     IMAGE
  ========================== */

  {
    id: "image-resizer",
    name: "تغيير حجم الصور",
    icon: "📐",
    category: "image",
    categoryName: "الصور",
    description: "غيّر أبعاد الصورة وحمّل النسخة الجديدة.",
    render: renderImageResizer
  },

  {
    id: "image-converter",
    name: "تحويل الصور",
    icon: "🖼️",
    category: "image",
    categoryName: "الصور",
    description: "حوّل الصور بين PNG وJPG وWEBP.",
    render: renderImageConverter
  },

  {
    id: "image-compressor",
    name: "ضغط الصور",
    icon: "📦",
    category: "image",
    categoryName: "الصور",
    description: "قلل حجم الصورة داخل المتصفح.",
    render: renderImageCompressor
  },

  {
    id: "image-info",
    name: "معلومات الصورة",
    icon: "ℹ️",
    category: "image",
    categoryName: "الصور",
    description: "اعرض نوع الصورة وحجمها وأبعادها.",
    render: renderImageInfo
  },

  {
    id: "image-flip",
    name: "قلب الصورة",
    icon: "↔️",
    category: "image",
    categoryName: "الصور",
    description: "اقلب الصورة أفقيًا أو عموديًا.",
    render: renderImageFlip
  },

  {
    id: "image-rotate",
    name: "تدوير الصورة",
    icon: "⟳",
    category: "image",
    categoryName: "الصور",
    description: "دوّر الصورة بزاوية 90 أو 180 أو 270 درجة.",
    render: renderImageRotate
  },


  /* =========================
     FILE
  ========================== */

  {
    id: "text-download",
    name: "حفظ النص كملف",
    icon: "💾",
    category: "file",
    categoryName: "الملفات",
    description: "اكتب نصًا واحفظه كملف TXT.",
    render: renderTextDownload
  },

  {
    id: "text-file-reader",
    name: "قارئ الملفات النصية",
    icon: "📄",
    category: "file",
    categoryName: "الملفات",
    description: "افتح ملفات TXT أو CSV محليًا.",
    render: renderTextFileReader
  },

  {
    id: "json-csv",
    name: "JSON ↔ CSV",
    icon: "📊",
    category: "file",
    categoryName: "الملفات",
    description: "حوّل البيانات بين JSON وCSV.",
    render: renderJSONCSV
  },

  {
    id: "file-to-base64",
    name: "ملف إلى Base64",
    icon: "📦",
    category: "file",
    categoryName: "الملفات",
    description: "حوّل ملفًا محليًا إلى Base64.",
    render: renderFileToBase64
  },


  /* =========================
     CALCULATOR
  ========================== */

  {
    id: "percentage",
    name: "حاسبة النسبة المئوية",
    icon: "%",
    category: "calculator",
    categoryName: "الحسابات",
    description: "احسب النسبة المئوية بسهولة.",
    render: renderPercentage
  },

  {
    id: "discount",
    name: "حاسبة الخصم",
    icon: "🏷️",
    category: "calculator",
    categoryName: "الحسابات",
    description: "احسب السعر بعد الخصم ومقدار التوفير.",
    render: renderDiscount
  },

  {
    id: "age-calculator",
    name: "حاسبة العمر",
    icon: "🎂",
    category: "calculator",
    categoryName: "الحسابات",
    description: "احسب العمر بالسنوات والأشهر والأيام.",
    render: renderAge
  },

  {
    id: "bmi",
    name: "حاسبة BMI",
    icon: "⚖️",
    category: "calculator",
    categoryName: "الحسابات",
    description: "احسب مؤشر كتلة الجسم.",
    render: renderBMI
  },

  {
    id: "average",
    name: "حاسبة المتوسط",
    icon: "📈",
    category: "calculator",
    categoryName: "الحسابات",
    description: "احسب المتوسط الحسابي لمجموعة أرقام.",
    render: renderAverage
  },


  /* =========================
     UTILITY
  ========================== */

  {
    id: "random-number",
    name: "مولد الأرقام العشوائية",
    icon: "🎯",
    category: "utility",
    categoryName: "أدوات عامة",
    description: "ولّد رقمًا عشوائيًا بين حدين.",
    render: renderRandomNumber
  },

  {
    id: "color-generator",
    name: "مولد الألوان",
    icon: "🎨",
    category: "utility",
    categoryName: "أدوات عامة",
    description: "أنشئ ألوانًا عشوائية واحصل على HEX وRGB.",
    render: renderColor
  },

  {
    id: "unit-converter",
    name: "محول الوحدات",
    icon: "📏",
    category: "utility",
    categoryName: "أدوات عامة",
    description: "حوّل الطول والوزن والبيانات والحرارة.",
    render: renderUnits
  },

  {
    id: "time-calculator",
    name: "حاسبة الوقت",
    icon: "⏰",
    category: "utility",
    categoryName: "أدوات عامة",
    description: "اجمع أو اطرح الساعات والدقائق.",
    render: renderTimeCalculator
  }

];


/* =========================================================
   STORAGE
========================================================= */

const STORAGE = {

  favorites:
    "toolbox_favorites_v4",

  usage:
    "toolbox_usage_v4",

  recent:
    "toolbox_recent_v4",

  theme:
    "toolbox_theme_v4"

};


let favorites =
  getStorage(
    STORAGE.favorites,
    []
  );

let usage =
  getStorage(
    STORAGE.usage,
    {}
  );

let recent =
  getStorage(
    STORAGE.recent,
    []
  );


let currentCategory = "all";
let currentTool = null;


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    $("#year").textContent =
      new Date().getFullYear();

    initTheme();
    initEvents();

    renderTools();
    renderFavorites();
    renderRecent();
    updateStats();

    checkHash();

  }
);


/* =========================================================
   EVENTS
========================================================= */

function initEvents() {

  $("#searchInput")
    .addEventListener(
      "input",
      renderTools
    );


  $("#sortSelect")
    .addEventListener(
      "change",
      renderTools
    );


  $("#categories")
    .addEventListener(
      "click",
      event => {

        const button =
          event.target.closest(
            ".category-btn"
          );

        if (!button) return;

        $$(".category-btn")
          .forEach(btn =>
            btn.classList.remove(
              "active"
            )
          );

        button.classList.add(
          "active"
        );

        currentCategory =
          button.dataset.category;

        renderTools();

      }
    );


  $("#themeBtn")
    .addEventListener(
      "click",
      toggleTheme
    );


  $("#menuBtn")
    .addEventListener(
      "click",
      () => {

        $("#mainNav")
          .classList
          .toggle("open");

      }
    );


  $$("nav a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          $("#mainNav")
            .classList
            .remove("open");

        }
      );

    });


  $$(".quick-tags button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          $("#searchInput").value =
            button.dataset.search;

          document
            .getElementById("tools")
            .scrollIntoView({
              behavior: "smooth"
            });

          renderTools();

        }
      );

    });


  $("#clearSearch")
    .addEventListener(
      "click",
      () => {

        $("#searchInput").value = "";

        currentCategory = "all";

        $$(".category-btn")
          .forEach(btn =>
            btn.classList.remove(
              "active"
            )
          );

        document
          .querySelector(
            '[data-category="all"]'
          )
          .classList
          .add("active");

        renderTools();

      }
    );


  $("#closeModal")
    .addEventListener(
      "click",
      closeModal
    );


  $("#modalOverlay")
    .addEventListener(
      "click",
      closeModal
    );


  $("#shareToolBtn")
    .addEventListener(
      "click",
      shareCurrentTool
    );


  $("#modalFavoriteBtn")
    .addEventListener(
      "click",
      () => {

        if (!currentTool) return;

        toggleFavorite(
          currentTool.id
        );

        updateModalFavorite();

        renderTools();
        renderFavorites();
        updateStats();

      }
    );


  $("#clearRecent")
    .addEventListener(
      "click",
      () => {

        recent = [];

        saveStorage(
          STORAGE.recent,
          recent
        );

        renderRecent();

        showToast(
          "تم مسح سجل الاستخدام"
        );

      }
    );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {
        closeModal();
      }

      if (
        event.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA" &&
        !$("#toolModal").classList.contains("open")
      ) {

        event.preventDefault();

        $("#searchInput").focus();

      }

    }
  );


  window.addEventListener(
    "hashchange",
    checkHash
  );

}


/* =========================================================
   THEME
========================================================= */

function initTheme() {

  const saved =
    localStorage.getItem(
      STORAGE.theme
    );

  if (saved === "dark") {

    document.body.classList.add(
      "dark"
    );

    $("#themeBtn").textContent =
      "☀️";

  } else {

    $("#themeBtn").textContent =
      "🌙";

  }

}


function toggleTheme() {

  const dark =
    document.body.classList
      .toggle("dark");

  localStorage.setItem(
    STORAGE.theme,
    dark ? "dark" : "light"
  );

  $("#themeBtn").textContent =
    dark ? "☀️" : "🌙";

}


/* =========================================================
   RENDER TOOLS
========================================================= */

function renderTools() {

  const grid =
    $("#toolsGrid");

  const query =
    $("#searchInput")
      .value
      .trim()
      .toLowerCase();


  let filtered =
    tools.filter(tool => {

      const categoryMatch =
        currentCategory === "all" ||
        tool.category === currentCategory;

      const searchable =
        `${tool.name}
        ${tool.description}
        ${tool.categoryName}
        ${tool.aliases || ""}
        ${tool.id}`
          .toLowerCase();

      const searchMatch =
        !query ||
        searchable.includes(query);

      return (
        categoryMatch &&
        searchMatch
      );

    });


  const sort =
    $("#sortSelect").value;


  if (sort === "name") {

    filtered.sort(
      (a, b) =>
        a.name.localeCompare(
          b.name,
          "ar"
        )
    );

  }


  if (sort === "usage") {

    filtered.sort(
      (a, b) =>
        (usage[b.id] || 0) -
        (usage[a.id] || 0)
    );

  }


  if (sort === "favorites") {

    filtered.sort(
      (a, b) =>
        Number(
          favorites.includes(b.id)
        ) -
        Number(
          favorites.includes(a.id)
        )
    );

  }


  grid.innerHTML =
    filtered
      .map(toolCard)
      .join("");


  $("#noResults")
    .classList
    .toggle(
      "hidden",
      filtered.length !== 0
    );


  $("#resultInfo")
    .textContent =
      `عرض ${filtered.length} من أصل ${tools.length} أداة`;


  bindToolCards(grid);

}


/* =========================================================
   TOOL CARD
========================================================= */

function toolCard(tool) {

  const isFavorite =
    favorites.includes(
      tool.id
    );

  const count =
    usage[tool.id] || 0;


  return `

    <article class="tool-card">

      <div class="tool-top">

        <div class="tool-icon">
          ${escapeHTML(tool.icon)}
        </div>

        <button
          class="favorite-btn ${isFavorite ? "active" : ""}"
          data-id="${tool.id}"
          type="button"
          title="${
            isFavorite
              ? "إزالة من المفضلة"
              : "إضافة إلى المفضلة"
          }"
          aria-label="${
            isFavorite
              ? "إزالة من المفضلة"
              : "إضافة إلى المفضلة"
          }"
        >
          ${isFavorite ? "★" : "☆"}
        </button>

      </div>

      <h3>
        ${escapeHTML(tool.name)}
      </h3>

      <p>
        ${escapeHTML(tool.description)}
      </p>

      <div class="tool-bottom">

        <span class="tool-category">
          ${escapeHTML(tool.categoryName)}
        </span>

        <span class="tool-usage">
          ${count} استخدام
        </span>

      </div>

      <button
        class="open-tool"
        data-id="${tool.id}"
        type="button"
      >
        فتح الأداة
      </button>

    </article>

  `;
}


/* =========================================================
   BIND CARDS
========================================================= */

function bindToolCards(container) {

  container
    .querySelectorAll(
      ".open-tool"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          openTool(
            button.dataset.id
          );

        }
      );

    });


  container
    .querySelectorAll(
      ".favorite-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        event => {

          event.stopPropagation();

          toggleFavorite(
            button.dataset.id
          );

          renderTools();
          renderFavorites();
          updateStats();

        }
      );

    });

}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

  if (
    favorites.includes(id)
  ) {

    favorites =
      favorites.filter(
        item => item !== id
      );

    showToast(
      "تم حذف الأداة من المفضلة"
    );

  } else {

    favorites.push(id);

    showToast(
      "تمت إضافة الأداة إلى المفضلة ⭐"
    );

  }

  saveStorage(
    STORAGE.favorites,
    favorites
  );

}


function renderFavorites() {

  const grid =
    $("#favoritesGrid");

  const favTools =
    tools.filter(
      tool =>
        favorites.includes(
          tool.id
        )
    );


  if (!favTools.length) {

    grid.innerHTML = "";

    $("#emptyFavorites")
      .classList
      .remove("hidden");

    return;

  }


  $("#emptyFavorites")
    .classList
    .add("hidden");


  grid.innerHTML =
    favTools
      .map(toolCard)
      .join("");


  bindToolCards(grid);

}


/* =========================================================
   RECENT
========================================================= */

function addRecent(id) {

  recent =
    recent.filter(
      item => item !== id
    );

  recent.unshift(id);

  recent =
    recent.slice(0, 6);

  saveStorage(
    STORAGE.recent,
    recent
  );

}


function renderRecent() {

  const section =
    $("#recentSection");

  const grid =
    $("#recentGrid");


  const recentTools =
    recent
      .map(id =>
        tools.find(
          tool =>
            tool.id === id
        )
      )
      .filter(Boolean);


  if (!recentTools.length) {

    section.classList
      .add("hidden");

    return;

  }


  section.classList
    .remove("hidden");


  grid.innerHTML =
    recentTools
      .map(toolCard)
      .join("");


  bindToolCards(grid);

}


/* =========================================================
   STATS
========================================================= */

function updateStats() {

  $("#toolsCount")
    .textContent =
    tools.length;

  $("#favoriteCount")
    .textContent =
    favorites.length;

}


/* =========================================================
   OPEN TOOL
========================================================= */

function openTool(id) {

  const tool =
    tools.find(
      item => item.id === id
    );

  if (!tool) return;


  currentTool =
    tool;


  usage[id] =
    (usage[id] || 0) + 1;


  saveStorage(
    STORAGE.usage,
    usage
  );


  addRecent(id);


  $("#modalTitle")
    .textContent =
    tool.name;

  $("#modalCategory")
    .textContent =
    tool.categoryName;


  $("#modalBody")
    .innerHTML = "";


  tool.render(
    $("#modalBody")
  );


  $("#toolModal")
    .classList
    .add("open");


  $("#toolModal")
    .setAttribute(
      "aria-hidden",
      "false"
    );


  document.body
    .classList
    .add("modal-open");


  updateModalFavorite();


  history.replaceState(
    null,
    "",
    `#tool/${tool.id}`
  );


  renderTools();
  renderRecent();

}


function closeModal() {

  $("#toolModal")
    .classList
    .remove("open");

  $("#toolModal")
    .setAttribute(
      "aria-hidden",
      "true"
    );

  document.body
    .classList
    .remove("modal-open");

  currentTool = null;


  if (
    location.hash.startsWith(
      "#tool/"
    )
  ) {

    history.replaceState(
      null,
      "",
      "#tools"
    );

  }

}


function checkHash() {

  const hash =
    location.hash;


  if (
    hash.startsWith(
      "#tool/"
    )
  ) {

    const id =
      decodeURIComponent(
        hash.substring(6)
      );

    const tool =
      tools.find(
        item =>
          item.id === id
      );

    if (tool) {

      openToolWithoutChangingHash(
        id
      );

    }

  } else {

    if (
      $("#toolModal")
        .classList
        .contains("open")
    ) {

      $("#toolModal")
        .classList
        .remove("open");

      document.body
        .classList
        .remove("modal-open");

    }

  }

}


function openToolWithoutChangingHash(id) {

  const tool =
    tools.find(
      item => item.id === id
    );

  if (!tool) return;


  currentTool =
    tool;


  $("#modalTitle")
    .textContent =
    tool.name;

  $("#modalCategory")
    .textContent =
    tool.categoryName;

  $("#modalBody")
    .innerHTML = "";


  tool.render(
    $("#modalBody")
  );


  $("#toolModal")
    .classList
    .add("open");

  $("#toolModal")
    .setAttribute(
      "aria-hidden",
      "false"
    );

  document.body
    .classList
    .add("modal-open");

  updateModalFavorite();

}


/* =========================================================
   MODAL FAVORITE
========================================================= */

function updateModalFavorite() {

  if (!currentTool) return;

  const active =
    favorites.includes(
      currentTool.id
    );

  $("#modalFavoriteBtn")
    .textContent =
    active ? "★" : "☆";

}


/* =========================================================
   SHARE
========================================================= */

async function shareCurrentTool() {

  if (!currentTool) return;


  const url =
    location.href;

  const data = {

    title:
      currentTool.name,

    text:
      `${currentTool.name} - ToolBox`,

    url

  };


  try {

    if (
      navigator.share
    ) {

      await navigator.share(
        data
      );

      showToast(
        "تم فتح المشاركة"
      );

    } else {

      await copyText(url);

    }

  } catch (error) {

    if (
      error.name !==
      "AbortError"
    ) {

      showToast(
        "تعذر مشاركة الرابط"
      );

    }

  }

}


/* =========================================================
   TEXT COUNTER
========================================================= */

function renderTextCounter(container) {

  container.innerHTML = `

    <div class="tool-form">

      <div class="field">

        <label>
          النص
        </label>

        <textarea
          id="counterText"
          placeholder="اكتب أو الصق النص هنا..."
        ></textarea>

      </div>

      <div class="result-grid">

        <div class="result-stat">
          <strong id="counterWords">0</strong>
          <span>كلمة</span>
        </div>

        <div class="result-stat">
          <strong id="counterChars">0</strong>
          <span>حرف</span>
        </div>

        <div class="result-stat">
          <strong id="counterLines">0</strong>
          <span>سطر</span>
        </div>

        <div class="result-stat">
          <strong id="counterNoSpaces">0</strong>
          <span>بدون مسافات</span>
        </div>

      </div>

    </div>

  `;


  $("#counterText")
    .addEventListener(
      "input",
      update
    );


  function update() {

    const text =
      $("#counterText")
        .value;


    const words =
      text.trim()
        ? text.trim().split(/\s+/).length
        : 0;


    const lines =
      text
        ? text.split(/\r?\n/).length
        : 0;


    $("#counterWords")
      .textContent =
      words;

    $("#counterChars")
      .textContent =
      text.length;

    $("#counterLines")
      .textContent =
      lines;

    $("#counterNoSpaces")
      .textContent =
      text.replace(/\s/g, "")
        .length;

  }

}


/* =========================================================
   CASE CONVERTER
========================================================= */

function renderCaseConverter(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="caseInput"
        placeholder="اكتب النص هنا..."
      ></textarea>

      <div class="form-row">

        <button
          class="btn btn-primary"
          id="caseUpper"
        >
          أحرف كبيرة
        </button>

        <button
          class="btn btn-primary"
          id="caseLower"
        >
          أحرف صغيرة
        </button>

      </div>

      <div class="form-row">

        <button
          class="btn btn-primary"
          id="caseTitle"
        >
          Title Case
        </button>

        <button
          class="btn btn-success"
          id="caseCopy"
        >
          نسخ
        </button>

      </div>

      <textarea
        id="caseOutput"
        readonly
        placeholder="النتيجة..."
      ></textarea>

    </div>

  `;


  $("#caseUpper").onclick =
    () =>
      transform(
        text =>
          text.toUpperCase()
      );


  $("#caseLower").onclick =
    () =>
      transform(
        text =>
          text.toLowerCase()
      );


  $("#caseTitle").onclick =
    () =>
      transform(
        text =>
          text
            .toLowerCase()
            .replace(
              /\b\w/g,
              char =>
                char.toUpperCase()
            )
      );


  $("#caseCopy").onclick =
    () =>
      copyText(
        $("#caseOutput").value
      );


  function transform(fn) {

    $("#caseOutput")
      .value =
      fn(
        $("#caseInput").value
      );

  }

}


/* =========================================================
   REMOVE DUPLICATES
========================================================= */

function renderRemoveDuplicates(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="duplicateInput"
        placeholder="ضع كل عنصر في سطر..."
      ></textarea>

      <button
        class="btn btn-primary"
        id="duplicateRun"
      >
        إزالة التكرار
      </button>

      <textarea
        id="duplicateOutput"
        readonly
        placeholder="النتيجة..."
      ></textarea>

      <button
        class="btn btn-success"
        id="duplicateCopy"
      >
        نسخ النتيجة
      </button>

    </div>

  `;


  $("#duplicateRun").onclick =
    () => {

      const lines =
        $("#duplicateInput")
          .value
          .split(/\r?\n/);


      const unique =
        [
          ...new Set(
            lines
              .map(
                line =>
                  line.trim()
              )
              .filter(Boolean)
          )
        ];


      $("#duplicateOutput")
        .value =
        unique.join("\n");

    };


  $("#duplicateCopy").onclick =
    () =>
      copyText(
        $("#duplicateOutput").value
      );

}


/* =========================================================
   SORT LINES
========================================================= */

function renderSortLines(container) {

  container.innerHTML = `

    <div class="tool-form">

      <div class="field">

        <label>
          طريقة الترتيب
        </label>

        <select id="sortMode">

          <option value="az">
            أبجدي A → Z
          </option>

          <option value="za">
            عكسي Z → A
          </option>

          <option value="num">
            رقمي
          </option>

        </select>

      </div>

      <textarea
        id="sortInput"
        placeholder="ضع كل عنصر في سطر..."
      ></textarea>

      <button
        class="btn btn-primary"
        id="sortRun"
      >
        ترتيب
      </button>

      <textarea
        id="sortOutput"
        readonly
      ></textarea>

    </div>

  `;


  $("#sortRun").onclick =
    () => {

      let lines =
        $("#sortInput")
          .value
          .split(/\r?\n/)
          .filter(
            line =>
              line.trim()
          );


      const mode =
        $("#sortMode").value;


      if (mode === "az") {

        lines.sort(
          (a,b) =>
            a.localeCompare(
              b,
              "ar"
            )
        );

      }


      if (mode === "za") {

        lines.sort(
          (a,b) =>
            b.localeCompare(
              a,
              "ar"
            )
        );

      }


      if (mode === "num") {

        lines.sort(
          (a,b) =>
            Number(a) -
            Number(b)
        );

      }


      $("#sortOutput")
        .value =
        lines.join("\n");

    };

}


/* =========================================================
   REVERSE
========================================================= */

function renderReverseText(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="reverseInput"
        placeholder="اكتب النص..."
      ></textarea>

      <div class="form-row">

        <button
          class="btn btn-primary"
          id="reverseChars"
        >
          عكس الأحرف
        </button>

        <button
          class="btn btn-primary"
          id="reverseLines"
        >
          عكس الأسطر
        </button>

      </div>

      <textarea
        id="reverseOutput"
        readonly
      ></textarea>

    </div>

  `;


  $("#reverseChars").onclick =
    () => {

      $("#reverseOutput")
        .value =
        [...$("#reverseInput").value]
          .reverse()
          .join("");

    };


  $("#reverseLines").onclick =
    () => {

      $("#reverseOutput")
        .value =
        $("#reverseInput")
          .value
          .split(/\r?\n/)
          .reverse()
          .join("\n");

    };

}


/* =========================================================
   REMOVE EMPTY
========================================================= */

function renderRemoveEmptyLines(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="emptyInput"
        placeholder="ضع النص هنا..."
      ></textarea>

      <button
        class="btn btn-primary"
        id="emptyRun"
      >
        حذف الأسطر الفارغة
      </button>

      <textarea
        id="emptyOutput"
        readonly
      ></textarea>

    </div>

  `;


  $("#emptyRun").onclick =
    () => {

      $("#emptyOutput")
        .value =
        $("#emptyInput")
          .value
          .split(/\r?\n/)
          .filter(
            line =>
              line.trim()
          )
          .join("\n");

    };

}


/* =========================================================
   SLUG
========================================================= */

function renderSlug(container) {

  container.innerHTML = `

    <div class="tool-form">

      <input
        id="slugInput"
        type="text"
        placeholder="عنوان المقال..."
      >

      <button
        class="btn btn-primary"
        id="slugRun"
      >
        إنشاء Slug
      </button>

      <input
        id="slugOutput"
        type="text"
        readonly
      >

      <button
        class="btn btn-success"
        id="slugCopy"
      >
        نسخ
      </button>

    </div>

  `;


  $("#slugRun").onclick =
    () => {

      const text =
        $("#slugInput").value
          .trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(
            /[\u0300-\u036f]/g,
            ""
          )
          .replace(
            /[^\p{L}\p{N}\s-]/gu,
            ""
          )
          .replace(
            /\s+/g,
            "-"
          )
          .replace(
            /-+/g,
            "-"
          )
          .replace(
            /^-|-$/g,
            ""
          );


      $("#slugOutput")
        .value =
        text;

    };


  $("#slugCopy").onclick =
    () =>
      copyText(
        $("#slugOutput").value
      );

}


/* =========================================================
   TEXT CLEANER
========================================================= */

function renderTextCleaner(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="cleanInput"
        placeholder="الصق النص هنا..."
      ></textarea>

      <button
        class="btn btn-primary"
        id="cleanRun"
      >
        تنظيف النص
      </button>

      <textarea
        id="cleanOutput"
        readonly
      ></textarea>

    </div>

  `;


  $("#cleanRun").onclick =
    () => {

      const result =
        $("#cleanInput")
          .value
          .split(/\r?\n/)
          .map(
            line =>
              line
                .replace(/\s+/g, " ")
                .trim()
          )
          .filter(Boolean)
          .join("\n");


      $("#cleanOutput")
        .value =
        result;

    };

}


/* =========================================================
   LINE COUNTER
========================================================= */

function renderLineCounter(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="lineCounterInput"
        placeholder="ضع النص هنا..."
      ></textarea>

      <div class="result-card">

        <span>
          عدد الأسطر غير الفارغة
        </span>

        <div
          id="lineCounterResult"
          class="result-value"
        >
          0
        </div>

      </div>

    </div>

  `;


  $("#lineCounterInput")
    .addEventListener(
      "input",
      () => {

        const count =
          $("#lineCounterInput")
            .value
            .split(/\r?\n/)
            .filter(
              line =>
                line.trim()
            )
            .length;

        $("#lineCounterResult")
          .textContent =
          count;

      }
    );

}


/* =========================================================
   JSON
========================================================= */

function renderJSON(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="jsonInput"
        placeholder='{"name":"ToolBox","version":1}'
      ></textarea>

      <div class="form-row">

        <button
          class="btn btn-primary"
          id="jsonFormat"
        >
          تنسيق JSON
        </button>

        <button
          class="btn btn-primary"
          id="jsonMinify"
        >
          ضغط JSON
        </button>

      </div>

      <textarea
        id="jsonOutput"
        readonly
        placeholder="النتيجة..."
      ></textarea>

      <button
        class="btn btn-success"
        id="jsonCopy"
      >
        نسخ
      </button>

      <div
        id="jsonStatus"
        class="info-box"
      >
        أدخل JSON للتحقق منه.
      </div>

    </div>

  `;


  $("#jsonFormat").onclick =
    () => {

      try {

        const data =
          JSON.parse(
            $("#jsonInput").value
          );

        $("#jsonOutput")
          .value =
          JSON.stringify(
            data,
            null,
            2
          );

        $("#jsonStatus")
          .textContent =
          "✓ JSON صالح";

      } catch (error) {

        $("#jsonStatus")
          .textContent =
          "✕ JSON غير صالح: " +
          error.message;

      }

    };


  $("#jsonMinify").onclick =
    () => {

      try {

        const data =
          JSON.parse(
            $("#jsonInput").value
          );

        $("#jsonOutput")
          .value =
          JSON.stringify(
            data
          );

        $("#jsonStatus")
          .textContent =
          "✓ JSON صالح وتم ضغطه";

      } catch (error) {

        $("#jsonStatus")
          .textContent =
          "✕ JSON غير صالح";

      }

    };


  $("#jsonCopy").onclick =
    () =>
      copyText(
        $("#jsonOutput").value
      );

}


/* =========================================================
   BASE64
========================================================= */

function renderBase64(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="baseInput"
        placeholder="النص..."
      ></textarea>

      <div class="form-row">

        <button
          class="btn btn-primary"
          id="baseEncode"
        >
          Encode
        </button>

        <button
          class="btn btn-primary"
          id="baseDecode"
        >
          Decode
        </button>

      </div>

      <textarea
        id="baseOutput"
        readonly
      ></textarea>

      <button
        class="btn btn-success"
        id="baseCopy"
      >
        نسخ
      </button>

    </div>

  `;


  $("#baseEncode").onclick =
    () => {

      try {

        $("#baseOutput")
          .value =
          utf8ToBase64(
            $("#baseInput").value
          );

      } catch {

        showToast(
          "تعذر تشفير النص"
        );

      }

    };


  $("#baseDecode").onclick =
    () => {

      try {

        $("#baseOutput")
          .value =
          base64ToUtf8(
            $("#baseInput").value
          );

      } catch {

        showToast(
          "Base64 غير صالح"
        );

      }

    };


  $("#baseCopy").onclick =
    () =>
      copyText(
        $("#baseOutput").value
      );

}


/* =========================================================
   URL
========================================================= */

function renderURL(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="urlInput"
        placeholder="https://example.com/?name=محمد"
      ></textarea>

      <div class="form-row">

        <button
          class="btn btn-primary"
          id="urlEncode"
        >
          Encode
        </button>

        <button
          class="btn btn-primary"
          id="urlDecode"
        >
          Decode
        </button>

      </div>

      <textarea
        id="urlOutput"
        readonly
      ></textarea>

    </div>

  `;


  $("#urlEncode").onclick =
    () => {

      $("#urlOutput")
        .value =
        encodeURIComponent(
          $("#urlInput").value
        );

    };


  $("#urlDecode").onclick =
    () => {

      try {

        $("#urlOutput")
          .value =
          decodeURIComponent(
            $("#urlInput").value
          );

      } catch {

        showToast(
          "الرابط أو النص غير صالح"
        );

      }

    };

}


/* =========================================================
   HTML ESCAPE
========================================================= */

function renderHTMLEscape(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="htmlInput"
        placeholder="<h1>Hello</h1>"
      ></textarea>

      <div class="form-row">

        <button
          class="btn btn-primary"
          id="htmlEscape"
        >
          Escape
        </button>

        <button
          class="btn btn-primary"
          id="htmlUnescape"
        >
          Unescape
        </button>

      </div>

      <textarea
        id="htmlOutput"
        readonly
      ></textarea>

      <button
        class="btn btn-success"
        id="htmlCopy"
      >
        نسخ
      </button>

    </div>

  `;


  $("#htmlEscape").onclick =
    () => {

      $("#htmlOutput")
        .value =
        escapeHTML(
          $("#htmlInput").value
        );

    };


  $("#htmlUnescape").onclick =
    () => {

      const area =
        document.createElement(
          "textarea"
        );

      area.innerHTML =
        $("#htmlInput").value;

      $("#htmlOutput")
        .value =
        area.value;

    };


  $("#htmlCopy").onclick =
    () =>
      copyText(
        $("#htmlOutput").value
      );

}


/* =========================================================
   REGEX
========================================================= */

function renderRegex(container) {

  container.innerHTML = `

    <div class="tool-form">

      <input
        id="regexPattern"
        type="text"
        placeholder="\\d+"
      >

      <input
        id="regexFlags"
        type="text"
        value="gi"
        placeholder="gi"
      >

      <textarea
        id="regexText"
        placeholder="النص الذي تريد اختباره..."
      ></textarea>

      <button
        class="btn btn-primary"
        id="regexRun"
      >
        اختبار
      </button>

      <div
        id="regexResult"
        class="result-card"
      >
        -
      </div>

    </div>

  `;


  $("#regexRun").onclick =
    () => {

      try {

        const regex =
          new RegExp(
            $("#regexPattern").value,
            $("#regexFlags").value
          );

        const text =
          $("#regexText").value;

        const matches =
          text.match(regex);


        if (!matches) {

          $("#regexResult")
            .innerHTML =
            "لم يتم العثور على تطابق.";

          return;

        }


        $("#regexResult")
          .innerHTML =
          `<strong>التطابقات:</strong>
           <br>
           ${matches
             .map(escapeHTML)
             .join("<br>")}`;

      } catch (error) {

        $("#regexResult")
          .textContent =
          "Regex غير صالح: " +
          error.message;

      }

    };

}


/* =========================================================
   TIMESTAMP
========================================================= */

function renderTimestamp(container) {

  container.innerHTML = `

    <div class="tool-form">

      <div class="field">

        <label>
          Unix Timestamp
        </label>

        <input
          id="timestampInput"
          type="text"
          placeholder="مثال: 1758800000"
        >

      </div>

      <div class="form-row">

        <button
          class="btn btn-primary"
          id="timestampToDate"
        >
          Timestamp → تاريخ
        </button>

        <button
          class="btn btn-primary"
          id="dateToTimestamp"
        >
          الآن → Timestamp
        </button>

      </div>

      <div
        id="timestampResult"
        class="result-card"
      >
        -
      </div>

    </div>

  `;


  $("#timestampToDate").onclick =
    () => {

      const value =
        Number(
          $("#timestampInput").value
        );

      if (!Number.isFinite(value)) {

        showToast(
          "أدخل Timestamp صحيحًا"
        );

        return;

      }


      const date =
        new Date(
          value < 10000000000
            ? value * 1000
            : value
        );


      $("#timestampResult")
        .textContent =
        date.toLocaleString(
          "ar"
        );

    };


  $("#dateToTimestamp").onclick =
    () => {

      const timestamp =
        Math.floor(
          Date.now() / 1000
        );

      $("#timestampInput")
        .value =
        timestamp;

      $("#timestampResult")
        .textContent =
        timestamp;

    };

}


/* =========================================================
   COLOR CODE
========================================================= */

function renderColorCode(container) {

  container.innerHTML = `

    <div class="tool-form">

      <input
        id="colorCodeInput"
        type="text"
        value="#2563eb"
        placeholder="#2563eb"
      >

      <button
        class="btn btn-primary"
        id="colorCodeRun"
      >
        تحويل
      </button>

      <div
        id="colorCodePreview"
        style="
          height:120px;
          border-radius:16px;
          border:1px solid var(--border);
        "
      ></div>

      <div
        id="colorCodeResult"
        class="result-card"
      >
        -
      </div>

    </div>

  `;


  $("#colorCodeRun").onclick =
    () => {

      let hex =
        $("#colorCodeInput")
          .value
          .trim()
          .replace(
            "#",
            ""
          );


      if (
        /^[0-9a-fA-F]{3}$/
          .test(hex)
      ) {

        hex =
          hex
            .split("")
            .map(x => x + x)
            .join("");

      }


      if (
        !/^[0-9a-fA-F]{6}$/
          .test(hex)
      ) {

        showToast(
          "أدخل HEX صالحًا"
        );

        return;

      }


      const r =
        parseInt(
          hex.substring(0,2),
          16
        );

      const g =
        parseInt(
          hex.substring(2,4),
          16
        );

      const b =
        parseInt(
          hex.substring(4,6),
          16
        );


      const finalHex =
        "#" + hex.toUpperCase();


      $("#colorCodePreview")
        .style.background =
        finalHex;


      $("#colorCodeResult")
        .innerHTML =
        `<strong>${finalHex}</strong>
         <br>
         rgb(${r}, ${g}, ${b})`;

    };


  $("#colorCodeRun").click();

}


/* =========================================================
   PASSWORD
========================================================= */

function renderPassword(container) {

  container.innerHTML = `

    <div class="tool-form">

      <div class="field">

        <label>
          طول كلمة المرور:
          <span id="passwordLengthValue">
            16
          </span>
        </label>

        <input
          id="passwordLength"
          type="range"
          min="6"
          max="64"
          value="16"
        >

      </div>

      <label>
        <input
          id="passUpper"
          type="checkbox"
          checked
        >
        أحرف كبيرة
      </label>

      <label>
        <input
          id="passLower"
          type="checkbox"
          checked
        >
        أحرف صغيرة
      </label>

      <label>
        <input
          id="passNumbers"
          type="checkbox"
          checked
        >
        أرقام
      </label>

      <label>
        <input
          id="passSymbols"
          type="checkbox"
          checked
        >
        رموز
      </label>

      <button
        class="btn btn-primary"
        id="passwordRun"
      >
        إنشاء كلمة مرور
      </button>

      <input
        id="passwordOutput"
        type="text"
        readonly
      >

      <button
        class="btn btn-success"
        id="passwordCopy"
      >
        نسخ
      </button>

    </div>

  `;


  $("#passwordLength")
    .oninput =
    () => {

      $("#passwordLengthValue")
        .textContent =
        $("#passwordLength").value;

    };


  $("#passwordRun").onclick =
    generate;


  $("#passwordCopy").onclick =
    () =>
      copyText(
        $("#passwordOutput").value
      );


  generate();


  function generate() {

    let chars = "";

    if ($("#passUpper").checked)
      chars +=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if ($("#passLower").checked)
      chars +=
        "abcdefghijklmnopqrstuvwxyz";

    if ($("#passNumbers").checked)
      chars +=
        "0123456789";

    if ($("#passSymbols").checked)
      chars +=
        "!@#$%^&*()_+-=[]{}<>?";

    if (!chars) {

      showToast(
        "اختر نوعًا واحدًا على الأقل"
      );

      return;

    }


    const length =
      Number(
        $("#passwordLength").value
      );


    let result = "";

    for (
      let i = 0;
      i < length;
      i++
    ) {

      result +=
        chars[
          randomInt(
            chars.length
          )
        ];

    }


    $("#passwordOutput")
      .value =
      result;

  }

}


/* =========================================================
   UUID
========================================================= */

function renderUUID(container) {

  container.innerHTML = `

    <div class="tool-form">

      <button
        class="btn btn-primary"
        id="uuidRun"
      >
        إنشاء UUID
      </button>

      <div
        id="uuidResult"
        class="result-card result-value"
      >
        -
      </div>

      <button
        class="btn btn-success"
        id="uuidCopy"
      >
        نسخ
      </button>

    </div>

  `;


  $("#uuidRun").onclick =
    generate;


  $("#uuidCopy").onclick =
    () =>
      copyText(
        $("#uuidResult")
          .textContent
      );


  generate();


  function generate() {

    let uuid;

    if (
      typeof crypto.randomUUID ===
      "function"
    ) {

      uuid =
        crypto.randomUUID();

    } else {

      uuid =
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
          .replace(
            /[xy]/g,
            char => {

              const r =
                randomInt(16);

              const v =
                char === "x"
                  ? r
                  : (r & 0x3) | 0x8;

              return v.toString(16);

            }
          );

    }


    $("#uuidResult")
      .textContent =
      uuid;

  }

}


/* =========================================================
   SHA256
========================================================= */

async function renderSHA256(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="shaInput"
        placeholder="النص..."
      ></textarea>

      <button
        class="btn btn-primary"
        id="shaRun"
      >
        إنشاء SHA-256
      </button>

      <textarea
        id="shaOutput"
        readonly
      ></textarea>

      <button
        class="btn btn-success"
        id="shaCopy"
      >
        نسخ
      </button>

    </div>

  `;


  $("#shaRun").onclick =
    async () => {

      const text =
        $("#shaInput").value;

      const data =
        new TextEncoder()
          .encode(text);

      const hash =
        await crypto.subtle.digest(
          "SHA-256",
          data
        );

      const result =
        [...new Uint8Array(hash)]
          .map(
            byte =>
              byte
                .toString(16)
                .padStart(2, "0")
          )
          .join("");


      $("#shaOutput")
        .value =
        result;

    };


  $("#shaCopy").onclick =
    () =>
      copyText(
        $("#shaOutput").value
      );

}


/* =========================================================
   RANDOM TOKEN
========================================================= */

function renderRandomToken(container) {

  container.innerHTML = `

    <div class="tool-form">

      <div class="field">

        <label>
          الطول
        </label>

        <input
          id="tokenLength"
          type="number"
          min="8"
          max="256"
          value="32"
        >

      </div>

      <div class="field">

        <label>
          الصيغة
        </label>

        <select id="tokenMode">

          <option value="hex">
            Hex
          </option>

          <option value="base64">
            Base64
          </option>

        </select>

      </div>

      <button
        class="btn btn-primary"
        id="tokenRun"
      >
        توليد
      </button>

      <textarea
        id="tokenOutput"
        readonly
      ></textarea>

      <button
        class="btn btn-success"
        id="tokenCopy"
      >
        نسخ
      </button>

    </div>

  `;


  $("#tokenRun").onclick =
    () => {

      const length =
        Math.max(
          8,
          Math.min(
            256,
            Number(
              $("#tokenLength").value
            )
          )
        );


      const bytes =
        new Uint8Array(
          length
        );

      crypto.getRandomValues(
        bytes
      );


      let result;


      if (
        $("#tokenMode").value ===
        "hex"
      ) {

        result =
          [...bytes]
            .map(
              x =>
                x
                  .toString(16)
                  .padStart(2,"0")
            )
            .join("");

      } else {

        result =
          bytesToBase64(
            bytes
          );

      }


      $("#tokenOutput")
        .value =
        result;

    };


  $("#tokenCopy").onclick =
    () =>
      copyText(
        $("#tokenOutput").value
      );

}


/* =========================================================
   PASSWORD STRENGTH
========================================================= */

function renderPasswordStrength(container) {

  container.innerHTML = `

    <div class="tool-form">

      <input
        id="strengthInput"
        type="password"
        placeholder="أدخل كلمة المرور..."
      >

      <button
        class="btn btn-primary"
        id="strengthRun"
      >
        فحص القوة
      </button>

      <div
        id="strengthResult"
        class="result-card"
      >
        أدخل كلمة المرور ثم اضغط فحص.
      </div>

    </div>

  `;


  $("#strengthRun").onclick =
    () => {

      const value =
        $("#strengthInput")
          .value;


      let score = 0;

      if (value.length >= 8)
        score++;

      if (value.length >= 12)
        score++;

      if (/[A-Z]/.test(value))
        score++;

      if (/[a-z]/.test(value))
        score++;

      if (/\d/.test(value))
        score++;

      if (/[^A-Za-z0-9]/.test(value))
        score++;


      let label =
        "ضعيفة جدًا";

      if (score >= 2)
        label = "ضعيفة";

      if (score >= 4)
        label = "متوسطة";

      if (score >= 5)
        label = "قوية";

      if (score >= 6)
        label = "قوية جدًا";


      $("#strengthResult")
        .innerHTML =
        `<strong>${label}</strong>
         <br>
         الطول: ${value.length}
         <br>
         مستوى تقريبي: ${score}/6`;

    };

}


/* =========================================================
   IMAGE HELPERS
========================================================= */

function imageFileField(
  id = "imageFile"
) {

  return `

    <div class="file-drop">

      <strong>
        اختر صورة
      </strong>

      <input
        id="${id}"
        type="file"
        accept="image/*"
      >

    </div>

  `;

}


function loadImage(file) {

  return new Promise(
    (resolve, reject) => {

      const url =
        URL.createObjectURL(
          file
        );

      const image =
        new Image();

      image.onload =
        () => {

          URL.revokeObjectURL(
            url
          );

          resolve(image);

        };

      image.onerror =
        () => {

          URL.revokeObjectURL(
            url
          );

          reject(
            new Error(
              "تعذر تحميل الصورة"
            )
          );

        };

      image.src =
        url;

    }
  );

}


function canvasBlob(
  canvas,
  type = "image/png",
  quality = .9
) {

  return new Promise(
    resolve =>
      canvas.toBlob(
        resolve,
        type,
        quality
      )
  );

}


function downloadBlob(
  blob,
  filename
) {

  const url =
    URL.createObjectURL(
      blob
    );

  const a =
    document.createElement(
      "a"
    );

  a.href =
    url;

  a.download =
    filename;

  document.body.appendChild(a);

  a.click();

  a.remove();

  setTimeout(
    () =>
      URL.revokeObjectURL(url),
    1000
  );

}


/* =========================================================
   IMAGE RESIZER
========================================================= */

function renderImageResizer(container) {

  container.innerHTML = `

    <div class="tool-form">

      ${imageFileField(
        "resizeFile"
      )}

      <div class="form-row">

        <div class="field">

          <label>
            العرض
          </label>

          <input
            id="resizeWidth"
            type="number"
          >

        </div>

        <div class="field">

          <label>
            الارتفاع
          </label>

          <input
            id="resizeHeight"
            type="number"
          >

        </div>

      </div>

      <label>

        <input
          id="resizeKeep"
          type="checkbox"
          checked
        >

        الحفاظ على النسبة

      </label>

      <button
        class="btn btn-primary"
        id="resizeRun"
      >
        تغيير الحجم
      </button>

      <div
        id="resizePreview"
        class="image-preview"
      >
        لم يتم اختيار صورة.
      </div>

    </div>

  `;


  let image = null;


  $("#resizeFile").onchange =
    async event => {

      const file =
        event.target.files[0];

      if (!file) return;


      try {

        image =
          await loadImage(file);


        $("#resizeWidth")
          .value =
          image.naturalWidth;

        $("#resizeHeight")
          .value =
          image.naturalHeight;


        $("#resizePreview")
          .innerHTML =
          `<img
            src="${URL.createObjectURL(file)}"
            alt="Preview"
          >`;

      } catch {

        showToast(
          "تعذر قراءة الصورة"
        );

      }

    };


  $("#resizeRun").onclick =
    async () => {

      if (!image) {

        showToast(
          "اختر صورة أولًا"
        );

        return;

      }


      const width =
        Number(
          $("#resizeWidth").value
        );

      const height =
        Number(
          $("#resizeHeight").value
        );


      if (
        width <= 0 ||
        height <= 0
      ) {

        showToast(
          "أدخل أبعادًا صحيحة"
        );

        return;

      }


      const canvas =
        document.createElement(
          "canvas"
        );

      canvas.width =
        width;

      canvas.height =
        height;


      const ctx =
        canvas.getContext(
          "2d"
        );

      ctx.drawImage(
        image,
        0,
        0,
        width,
        height
      );


      const blob =
        await canvasBlob(
          canvas,
          "image/png"
        );


      downloadBlob(
        blob,
        "toolbox-resized.png"
      );


      showToast(
        "تم تحميل الصورة"
      );

    };

}


/* =========================================================
   IMAGE CONVERTER
========================================================= */

function renderImageConverter(container) {

  container.innerHTML = `

    <div class="tool-form">

      ${imageFileField(
        "convertFile"
      )}

      <div class="field">

        <label>
          الصيغة
        </label>

        <select id="convertType">

          <option value="image/png">
            PNG
          </option>

          <option value="image/jpeg">
            JPG
          </option>

          <option value="image/webp">
            WEBP
          </option>

        </select>

      </div>

      <button
        class="btn btn-primary"
        id="convertRun"
      >
        تحويل وتحميل
      </button>

    </div>

  `;


  $("#convertRun").onclick =
    async () => {

      const file =
        $("#convertFile")
          .files[0];

      if (!file) {

        showToast(
          "اختر صورة أولًا"
        );

        return;

      }


      try {

        const image =
          await loadImage(file);

        const canvas =
          document.createElement(
            "canvas"
          );

        canvas.width =
          image.naturalWidth;

        canvas.height =
          image.naturalHeight;


        canvas
          .getContext("2d")
          .drawImage(
            image,
            0,
            0
          );


        const type =
          $("#convertType").value;

        const blob =
          await canvasBlob(
            canvas,
            type,
            .92
          );


        const extension =
          type === "image/jpeg"
            ? "jpg"
            : type.split("/")[1];


        downloadBlob(
          blob,
          `toolbox-converted.${extension}`
        );


        showToast(
          "تم تحويل الصورة"
        );

      } catch {

        showToast(
          "تعذر تحويل الصورة"
        );

      }

    };

}


/* =========================================================
   IMAGE COMPRESSOR
========================================================= */

function renderImageCompressor(container) {

  container.innerHTML = `

    <div class="tool-form">

      ${imageFileField(
        "compressFile"
      )}

      <div class="field">

        <label>
          الجودة:
          <span id="qualityValue">
            80%
          </span>
        </label>

        <input
          id="qualityRange"
          type="range"
          min="10"
          max="100"
          value="80"
        >

      </div>

      <button
        class="btn btn-primary"
        id="compressRun"
      >
        ضغط وتحميل
      </button>

      <div
        id="compressInfo"
        class="info-box"
      >
        اختر صورة ثم حدد الجودة.
      </div>

    </div>

  `;


  $("#qualityRange").oninput =
    () => {

      $("#qualityValue")
        .textContent =
        $("#qualityRange").value +
        "%";

    };


  $("#compressRun").onclick =
    async () => {

      const file =
        $("#compressFile")
          .files[0];

      if (!file) {

        showToast(
          "اختر صورة أولًا"
        );

        return;

      }


      try {

        const image =
          await loadImage(file);

        const canvas =
          document.createElement(
            "canvas"
          );

        canvas.width =
          image.naturalWidth;

        canvas.height =
          image.naturalHeight;


        canvas
          .getContext("2d")
          .drawImage(
            image,
            0,
            0
          );


        const quality =
          Number(
            $("#qualityRange").value
          ) / 100;


        const blob =
          await canvasBlob(
            canvas,
            "image/jpeg",
            quality
          );


        const oldSize =
          formatBytes(
            file.size
          );

        const newSize =
          formatBytes(
            blob.size
          );


        const saving =
          file.size > 0
            ? Math.round(
                (
                  1 -
                  blob.size /
                  file.size
                ) * 100
              )
            : 0;


        $("#compressInfo")
          .textContent =
          `الحجم الأصلي: ${oldSize}
           • الحجم الجديد: ${newSize}
           • التغيير: ${saving}%`;


        downloadBlob(
          blob,
          "toolbox-compressed.jpg"
        );


        showToast(
          "تم ضغط الصورة وتحميلها"
        );

      } catch {

        showToast(
          "تعذر ضغط الصورة"
        );

      }

    };

}


/* =========================================================
   IMAGE INFO
========================================================= */

function renderImageInfo(container) {

  container.innerHTML = `

    <div class="tool-form">

      ${imageFileField(
        "infoFile"
      )}

      <div
        id="imageInfoResult"
        class="result-card"
      >
        اختر صورة لعرض معلوماتها.
      </div>

      <div
        id="imageInfoPreview"
        class="image-preview"
      ></div>

    </div>

  `;


  $("#infoFile").onchange =
    async event => {

      const file =
        event.target.files[0];

      if (!file) return;


      try {

        const image =
          await loadImage(file);

        $("#imageInfoResult")
          .innerHTML =
          `<strong>الاسم:</strong>
           ${escapeHTML(file.name)}
           <br>
           <strong>النوع:</strong>
           ${escapeHTML(file.type)}
           <br>
           <strong>الحجم:</strong>
           ${formatBytes(file.size)}
           <br>
           <strong>الأبعاد:</strong>
           ${image.naturalWidth} ×
           ${image.naturalHeight}`;


        const url =
          URL.createObjectURL(
            file
          );


        $("#imageInfoPreview")
          .innerHTML =
          `<img
            src="${url}"
            alt="معاينة الصورة"
          >`;

      } catch {

        showToast(
          "تعذر قراءة الصورة"
        );

      }

    };

}


/* =========================================================
   IMAGE FLIP
========================================================= */

function renderImageFlip(container) {

  container.innerHTML = `

    <div class="tool-form">

      ${imageFileField(
        "flipFile"
      )}

      <div class="form-row">

        <button
          class="btn btn-primary"
          id="flipHorizontal"
        >
          قلب أفقي
        </button>

        <button
          class="btn btn-primary"
          id="flipVertical"
        >
          قلب عمودي
        </button>

      </div>

      <div
        id="flipPreview"
        class="image-preview"
      ></div>

    </div>

  `;


  let image = null;


  $("#flipFile").onchange =
    async event => {

      const file =
        event.target.files[0];

      if (!file) return;

      image =
        await loadImage(file);

    };


  $("#flipHorizontal").onclick =
    () =>
      process( true, false );


  $("#flipVertical").onclick =
    () =>
      process( false, true );


  async function process(
    horizontal,
    vertical
  ) {

    if (!image) {

      showToast(
        "اختر صورة أولًا"
      );

      return;

    }


    const canvas =
      document.createElement(
        "canvas"
      );

    canvas.width =
      image.naturalWidth;

    canvas.height =
      image.naturalHeight;


    const ctx =
      canvas.getContext(
        "2d"
      );


    ctx.translate(
      horizontal
        ? canvas.width
        : 0,
      vertical
        ? canvas.height
        : 0
    );


    ctx.scale(
      horizontal ? -1 : 1,
      vertical ? -1 : 1
    );


    ctx.drawImage(
      image,
      0,
      0
    );


    const blob =
      await canvasBlob(
        canvas,
        "image/png"
      );


    const url =
      URL.createObjectURL(
        blob
      );


    $("#flipPreview")
      .innerHTML =
      `<img
        src="${url}"
        alt="الصورة"
      >`;


    downloadBlob(
      blob,
      "toolbox-flipped.png"
    );

  }

}


/* =========================================================
   IMAGE ROTATE
========================================================= */

function renderImageRotate(container) {

  container.innerHTML = `

    <div class="tool-form">

      ${imageFileField(
        "rotateFile"
      )}

      <div class="field">

        <label>
          الزاوية
        </label>

        <select id="rotateAngle">

          <option value="90">
            90°
          </option>

          <option value="180">
            180°
          </option>

          <option value="270">
            270°
          </option>

        </select>

      </div>

      <button
        class="btn btn-primary"
        id="rotateRun"
      >
        تدوير وتحميل
      </button>

    </div>

  `;


  $("#rotateRun").onclick =
    async () => {

      const file =
        $("#rotateFile")
          .files[0];

      if (!file) {

        showToast(
          "اختر صورة أولًا"
        );

        return;

      }


      const image =
        await loadImage(file);

      const angle =
        Number(
          $("#rotateAngle").value
        );


      const swap =
        angle === 90 ||
        angle === 270;


      const canvas =
        document.createElement(
          "canvas"
        );

      canvas.width =
        swap
          ? image.naturalHeight
          : image.naturalWidth;

      canvas.height =
        swap
          ? image.naturalWidth
          : image.naturalHeight;


      const ctx =
        canvas.getContext(
          "2d"
        );


      ctx.translate(
        canvas.width / 2,
        canvas.height / 2
      );


      ctx.rotate(
        angle *
        Math.PI /
        180
      );


      ctx.drawImage(
        image,
        -image.naturalWidth / 2,
        -image.naturalHeight / 2
      );


      const blob =
        await canvasBlob(
          canvas,
          "image/png"
        );


      downloadBlob(
        blob,
        "toolbox-rotated.png"
      );


      showToast(
        "تم تدوير الصورة"
      );

    };

}


/* =========================================================
   TEXT DOWNLOAD
========================================================= */

function renderTextDownload(container) {

  container.innerHTML = `

    <div class="tool-form">

      <input
        id="textFilename"
        type="text"
        value="my-text"
        placeholder="اسم الملف"
      >

      <textarea
        id="downloadText"
        placeholder="اكتب النص الذي تريد حفظه..."
      ></textarea>

      <button
        class="btn btn-primary"
        id="downloadTextRun"
      >
        تحميل TXT
      </button>

    </div>

  `;


  $("#downloadTextRun").onclick =
    () => {

      const text =
        $("#downloadText").value;

      const name =
        $("#textFilename")
          .value
          .trim() ||
        "my-text";


      const blob =
        new Blob(
          [text],
          {
            type:
              "text/plain;charset=utf-8"
          }
        );


      downloadBlob(
        blob,
        `${name}.txt`
      );

    };

}


/* =========================================================
   TEXT FILE READER
========================================================= */

function renderTextFileReader(container) {

  container.innerHTML = `

    <div class="tool-form">

      <div class="file-drop">

        <strong>
          اختر ملف TXT أو CSV
        </strong>

        <input
          id="readerFile"
          type="file"
          accept=".txt,.csv,text/plain,text/csv"
        >

      </div>

      <textarea
        id="readerOutput"
        readonly
        placeholder="محتوى الملف..."
      ></textarea>

      <button
        class="btn btn-success"
        id="readerCopy"
      >
        نسخ المحتوى
      </button>

    </div>

  `;


  $("#readerFile").onchange =
    event => {

      const file =
        event.target.files[0];

      if (!file) return;


      const reader =
        new FileReader();


      reader.onload =
        () => {

          $("#readerOutput")
            .value =
            reader.result;

        };


      reader.onerror =
        () => {

          showToast(
            "تعذر قراءة الملف"
          );

        };


      reader.readAsText(
        file
      );

    };


  $("#readerCopy").onclick =
    () =>
      copyText(
        $("#readerOutput").value
      );

}


/* =========================================================
   JSON CSV
========================================================= */

function renderJSONCSV(container) {

  container.innerHTML = `

    <div class="tool-form">

      <select id="csvMode">

        <option value="jsoncsv">
          JSON → CSV
        </option>

        <option value="csvjson">
          CSV → JSON
        </option>

      </select>

      <textarea
        id="csvInput"
        placeholder='[{"name":"Ali","age":20}]'
      ></textarea>

      <button
        class="btn btn-primary"
        id="csvRun"
      >
        تحويل
      </button>

      <textarea
        id="csvOutput"
        readonly
      ></textarea>

      <button
        class="btn btn-success"
        id="csvCopy"
      >
        نسخ
      </button>

    </div>

  `;


  $("#csvRun").onclick =
    () => {

      try {

        const mode =
          $("#csvMode").value;

        const input =
          $("#csvInput").value;


        if (
          mode === "jsoncsv"
        ) {

          const data =
            JSON.parse(input);

          $("#csvOutput")
            .value =
            jsonToCSV(data);

        } else {

          const data =
            parseCSV(input);

          $("#csvOutput")
            .value =
            JSON.stringify(
              data,
              null,
              2
            );

        }

      } catch (error) {

        showToast(
          "خطأ: " +
          error.message
        );

      }

    };


  $("#csvCopy").onclick =
    () =>
      copyText(
        $("#csvOutput").value
      );

}


function jsonToCSV(data) {

  if (
    !Array.isArray(data)
  ) {

    throw new Error(
      "JSON يجب أن يكون Array"
    );

  }


  if (!data.length)
    return "";


  const keys =
    [
      ...new Set(
        data.flatMap(
          item =>
            Object.keys(
              item
            )
        )
      )
    ];


  const escapeCSV =
    value => {

      const text =
        value == null
          ? ""
          : String(value);

      return `"${text.replace(
        /"/g,
        '""'
      )}"`;

    };


  const rows = [

    keys
      .map(escapeCSV)
      .join(",")

  ];


  data.forEach(
    item => {

      rows.push(
        keys
          .map(
            key =>
              escapeCSV(
                item[key]
              )
          )
          .join(",")
      );

    }
  );


  return rows.join("\n");

}


function parseCSV(text) {

  const rows = [];

  let row = [];
  let value = "";
  let quoted = false;


  for (
    let i = 0;
    i < text.length;
    i++
  ) {

    const char =
      text[i];

    const next =
      text[i + 1];


    if (
      char === '"' &&
      quoted &&
      next === '"'
    ) {

      value += '"';

      i++;

    } else if (
      char === '"'
    ) {

      quoted =
        !quoted;

    } else if (
      char === "," &&
      !quoted
    ) {

      row.push(value);

      value = "";

    } else if (
      (
        char === "\n" ||
        char === "\r"
      ) &&
      !quoted
    ) {

      if (
        char === "\r" &&
        next === "\n"
      ) {
        i++;
      }

      row.push(value);

      rows.push(row);

      row = [];

      value = "";

    } else {

      value += char;

    }

  }


  row.push(value);


  if (
    row.length > 1 ||
    row[0] !== ""
  ) {

    rows.push(row);

  }


  if (!rows.length)
    return [];


  const headers =
    rows[0]
      .map(
        x =>
          x.trim()
      );


  return rows
    .slice(1)
    .filter(
      row =>
        row.some(
          value =>
            value !== ""
        )
    )
    .map(
      row => {

        const object = {};

        headers.forEach(
          (header,index) => {

            object[header] =
              row[index] ??
              "";

          }
        );

        return object;

      }
    );

}


/* =========================================================
   FILE TO BASE64
========================================================= */

function renderFileToBase64(container) {

  container.innerHTML = `

    <div class="tool-form">

      <div class="file-drop">

        <strong>
          اختر أي ملف
        </strong>

        <input
          id="baseFile"
          type="file"
        >

      </div>

      <textarea
        id="baseFileOutput"
        readonly
        placeholder="Base64..."
      ></textarea>

      <button
        class="btn btn-success"
        id="baseFileCopy"
      >
        نسخ Base64
      </button>

    </div>

  `;


  $("#baseFile").onchange =
    event => {

      const file =
        event.target.files[0];

      if (!file) return;


      const reader =
        new FileReader();


      reader.onload =
        () => {

          const result =
            String(
              reader.result
            );


          $("#baseFileOutput")
            .value =
            result.split(",")[1] ||
            result;

        };


      reader.readAsDataURL(
        file
      );

    };


  $("#baseFileCopy").onclick =
    () =>
      copyText(
        $("#baseFileOutput").value
      );

}


/* =========================================================
   RANDOM NUMBER
========================================================= */

function renderRandomNumber(container) {

  container.innerHTML = `

    <div class="tool-form">

      <div class="form-row">

        <input
          id="randMin"
          type="number"
          value="1"
          placeholder="من"
        >

        <input
          id="randMax"
          type="number"
          value="100"
          placeholder="إلى"
        >

      </div>

      <button
        class="btn btn-primary"
        id="randRun"
      >
        توليد رقم
      </button>

      <div class="result-card">

        <span>
          النتيجة
        </span>

        <div
          id="randResult"
          class="result-value"
        >
          -
        </div>

      </div>

    </div>

  `;


  $("#randRun").onclick =
    () => {

      let min =
        Number(
          $("#randMin").value
        );

      let max =
        Number(
          $("#randMax").value
        );


      if (
        !Number.isFinite(min) ||
        !Number.isFinite(max)
      ) {

        showToast(
          "أدخل أرقامًا صحيحة"
        );

        return;

      }


      if (min > max) {

        [
          min,
          max
        ] =
        [
          max,
          min
        ];

      }


      min =
        Math.ceil(min);

      max =
        Math.floor(max);


      if (min > max) {

        showToast(
          "النطاق غير صالح"
        );

        return;

      }


      $("#randResult")
        .textContent =
        randomIntegerInclusive(
          min,
          max
        );

    };

}


/* =========================================================
   COLOR
========================================================= */

function renderColor(container) {

  container.innerHTML = `

    <div class="tool-form">

      <button
        id="colorRun"
        class="btn btn-primary"
      >
        إنشاء لون
      </button>

      <div
        id="colorPreview"
        style="
          height:180px;
          border-radius:18px;
          border:1px solid var(--border);
        "
      ></div>

      <div class="result-card">

        <strong id="colorHex">
          #000000
        </strong>

        <br>

        <span id="colorRGB">
          rgb(0, 0, 0)
        </span>

      </div>

      <button
        class="btn btn-success"
        id="colorCopy"
      >
        نسخ HEX
      </button>

    </div>

  `;


  let currentHex =
    "#000000";


  function generate() {

    const r =
      randomInt(256);

    const g =
      randomInt(256);

    const b =
      randomInt(256);


    currentHex =
      "#" +
      [r,g,b]
        .map(
          x =>
            x
              .toString(16)
              .padStart(2,"0")
        )
        .join("");


    $("#colorPreview")
      .style.background =
      currentHex;


    $("#colorHex")
      .textContent =
      currentHex;


    $("#colorRGB")
      .textContent =
      `rgb(${r}, ${g}, ${b})`;

  }


  $("#colorRun")
    .onclick =
    generate;


  $("#colorCopy")
    .onclick =
    () =>
      copyText(
        currentHex
      );


  generate();

}


/* =========================================================
   PERCENTAGE
========================================================= */

function renderPercentage(container) {

  container.innerHTML = `

    <div class="tool-form">

      <div class="form-row">

        <input
          id="percentA"
          type="number"
          value="25"
          placeholder="النسبة"
        >

        <input
          id="percentB"
          type="number"
          value="200"
          placeholder="الرقم"
        >

      </div>

      <button
        class="btn btn-primary"
        id="percentRun"
      >
        حساب
      </button>

      <div
        id="percentResult"
        class="result-card"
      >
        -
      </div>

    </div>

  `;


  $("#percentRun").onclick =
    () => {

      const a =
        Number(
          $("#percentA").value
        );

      const b =
        Number(
          $("#percentB").value
        );


      if (
        !Number.isFinite(a) ||
        !Number.isFinite(b)
      ) {

        showToast(
          "أدخل أرقامًا صحيحة"
        );

        return;

      }


      const result =
        b * a / 100;


      const percent =
        b === 0
          ? 0
          : (a / b) * 100;


      $("#percentResult")
        .innerHTML =
        `<strong>
          ${a}% من ${b} = ${result}
        </strong>
        <br><br>
        نسبة ${a} من ${b}:
        ${percent.toFixed(2)}%`;

    };

}


/* =========================================================
   DISCOUNT
========================================================= */

function renderDiscount(container) {

  container.innerHTML = `

    <div class="tool-form">

      <input
        id="discountPrice"
        type="number"
        value="100"
        placeholder="السعر الأصلي"
      >

      <input
        id="discountPercent"
        type="number"
        value="20"
        placeholder="نسبة الخصم %"
      >

      <button
        class="btn btn-primary"
        id="discountRun"
      >
        حساب
      </button>

      <div
        id="discountResult"
        class="result-card"
      >
        -
      </div>

    </div>

  `;


  $("#discountRun").onclick =
    () => {

      const price =
        Number(
          $("#discountPrice").value
        );

      const percent =
        Number(
          $("#discountPercent").value
        );


      if (
        !Number.isFinite(price) ||
        !Number.isFinite(percent)
      ) {

        showToast(
          "أدخل قيمًا صحيحة"
        );

        return;

      }


      const saving =
        price *
        percent /
        100;


      const finalPrice =
        price -
        saving;


      $("#discountResult")
        .innerHTML =
        `<strong>
          السعر بعد الخصم:
          ${finalPrice.toFixed(2)}
        </strong>
        <br>
        مقدار التوفير:
        ${saving.toFixed(2)}`;

    };

}


/* =========================================================
   AGE
========================================================= */

function renderAge(container) {

  container.innerHTML = `

    <div class="tool-form">

      <input
        id="birthDate"
        type="date"
      >

      <button
        class="btn btn-primary"
        id="ageRun"
      >
        احسب العمر
      </button>

      <div
        id="ageResult"
        class="result-card"
      >
        اختر تاريخ الميلاد.
      </div>

    </div>

  `;


  $("#ageRun").onclick =
    () => {

      const value =
        $("#birthDate").value;


      if (!value) {

        showToast(
          "اختر تاريخ الميلاد"
        );

        return;

      }


      const birth =
        new Date(
          value +
          "T00:00:00"
        );

      const today =
        new Date();


      if (
        birth > today
      ) {

        showToast(
          "التاريخ في المستقبل"
        );

        return;

      }


      let years =
        today.getFullYear() -
        birth.getFullYear();


      let months =
        today.getMonth() -
        birth.getMonth();


      let days =
        today.getDate() -
        birth.getDate();


      if (days < 0) {

        months--;

        const previousMonth =
          new Date(
            today.getFullYear(),
            today.getMonth(),
            0
          );

        days +=
          previousMonth.getDate();

      }


      if (months < 0) {

        years--;

        months += 12;

      }


      $("#ageResult")
        .innerHTML =
        `<strong>عمرك:</strong>

        <div class="result-value">
          ${years} سنة
        </div>

        ${months} شهر و
        ${days} يوم تقريبًا.`;

    };

}


/* =========================================================
   BMI
========================================================= */

function renderBMI(container) {

  container.innerHTML = `

    <div class="tool-form">

      <input
        id="bmiWeight"
        type="number"
        value="70"
        placeholder="الوزن بالكيلو"
      >

      <input
        id="bmiHeight"
        type="number"
        value="175"
        placeholder="الطول بالسنتيمتر"
      >

      <button
        class="btn btn-primary"
        id="bmiRun"
      >
        حساب BMI
      </button>

      <div
        id="bmiResult"
        class="result-card"
      >
        -
      </div>

    </div>

  `;


  $("#bmiRun").onclick =
    () => {

      const weight =
        Number(
          $("#bmiWeight").value
        );

      const heightCm =
        Number(
          $("#bmiHeight").value
        );


      if (
        weight <= 0 ||
        heightCm <= 0
      ) {

        showToast(
          "أدخل قيمًا صحيحة"
        );

        return;

      }


      const height =
        heightCm / 100;


      const bmi =
        weight /
        (height * height);


      let category =
        "طبيعي";


      if (bmi < 18.5)
        category =
          "أقل من الطبيعي";

      else if (bmi >= 25)
        category =
          "أعلى من الطبيعي";

      if (bmi >= 30)
        category =
          "مرتفع جدًا";


      $("#bmiResult")
        .innerHTML =
        `<div class="result-value">
          ${bmi.toFixed(2)}
        </div>

        التصنيف التقريبي:
        <strong>${category}</strong>`;

    };

}


/* =========================================================
   AVERAGE
========================================================= */

function renderAverage(container) {

  container.innerHTML = `

    <div class="tool-form">

      <textarea
        id="averageInput"
        placeholder="اكتب الأرقام مفصولة بفواصل أو أسطر&#10;10, 20, 30"
      ></textarea>

      <button
        class="btn btn-primary"
        id="averageRun"
      >
        حساب المتوسط
      </button>

      <div
        id="averageResult"
        class="result-card"
      >
        -
      </div>

    </div>

  `;


  $("#averageRun").onclick =
    () => {

      const values =
        $("#averageInput")
          .value
          .split(/[\s,،]+/)
          .map(Number)
          .filter(
            value =>
              Number.isFinite(value)
          );


      if (!values.length) {

        showToast(
          "أدخل أرقامًا صحيحة"
        );

        return;

      }


      const sum =
        values.reduce(
          (a,b) =>
            a + b,
          0
        );


      const average =
        sum /
        values.length;


      $("#averageResult")
        .innerHTML =
        `<strong>
          المتوسط:
          ${average.toFixed(4)}
        </strong>
        <br>
        مجموع الأرقام:
        ${sum}
        <br>
        عدد الأرقام:
        ${values.length}`;

    };

}


/* =========================================================
   UNITS
========================================================= */

function renderUnits(container) {

  container.innerHTML = `

    <div class="tool-form">

      <select id="unitType">

        <option value="length">
          الطول
        </option>

        <option value="weight">
          الوزن
        </option>

        <option value="data">
          البيانات
        </option>

        <option value="temperature">
          الحرارة
        </option>

      </select>

      <div class="form-row">

        <input
          id="unitValue"
          type="number"
          value="1"
        >

        <select
          id="unitFrom"
        ></select>

      </div>

      <select
        id="unitTo"
      ></select>

      <button
        class="btn btn-primary"
        id="unitRun"
      >
        تحويل
      </button>

      <div
        id="unitResult"
        class="result-card"
      >
        -
      </div>

    </div>

  `;


  const units = {

    length: {

      m:
        ["متر",1],

      km:
        ["كيلومتر",1000],

      cm:
        ["سنتيمتر",.01],

      mm:
        ["ملليمتر",.001],

      ft:
        ["قدم",.3048],

      inch:
        ["بوصة",.0254]

    },


    weight: {

      kg:
        ["كيلوجرام",1],

      g:
        ["جرام",.001],

      mg:
        ["مليجرام",.000001],

      lb:
        ["رطل",.45359237]

    },


    data: {

      byte:
        ["Byte",1],

      kb:
        ["KB",1024],

      mb:
        ["MB",1024 ** 2],

      gb:
        ["GB",1024 ** 3]

    },


    temperature: {

      c:
        ["Celsius","temp"],

      f:
        ["Fahrenheit","temp"],

      k:
        ["Kelvin","temp"]

    }

  };


  function updateUnits() {

    const type =
      $("#unitType").value;

    const list =
      units[type];


    const options =
      Object.entries(list)
        .map(
          ([key,value]) =>
            `<option value="${key}">
              ${value[0]}
            </option>`
        )
        .join("");


    $("#unitFrom")
      .innerHTML =
      options;

    $("#unitTo")
      .innerHTML =
      options;


    if (type === "length")
      $("#unitTo").value =
        "km";

    if (type === "weight")
      $("#unitTo").value =
        "g";

    if (type === "data")
      $("#unitTo").value =
        "mb";

    if (type === "temperature")
      $("#unitTo").value =
        "f";

  }


  function convertTemperature(
    value,
    from,
    to
  ) {

    let celsius;


    if (from === "c")
      celsius = value;

    if (from === "f")
      celsius =
        (value - 32) *
        5 / 9;

    if (from === "k")
      celsius =
        value - 273.15;


    if (to === "c")
      return celsius;

    if (to === "f")
      return (
        celsius *
        9 / 5 +
        32
      );

    if (to === "k")
      return (
        celsius +
        273.15
      );

  }


  $("#unitType")
    .onchange =
    updateUnits;


  $("#unitRun").onclick =
    () => {

      const type =
        $("#unitType").value;

      const value =
        Number(
          $("#unitValue").value
        );

      const from =
        $("#unitFrom").value;

      const to =
        $("#unitTo").value;


      if (
        !Number.isFinite(value)
      ) {

        showToast(
          "أدخل قيمة صحيحة"
        );

        return;

      }


      let result;


      if (
        type ===
        "temperature"
      ) {

        result =
          convertTemperature(
            value,
            from,
            to
          );

      } else {

        const base =
          value *
          units[type][from][1];

        result =
          base /
          units[type][to][1];

      }


      $("#unitResult")
        .textContent =
        result.toLocaleString(
          undefined,
          {
            maximumFractionDigits:
              10
          }
        );

    };


  updateUnits();

}


/* =========================================================
   TIME CALCULATOR
========================================================= */

function renderTimeCalculator(container) {

  container.innerHTML = `

    <div class="tool-form">

      <div class="form-row">

        <input
          id="timeH1"
          type="number"
          value="1"
          placeholder="ساعات"
        >

        <input
          id="timeM1"
          type="number"
          value="30"
          placeholder="دقائق"
        >

      </div>

      <div class="form-row">

        <input
          id="timeH2"
          type="number"
          value="2"
          placeholder="ساعات"
        >

        <input
          id="timeM2"
          type="number"
          value="45"
          placeholder="دقائق"
        >

      </div>

      <button
        class="btn btn-primary"
        id="timeRun"
      >
        جمع الوقت
      </button>

      <div
        id="timeResult"
        class="result-card"
      >
        -
      </div>

    </div>

  `;


  $("#timeRun").onclick =
    () => {

      const h1 =
        Number(
          $("#timeH1").value
        );

      const m1 =
        Number(
          $("#timeM1").value
        );

      const h2 =
        Number(
          $("#timeH2").value
        );

      const m2 =
        Number(
          $("#timeM2").value
        );


      const totalMinutes =
        h1 * 60 +
        m1 +
        h2 * 60 +
        m2;


      const hours =
        Math.floor(
          totalMinutes / 60
        );

      const minutes =
        totalMinutes % 60;


      $("#timeResult")
        .innerHTML =
        `<div class="result-value">
          ${hours} ساعة
          ${minutes} دقيقة
        </div>
        إجمالي الدقائق:
        ${totalMinutes}`;

    };

}


/* =========================================================
   STORAGE HELPERS
========================================================= */

function getStorage(
  key,
  fallback
) {

  try {

    const value =
      localStorage.getItem(
        key
      );

    return value
      ? JSON.parse(value)
      : fallback;

  } catch {

    return fallback;

  }

}


function saveStorage(
  key,
  value
) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch {}

}


/* =========================================================
   RANDOM
========================================================= */

function randomInt(max) {

  if (
    max <= 0
  )
    return 0;


  if (
    crypto &&
    typeof crypto.getRandomValues ===
    "function"
  ) {

    const array =
      new Uint32Array(1);

    crypto.getRandomValues(
      array
    );

    return (
      array[0] % max
    );

  }


  return Math.floor(
    Math.random() * max
  );

}


function randomIntegerInclusive(
  min,
  max
) {

  if (min > max) {

    [
      min,
      max
    ] =
    [
      max,
      min
    ];

  }


  return (
    min +
    randomInt(
      max - min + 1
    )
  );

}


/* =========================================================
   BASE64 HELPERS
========================================================= */

function utf8ToBase64(text) {

  const bytes =
    new TextEncoder()
      .encode(text);

  return bytesToBase64(
    bytes
  );

}


function bytesToBase64(bytes) {

  let binary = "";

  const chunkSize =
    0x8000;


  for (
    let i = 0;
    i < bytes.length;
    i += chunkSize
  ) {

    binary += String.fromCharCode(
      ...bytes.subarray(
        i,
        i + chunkSize
      )
    );

  }


  return btoa(binary);

}


function base64ToUtf8(base64) {

  const binary =
    atob(
      base64
    );

  const bytes =
    Uint8Array.from(
      binary,
      char =>
        char.charCodeAt(0)
    );


  return new TextDecoder()
    .decode(bytes);

}


/* =========================================================
   COPY
========================================================= */

async function copyText(text) {

  if (!text) {

    showToast(
      "لا توجد نتيجة لنسخها"
    );

    return;

  }


  try {

    if (
      navigator.clipboard &&
      window.isSecureContext
    ) {

      await navigator.clipboard
        .writeText(text);

    } else {

      const textarea =
        document.createElement(
          "textarea"
        );

      textarea.value =
        text;

      textarea.style.position =
        "fixed";

      textarea.style.opacity =
        "0";

      document.body.appendChild(
        textarea
      );

      textarea.select();

      document.execCommand(
        "copy"
      );

      textarea.remove();

    }


    showToast(
      "تم النسخ ✓"
    );

  } catch {

    showToast(
      "تعذر النسخ"
    );

  }

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

  const toast =
    $("#toast");

  toast.textContent =
    message;

  toast.classList
    .add("show");


  clearTimeout(
    showToast.timer
  );


  showToast.timer =
    setTimeout(
      () => {

        toast.classList
          .remove("show");

      },
      2500
    );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   FORMAT BYTES
========================================================= */

function formatBytes(bytes) {

  if (!bytes)
    return "0 Bytes";


  const units = [
    "Bytes",
    "KB",
    "MB",
    "GB",
    "TB"
  ];


  const index =
    Math.min(
      Math.floor(
        Math.log(bytes) /
        Math.log(1024)
      ),
      units.length - 1
    );


  return (
    (
      bytes /
      Math.pow(
        1024,
        index
      )
    ).toFixed(
      index === 0
        ? 0
        : 2
    ) +
    " " +
    units[index]
  );

}