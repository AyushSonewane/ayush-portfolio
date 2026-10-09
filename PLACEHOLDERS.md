# Placeholders & Assets Checklist

The following items are clearly marked in the codebase as placeholders and will require your final URLs, documents, or image assets:

---

## 1. Project URLs & Links (`src/data/content.ts`)

| Item | Location | Current State | What to Supply |
| :--- | :--- | :--- | :--- |
| **Microsoft Store URL** | `portfolioContent.projects[0].links.microsoftStore` | `"TODO_MICROSOFT_STORE_URL"` | Provide the live Microsoft Store URL for LocalShare (e.g. `https://apps.microsoft.com/detail/...`). |
| **LocalShare GitHub Repo** | `portfolioContent.projects[0].links.github` | `""` (empty) | If LocalShare is open source, provide the repository URL (e.g. `https://github.com/AyushSonewane/LocalShare`). Button is hidden until supplied. |
| **HigherUp GitHub Repo** | `portfolioContent.projects[1].links.github` | `""` (empty) | Provide the HigherUp repository URL when ready. Currently renders as a disabled `"Repo coming soon"` badge. |

---

## 2. Media & Static Documents (`public/`)

| Asset | Expected Path | Purpose |
| :--- | :--- | :--- |
| **Resume Document** | `public/resume.pdf` | Downloadable PDF triggered by the `"Download Resume"` buttons in the Navbar, Hero, and Mobile drawer. |
| **Profile Photo / Avatar** | `public/avatar.jpg` or `public/avatar.png` | Personal portrait image to replace the monogram fallback in the Hero or About sections if desired. |
| **LocalShare App Screenshots** | `public/assets/localshare/` | High-resolution UI screenshots from [localshare.co.in](https://www.localshare.co.in/) for the interactive case-study modal gallery dropzone. |
| **Social Open Graph Banner** | `public/og-image.png` | 1200x630px preview image for rich link cards on Twitter, LinkedIn, and Discord. |

---

## 3. How to Update

To update any of these fields:
1. Open [`src/data/content.ts`](file:///d:/ayush/ayush-portfolio/src/data/content.ts).
2. Replace the placeholder string with your real URL.
3. Place files in `public/` and reference them with leading slashes (e.g. `/resume.pdf`).
4. Rebuild or commit: `npm run build`.
