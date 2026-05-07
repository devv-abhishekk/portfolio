# Abhishek Kumar - Premium React & Vite Flutter Portfolio

Welcome to the state-of-the-art developer portfolio designed for **Abhishek Kumar, Senior Flutter Developer (4+ Years Experience)**.

This portfolio is built on a high-performance framework stack—combining **React.js**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**—organized under a scalable **Clean Architecture** folder structure. It features responsive layouts, smooth scroll reveals, custom animated particles, a tailored splash loader, and interactive light/dark style mechanics.

---

## 🎨 Technology Stack & Libraries

- **Framework**: [React.js](https://react.dev/) with [Vite](https://vite.dev/) (lightning-fast Hot Module Replacement)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using modern CSS-first theme tokens)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (scroll reveals, magnetic CTA buttons, stagger text effects)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (clean, feather vectors)
- **Routing**: [React Router DOM](https://reactrouter.com/) (pre-configured)

---

## 🏗️ Folder Structure (Clean Architecture)

The codebase is organized cleanly to separate layout models, shared UI items, constants, hooks, contexts, and domain-level pages:

```
src/
├── app/               # Root entry orchestrators
├── core/              # Global models and configurations
├── components/        # Reusable custom UI controls (GlassCard, CustomLoader, ScrollToTop, AnimatedText)
├── pages/             # Section views (Hero, About, Skills, Experience, Projects, Contact)
├── layouts/           # Page structural components (Navbar, Footer)
├── routes/            # Route mapping configurations
├── hooks/             # Custom react hooks (useTheme)
├── services/          # Data transfer and APIs
├── utils/             # Mathematics and structural helper values
├── constants/         # Static data layers (skills, projects, experiences)
├── assets/            # Vector graphs, downloadable resume, and images
├── styles/            # Tailwind v4 stylesheets & animation engines (index.css)
├── context/           # Global context handlers (ThemeContext)
```

---

## ⚙️ Local Setup Instructions

Follow these three simple steps to start the developer server locally:

### 1. Install Dependencies
Restore all modules and utility packages:
```bash
npm install
```

### 2. Launch Local Dev Server
Start Vite's live hot-reloading webserver on `http://localhost:5173`:
```bash
npm run dev
```

### 3. Production Compilation
Bundle optimization, tree-shaking, and minifying assets into `/dist`:
```bash
npm run build
```

---

## 🚀 Deployment Workflows

This React Vite portfolio compiles into a lightweight `/dist` folder containing static HTML, CSS, and JS assets, making it compatible with any hosting platform.

### A. Deploying to Vercel (Recommended)
Vercel has native support for Vite apps.

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Log in and initialize:
   ```bash
   vercel login
   vercel
   ```
3. Set the following configuration options during configuration:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Promote to production:
   ```bash
   vercel --prod
   ```

### B. Deploying to GitHub Pages
To automate deploying the build output directly to a `gh-pages` branch:

1. Install the deployment package:
   ```bash
   npm install -g gh-pages
   ```
2. Open `vite.config.js` and add a `base` property matching your GitHub repository name:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/<your-repository-name>/' // Replace with your repo name
   })
   ```
3. Add deployment triggers inside `package.json` under `"scripts"`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run the deploy action to build and push the production branch:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings, go to **Pages** and set the source branch to `gh-pages` from root.

---

## 🛠️ Key Architectural Highlights
- **Tailwind v4 Theme Engine**: Configured inside `src/styles/index.css` via the modern `@theme` directive, enhancing build speed and modularity.
- **Micro-Animations**: Uses dynamic layout transitions to create a premium, gamified aesthetic with very low GPU footprint.
- **SEO Optimized**: Fully integrated indexing keywords and meta attributes.
- **Adaptive Dark Mode**: Class-based CSS configurations persistent in localStorage.
