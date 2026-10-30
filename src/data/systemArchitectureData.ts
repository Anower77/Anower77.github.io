import { SystemArchitectureNode } from "@/types";

export const ARCHITECTURE_NODES: SystemArchitectureNode[] = [
  {
    id: "client",
    name: "Client Ingress",
    category: "Ingress",
    role: "Web & Mobile Clients, Third-party Webhooks",
    technologies: ["HTTP/2", "TLS 1.3", "REST", "JSON payload"],
    responsibilities: [
      "Initiates user transactions and event payloads",
      "Supplies Bearer JWT credentials in Authorization header",
      "Respects client-side exponential backoff on HTTP 429/503 responses",
    ],
    failureModes: [
      "Flaky network connections leading to dropped responses",
      "Duplicate retries causing unintended multiple submissions",
    ],
    mitigations: [
      "Idempotency keys (Idempotency-Key header) for state-mutating requests",
      "Short client timeouts with jittered exponential retry backoff",
    ],
    latencyTypical: "~20-100 ms (Network edge dependent)",
  },
  {
    id: "api-gateway",
    name: "API Gateway & Reverse Proxy",
    category: "Perimeter",
    role: "Perimeter Routing, Rate Limiting & SSL Offloading",
    technologies: ["Nginx", "Kong / AWS API Gateway", "Token Bucket Algorithm"],
    responsibilities: [
      "Terminates TLS/SSL certificates at the perimeter",
      "Enforces token-bucket rate limiting per IP and client API key",
      "Normalizes headers, inspects CORS, and routes traffic by path prefix",
      "Drops malformed or abusive payloads before they hit downstream services",
    ],
    failureModes: [
      "Single point of failure if unclustered",
      "Memory saturation during DDoS or connection storms",
    ],
    mitigations: [
      "Multi-AZ active-active deployment behind Anycast load balancers",
      "Distributed rate limit counter stored in Redis cluster with low TTL",
    ],
    latencyTypical: "< 2 ms overhead",
  },
  {
    id: "auth-service",
    name: "Authentication & Authorization",
    category: "Security",
    role: "Identity Verification & Cryptographic Token Issuance",
    technologies: ["JWT (RS256 / Ed25519)", "OAuth2", "Redis Token Revocation"],
    responsibilities: [
      "Validates user credentials against hashed password stores (Argon2id/bcrypt)",
      "Issues cryptographically signed short-lived access tokens (15m) and refresh tokens (7d)",
      "Provides public keys (JWKS endpoint) so backend services verify tokens statelessly without DB hits",
      "Maintains token revocation deny-list in fast in-memory store",
    ],
    failureModes: [
      "High auth endpoint latency slowing down all login flows",
      "Stolen refresh tokens or replay attacks",
    ],
    mitigations: [
      "Stateless RS256 token verification on edge microservices",
      "Refresh token rotation with reuse detection family invalidation",
    ],
    latencyTypical: "< 5 ms token validation / ~80 ms hashing cost",
  },
  {
    id: "backend-services",
    name: "Backend Application Services",
    category: "Application",
    role: "Domain Logic, State Machines & Orchestration",
    technologies: ["Python", "Django", "Django REST Framework", "Docker"],
    responsibilities: [
      "Executes core business rules, transactional validation, and domain state machines",
      "Remains horizontally scalable and completely stateless across instances",
      "Offloads heavy I/O, email generation, and report aggregation to async message queues",
      "Maintains connection pooling to relational databases to avoid connection thrashing",
    ],
    failureModes: [
      "Thread pool starvation caused by blocking synchronous I/O",
      "Memory leaks from unbounded caches or unclosed connections",
    ],
    mitigations: [
      "Strict request timeouts and circuit breakers for external third-party calls",
      "Strict separation of synchronous request paths from async background task workers",
    ],
    latencyTypical: "15 - 45 ms",
  },
  {
    id: "message-broker",
    name: "Message Broker & Task Queue",
    category: "Asynchronous",
    role: "Decoupled Event Streaming & Asynchronous Processing",
    technologies: ["RabbitMQ", "Apache Kafka", "Celery Workers", "Redis Queue"],
    responsibilities: [
      "Buffers high-volume write bursts, smoothing peak loads for backend workers",
      "Enables publish-subscribe decoupling across microservice domains",
      "Manages dead-letter queues (DLQ) for failed messages with automated retry schedules",
      "Guarantees at-least-once message delivery semantics",
    ],
    failureModes: [
      "Queue buildup during worker crashes or downstream DB slowdowns",
      "Poison-pill messages causing infinite worker retry loops",
    ],
    mitigations: [
      "Dead Letter Exchanges (DLX) with max retry counts and alerts",
      "Horizontal auto-scaling of worker consumers based on queue depth metrics",
    ],
    latencyTypical: "< 3 ms publish / async execution",
  },
  {
    id: "redis-cache",
    name: "In-Memory Cache & Distributed Lock",
    category: "Storage",
    role: "Sub-Millisecond Read Acceleration & Mutex Primitives",
    technologies: ["Redis", "Memcached", "Redlock", "Lua Scripts"],
    responsibilities: [
      "Serves hot read paths using the Cache-Aside (Lazy Loading) pattern",
      "Provides distributed locks with lease timeouts for concurrent cron jobs",
      "Stores transient session data and ephemeral rate-limit counters",
      "Shields primary relational database from read thrashing",
    ],
    failureModes: [
      "Cache Stampede (Thundering Herd) when a hot key expires concurrently",
      "Memory eviction of essential keys under unmonitored dataset growth",
    ],
    mitigations: [
      "Probabilistic Early Expiration (XFetch algorithm) and distributed mutexes",
      "Explicit allkeys-lru eviction policies and Redis Sentinel / Cluster HA",
    ],
    latencyTypical: "< 1 ms",
  },
  {
    id: "database",
    name: "Relational Primary Database",
    category: "Persistence",
    role: "ACID Transactions, Relational Integrity & Durable Storage",
    technologies: ["PostgreSQL", "Write-Ahead Logging (WAL)", "B-Tree Indexes"],
    responsibilities: [
      "Guarantees strong transactional consistency and durability for core domain entities",
      "Maintains relational foreign-key integrity and strict schema validations",
      "Utilizes compound indexing strategies to optimize frequent lookup queries",
      "Streams continuous WAL archives for point-in-time recovery (PITR)",
    ],
    failureModes: [
      "Sequential table scans caused by missing indexes causing CPU 100%",
      "Connection saturation exhausting PostgreSQL max_connections limits",
    ],
    mitigations: [
      "PgBouncer / connection pooling to multiplex thousands of app connections",
      "Read replicas with asynchronous replication for analytical queries",
    ],
    latencyTypical: "3 - 12 ms indexed lookups",
  },
];

export const FLOW_STEPS = [
  {
    step: 1,
    title: "Request Ingress & TLS Termination",
    from: "client",
    to: "api-gateway",
    detail: "Client dispatches HTTPS request with Bearer JWT to the API Gateway.",
  },
  {
    step: 2,
    title: "Perimeter Checks & Auth Verification",
    from: "api-gateway",
    to: "auth-service",
    detail: "Gateway evaluates rate limit counters and verifies JWT signature statelessly via JWKS.",
  },
  {
    step: 3,
    title: "Service Routing & Cache Lookup",
    from: "api-gateway",
    to: "redis-cache",
    detail: "Backend checks Redis for hot cached representation. If hit, returns in <2ms.",
  },
  {
    step: 4,
    title: "Database Query / Cache-Aside Miss",
    from: "backend-services",
    to: "database",
    detail: "On cache miss, backend queries PostgreSQL with indexed lookup and writes back to Redis.",
  },
  {
    step: 5,
    title: "Async Event Dispatch",
    from: "backend-services",
    to: "message-broker",
    detail: "State mutation emits an asynchronous event to RabbitMQ/Kafka for Celery workers.",
  },
];

