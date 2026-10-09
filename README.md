# ⚡ Ayush Sonewane — Personal Developer Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-000000?style=for-the-badge)](https://lenis.darkroom.engineering/)

<br />

**A high-energy, Awwwards-style creative developer portfolio engineered for speed, responsiveness, and kinetic interaction.**

[Explore Live Demo](https://ayushsonewane.dev) • [Report Issue](https://github.com/AyushSonewane/ayush-portfolio/issues)

</div>

---

## 🌟 Overview

This repository houses the personal portfolio website of **Ayush Sonewane** — MCA scholar at G H Raisoni College (9.14 CGPA), cross-platform architect, and full-stack software engineer.

Designed with a bold **"Creative Coder"** identity, it features an ultra-dark background (`#0A0A0F`), vibrant electric accents (Electric Lime `#C6FF3D`, Cyber Violet `#7C5CFF`, and Neon Cyan `#22D3EE`), glassmorphism cards, and an interactive LAN socket transfer stage showcasing [LocalShare](https://www.localshare.co.in/).

---

## ✨ Key Features & Architectural Highlights

- ⏱️ **0–100% Kinetic Preloader**: Lightweight numerical counter that resolves into a split-curtain hero reveal.
- 🚀 **Interactive Hero**: Oversized typography with rotating role cycler, magnetic CTAs, live Microsoft Store beacon, and reactive cursor ambient light.
- 📡 **LocalShare Interactive Socket Stage**: Real-time animated bridge showing packet streaming between an Android phone and a Windows laptop over local Wi-Fi at 78.4 MB/s.
- 🗂️ **Shared-Layout Case Study Dossiers**: Expanding project cards powered by Framer Motion `AnimatePresence`.
- ⚡ **Infinite Velocity Marquee & Bento Grid**: Tech stack ticker that shifts speed with scroll velocity, paired with categorized technical skill blocks.
- 🌐 **"// find me online" Portals**: Glowing cards linking directly to GitHub, LinkedIn, and LeetCode.
- 🎓 **Animated Education Timeline**: Dynamic scroll-drawn vertical SVG track highlighting MCA (9.14 CGPA) and BCCA (8.16 CGPA).
- 🌓 **Instant Dark / Light Mode Toggle**: Seamless, flash-free theme switching with `localStorage` persistence and tuned CSS variables.
- ⌨️ **Easter Egg**: Pressing the `K` key triggers a Canvas Confetti burst in the accent color trio.
- 📄 **Embedded Downloadable Resume**: Integrated with downloadable PDF resume (`Ayush_Sonewane_Resume.pdf`).

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19, TypeScript, Vite 8 |
| **Styling & Shaders** | Tailwind CSS v4, Vanilla CSS Custom Properties, Backdrop Filters |
| **Motion & Dynamics** | Framer Motion, Lenis Smooth Scroll |
| **Iconography** | Lucide React, Custom Brand SVGs |
| **Effects** | Canvas-Confetti, Radial Shaders, CSS Keyframe Beams |
| **Target Performance** | Lighthouse 90+, Zero Heavy 3D Bloat, Static Export Ready |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js and npm installed:
- **Node.js**: `v18.0.0` or later
- **npm**: `v9.0.0` or later

### Installation

```bash
# Clone the repository
git clone https://github.com/AyushSonewane/ayush-portfolio.git

# Navigate into the project directory
cd ayush-portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

### Production Build

```bash
# Build optimized static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Directory Structure

```
ayush-portfolio/
├── public/
│   ├── favicon.svg              # Custom monogram AS SVG favicon
│   └── resume.pdf               # Downloadable PDF Resume
├── src/
│   ├── components/
│   │   ├── About.tsx            # Academic journey & animated stat counters
│   │   ├── Contact.tsx          # Validated contact form & direct communications
│   │   ├── CustomCursor.tsx     # Smooth dual-stage cursor physics (disabled on touch)
│   │   ├── EasterEgg.tsx        # 'K' key confetti trigger
│   │   ├── Education.tsx        # Vertical scroll-drawn timeline
│   │   ├── Hero.tsx             # Oversized kinetic typography & rotating role line
│   │   ├── Navbar.tsx           # Floating glass header, theme toggle, mobile drawer
│   │   ├── PacketTransferDemo.tsx # Animated LocalShare socket visualizer
│   │   ├── ProfilesStrip.tsx    # Online presence cards (GitHub, LeetCode, LinkedIn)
│   │   ├── Projects.tsx         # Centerpiece case studies with detail modals
│   │   ├── ScrollProgressBar.tsx# Sticky glowing 2px top indicator
│   │   ├── Skills.tsx           # Velocity marquee & grouped bento grid
│   │   ├── SmoothScroll.tsx     # Lenis smooth-scrolling wrapper
│   │   └── SocialIcons.tsx      # Crisp SVG brand glyphs
│   ├── data/
│   │   └── content.ts           # Single source of truth for portfolio data
│   ├── index.css                # CSS variables for themes, glass, and glow utilities
│   ├── main.tsx                 # Application entrypoint
│   └── App.tsx                  # Layout structure & section composition
├── DESIGN.md                    # Visual design system specifications
├── PLACEHOLDERS.md              # Remaining user links & assets tracker
├── vite.config.ts               # Vite configuration with Tailwind CSS v4
└── package.json                 # Project dependencies & scripts
```

---

## 👨‍💻 Author

**Ayush Sonewane**
- 📍 Nagpur, Maharashtra, India
- 📧 Email: [sonewaneayush8320@gmail.com](mailto:sonewaneayush8320@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/ayush-sonewane](https://www.linkedin.com/in/ayush-sonewane)
- 🐙 GitHub: [github.com/AyushSonewane](https://github.com/AyushSonewane)
- 💻 LeetCode: [leetcode.com/u/Ayush_Sonewane/](https://leetcode.com/u/Ayush_Sonewane/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
