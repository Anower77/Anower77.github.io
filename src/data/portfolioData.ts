import {
  Project,
  ExperienceItem,
  AchievementItem,
  EducationItem,
  SkillCategory,
  EngineeringNote,
} from "@/types";

export const PERSONAL_INFO = {
  name: "Anower Hossain",
  title: "Backend Developer | Python & Distributed Systems",
  location: "Bangladesh",
  headline: "Building Systems That Scale.",
  positioning:
    "I build reliable backend systems, explore distributed architectures, and work on engineering solutions that connect software, infrastructure, and intelligent technologies.",
  shortBio:
    "I am a Backend Developer focused on Python, Django, REST APIs, database engineering, and scalable backend architecture. I enjoy exploring distributed systems, cloud infrastructure, system design, and artificial intelligence.",
  aboutText: [
    "I am a Backend Developer focused on building reliable, scalable, and maintainable software systems.",
    "My primary interests include Python backend development, Django, REST API engineering, database architecture, distributed systems, and cloud technologies.",
    "I enjoy understanding how systems work internally, identifying performance bottlenecks, designing reliable architectures, and solving practical engineering problems.",
    "Beyond software development, I am interested in artificial intelligence, neuroscience, cognitive computing, and brain-computer interfaces.",
  ],
  links: {
    github: "https://github.com/Anower77",
    linkedin: "https://www.linkedin.com/in/anowerhossain5a346b220/",
    linktree: "https://linktr.ee/anower77",
    email: "anowerhossain765562@gmail.com",
    resumeDownload: "#resume",
  },
  availability: "Open to Backend Engineering & Distributed Systems Roles",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming",
    iconName: "Code2",
    description: "Core languages for systems, scripting, and application logic",
    skills: ["Python", "C", "C++", "Go"],
  },
  {
    name: "Backend",
    iconName: "Server",
    description: "Web frameworks, API protocols, and business service design",
    skills: ["Django", "Django REST Framework", "Flask", "REST APIs"],
  },
  {
    name: "Database",
    iconName: "Database",
    description: "Relational modeling, transaction integrity, and queries",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    name: "Messaging & Caching",
    iconName: "Layers",
    description: "Asynchronous task processing and low-latency storage",
    skills: ["RabbitMQ", "Celery", "Kafka", "Redis"],
  },
  {
    name: "Cloud",
    iconName: "Cloud",
    description: "Cloud primitives for computation, storage, and networking",
    skills: [
      "AWS EC2",
      "S3",
      "Lambda",
      "RDS",
      "ECS",
      "API Gateway",
      "SQS",
      "IAM",
      "CloudWatch",
    ],
  },
  {
    name: "DevOps",
    iconName: "Terminal",
    description: "Containerization, reverse proxies, and automated CI/CD",
    skills: ["Docker", "Docker Compose", "Linux", "Nginx", "GitHub Actions"],
  },
  {
    name: "Architecture",
    iconName: "Network",
    description: "Distributed system patterns and security protocols",
    skills: ["Microservices", "Distributed Systems", "JWT", "OAuth2", "OpenAPI"],
  },
  {
    name: "Fundamentals",
    iconName: "Cpu",
    description: "Theoretical computer science and durable engineering principles",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Design",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "SFV Omega",
    role: "Backend Developer",
    period: "October 2025 – Present (verify)",
    location: "Remote / Hybrid",
    isCurrent: true,
    description: [
      "Backend application development focusing on robust core logic and service architecture.",
      "REST API development with secure endpoint design and structured request validation.",
      "Database integration and design, managing schema schemas, queries, and migrations.",
      "Backend service implementation and maintenance ensuring reliable runtime operations.",
    ],
    skills: ["Python", "Django", "PostgreSQL", "REST APIs", "Docker"],
  },
  {
    company: "EduCity Ed-tech Platform",
    role: "CS Instructor",
    period: "Previous (verify dates)",
    location: "Bangladesh",
    isCurrent: false,
    description: [
      "Teaching Python programming to aspiring developers with hands-on labs.",
      "Teaching programming fundamentals, logic construction, and debugging methodologies.",
      "Mentoring students on Object-Oriented Programming principles and clean code practices.",
      "Guiding problem-solving sessions centered on algorithms, algorithmic complexity, and data structures.",
    ],
    skills: ["Python", "Algorithms", "Data Structures", "OOP", "Mentorship"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "cp-platform",
    title: "CP Platform",
    tagline: "Competitive programming engine & contest platform",
    category: "backend",
    description:
      "A competitive programming platform developed using Django, designed to manage problem sets, test suites, submissions, user profiles, and real-time contest leaderboards.",
    problem:
      "Competitive programming platforms require rigid problem categorization, contest access control, dynamic ranking calculations, and predictable API response formats for test runners.",
    solution:
      "Engineered a modular Django 5.2 backend with relational schema modeling in PostgreSQL, normalized topic hierarchies, role-based contest orchestration, and well-documented REST APIs.",
    techStack: ["Python", "Django 5.2", "PostgreSQL", "REST APIs", "Vercel"],
    features: [
      "Authentication and token management",
      "Problem management and testcase linkage",
      "User profiles and submission history",
      "Contest management and scheduling",
      "Topic and tag indexing hierarchy",
      "Comprehensive OpenAPI documentation",
    ],
    githubUrl: "https://github.com/Anower77/CP-Platform",
    docsUrl: "https://cp-platform-backend.vercel.app/docs",
    status: "completed",
  },
  {
    id: "microservices-lab",
    title: "Microservices Lab",
    tagline: "Multi-service distributed architecture testbed",
    category: "distributed",
    description:
      "A practical microservices architecture project designed to explore independent backend services, distributed data flows, asynchronous message propagation, and CI/CD deployment pipelines.",
    problem:
      "Monolithic backends often run into coupling bottlenecks, shared database locks, and single-point-of-failure deployments as service boundaries expand.",
    solution:
      "Built a decomposed multi-service architecture with a centralized API gateway, dedicated authentication service, isolated user service, asynchronous notification service via message queues, and reusable shared internal libraries.",
    techStack: [
      "Django",
      "Docker",
      "RabbitMQ",
      "Kafka",
      "GitHub Actions",
      "Redis",
    ],
    features: [
      "API Gateway routing and traffic forwarding",
      "Dedicated Authentication Service with JWT token issuance",
      "Isolated User Service for identity lifecycle",
      "Asynchronous Notification Service consuming from message broker",
      "Shared Library containing common contracts and serialization logic",
      "Containerized deployment topologies with Docker Compose",
    ],
    githubUrl: "https://github.com/Micro-services-Lab",
    status: "completed",
  },
  {
    id: "dootgo",
    title: "DootGo (Loijan)",
    tagline: "Traveler-to-sender peer marketplace platform",
    category: "backend",
    description:
      "A traveler-to-sender goods delivery marketplace backend designed to connect people needing to ship goods with verified travelers possessing spare luggage capacity along travel routes.",
    problem:
      "Traditional cross-border package shipping is slow and costly, but peer-to-peer delivery requires strict trust models, role separation, and reliable multi-state delivery tracking.",
    solution:
      "Implemented a comprehensive Django REST Framework architecture featuring distinct sender and traveler state machines, trip matching models, role-based access checks, and an event-driven notification architecture.",
    techStack: [
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "JWT Auth",
      "Celery",
    ],
    features: [
      "Dual sender and traveler persona lifecycle",
      "Role-based authentication and profile verification",
      "Multi-stage delivery workflow (requested, matched, in-transit, delivered)",
      "Trip listing and destination coordinate matching",
      "Decoupled notification architecture for delivery updates",
    ],
    status: "completed",
  },
  {
    id: "lunchbari",
    title: "Lunchbari",
    tagline: "Enterprise catering and meal management backend",
    category: "backend",
    description:
      "An office catering and subscription meal management platform designed to streamline meal scheduling, corporate catering orders, delivery dispatching, and vendor invoicing.",
    problem:
      "Office meal programs face high order volatility, complex recurring subscription schedules, multi-vendor coordination, and strict delivery timeframes.",
    solution:
      "Designed a centralized backend engine managing multi-tenant companies, food provider menus, rider dispatch schedules, and administrative order audit pipelines.",
    techStack: ["Python", "Django", "PostgreSQL", "REST APIs", "Docker"],
    features: [
      "Corporate user and department management",
      "Food provider menu and daily slot scheduling",
      "Rider management and delivery assignment flows",
      "Order management with cutoff windows",
      "Payment and invoicing workflows",
      "Administrative oversight and operational reporting",
    ],
    status: "completed",
  },
  {
    id: "eeg-research",
    title: "Few-Shot Cross-Dataset EEG-to-Visual Retrieval",
    tagline: "Neural signal decoding & cross-dataset visual representations",
    category: "research",
    description:
      "Ongoing scientific inquiry exploring whether electroencephalogram (EEG) signals recorded while subjects view natural images can retrieve corresponding visual targets across disparate experimental datasets using few-shot representation learning.",
    problem:
      "EEG signals suffer from extreme subject variability, sensor montage differences, and low signal-to-noise ratio, making cross-dataset visual retrieval notoriously difficult without overfitting to specific recording conditions.",
    solution:
      "Investigating cross-dataset alignment strategies on benchmark datasets (THINGS-EEG2 and EEG-ImageNet), mapping spatial-temporal neural activations into shared semantic embedding spaces.",
    techStack: [
      "Python",
      "PyTorch",
      "EEG Signal Processing",
      "Representation Learning",
      "THINGS-EEG2",
      "EEG-ImageNet",
    ],
    features: [
      "Few-shot transfer between disparate brainwave recording setups",
      "Temporal filtering and spatial montage normalization",
      "Contrastive multi-modal visual alignment",
      "Benchmark evaluation against THINGS-EEG2 and EEG-ImageNet datasets",
      "Explicitly ongoing investigative inquiry (distinguished from published result)",
    ],
    isResearch: true,
    status: "research",
  },
];

