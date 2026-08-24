/* 渲染 + 语言切换 + 深浅色。内容全部来自 content.js，平时不用改这个文件。 */
(function () {
  "use strict";

  var S = window.SITE;
  var LANGS = S.langs.map(function (l) { return l.code; });
  var STORE_LANG = "lang";
  var STORE_THEME = "theme";

  /* ── 取值 ─────────────────────────────────────────────────────────────── */

  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

  // "hero.title" → SITE.hero.title
  function pick(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, S);
  }

  // 多语言字段取当前语言，缺了回落到默认语言
  function str(node, lang) {
    if (node == null) return "";
    if (typeof node === "string") return fill(node);
    return fill(node[lang] != null ? node[lang] : node[S.defaultLang] || node.en || "");
  }

  // {name} → brand.name，改 App 名只需改 content.js 那一处
  function fill(s) {
    return String(s).replace(/\{name\}/g, S.brand.name);
  }

  function t(path, lang) { return str(pick(path), lang); }

  /* ── DOM 小工具 ───────────────────────────────────────────────────────── */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) setText(n, text);
    return n;
  }

  // 文案里的 \n 变成换行
  function setText(node, text) {
    node.textContent = "";
    String(text).split("\n").forEach(function (part, i) {
      if (i) node.appendChild(document.createElement("br"));
      node.appendChild(document.createTextNode(part));
    });
  }

  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  // image 写一张也行，写 ["a.png","b.png"] 就并排放几台
  function images(value) {
    return (Array.isArray(value) ? value : [value]).filter(Boolean);
  }

  function device(src, alt, big) {
    var d = el("div", "device" + (big ? " device-lg" : ""));
    var img = el("img");
    img.src = src;
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    d.appendChild(img);
    return d;
  }

  /* ── 各区块 ───────────────────────────────────────────────────────────── */

  function renderNav(lang) {
    var nav = $("[data-nav]");
    if (!nav) return;
    nav.textContent = "";
    S.nav.forEach(function (item) {
      var target = document.querySelector(item.href);
      if (!target || target.hidden) return; // 空区块不出现在导航里
      var a = el("a", null, str(item.label, lang));
      a.href = item.href;
      nav.appendChild(a);
    });
  }

  function renderLangSwitch(lang) {
    var box = $("[data-langswitch]");
    box.setAttribute("aria-label", t("ui.langGroup", lang));
    box.textContent = "";
    S.langs.forEach(function (l) {
      var b = el("button", null, l.label);
      b.type = "button";
      b.setAttribute("aria-pressed", String(l.code === lang));
      b.setAttribute("lang", l.htmlLang);
      b.addEventListener("click", function () { setLang(l.code); });
      box.appendChild(b);
    });
  }

  function renderCTA(lang) {
    $$("[data-cta]").forEach(function (row) {
      row.textContent = "";
      S.cta.forEach(function (c) {
        var wrap = el("div", "cta");
        var btn = el(c.disabled || !c.href ? "span" : "a", "btn btn-" + (c.style || "secondary"),
                     str(c.label, lang));
        if (c.disabled || !c.href) {
          btn.setAttribute("role", "link");
          btn.setAttribute("aria-disabled", "true");
        } else {
          btn.href = c.href;
          if (/^https?:/.test(c.href)) { btn.target = "_blank"; btn.rel = "noopener"; }
        }
        wrap.appendChild(btn);
        var note = str(c.note, lang);
        if (note) wrap.appendChild(el("p", "cta-note", note));
        row.appendChild(wrap);
      });
    });
  }

  // 首屏放几张图，决定它长什么样：
  //   1 张   → 一台大手机（device-lg）
  //   2–3 张 → 并排缩小（.multi）
  //   4 张以上 → 「一排 5 个」的小图墙（.wall），9 张就是 5 + 4 两排
  // ⚠️ **分档写在这一处**，CSS 只认这三个 class——两边各判一次必然漂。
  var HERO_WALL_MIN = 4;

  function renderHero(lang) {
    var box = $("[data-hero-visual]");
    if (!box) return;
    var imgs = images(S.hero.image);
    box.textContent = "";
    box.classList.toggle("multi", imgs.length > 1 && imgs.length < HERO_WALL_MIN);
    box.classList.toggle("wall", imgs.length >= HERO_WALL_MIN);
    // ⚠️ alt 只给第一张：9 张共用一句说明，读屏念 9 遍同一句是纯噪音。
    imgs.forEach(function (src, i) {
      box.appendChild(device(src, i === 0 ? str(S.hero.imageAlt, lang) : "", imgs.length === 1));
    });
  }

  function renderSteps(lang) {
    var box = $("[data-steps]");
    if (!box) return;
    box.textContent = "";
    S.steps.items.forEach(function (s) {
      var card = el("article", "step reveal");
      card.appendChild(el("div", "step-k", s.k));
      card.appendChild(el("h3", null, str(s.title, lang)));
      card.appendChild(el("p", null, str(s.body, lang)));
      box.appendChild(card);
    });
  }

  function renderFeatures(lang) {
    var box = $("[data-features]");
    if (!box) return;
    box.textContent = "";
    var anyImage = S.features.items.some(function (f) { return images(f.image).length > 0; });
    box.classList.toggle("as-grid", !anyImage);
    S.features.items.forEach(function (f) {
      var imgs = images(f.image);
      var row = el("article", "feature reveal" + (imgs.length ? "" : " no-media"));
      var copy = el("div", "feature-copy");
      copy.appendChild(el("h3", null, str(f.title, lang)));
      copy.appendChild(el("p", null, str(f.body, lang)));
      row.appendChild(copy);
      if (imgs.length) {
        var media = el("div", "feature-media" + (imgs.length > 1 ? " multi" : ""));
        imgs.forEach(function (src) { media.appendChild(device(src, str(f.imageAlt, lang))); });
        row.appendChild(media);
      }
      box.appendChild(row);
    });
  }

  function renderGallery(lang) {
    var section = $('[data-section="gallery"]');
    if (!section) return;
    var items = (S.gallery.items || []).filter(function (i) { return i.src; });
    section.hidden = items.length === 0;
    if (section.hidden) return;
    var box = $("[data-gallery]");
    box.textContent = "";
    box.classList.toggle("is-single", items.length === 1);
    items.forEach(function (item) {
      var fig = el("figure");
      var cap = str(item.caption, lang);
      fig.appendChild(device(item.src, cap));
      if (cap) fig.appendChild(el("figcaption", null, cap));
      box.appendChild(fig);
    });
  }

  function renderVideo(lang) {
    var section = $('[data-section="video"]');
    if (!section) return;
    section.hidden = !S.video.src;
    if (section.hidden) return;
    var box = $("[data-video]");
    box.textContent = "";
    var v = document.createElement("video");
    v.src = S.video.src;
    if (S.video.poster) v.poster = S.video.poster;
    v.controls = true;
    v.playsInline = true;
    v.preload = "metadata";
    box.appendChild(v);
  }

  function renderNotes(lang) {
    var box = $("[data-notes]");
    if (!box) return;
    box.textContent = "";
    S.notes.items.forEach(function (n) {
      var card = el("article", "note reveal");
      card.appendChild(el("h3", null, str(n.title, lang)));
      card.appendChild(el("p", null, str(n.body, lang)));
      box.appendChild(card);
    });
  }

  /* ── 条款 / 隐私：正文也在 content.js 里，⚠️ 三种语言都要填 ─────────────
   *  这两页共用 index.html 那套壳（导航栏 · 语言切换 · 深浅色 · 页脚），
   *  所以上面每个渲染函数都得容忍自己的挂载点不存在——那就是那一排
   *  `if (!box) return;` 的来由。⛔ 别为这两页另开一个 js。
   * --------------------------------------------------------------------- */
  function renderLegal(lang) {
    var box = $("[data-legal]");
    if (!box) return;
    var doc = S.legal[box.getAttribute("data-legal")];
    box.textContent = "";

    box.appendChild(el("h1", "legal-title", str(doc.title, lang)));
    var updated = str(S.legal.updatedLabel, lang) + " " + S.legal.updated;
    box.appendChild(el("p", "legal-updated", updated));
    if (str(doc.intro, lang)) box.appendChild(el("p", "legal-intro", str(doc.intro, lang)));

    doc.sections.forEach(function (sec) {
      var block = el("section", "legal-block");
      block.appendChild(el("h2", null, str(sec.title, lang)));
      // 一段一个 <p>：文案里用 \n 分段。
      // ⚠️ **不走 innerHTML**——正文是纯文本，开了那个口子以后谁往 content.js 里
      // 粘一段带尖括号的东西都会变成真标签。`**重点**` 由下面自己拼 DOM。
      str(sec.body, lang).split("\n").forEach(function (para) {
        if (!para.trim()) return;
        var pEl = el("p");
        para.trim().split("**").forEach(function (chunk, i) {
          if (!chunk) return;
          pEl.appendChild(i % 2 ? el("strong", null, chunk) : document.createTextNode(chunk));
        });
        block.appendChild(pEl);
      });
      box.appendChild(block);
    });

    var back = el("a", "legal-back", str(S.legal.back, lang));
    back.href = "index.html";
    box.appendChild(back);

    document.title = str(doc.title, lang) + " · " + S.brand.name;
  }

  function renderFooter(lang) {
    var box = $("[data-footer-links]");
    if (!box) return;
    box.textContent = "";
    (S.footer.links || []).forEach(function (l) {
      var a = el("a", null, str(l.label, lang));
      a.href = l.href;
      box.appendChild(a);
    });
    $("[data-year]").textContent = "© " + new Date().getFullYear();
  }

  /* ── 字幕演示：当前句逐词点亮，循环 ───────────────────────────────────── */

  var demoTimer = null;

  function renderDemo(lang) {
    var box = $("[data-demo]");
    if (!box) return;
    box.textContent = "";
    var wordNodes = [];

    S.demo.lines.forEach(function (line) {
      var row = el("div", "demo-line" + (line.active ? " is-active" : ""));
      var src = el("p", "demo-src");
      if (line.active) {
        // 逐词点亮要拆成 span
        line.en.split(" ").forEach(function (w, i) {
          if (i) src.appendChild(document.createTextNode(" "));
          var s = el("span", "w", w);
          src.appendChild(s);
          wordNodes.push(s);
        });
      } else {
        setText(src, line.en);
      }
      row.appendChild(src);
      var tr = str({ zh: line.zh, en: line.en, ja: line.ja }, lang);
      // 界面语言是英语时，原文就是译文，没必要再来一遍
      if (lang !== "en" && tr) row.appendChild(el("p", "demo-tr", tr));
      box.appendChild(row);
    });

    startDemo(wordNodes);
  }

  function startDemo(words) {
    if (demoTimer) { clearInterval(demoTimer); demoTimer = null; }
    if (!words.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach(function (w) { w.classList.add("spoken"); });
      return;
    }
    var i = 0;
    demoTimer = setInterval(function () {
      if (i < words.length) {
        words[i].classList.add("spoken");
        i++;
      } else if (i < words.length + 8) {
        i++; // 念完停一会儿
      } else {
        words.forEach(function (w) { w.classList.remove("spoken"); });
        i = 0;
      }
    }, 190);
  }

  /* ── 语言 ─────────────────────────────────────────────────────────────── */

  function detectLang() {
    var saved = store(STORE_LANG);
    if (saved && LANGS.indexOf(saved) >= 0) return saved;
    var prefs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < prefs.length; i++) {
      var p = prefs[i].toLowerCase();
      if (p.indexOf("zh") === 0) return "zh";
      if (p.indexOf("ja") === 0) return "ja";
      if (p.indexOf("en") === 0) return "en";
    }
    return S.defaultLang;
  }

  function setLang(lang) {
    store(STORE_LANG, lang);
    render(lang);
  }

  function render(lang) {
    var meta = S.langs.filter(function (l) { return l.code === lang; })[0] || S.langs[0];
    document.documentElement.lang = meta.htmlLang;

    var title = fill(S.brand.name);
    var desc = t("brand.tagline", lang);
    document.title = title; // 条款 / 隐私那两页由 renderLegal 覆盖成自己的标题
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', desc);

    $$("[data-brand-name]").forEach(function (n) { n.textContent = S.brand.name; });
    $$("[data-i18n]").forEach(function (n) {
      var text = t(n.getAttribute("data-i18n"), lang);
      setText(n, text);
      n.hidden = !text; // 文案留空的行不占位置
    });
    $("[data-theme-toggle]").setAttribute("aria-label", t("ui.themeToggle", lang));

    renderLangSwitch(lang);
    renderCTA(lang);
    renderHero(lang);
    renderDemo(lang);
    renderSteps(lang);
    renderFeatures(lang);
    renderGallery(lang);
    renderVideo(lang);
    renderNotes(lang);
    renderLegal(lang);
    renderFooter(lang);
    renderNav(lang); // 放最后：要先知道哪些区块是空的
    observeReveal();
  }

  function setMeta(sel, val) {
    var n = document.querySelector(sel);
    if (n) n.setAttribute("content", val);
  }

  /* ── 深浅色：默认跟随系统，点一下才固定下来 ───────────────────────────── */

  function currentTheme() {
    var forced = document.documentElement.getAttribute("data-theme");
    if (forced) return forced;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function initTheme() {
    $("[data-theme-toggle]").addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      store(STORE_THEME, next);
    });
  }

  /* ── 入场动画 ─────────────────────────────────────────────────────────── */

  var io = null;
  function observeReveal() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach(function (n) { n.classList.add("in"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: .06 });
    }
    $$(".reveal:not(.in)").forEach(function (n) { io.observe(n); });
  }

  /* ── 起 ───────────────────────────────────────────────────────────────── */

  initTheme();
  render(detectLang());

  var topbar = $(".topbar");
  var onScroll = function () { if (topbar) topbar.classList.toggle("is-stuck", window.scrollY > 4); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();
