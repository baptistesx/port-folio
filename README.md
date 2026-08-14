# Portfolio — Baptiste Seux

Site vitrine statique : **CTO & développeur Flutter freelance**.
Une page, trois langues, aucun build, aucune dépendance.

Production : <https://baptistesx.github.io/port-folio/>

## Principes

- **Un seul fichier HTML.** Le CSS est intégré au `<head>`, le JavaScript tient dans un
  fichier de ~9 Ko non minifié. Pas de bundler, pas de `node_modules`, rien à installer.
- **Anglais par défaut.** Le document est écrit en anglais : c'est ce que voient les moteurs
  de recherche, les aperçus de partage et les visiteurs sans JavaScript. Le français et
  l'espagnol sont des dictionnaires JSON chargés à la demande.
- **Budget.** ~16 Ko gzip pour le HTML, ~3 Ko pour le JS. Une langue autre que l'anglais
  ajoute ~5 Ko. Les visuels sont en AVIF/WebP, chargés en `lazy`.

## Arborescence

```
index.html                 page complète (contenu + styles)
site.webmanifest           manifeste PWA
robots.txt
assets/
  js/app.js                i18n, thème, révélations au défilement, navigation active
  i18n/fr.json             dictionnaire français
  i18n/es.json             dictionnaire espagnol
  fonts/                   Schibsted Grotesk (variable) + IBM Plex Mono, sous-ensembles
  img/
    favicon.svg .ico       monogramme
    icon-180 icon-512      icônes PWA / écran d'accueil
    og.png                 image de partage 1200×630
    portrait-*             portrait
    cases/                 visuels des études de cas, 4 largeurs × 2 formats
```

## Développer en local

N'importe quel serveur statique fait l'affaire — les dictionnaires sont récupérés en `fetch`,
donc l'ouverture directe en `file://` laisserait le site en anglais.

```sh
python3 -m http.server 4321
# puis http://localhost:4321/
```

## Internationalisation

Le moteur tient dans la première section de `assets/js/app.js`.

**Le texte anglais vit dans le HTML.** Au chargement, le script parcourt le document, relève
la version anglaise de chaque nœud marqué et la garde en mémoire. Il n'y a donc pas de
fichier `en.json` à tenir à jour : l'anglais, c'est la page elle-même.

Attributs disponibles :

| Attribut            | Effet                                    |
| ------------------- | ---------------------------------------- |
| `data-i18n`         | remplace le texte du nœud                |
| `data-i18n-html`    | remplace le HTML interne (liens, `<em>`) |
| `data-i18n-content` | attribut `content` (balises `<meta>`)    |
| `data-i18n-alt`     | attribut `alt`                           |
| `data-i18n-aria`    | attribut `aria-label`                    |
| `data-i18n-title`   | attribut `title`                         |

### Ajouter ou modifier une chaîne

1. Écrire le texte anglais directement dans `index.html` et poser la clé :
   `<p data-i18n="s1.h">Your idea becomes a testable app…</p>`
2. Ajouter la même clé dans `assets/i18n/fr.json` et `assets/i18n/es.json`.

Une clé absente d'un dictionnaire retombe silencieusement sur l'anglais : une traduction
oubliée dégrade la page, elle ne la casse pas.

### Vérifier que rien ne manque

```sh
python3 - <<'PY'
import json, re, io
html = io.open('index.html', encoding='utf-8').read()
keys = set(re.findall(r'data-i18n(?:-[a-z]+)?="([^"]+)"', html)) | {'a.dark', 'a.light'}
for lang in ('fr', 'es'):
    d = json.load(io.open('assets/i18n/%s.json' % lang, encoding='utf-8'))
    print(lang, 'manquantes:', sorted(keys - set(d)), '| en trop:', sorted(set(d) - keys))
PY
```

### Ajouter une langue

1. Copier `fr.json` vers `assets/i18n/<code>.json` et traduire.
2. Ajouter `'<code>'` au tableau `LANGS` dans `app.js` **et** dans le script du `<head>`
   d'`index.html`.
3. Ajouter une `<option>` au `<select id="lang">`.

La langue retenue est mémorisée dans `localStorage` sous `bs-lang` ; au premier passage, elle
est déduite de `navigator.language`, avec repli sur l'anglais.

### Ce que l'i18n ne couvre pas

Les visuels des études de cas sont des exports Figma **avec du texte français incrusté**. Les
`alt` sont traduits, l'image ne l'est pas. Pour un site pleinement multilingue il faudrait
réexporter chaque visuel par langue.

## Thème

Sombre par défaut, clair sous `prefers-color-scheme: light`, et un bouton qui force l'un ou
l'autre. Le choix est mémorisé sous `bs-theme` et appliqué par un script inline dans le
`<head>`, avant le premier rendu — donc sans flash.

## Régénérer les visuels

Les sources sont des exports Figma en 3600 × 1842. Quatre largeurs sont produites (760, 1240,
1860, 2480) dans les deux formats, pour couvrir les écrans haute densité.

```sh
for src in 00-clients:clients 01-lexaro:lexaro 02-meowtel:meowtel 03-edenred:edenred \
           04-yakadir:yakadir 05-capgemini-studio147:capgemini 06-trams:trams; do
  in="${src%%:*}"; out="${src##*:}"
  for w in 760 1240 1860 2480; do
    sips --resampleWidth $w "$in.png" --out "/tmp/$out-$w.png"
    cwebp -q 80 -sharp_yuv -m 6 "/tmp/$out-$w.png" -o "assets/img/cases/$out-$w.webp"
    avifenc -q 62 -s 4 "/tmp/$out-$w.png" "assets/img/cases/$out-$w.avif"
  done
done
```

## Identité

Monogramme « B » construit au trait : contre-forme haute carrée, panse basse arrondie, et une
pastille braise logée dans le compteur. Le tracé est en `currentColor` — il bascule donc avec
le thème sans qu'on ait à servir deux fichiers. L'orange reste la couleur de l'interface, pas
celle du signe.

Le SVG source est en ligne dans `index.html` (`.brand svg`) et dans `assets/img/favicon.svg`.
Les icônes PNG et l'image Open Graph se régénèrent avec `rsvg-convert` et une capture Chrome
headless en 1200 × 630.

## Déploiement

Le site est servi tel quel : **aucune étape de build**.

> Le workflow GitHub Actions qui construisait l'ancienne application React a été supprimé.
> Dans _Settings → Pages_, la source doit donc être réglée sur **Deploy from a branch →
> `main` / `/ (root)`**, et non plus sur la branche `gh-pages`.

## Fichier annexe

`PROFILE-README.md` n'est pas utilisé par le site : c'est une proposition de README de profil
GitHub, à recopier dans le dépôt `baptistesx/baptistesx`.