export const RESEARCH_INTERESTS = [
  {
    title: "Artificial Intelligence",
    icon: "Brain",
    description:
      "Representation learning, neural semantic embeddings, and bridging multimodal signals (vision, language, and electrophysiology).",
  },
  {
    title: "Brain-Computer Interfaces (BCI)",
    icon: "Activity",
    description:
      "Non-invasive neural interfaces, signal acquisition pipelines, and continuous neuro-adaptive system communication.",
  },
  {
    title: "EEG Signal Processing",
    icon: "Radio",
    description:
      "Artifact rejection, frequency-band decomposition, and temporal-spatial filtering across multi-channel sensor arrays.",
  },
  {
    title: "Cognitive Computing & Neuroscience",
    icon: "Cpu",
    description:
      "Exploring biological neural dynamics, perceptual representations, and memory retrieval mechanisms inspiring computational architectures.",
  },
  {
    title: "Distributed Systems & Scalability",
    icon: "Network",
    description:
      "Consensus protocols, eventual consistency, distributed state synchronization, partition tolerance, and load dispersion.",
  },
  {
    title: "System Design & Storage Engines",
    icon: "Database",
    description:
      "Write-ahead logs, LSM-trees vs B-trees, caching topologies, cache stampede mitigation, and database connection pooling.",
  },
  {
    title: "Cloud Infrastructure & Edge",
    icon: "Cloud",
    description:
      "Stateless microservices, container orchestrations, decoupled asynchronous queues, and infrastructure reproducibility.",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "icpc-dhaka",
    title: "ACM-ICPC Dhaka Regionalist",
    organization: "International Collegiate Programming Contest (ICPC)",
    badge: "FCI Team",
    category: "competitive-programming",
    description:
      "Qualified for and competed in the prestigious ACM-ICPC Dhaka Regional contest representing the Feni Computer Institute (FCI) competitive programming team, solving algorithmic challenges under strict time and resource constraints.",
  },
  {
    id: "iymc-2023",
    title: "Bronze Honour — IYMC 2023",
    organization: "International Youth Math Challenge",
    year: "2023",
    badge: "Global Bronze",
    category: "olympiad",
    description:
      "Awarded Bronze Honour in the International Youth Math Challenge, an international mathematics competition testing mathematical ingenuity, advanced calculus, geometry, and number theory problem-solving.",
  },
  {
    id: "stem-olympiad",
    title: "National STEM Olympiad — Second Round",
    organization: "National STEM Olympiad Committee",
    badge: "National Round",
    category: "olympiad",
    description:
      "Advanced to the Second Round of the National STEM Olympiad, demonstrating rigorous analytical reasoning across science, technology, engineering, and mathematical disciplines.",
  },
  {
    id: "iaac-bronze",
    title: "Bronze Medalist — IAAC",
    organization: "International Astronomy and Astrophysics Competition",
    badge: "Bronze Medal",
    category: "olympiad",
    description:
      "Earned a Bronze Medal in the International Astronomy and Astrophysics Competition (IAAC), solving theoretical astrophysics problems including orbital mechanics, celestial radiation, and stellar thermodynamics.",
  },
  {
    id: "iaac-ambassador",
    title: "IAAC Coordinator / Ambassador Invitation",
    organization: "International Astronomy and Astrophysics Competition",
    badge: "Ambassador",
    category: "leadership",
    description:
      "Received an official invitation to serve as an IAAC Ambassador and Coordinator to encourage and mentor students in scientific research and competitive astronomy problem-solving.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Bangladesh University of Business and Technology (BUBT)",
    degree: "B.Sc. in Computer Science and Engineering",
    period: "Undergraduate Studies (verify dates)",
    status: "Enrolled",
    details: [
      "Advanced coursework in Operating Systems, Database Systems, Computer Networks, and Distributed Computing.",
      "Active participant in collegiate algorithmic problem solving and programming activities.",
    ],
  },
  {
    institution: "Feni Computer Institute",
    degree: "Diploma in Computer Science and Engineering",
    period: "Graduated 2024",
    status: "Completed",
    details: [
      "Core curriculum in Computer Programming, Relational Database Management, Data Structures, and Hardware Fundamentals.",
      "Represented the institute in national programming contests and ACM-ICPC regional events.",
    ],
  },
];

