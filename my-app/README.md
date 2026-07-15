# ryllz.github.io — Personal Portfolio

A single-page portfolio for **Ryllian Zhang** (Hardware Engineering Manager), built with
Create React App and deployed to GitHub Pages at
[ryllz.github.io](https://ryllz.github.io/).

The app started life on Material Design Lite (`react-mdl`), which has since been
fully removed in favour of a hand-rolled CSS design system — the MDL primitives and
gallery cards are now lightweight local components/classes
([`src/components/layout.js`](src/components/layout.js), [`src/App.css`](src/App.css)).
Material Icons are loaded directly from Google Fonts in
[`public/index.html`](public/index.html).

---

## Tech stack

| Concern            | Choice                                                            |
| ------------------ | ----------------------------------------------------------------- |
| Framework          | React 17 (Create React App / `react-scripts` 5)                   |
| Routing            | `react-router-dom` v6 with **`HashRouter`**                       |
| Styling            | Hand-rolled CSS design system ([`src/App.css`](src/App.css), [`src/index.css`](src/index.css)) |
| UI primitives      | Local `Grid`/`Cell`/`Card`/`Chip` in [`layout.js`](src/components/layout.js) |
| Misc               | `react-modal` (attributions), `react-to-print` (resume), `react-spinners` (loader) |
| Deploy             | `gh-pages` → GitHub Pages                                         |

> **Why `HashRouter`?** GitHub Pages serves static files with no server-side
> rewriting, so a `BrowserRouter` deep link like `/projects/euler_angles` would
> 404 on refresh. `HashRouter` keeps all routing client-side behind the `#`
> (`ryllz.github.io/#/projects/euler_angles`), which survives reloads and direct links.

---

## Architecture

The app is a small, flat SPA. Everything is content-driven React components — there is
no CMS, backend, or data-fetching layer; page copy lives directly in JSX.

```
my-app/
├── public/                 # static assets served as-is (images, PDFs, favicons)
├── src/
│   ├── index.js            # entry point — wraps <App/> in <HashRouter>
│   ├── App.js              # shell: navbar, footer, loader, attributions modal, scroll-reveal
│   ├── App.css / index.css # global design system + layout
│   ├── components/
│   │   ├── main.js         # route table (all <Route>s live here)
│   │   ├── home.js         # landing page (hero + skills + project highlights)
│   │   ├── resume.js       # resume + print-to-PDF wrapper
│   │   ├── projects.js     # project index grid (personal + professional)
│   │   ├── blog.js         # blog index (password-gated, tabbed by year)
│   │   ├── contact.js      # contact card
│   │   ├── layout.js       # shared Grid/Cell/Card/Chip primitives
│   │   ├── projects/       # one component per project detail page
│   │   └── blog/           # one component per blog post
```

### How it fits together

1. **[`index.js`](src/index.js)** mounts `<App/>` inside `<HashRouter>`.
2. **[`App.js`](src/App.js)** renders the persistent chrome — top navbar,
   footer with an attributions modal, an initial `CircleLoader` splash, and a
   scroll-reveal system built on `IntersectionObserver` that re-observes elements
   on every route change (see the `useEffect` keyed on `location.pathname`).
3. **[`main.js`](src/components/main.js)** holds the full `<Routes>` table. Each top-level
   page and each project/blog detail page has its own route and its own component.
4. **Detail pages** under `projects/` and `blog/` are self-contained components whose
   content is written inline as JSX.

### Adding a new project or blog post

1. Create the component, e.g. `src/components/projects/my_project.js`.
2. Import it and register a `<Route>` in [`main.js`](src/components/main.js).
3. Add a card linking to it in [`projects.js`](src/components/projects.js)
   (or `blog.js`), and drop any images into `public/`.

---

## Local development

Requires **Node 18+** (developed on Node 20). All commands run from the `my-app/` directory.

```bash
cd my-app
npm install      # install dependencies
npm start        # dev server at http://localhost:3000 (hot reload)
npm run build    # production build into build/
npm test         # CRA/Jest test runner
```

---

## Deployment (GitHub Pages)

Deployment is handled by the [`gh-pages`](https://github.com/tschaub/gh-pages) package,
wired up in [`package.json`](package.json):

```json
"homepage": "https://ryllz.github.io/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -b master -d build"
}
```

To publish:

```bash
cd my-app
npm run deploy
```

What happens:

1. `predeploy` runs `npm run build`, producing an optimized bundle in `build/`.
2. `deploy` pushes the **contents of `build/`** to the **`master`** branch of the repo.
3. GitHub Pages is configured to serve `ryllz.github.io` from the root of the
   `master` branch, so the new build goes live within a minute or two.

> **Note on the `homepage` field:** because the site is served from the domain root
> (`ryllz.github.io/`, a user/organization Pages site) rather than a project subpath,
> `homepage` is just `/`. If this ever moves to a project page
> (`ryllz.github.io/some-repo/`), update `homepage` accordingly so asset paths resolve.

> **Branch layout:** source lives on `main`; the built site is published to `master`.
> Don't hand-edit `master` — it is overwritten by every `npm run deploy`.

---

## Project layout note

This repository root contains the `my-app/` CRA project plus a `Scratch/` folder of
one-off helper scripts and an `attributions` file. The CRA app is entirely
self-contained within `my-app/`; the root-level `package.json` is vestigial and not
used by the build or deploy.
