# REQUIREMENT.md

# ✅ Project Requirements

**Project Name:** TheAbhiPatel Portfolio  
**Website:** https://theabhipatel.com  
**Brand Name:** **“TheAbhiPatel”**

---

## ✅ 1. Overview

This project is a **modern, dark-mode portfolio website** that represents Abhi as a **Full Stack / MERN / DevOps Engineer**.

The site should:

- Show skills, projects, and experience clearly
- Have dedicated pages for Skills, Projects, Experience, About, and Contact
- Use a futuristic, professional UI (not cartoonish)
- Include SVG backgrounds and simple animations related to full-stack development

---

## ✅ 2. UI & Design

### ✅ Look & Feel
- Default **Dark Mode**
- Main theme colors: **Blue + Indigo gradients**
- Clean, futuristic, professional
- Smooth animations (not too heavy)
- Modern typography and layout

### ✅ Styling
- **Tailwind CSS**
- **shadcn/ui components**
- Components should match the brand theme
- All colors, fonts, and spacing should be controlled from a single theme/config file

### ✅ Graphics & Motion
- SVG or Lottie backgrounds
- Subtle hover animations
- Animated icons or visuals related to:
  - MERN
  - Full Stack
  - DevOps

---

## ✅ 3. Pages

| Page | What it shows |
|------|---------------|
| Home | Highlights of skills, projects, experience, about, contact |
| Skills | MERN, DevOps, tools, technologies |
| Projects | Project cards + detailed pages |
| Experience | Work history + achievements |
| About | Personal background and story |
| Contact | Contact form + social links |

---

## ✅ 4. Home Page

- Hero section (name, job title, tagline, CTA)
- Skill icons or skill cards
- Featured projects section with view more button
- Mini experience timeline
- Links to other pages
- Background animations using SVG

---

## ✅ 5. Skills Page

### Full-Stack / MERN
- MongoDB, Express, React, Node
- REST APIs, Auth, JWT, WebSockets
- TypeScript
- Redux or Zustand

### JavaScript & Web
- Next.js
- Tailwind
- Testing libraries
- Git + GitHub

### DevOps
- Docker & Kubernetes
- CI/CD (GitHub Actions)
- Linux
- AWS basics
- NGINX
- Logging / Monitoring

---

## ✅ 6. Projects Page

Each project card should include:
- Title
- Short description
- Tech used
- GitHub link
- Live link (if available)
- Images or video preview

Full project details page includes:
- Overview
- Features
- Architecture or technical breakdown

---

## ✅ 7. Tech Stack

- **Next.js + TypeScript**
- TailwindCSS
- shadcn/ui with custom theme
- Static data stored in `/constants/`

### Folder Structure
```
/src
 ├─ app/
 │   ├─ page.tsx
 │   ├─ skills/
 │   ├─ projects/
 │   ├─ experience/
 │   ├─ about/
 │   └─ contact/
 ├─ components/
 ├─ constants/
 ├─ hooks/
 ├─ utils/
 └─ styles/
```

### Code Quality
- ESLint
- Prettier
- Husky + lint-staged

---

## ✅ 8. Data Handling

- No backend for now
- All data stored in `/constants/`
- Structure should allow easy switch to an API later

---

## ✅ 9. Performance

- Use `next/image`
- Lazy load images and animations
- Add SEO + OpenGraph tags
- Use SSG where possible

---

## ✅ 10. Deployment

- Live at: **https://theabhipatel.com**

---

## ✅ 11. Branding

- Brand name shown in navbar + footer: **“TheAbhiPatel”**
- Modern, futuristic typography
- Buttons styled with custom shadcn theme
