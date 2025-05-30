# 🌾 Fresh Harvesta Landing Page

A modern, responsive frontend-only landing page built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Redux RTK Query**.

🔗 **Live URL**: [https://fresh-harvesta-job-task.vercel.app](https://fresh-harvesta-job-task.vercel.app)  
📂 **GitHub Repo**: [adnanakhlasofficial/fresh-harvesta-job-task](https://github.com/adnanakhlasofficial/fresh-harvesta-job-task)

---

## ✨ Features

- ⚡ Built with Next.js 15 (App Router)
- 🧠 Type-safe with TypeScript
- 🎨 Styled using Tailwind CSS
- 🔄 Data management with Redux Toolkit + RTK Query
- 📱 Fully responsive design
- 💡 Modular component structure

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit + RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

---

## 🗂️ Folder Structure

```bash
src/
├── app/                  # App Router structure (Next.js 15)
│   └── (main)/           # Main route layout and page
│       ├── page.tsx      # Landing page
│       ├── layout.tsx    # Layout component
│       └── globals.css   # Global styles
├── components/           # Reusable UI components
│   ├── AboutSection.tsx
│   ├── Banner.tsx
│   ├── BlogCard.tsx
│   ├── BlogSection.tsx
│   ├── CategoryButton.tsx
│   ├── CountdownTimer.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── OfferSection.tsx
│   ├── ProductCard.tsx
│   ├── ProductCategory.tsx
│   ├── ProductSection.tsx
│   ├── SectionTitle.tsx
│   └── Testimonials.tsx
├── services/             # RTK Query API service setup
│   └── harvestAPIs.ts
├── lib/                  # Utility functions (if any)
├── store.ts              # Redux store configuration
public/                   # Static assets
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/adnanakhlasofficial/fresh-harvesta-job-task.git
cd fresh-harvesta-job-task
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run development server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` in your browser.

---

## 🧪 Available Scripts

```bash
npm run dev       # Start local dev server
npm run build     # Build the app for production
npm run start     # Start the production server
npm run lint      # Run ESLint
```

---
