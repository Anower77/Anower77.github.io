# Anower Hossain — Engineering Portfolio

Production-grade personal portfolio website for **Anower Hossain** (Backend Engineer | Python & Distributed Systems).

Engineered to reflect backend fundamentals, cloud infrastructure, distributed architecture design, and ongoing research in brain-computer interfaces (BCI) and data transfer between biological brains and AI systems.

---

## Live Demo & Deployment

- **Live Deployment:** [https://anower77.github.io/](https://anower77.github.io/)
- **GitHub Repository:** [https://github.com/Anower77/Anower77.github.io](https://github.com/Anower77/Anower77.github.io)

---

## Tech Stack & Architecture

- **Core Framework:** Next.js 14 (App Router, Static HTML Export)
- **Language:** TypeScript 5.7 (Strict Type Checking)
- **Styling & Design System:** Tailwind CSS with custom dark theme palette
- **Icons:** Lucide React
- **Animations & Interactivity:** Framer Motion and hardware-accelerated CSS transitions
- **Deployment Target:** GitHub Pages (User Site)

---

## Key Sections & Architecture

1. **Navigation Bar:** Sticky, responsive navigation with quick links to GitHub, LinkedIn, and dynamic Resume viewer.
2. **Hero Section:**
   - Headline: *"Building Systems That Scale."*
   - Subtitle: *Backend Engineer | Python & Distributed Systems*
   - Focus: Cloud infrastructure (AWS EC2, S3, RDS, ECS, Lambda, Docker, Kubernetes, Distributed Infrastructure, Nginx).
   - Interactive Backend Terminal with real-time telemetry simulation (Redis cache hit ratio, p99 ingress latency, DB connection pool, Kafka queue backlog) and diagnostic CLI commands (`help`, `info`, `stack`, `services`, `curl /health`).
3. **About Section ("Engineering Beyond the Code"):**
   - Editorial narrative emphasizing reliable backends, system internals, and mechanical sympathy.
   - Core tenets: Data Integrity, Decoupled Boundaries, Bottleneck Profiling, and Stateless Resiliency.
4. **Technical Skills:**
   - Categorized into 8 domains: Programming, Backend, Database, Messaging & Caching, Cloud, DevOps, Architecture, and CS Fundamentals.
   - Zero fabricated percentage meters; strictly verified capabilities.
5. **Special Feature ("How I Think About Systems"):**
   - Visual interactive architectural pipeline: Client -> API Gateway -> Backend Services -> Message Broker -> Database / Cache.
   - Dedicated subsystem architecture schematics for each of the 7 components.
   - Clickable deep dives into failure modes, mitigations, and typical SLAs for each component.
   - One-click *Simulate Request Trace* animating a request packet through each hop.
6. **Experience Timeline:**
   - Backend Engineer @ SFV Omega
   - CS Instructor @ EduCity Ed-tech Platform
7. **Featured Projects:**
   - **CP Platform:** Competitive programming engine in Django 5.2 and PostgreSQL.
   - **Microservices Lab:** Multi-service decoupled architecture with Docker, RabbitMQ, Kafka, and GitHub Actions.
   - **DootGo:** Traveler-to-sender delivery marketplace with role state machines.
   - **Few-Shot Cross-Dataset EEG-to-Visual Retrieval:** Ongoing research on THINGS-EEG2 and EEG-ImageNet.
8. **Research & Scientific Frontiers:**
   - **Core Research Concept:** *Data Transfer from a Biological Brain to an AI Brain* (bi-directional neural spike decoding, continuous representation alignment, and artificial substrate synchronization).
   - **Signal Benchmarks:** Few-shot cross-dataset EEG-to-visual retrieval across THINGS-EEG2 and EEG-ImageNet.
9. **Achievements:**
   - ACM-ICPC Dhaka Regionalist
   - IYMC 2023 Bronze Honour
   - National STEM Olympiad (Second Round)
   - IAAC Astrophysics Bronze Medalist & Ambassador Invitation
10. **Education:**
    - Bangladesh University of Business and Technology (BUBT) — B.Sc. in Computer Science and Engineering
11. **Engineering Notes / Blog:**
    - Featured Deep Dive: *Designing a Highly Scalable URL Shortener* (linked to LinkedIn discussion).
    - Architecture note indexes for Redis cache stampede, cache restarts, transactional outbox pattern, and DB index tuning.
12. **Contact Section:**
    - Direct verified email dispatcher (`anowerhossain765562@gmail.com`).
    - One-click clipboard copy and pre-filled mail client generator.
13. **Dynamic Resume Modal:**
    - Interactive in-app resume viewer with one-click Markdown download and clean print-to-PDF formatting.

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/Anower77/Anower77.github.io.git
cd Anower77.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Building for Production & Static Export

```bash
npm run build
```

This compiles and exports static HTML/CSS/JS files to the `out/` directory, ready to deploy to GitHub Pages.

---

## GitHub Pages Automated Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and publishes the portfolio to GitHub Pages whenever changes are pushed to `main`.
