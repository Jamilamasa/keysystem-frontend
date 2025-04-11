# KeySystem Frontend

Welcome to the frontend codebase for **KeySystem Technology Limited**. This project is built with TypeScript, React, Tailwind CSS, and Vite for high-performance UI development.

## 🌐 Live Site

Access the deployed version here: [keysystem-frontend.vercel.app](https://keysystem-frontend.vercel.app)

---

## 🚀 Features

- Fully responsive design
- Accessible components (ARIA labels, keyboard navigation)
- Modular folder structure
- Component reusability
- Error boundary/fallback handling
- Scalable folder architecture for teams

---

## 📁 Folder Structure

```
src/
├── assets/                # Images, icons, logos
├── components/            # Global components
│   ├── footer/            # Footer layout components
│   ├── navbar/            # Navigation components
│   └── ui/                # Reusable UI components (buttons, dialogs, etc.)
│
├── constants/             # Static constants (navLinks, services, contacts)
├── layouts/               # Shared layout wrappers
├── lib/                   # Utility functions (e.g. cn.ts)
├── pages/                 # Route-level pages
│   └── home/              # Home page and sections
│       ├── sections/      # Page sections (Hero, Offerings, Partners, etc.)
│       └── ErrorFallback.tsx # Global error boundary fallback UI
│
├── router/                # App routes setup
├── types/                 # Custom TypeScript types
├── main.tsx               # Root entry point
├── App.tsx                # App shell and router config
└── index.css              # Tailwind and global CSS
```

---

## 🧪 Tech Stack

- ⚛️ **React 19**
- 🧠 **TypeScript**
- 🌀 **FramerMotion** (animations)
- 🎨 **TailwindCSS**
- ⚡ **Vite** (blazing fast bundler)
- 🗺️ **React Router**
- 🧼 ESLint + Prettier
- 🧪 Error boundary with fallback component

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Jamilamasa/keysystem-frontend.git
cd keysystem-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## 🌍 Deployment

This app is fully optimized for deployment on platforms like [Vercel](https://vercel.com/), [Netlify](https://netlify.com), or your preferred host.

---

## 🔄 Lazy Loading

Non-critical sections (e.g. heavy components or low-priority pages) can be lazy-loaded via React:

```tsx
import { lazy, Suspense } from "react";

const Partners = lazy(() => import("@/pages/home/sections/Partners"));

<Suspense fallback={<div>Loading...</div>}>
  <Partners />
</Suspense>
```

Use this approach in the `router/` config or inside conditional layouts.

---

## 🤝 Contributing

### How to Contribute

1. Fork this repository
2. Create your feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add new feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a pull request!

### Dev Standards

- Use meaningful commit messages (Conventional Commits recommended)
- Format with Prettier before pushing (`npm run format`)
- Run `npm run lint` to catch errors
- Test responsiveness & accessibility

---

## 📧 Contact

For inquiries or support, please email:  
**[jamilamasa@gmail.com](mailto:jamilamasa@gmail.com)**

---

© 2025 KeySystem Technology Limited. All rights reserved.