export const ENGINEERING_NOTES: EngineeringNote[] = [
  {
    id: "url-shortener-design",
    title: "Designing a Highly Scalable URL Shortener",
    summary:
      "A deep dive into high-throughput URL shortening architecture: Base62 encoding, unique ID generation without collisions, distributed cache invalidation, and database partitioning.",
    readTime: "7 min read",
    date: "March 2025",
    tags: ["System Design", "Distributed Systems", "Redis", "Database"],
    featured: true,
    externalUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7519043745707798528/",
    contentMarkdown: `### The Challenge: URL Shortener at Scale
Designing a system like bit.ly seems deceptively simple, but at scale it reveals classic distributed systems tradeoffs.

#### Core Functional Requirements:
1. Given a long URL, generate a unique, compact short link (e.g., 7 characters).
2. Given a short link, redirect HTTP 301/302 requests to the original URL with sub-15ms latency.
3. High availability and durability over 10+ years of operation.

#### Capacity Estimation:
- 100 Million new URLs created per month (~40 writes/sec).
- 10:1 Read-to-Write ratio (~400 reads/sec).
- Storage over 5 years: 100M × 12 × 5 = 6 Billion records. At ~500 bytes per record, this requires ~3 Terabytes of storage.

#### The ID Generation Problem:
- **Base62 Encoding:** 62^7 = ~3.5 Trillion unique identifiers.
- **Why not MD5/SHA256 truncate?** Hashing produces collisions that require expensive database lookups to verify uniqueness.
- **Distributed ID Generation:** Utilizing a Snowflake-like distributed counter or range-based token generator service (e.g., Ticket Server via Redis or ZooKeeper) ensures $O(1)$ collision-free ID generation.

#### Caching Topology:
- **Cache-Aside Pattern:** Redis holds the most frequently accessed 20% of URLs (Pareto Principle), servicing 80% of read traffic directly from memory.
- **HTTP 301 vs. 302:** 301 Permanently Moved lets browsers cache the redirect locally, reducing server load but losing analytics; 302 Found allows tracking every click at the cost of server ingress.
`,
  },
  {
    id: "redis-cache-stampede",
    title: "Redis Cache Stampede & Mitigation Strategies",
    summary:
      "What happens when thousands of concurrent requests hit a hot cache key the exact millisecond it expires? Analyzing Probabilistic Early Expiration (XFetch) and distributed mutex locks.",
    readTime: "5 min read",
    date: "Technical Note",
    tags: ["Redis", "Caching", "Concurrency", "High Availability"],
    featured: false,
  },
  {
    id: "surviving-cache-restarts",
    title: "Surviving Cache Restarts: Cold Starts & Thundering Herds",
    summary:
      "Strategies for bringing Redis clusters back online safely without collapsing upstream relational databases under instantaneous full-throughput cache misses.",
    readTime: "6 min read",
    date: "Technical Note",
    tags: ["Redis", "Database", "Resilience", "SRE"],
    featured: false,
  },
  {
    id: "microservices-patterns",
    title: "Microservices Architecture & Event-Driven Decoupling",
    summary:
      "Lessons learned structuring message brokers (RabbitMQ / Kafka) to prevent distributed monoliths: avoiding dual-writes with the Transactional Outbox pattern.",
    readTime: "8 min read",
    date: "Technical Note",
    tags: ["Microservices", "Kafka", "RabbitMQ", "Architecture"],
    featured: false,
  },
  {
    id: "api-gateway-design",
    title: "API Gateway Design: Routing, Rate-Limiting & Auth Offload",
    summary:
      "Centralizing SSL termination, token validation, and token-bucket rate limiting at the perimeter to keep downstream microservices focused on domain logic.",
    readTime: "5 min read",
    date: "Technical Note",
    tags: ["API Gateway", "Security", "Nginx", "System Design"],
    featured: false,
  },
  {
    id: "database-optimization",
    title: "Relational Database Optimization & B-Tree Indexing",
    summary:
      "Understanding compound index column ordering, avoiding sequential table scans in PostgreSQL, and tuning connection pools to avoid CPU context switching.",
    readTime: "7 min read",
    date: "Technical Note",
    tags: ["PostgreSQL", "Database Design", "Performance", "SQL"],
    featured: false,
  },
  {
    id: "distributed-systems-fundamentals",
    title: "Distributed Systems Fundamentals: CAP, PACELC & Consensus",
    summary:
      "Navigating consistency versus availability in real-world network partitions, and how modern distributed databases negotiate linearizability.",
    readTime: "9 min read",
    date: "Technical Note",
    tags: ["Distributed Systems", "Theory", "Consensus", "Architecture"],
    featured: false,
  },
];

