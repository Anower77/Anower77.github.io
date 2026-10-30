# Anower Hossain — Engineering Portfolio

Production-grade personal portfolio website for **Anower Hossain** (Backend Developer | Python & Distributed Systems).

Engineered to reflect backend fundamentals, practical systems experience, distributed architecture design, and ongoing research in brain-computer interfaces (BCI) and EEG signal decoding.

---

## 🚀 Live Demo & Deployment

- **GitHub Repository:** [https://github.com/Anower77/portfolio](https://github.com/Anower77/portfolio)
- **Live Deployment:** [https://anower77.github.io/portfolio/](https://anower77.github.io/portfolio/)

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** Next.js 14 (App Router, Static HTML Export)
- **Language:** TypeScript 5.7 (Strict Type Checking)
- **Styling & Design System:** Tailwind CSS with custom Linear/Vercel dark theme palette
- **Icons:** Lucide React
- **Animations & Interactivity:** Framer Motion & CSS hardware-accelerated transitions
- **Deployment Target:** GitHub Pages / Vercel / Cloudflare Pages

---

## 📐 Key Sections & Features

1. **Navigation Bar:** Sticky, responsive navigation with quick links to GitHub, LinkedIn, and dynamic Resume viewer.
2. **Hero Section:**
   - Headline: *"Building Systems That Scale."*
   - Interactive Backend Terminal with real-time telemetry simulation (Redis cache hit ratio, p99 ingress latency, DB connection pool, Kafka queue backlog) and diagnostic CLI commands (`help`, `info`, `stack`, `services`, `curl /health`).
3. **About Section ("Engineering Beyond the Code"):**
   - Editorial narrative emphasizing reliable backends, system internals, and mechanical sympathy.
   - Core tenets: Data Integrity, Decoupled Boundaries, Bottleneck Profiling, and Stateless Resiliency.
4. **Technical Skills:**
   - Categorized into 8 domains: Programming, Backend, Database, Messaging & Caching, Cloud, DevOps, Architecture, and CS Fundamentals.
   - Zero fabricated percentage meters; strictly verified capabilities.
5. **Special Feature ("How I Think About Systems"):**
   - Visual interactive architectural pipeline: `Client` → `API Gateway` → `Backend Services` → `Message Broker` → `Database / Cache`.
   - Clickable deep dives into failure modes, mitigations, and typical SLAs for each component.
   - One-click *Simulate Request Trace* animating a request packet through each hop.
6. **Experience Timeline:**
   - Backend Developer @ SFV Omega
   - CS Instructor @ EduCity Ed-tech Platform
7. **Featured Projects:**
   - **CP Platform:** Competitive programming engine in Django 5.2 & PostgreSQL.
   - **Microservices Lab:** Multi-service decoupled architecture with Docker, RabbitMQ, Kafka, and GitHub Actions.
   - **DootGo (Loijan):** Traveler-to-sender delivery marketplace with role state machines.
   - **Lunchbari:** Enterprise catering and dispatch management backend.
   - **Few-Shot Cross-Dataset EEG-to-Visual Retrieval:** Ongoing research on THINGS-EEG2 and EEG-ImageNet.
8. **Research & Scientific Frontiers:**
   - Dedicated laboratory view highlighting non-invasive BCIs, EEG signal processing, and multimodal representation learning.
9. **Achievements:**
   - ACM-ICPC Dhaka Regionalist (FCI Team)
   - IYMC 2023 Bronze Honour
   - National STEM Olympiad (Second Round)
   - IAAC Astrophysics Bronze Medalist & Ambassador Invitation
10. **Education:**
    - Bangladesh University of Business and Technology (BUBT) — CSE
    - Feni Computer Institute — Diploma in CSE (2024)
11. **Engineering Notes / Blog:**
    - Featured Deep Dive: *Designing a Highly Scalable URL Shortener* (linked to LinkedIn discussion).
    - Architecture note indexes for Redis cache stampede, cache restarts, transactional outbox pattern, and DB index tuning.
12. **Contact Section:**
    - Direct verified email dispatcher (`anowerhossain765562@gmail.com`).
    - One-click clipboard copy and pre-filled mail client generator.
13. **Dynamic Resume Modal:**
    - Interactive in-app resume viewer with one-click Markdown download and clean print-to-PDF formatting.

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/Anower77/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🏗️ Building for Production & Static Export

```bash
npm run build
```

This compiles and exports static HTML/CSS/JS files to the `out/` directory, ready to deploy to any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages, AWS S3/CloudFront).

---

## 🚢 GitHub Pages Automated Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and publishes the portfolio to GitHub Pages whenever changes are pushed to `main`.
