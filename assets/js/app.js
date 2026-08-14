/* Baptiste Seux — comportements de la page.
   Aucune dépendance, aucun framework. IntersectionObserver, transitions CSS,
   et un moteur i18n de quelques lignes qui remplace du texte dans le DOM. */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)');

  /* =========================================================
     1. Internationalisation
     Le document est écrit en anglais : c'est la langue par défaut,
     celle que voient les moteurs de recherche et les visiteurs sans
     JavaScript. Les dictionnaires fr et es sont des fichiers JSON
     chargés à la demande — un visiteur anglophone ne télécharge rien.
     ========================================================= */

  var LANGS = ['en', 'fr', 'es'];
  var FALLBACK = 'en';

  /* Chaque entrée : [attribut porteur de la clé, écriture, lecture]. */
  var BINDINGS = [
    ['data-i18n', setText, getText],
    ['data-i18n-html', setHtml, getHtml],
    ['data-i18n-content', attrSetter('content'), attrGetter('content')],
    ['data-i18n-alt', attrSetter('alt'), attrGetter('alt')],
    ['data-i18n-aria', attrSetter('aria-label'), attrGetter('aria-label')],
    ['data-i18n-title', attrSetter('title'), attrGetter('title')]
  ];

  function setText(el, v) { el.textContent = v; }
  function getText(el) { return el.textContent.replace(/\s+/g, ' ').trim(); }
  function setHtml(el, v) { el.innerHTML = v; }
  function getHtml(el) { return el.innerHTML.replace(/\s+/g, ' ').trim(); }
  function attrSetter(name) { return function (el, v) { el.setAttribute(name, v); }; }
  function attrGetter(name) { return function (el) { return el.getAttribute(name); }; }

  /* Chaînes qui n'existent nulle part dans le DOM : elles sont posées par le
     script lui-même, il leur faut donc une version anglaise ici. */
  var base = {
    'a.dark': 'Switch to dark theme',
    'a.light': 'Switch to light theme'
  };
  var nodes = [];       /* [élément, index du binding, clé] */
  var dicts = {};       /* dictionnaires déjà chargés */
  var current = base;

  function collect() {
    for (var b = 0; b < BINDINGS.length; b++) {
      var found = document.querySelectorAll('[' + BINDINGS[b][0] + ']');
      for (var i = 0; i < found.length; i++) {
        var el = found[i];
        var key = el.getAttribute(BINDINGS[b][0]);
        nodes.push([el, b, key]);
        /* La version anglaise est lue une seule fois, directement dans le
           document : elle n'a pas à être dupliquée dans un fichier. */
        if (base[key] == null) base[key] = BINDINGS[b][2](el);
      }
    }
  }

  function t(key) {
    var v = current[key];
    return v == null ? base[key] : v;
  }

  function apply(lang, dict) {
    current = dict || base;
    root.lang = lang;
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i][0], b = nodes[i][1], key = nodes[i][2];
      var v = current[key];
      if (v == null) v = base[key];
      if (v != null) BINDINGS[b][1](el, v);
    }
    themeLabel();
  }

  function load(lang) {
    if (lang === FALLBACK) return Promise.resolve(null);
    if (dicts[lang]) return Promise.resolve(dicts[lang]);
    if (!window.fetch) return Promise.resolve(null);
    return fetch('assets/i18n/' + lang + '.json', { credentials: 'omit' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { if (d) dicts[lang] = d; return d; })
      .catch(function () { return null; });
  }

  function setLang(lang, remember) {
    if (LANGS.indexOf(lang) < 0) lang = FALLBACK;
    if (remember) { try { localStorage.setItem('bs-lang', lang); } catch (e) {} }
    if (select) select.value = lang;
    load(lang).then(function (d) {
      /* Dictionnaire injoignable : on reste en anglais plutôt que d'afficher
         des clés brutes ou une page à moitié traduite. */
      if (!d && lang !== FALLBACK) apply(FALLBACK, null);
      else apply(lang, d);
    });
  }

  var select = document.getElementById('lang');
  var startLang = window.BSLANG && LANGS.indexOf(window.BSLANG) > -1 ? window.BSLANG : FALLBACK;

  collect();
  if (select) {
    select.value = startLang;
    select.addEventListener('change', function () { setLang(select.value, true); });
  }

  if (startLang === FALLBACK) {
    apply(FALLBACK, null);
  } else if (window.BSDICT) {
    /* La requête a été lancée dans le <head>, en parallèle de l'analyse du
       document : elle est presque toujours résolue à cet instant. */
    window.BSDICT.then(function (d) {
      if (d) { dicts[startLang] = d; apply(startLang, d); }
      else { apply(FALLBACK, null); }
    });
  } else {
    setLang(startLang, false);
  }

  /* =========================================================
     2. Thème clair / sombre
     ========================================================= */
  var toggle = document.getElementById('theme-toggle');
  var systemDark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)');

  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return systemDark && systemDark.matches ? 'dark' : 'light';
  }
  function themeLabel() {
    if (!toggle) return;
    toggle.setAttribute('aria-label', currentTheme() === 'dark' ? t('a.light') : t('a.dark'));
  }

  if (toggle) {
    themeLabel();
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('bs-theme', next); } catch (e) {}
      themeLabel();
    });
    if (systemDark && systemDark.addEventListener) systemDark.addEventListener('change', themeLabel);
  }

  /* =========================================================
     3. Révélations au défilement
     ========================================================= */
  var revealables = document.querySelectorAll('[data-reveal]');
  var timeline = document.querySelector('[data-reveal-tl]');

  function showAll() {
    for (var i = 0; i < revealables.length; i++) revealables[i].classList.add('is-in');
    if (timeline) timeline.classList.add('is-in');
  }

  if (!('IntersectionObserver' in window) || (reduced && reduced.matches)) {
    showAll();
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            entries[i].target.classList.add('is-in');
            io.unobserve(entries[i].target);
          }
        }
      },
      /* Marge basse en pixels, pas en pourcentage : sur un très grand écran, un
         -10% creuse une zone morte de plusieurs centaines de pixels en bas de
         page, et le dernier bloc — ici le contact — n'entre jamais dans la
         racine de l'observateur. Comme la page tient déjà entière à l'écran,
         il n'y a plus de défilement pour l'y faire entrer : il resterait
         invisible pour toujours. */
      { rootMargin: '0px 0px -72px 0px', threshold: 0.08 }
    );
    for (var i = 0; i < revealables.length; i++) io.observe(revealables[i]);
    if (timeline) io.observe(timeline);

    /* Filet de sécurité : ce qui est déjà visible au chargement s'affiche tout de suite. */
    requestAnimationFrame(function () {
      for (var j = 0; j < revealables.length; j++) {
        var el = revealables[j];
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.classList.add('is-in');
      }
    });
  }

  /* =========================================================
     4. Filet sous l'en-tête au défilement
     ========================================================= */
  var hdr = document.getElementById('hdr');
  if (hdr) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        hdr.classList.toggle('is-stuck', window.scrollY > 16);
        ticking = false;
      });
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* =========================================================
     5. Section active dans la navigation
     ========================================================= */
  var links = document.querySelectorAll('#nav a[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    var map = {};
    var targets = [];
    for (var k = 0; k < links.length; k++) {
      var id = links[k].getAttribute('href').slice(1);
      var section = document.getElementById(id);
      if (section) { map[id] = links[k]; targets.push(section); }
    }
    var visible = {};
    var navIo = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          visible[entries[i].target.id] = entries[i].isIntersecting;
        }
        var active = null;
        for (var j = 0; j < targets.length; j++) {
          if (visible[targets[j].id]) { active = targets[j].id; break; }
        }
        for (var key in map) {
          if (key === active) map[key].setAttribute('aria-current', 'true');
          else map[key].removeAttribute('aria-current');
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    for (var s = 0; s < targets.length; s++) navIo.observe(targets[s]);
  }
})();
