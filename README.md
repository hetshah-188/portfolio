# 🚀 Het Shah — Personal Portfolio

A modern, production-ready portfolio website built with React + Vite, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- **Apple-inspired UI** with SF Pro font family
- **Dark / Light mode** toggle (persisted in localStorage)
- **Animated typing effect** with role rotation in Hero
- **Scroll-based animations** via Framer Motion
- **Glassmorphism** and animated blob backgrounds
- **Project modal cards** with feature lists
- **Animated skill progress bars** per category
- **Contact form** wired to EmailJS
- **Fully responsive** — mobile, tablet, desktop
- **SEO-friendly** meta tags in `index.html`
- **Sticky frosted-glass Navbar** with active section tracking

---

## 📁 Project Structure

```
het-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with dark mode toggle
│   │   ├── Hero.jsx            # Hero with typing animation + blobs
│   │   ├── About.jsx           # Bio + education timeline
│   │   ├── Projects.jsx        # Project cards + modal detail view
│   │   ├── Skills.jsx          # Skill grid with animated progress bars
│   │   ├── Certifications.jsx  # GCP + SIH achievements
│   │   ├── Contact.jsx         # EmailJS contact form
│   │   └── Footer.jsx          # Social links + copyright
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/light mode state
│   ├── data/
│   │   └── resumeData.js       # All content from resume
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind + custom animations
├── index.html                  # SEO meta tags
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🛠️ Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Configure EmailJS (for contact form)
1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account
2. Create an **Email Service** and **Email Template**
3. Open `src/components/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
   ```

### 3. Start dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 4. Build for production
```bash
npm run build
npm run preview   # preview the production build
```

---

## 🎨 Color Palette

| Name       | Hex       |
|------------|-----------|
| Primary    | `#0066CC` |
| Dark Text  | `#1D1D1F` |
| Light BG   | `#F5F5F7` |
| Neutral    | `#666666` |
| Neutral Lt | `#979797` |

---

## 📦 Tech Stack

| Tool           | Purpose                        |
|----------------|-------------------------------|
| React 18       | UI framework                  |
| Vite           | Dev server & bundler          |
| Tailwind CSS 3 | Utility-first styling         |
| Framer Motion  | Animations & transitions      |
| react-icons    | Social icons (GitHub, etc.)   |
| @emailjs/browser | Contact form email delivery |
| lucide-react   | UI icons                      |

---

## 🌐 Deployment

### Netlify (recommended)
```bash
npm run build
# Drag & drop the `dist/` folder to Netlify
```

### Vercel
```bash
npx vercel
```

### GitHub Pages
```bash
npm install -D gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

Made with ❤️ by Het Shah
