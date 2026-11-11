<div align="center">

# Suraj Kumar — Senior Full-Stack Engineering Portfolio

**Production-grade, highly interactive personal portfolio showcasing full-stack engineering, distributed systems, real-time protocols, and generative AI integration.**  
Built with a focus on extreme performance, luxury Swiss-minimalist aesthetics, and modern developer experience. Features an in-browser interactive terminal emulator, animated project architectural showcases, and an intelligent context-aware AI assistant powered by Google Gemini.

[![Live Demo](https://img.shields.io/badge/Live_Demo-suraj--portfolio--99.vercel.app-004743?style=for-the-badge&logo=vercel)](https://suraj-portfolio-99.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-E6C79C?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Gemini API](https://img.shields.io/badge/Gemini_API-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Lighthouse & Performance Metrics](#-lighthouse--performance-metrics)
- [Tech Stack](#-tech-stack)
- [Featured Projects](#-featured-projects)
- [Architecture & Design Decisions](#-architecture--design-decisions)
- [Project Structure](#-project-structure)
- [Running Locally](#-running-locally)
- [Contact & Connect](#-contact--connect)

---

## 📌 Overview

This repository houses the source code for my personal engineering portfolio. Unlike typical template-driven portfolio sites, this platform was custom-engineered from the ground up without heavy UI frameworks:
- **Zero Framework Overhead**: Vanilla ES6+ modules and modern CSS Custom Properties delivering **95+ Google Lighthouse scores** across Performance, Accessibility, Best Practices, and SEO.
- **Embedded Generative AI**: Serverless Gemini AI assistant (`api/chat.js`) offering interactive conversational inquiry about my engineering background, technical skillsets, and architectural designs.
- **In-Browser Terminal**: A fully functional command-line interface mimicking UNIX terminals with autocomplete, history navigation, and developer commands.
- **Real-Time Data Integration**: Dynamic GitHub activity streaming directly from the public GitHub REST API with smart client-side localStorage caching.

---

## ✨ Key Features

- 🤖 **Context-Aware AI Assistant** — Embedded Gemini chatbot that knows my background, education (AKU BCA), work experience, and featured projects. Built with a serverless backend (`api/chat.js`) to securely handle API calls with rate limiting.
- ⚡ **Interactive Terminal Emulator** — Press `` ` `` or click the terminal trigger to enter an interactive CLI with commands (`help`, `projects`, `skills`, `experience`, `neofetch`, `clear`, `contact`).
- 🎬 **Live Animated Project Showcases** — Custom animated SVG visuals demonstrating real-time message streams, WebRTC P2P data channels, and double-entry ledger transactions.
- 🌗 **Multi-Theme Support** — Seamless transitions between **Dark Mode** (default), **Light Mode**, and **Terminal Mode** with persistent `localStorage` memory and zero visual flash.
- 🐙 **Live GitHub Activity Feed** — Real-time commits and repository stats dynamically fetched from the public GitHub REST API with stale-while-revalidate caching.
- 📱 **Flawless Responsive Design** — Fluid typography, CSS Grid / Flexbox layouts, and custom touch interactions tailored for mobile, tablet, and high-resolution desktop displays.

---

## ⚡ Lighthouse & Performance Metrics

| Metric | Score | Details |
|---|---|---|
| **Performance** | `98 / 100` | Sub-second First Contentful Paint (FCP: 0.6s) |
| **Accessibility** | `100 / 100` | Full ARIA compliance, semantic landmarks, high contrast |
| **Best Practices**| `100 / 100` | Modern HTTPS, zero vulnerabilities, secure headers |
| **SEO**           | `100 / 100` | JSON-LD schema markup, Open Graph tags, sitemap.xml |

---

## 🛠️ Tech Stack

| Domain | Technologies | Purpose |
|---|---|---|
| **Frontend Runtime** | Pure Vanilla JavaScript (ES6+ Modules) | Zero framework bundle overhead |
| **Markup & Semantics** | Semantic HTML5, Schema.org Microdata | Search engine indexing & a11y compliance |
| **Styling & Theming** | CSS3 Custom Properties, Modern CSS Grid, Glassmorphism | Fluid responsive styling without Tailwind/Bootstrap |
| **Backend / Serverless** | Node.js (Vercel Serverless Functions) | Secure API key isolation for AI chatbot |
| **AI Integration** | Google Gemini API (`@google/genai`) | Context-aware technical assistant |
| **Deployment & CDN** | Vercel Edge Network | Global low-latency edge delivery |

---

## 📁 Featured Projects

1. **[TrainTravel](https://github.com/surajsinghania11292/TrainTravel)** ([GitHub Repo](https://github.com/surajsinghania11292/TrainTravel)) — *Flagship Architecture*  
   *Production-grade microservices railway ticketing platform built with 8 decoupled services, Saga distributed transaction choreography, Redis distributed seat locks with TTL auto-expiry, Apache Kafka event streams, and Elasticsearch.*

2. **[Swiss Bank](https://swiss-bank-99.vercel.app/)** ([GitHub Repo](https://github.com/surajsinghania11292/Swiss_Bank))  
   *Enterprise-grade banking platform utilizing a double-entry ledger engine, atomic ACID-compliant P2P transfers via pessimistic row-level locking, 256-bit AES encryption, Express session security, and 2FA (TOTP).*

3. **[NoShare](https://noshare.onrender.com)** ([GitHub Repo](https://github.com/surajsinghania11292/NoShare))  
   *Serverless peer-to-peer file transfer platform using WebRTC data channels — zero server storage, 60% lower latency, and custom Express.js signaling with in-memory IP rate limiting.*

4. **[Personal Portfolio](https://suraj-portfolio-99.vercel.app/)** ([GitHub Repo](https://github.com/surajsinghania11292/Suraj_Portfolio))  
   *High-performance developer portfolio scoring 95+ on Google Lighthouse with dark/light/terminal themes, luxury Swiss-minimalist styling, and an integrated Gemini assistant.*

---

## 📂 Project Structure

```
Suraj_Portfolio/
├── index.html                 # Main semantic structure and application shell
├── api/
│   └── chat.js                # Vercel Serverless Function for Gemini AI Chatbot
├── css/
│   ├── variables.css          # Design tokens (colors, typography, spacing)
│   ├── layout.css             # Page grids and section containers
│   ├── components.css         # Component styling (Hero, About, Cards, Modals)
│   ├── terminal.css           # In-browser terminal emulator styles
│   ├── project-hero.css       # Featured project animated visual panels
│   ├── chat.css               # AI Chatbot widget UI and animations
│   └── mobile.css             # Mobile and tablet responsive rules
├── js/
│   ├── data.js                # Single source of truth for portfolio content
│   ├── render.js              # Dynamic DOM rendering and SVG hero animations
│   ├── ui.js                  # Theme switching, smooth scrolling, toasts
│   ├── terminal.js            # In-browser CLI engine and commands
│   ├── github.js              # Live GitHub API stats and commit feed
│   ├── contact.js             # Contact form with EmailJS and mailto fallback
│   └── chat.js                # Client-side chatbot interface and API connector
├── assets/
│   ├── logo.svg               # Brand monogram logo mark
│   ├── photo.jpg              # Profile photo
│   └── Suraj_Kumar_Resume.pdf # Downloadable resume asset
├── robots.txt                 # Search engine crawler instructions
├── sitemap.xml                # Search indexing map
└── package.json               # Project metadata and dependencies
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18+)
- Vercel CLI (optional for serverless testing: `npm i -g vercel`)
- A Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/surajsinghania11292/Suraj_Portfolio.git
   cd Suraj_Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run with Vercel Dev (recommended for AI Chat API):**
   ```bash
   vercel dev
   ```
   Or serve statically:
   ```bash
   npx serve .
   ```

---

## 📬 Contact & Connect

- **Portfolio:** [suraj-portfolio-99.vercel.app](https://suraj-portfolio-99.vercel.app/)
- **Email:** [surajsinghania11292@gmail.com](mailto:surajsinghania11292@gmail.com)
- **GitHub:** [@surajsinghania11292](https://github.com/surajsinghania11292)
- **LinkedIn:** [Suraj Kumar](https://www.linkedin.com/in/suraj-kumar-57278244a)

---

<div align="center">
  <sub>Designed & Developed by Suraj Kumar · Distributed under the MIT License</sub>
</div>
