# Ayush Sonewane — Design System (DESIGN.md)

An Awwwards-inspired design system tailored for a high-energy creative developer portfolio.
Mood: **Energetic, Youthful, Kinetic, Tech-forward, Confident.**

---

## 1. Color Palette & Tokens

### 1.1 Dark Theme (Default)
- **Deep Background (`bg-space`)**: `#0A0A0F` — Near-black void with subtle radial blue/violet falloff.
- **Surface Elevation 1 (`surface-card`)**: `#12121A` — Primary container background.
- **Surface Elevation 2 (`surface-elevated`)**: `#181826` — Hover states, dropdowns, modal layers.
- **Surface Subtle (`surface-muted`)**: `#222234` — Inactive pills, code blocks.
- **Border Default (`border-dim`)**: `rgba(255, 255, 255, 0.08)` — Clean 1px hairlines.
- **Border Active (`border-highlight`)**: `rgba(255, 255, 255, 0.20)` — Hover perimeter highlight.

### 1.2 Electric Accent Trio
- **Electric Lime (`accent-lime`)**: `#C6FF3D`
  - Purpose: Primary action buttons, live indicators, highlight text, active indicators.
  - Glow: `0 0 24px rgba(198, 255, 61, 0.35)`
- **Cyber Violet (`accent-violet`)**: `#7C5CFF`
  - Purpose: Ambient depth glows, secondary gradient stops, tech chips, creative elements.
  - Glow: `0 0 28px rgba(124, 92, 255, 0.30)`
- **Neon Cyan (`accent-cyan`)**: `#22D3EE`
  - Purpose: Networking conduits, live packet animations, telemetry tags, status badges.
  - Glow: `0 0 20px rgba(34, 211, 238, 0.30)`

### 1.3 Light Theme Overrides
- **Background (`bg-light`)**: `#F8F9FD`
- **Surface (`surface-light`)**: `#FFFFFF`
- **Surface Elevation (`surface-light-elevated`)**: `#F1F3F9`
- **Text Primary (`text-light-primary`)**: `#0B0F19`
- **Text Muted (`text-light-muted`)**: `#475569`
- **Border (`border-light`)**: `rgba(15, 23, 42, 0.10)`
- **Accents**: Same vibrant hues `#A3E635`, `#6D28D9`, `#0891B2` tuned for contrast.

---

## 2. Typography System

### 2.1 Font Families
- **Display Headings**: `'Space Grotesk', system-ui, sans-serif`
  - Kinetic, geometric, bold tracking `-0.03em`.
- **Body & Interface**: `'Inter', system-ui, sans-serif`
  - Clean legibility across all weights (300 to 700).
- **Developer Micro-Labels**: `'JetBrains Mono', monospace`
  - Terminal prompts, code snippets, tags, telemetry timestamps (`// section`, `const dev = "Ayush"`).

### 2.2 Scale & Hierarchy
- **Hero Title**: `clamp(2.75rem, 8vw, 6.5rem)` | Weight 800 | Leading 0.95 | Tracking -0.04em
- **H1 (Section Header)**: `clamp(2rem, 5vw, 3.5rem)` | Weight 700 | Leading 1.1 | Tracking -0.03em
- **H2 (Card / Sub-header)**: `clamp(1.25rem, 3vw, 2rem)` | Weight 600 | Leading 1.2
- **H3 (Component Title)**: `1.125rem (18px)` | Weight 600 | Leading 1.3
- **Body Large**: `1.125rem (18px)` | Weight 400 | Leading 1.6
- **Body Regular**: `0.9375rem (15px)` | Weight 400 | Leading 1.5
- **Monospace Micro**: `0.75rem - 0.8125rem (12-13px)` | Weight 500 | Tracking 0.05em (Uppercase or code-case)

---

## 3. Spacing & Bento Grid Layout

- **Base Spacing Unit**: 4px / 8px grid (`gap-4`, `gap-6`, `gap-8`)
- **Max Container Width**: `1280px` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)
- **Bento Grid Architecture**:
  - 12-column responsive grid on desktop (`grid-cols-1 md:grid-cols-12`).
  - Asymmetric spans: 7 cols for hero showcase, 5 cols for secondary telemetry; 8 cols for LocalShare, 4 cols for HigherUp.
- **Glassmorphism Spec**:
  - `background: rgba(18, 18, 26, 0.70);`
  - `backdrop-filter: blur(16px);`
  - `border: 1px solid rgba(255, 255, 255, 0.08);`
  - Corner radius: `rounded-2xl` (16px) or `rounded-3xl` (24px).

---

## 4. Component Design Specifications

### 4.1 Buttons
- **Primary Magnetic (`btn-lime`)**:
  - Background: `#C6FF3D`, text: `#0A0A0F`, font-weight: 600.
  - Hover: subtle spring scale (1.03), glowing drop shadow `0 0 24px rgba(198, 255, 61, 0.4)`.
- **Secondary Glass (`btn-glass`)**:
  - Background: `rgba(255, 255, 255, 0.05)`, border: `1px solid rgba(255, 255, 255, 0.12)`, text: `#FFFFFF`.
  - Hover: border lightens to `rgba(255, 255, 255, 0.28)`, background `rgba(255, 255, 255, 0.09)`.
- **Custom Windows Store Button (`btn-store`)**:
  - Stylized geometric 4-square Windows icon in `#22D3EE` cyan.
  - Subtle cyan/violet border gradient, hover glow. (Custom artwork; no official Microsoft badges).
- **Disabled State (`btn-disabled`)**:
  - Opacity 0.4, cursor not-allowed, `Repo coming soon` micro-label.

### 4.2 Interactive Badges & Indicators
- **Live Pulse Badge**:
  - Solid `#C6FF3D` inner dot with expanding concentric radar ring (`ping` animation).
  - Monospace label: `LIVE ON MICROSOFT STORE` or `LIVE PROTOCOL`.
- **Tech Stack Chips**:
  - Monospace font, `px-3 py-1`, `rounded-full`, subtle background with accent color border tint.

### 4.3 Centerpiece: LocalShare LAN Packet Stage
- Visual node for **Android Phone** (green/cyan badge).
- Visual node for **Windows PC** (blue/cyan badge).
- Glowing Laser Conduit connecting both nodes with animated TCP packet pulses flowing bidirectionally.
- Live Telemetry: Transfer speed pill (`78.4 MB/s ⚡`), packet count, zero-cloud encryption indicator.

### 4.4 Profiles Strip ("// find me online")
- 3 Large interactive cards:
  - **GitHub**: Octocat glyph, hover hue: `#7C5CFF` violet aura, trailing directional arrow (`↗`).
  - **LeetCode**: Terminal code glyph, hover hue: `#FFA116` / `#C6FF3D` amber-lime glow.
  - **LinkedIn**: Network glyph, hover hue: `#22D3EE` cyan aura.
- Clean design strictly without unverified problem counts or ratings.

---

## 5. Animation & Motion Choreography

- **Default Ease Curve**: `cubic-bezier(0.22, 1, 0.36, 1)` (spring-like deceleration, confident snap).
- **Stagger Delays**: 0.08s per item in lists and grids.
- **Magnetic Distance**: 30px trigger threshold with 0.35 spring damping.
- **Scroll Velocity Marquee**: Base speed 20s linear infinite loop; shifts speed and direction smoothly with scroll delta.
- **Confetti Burst**: 60 particles in `#C6FF3D`, `#7C5CFF`, and `#22D3EE` fired via Canvas on pressing key "K".
- **Reduced Motion**: Graceful fallback via `window.matchMedia('(prefers-reduced-motion: reduce)')` that replaces transforms with simple opacity fades.
