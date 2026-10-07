export const personal = {
  name: "Tanish Mohanta",
  firstName: "Tanish",
  lastName: "Mohanta",
  roles: [
    "Backend Software Engineer",
    "Distributed Systems Developer",
    "API Architect",
    "Data Infrastructure Engineer",
  ],
  tagline:
    "Building reliable systems is a challenge. I bring expertise in distributed architecture, API design, data infrastructure, and the quiet plumbing that keeps products running at scale.",
  location: "Bengaluru, India",
  email: "tanishmohanta1901@gmail.com",
  phone: "+91 7903109365",
  github: "https://github.com/tanishtt",
  linkedin: "https://www.linkedin.com/in/tanish-mohanta-09b07b1b2/",
  twitter: "https://twitter.com",
  resumeUrl: "#",
  aboutTitle: "Welcome to the Mohanta Zone: Where Code Meets Scale",
  aboutBio: [
    "Finally, we can talk about me — a blend of pragmatism and unhealthy attention to detail (at least for my colleagues...).",
    'Born in Copenhagen, Denmark, I have always been curious about how things work under the hood. Growing up surrounded by Lego and old computers, I tinkered with machines and dreamed of building systems that could handle anything you threw at them long before "scale" became a buzzword.',
    "After earning a B.tech. in Computer Science from the University of Copenhagen, I dove into the world of distributed systems, completing my M.Sc. at the Technical University of Denmark with a thesis on consensus algorithms. Three companies later, I discovered that the most interesting engineering happens where reliability meets complexity.",
    "My journey into production backend systems started at Ketjen Labs, a small startup where I wore every hat — from writing WebSocket servers to managing the database. Now, I am passionate about building infrastructure that other engineers rely on — think event streaming platforms and geo-replicated data stores.",
  ],
  aboutQuote:
    "Right from the moment I met distributed systems, I knew I had to love this discipline as much as I can, for as long as I can. The best systems are the ones nobody thinks about — they just work.",
  currentCompany: "Halden Systems",
  availability: "Open to new opportunities",
};

export const career = [
  {
    name: "Technical University of Denmark",
    short: "DTU",
    period: "2014 — 2016",
    degree: "M.Sc. Distributed Systems",
    description:
      "Thesis on Raft vs Paxos under network partitions. Jepsen-style chaos testing.",
  },
  {
    name: "University of Copenhagen",
    short: "DIKU",
    period: "2011 — 2014",
    degree: "B.Sc. Computer Science",
    description:
      "Algorithms, operating systems, databases. Built a toy DB engine and never recovered.",
  },
  {
    name: "Recurse Center",
    short: "RC",
    period: "2020",
    degree: "Residency — Remote",
    description:
      "12 weeks building a Raft consensus library in Rust. Best professional decision ever.",
  },
];

export const experience = [
  {
    company: "Halden Systems",
    role: "Principal Backend Engineer",
    period: "2022 — Present",
    location: "Copenhagen, DK",
    description:
      "Leading the platform infrastructure team building the event streaming backbone. Six engineers, a lot of Go, and an unreasonable amount of time spent on capacity planning.",
    achievements: [
      "Designed and shipped Tessera — an event streaming platform handling 40B events/day with exactly-once semantics",
      "Drove migration to SLO-driven development, now adopted by 11 teams across the organization",
      "Reduced infrastructure spend by 35% over two quarters through right-sizing and autoscaling",
      "Mentored six engineers, two of whom now lead their own platform teams",
    ],
    tech: ["Go", "Kafka", "Kubernetes", "AWS", "Terraform", "gRPC"],
  },
  {
    company: "Brightline Technologies",
    role: "Senior Backend Engineer",
    period: "2019 — 2022",
    location: "Berlin, DE",
    description:
      "Owned the API gateway and authentication services powering all customer-facing products. Led the migration from monolith to event-driven microservices with zero downtime.",
    achievements: [
      "Built Cartographer — a multi-region API gateway serving 14 regions with sub-second failover",
      "Migrated the core platform to 40+ services with zero customer-facing downtime",
      "Implemented distributed tracing across the entire stack using Jaeger and OpenTelemetry",
    ],
    tech: ["Go", "gRPC", "PostgreSQL", "Redis", "GCP", "Istio"],
  },
  {
    company: "DataForge",
    role: "Backend Engineer",
    period: "2017 — 2019",
    location: "Stockholm, SE",
    description:
      "First engineer on the analytics team. Built the ingestion pipeline from a Python script on a laptop to a system handling 500K events per second.",
    achievements: [
      "Built Cinder — a real-time analytics pipeline from scratch, now powering 180+ dashboards",
      "Created internal CLI tooling adopted by the entire engineering organization",
      "Set up the first CI/CD pipelines, reducing deployment friction by 80%",
    ],
    tech: ["Python", "Kafka", "Elasticsearch", "Docker", "Flink"],
  },
  {
    company: "Ketjen Labs",
    role: "Software Engineer",
    period: "2016 — 2017",
    location: "Copenhagen, DK",
    description:
      "Full-stack engineer at a startup building developer tools. Discovered my love for backend systems while building the real-time collaboration server.",
    achievements: [
      "Built a WebSocket-based real-time collaboration server with Redis pub/sub",
      "Implemented automated testing covering 90% of the codebase",
    ],
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
  },
];

export const projects = [
  {
    name: "Tessera",
    subtitle: "Event Streaming Platform",
    year: "2023",
    category: "Streaming Infrastructure",
    description:
      "A from-scratch event streaming system built to replace a Kafka cluster that had grown too expensive and too fragile. Custom partitioning, exactly-once semantics, geo-replication across three regions.",
    problem:
      "The existing Kafka cluster was eating $40K/month and failing under peak load. We needed to handle 40B events/day with exactly-once semantics and survive cross-region failures.",
    solution:
      "Built a custom streaming engine in Go with a Raft consensus layer, geo-replicated storage on S3, and a gRPC client SDK. Implemented idempotent producers and a two-phase commit for transactional consumers.",
    features: [
      "Exactly-once event delivery",
      "Raft-based consensus",
      "Three-region geo-replication",
    ],
    tech: ["Go", "Raft", "gRPC", "Kubernetes", "S3", "AWS"],
    liveUrl: "#contact",
    codeUrl: "https://github.com",
    metrics: [
      { label: "Daily events", value: "40B" },
      { label: "p99 latency", value: "11ms" },
      { label: "Cost reduction", value: "62%" },
    ],
    status: "Shipped to production — 3 regions — Active",
  },
  {
    name: "Ironhouse",
    subtitle: "Secrets Management Platform",
    year: "2022",
    category: "Security Infrastructure",
    description:
      "Zero-knowledge secrets platform with dynamic credential generation and automatic rotation. The interesting part was the audit log — an append-only, tamper-evident store that survived a full region outage.",
    problem:
      "Security teams needed dynamic secrets with rotation, but the existing solution had no tamper-evident audit trail and lost entries during outages. Compliance required 7-year retention.",
    solution:
      "Built in Rust for memory safety. Audit log uses a Merkle tree with periodic anchoring to AWS KMS. Rotation engine runs as a sidecar with lease-based access. Full region failover tested monthly.",
    features: [
      "Dynamic credential rotation",
      "Tamper-evident audit logs",
      "Zero-knowledge secret storage",
    ],
    tech: ["Rust", "PostgreSQL", "AWS KMS", "Terraform", "Kubernetes"],
    liveUrl: "#contact",
    codeUrl: "https://github.com",
    metrics: [
      { label: "Secrets managed", value: "1.2M" },
      { label: "Rotations/day", value: "80K" },
      { label: "Audit integrity", value: "100%" },
    ],
    status: "Shipped to production — 500+ deployments — Stable",
  },
  {
    name: "Cartographer",
    subtitle: "Multi-Region API Gateway",
    year: "2021",
    category: "Network Infrastructure",
    description:
      "A globally distributed gateway that routes traffic based on latency, cost, and health. The hardest part was the failover logic — getting 14 regions to agree on who is alive without an 800ms quorum.",
    problem:
      "The legacy gateway had no health-aware routing and single-region failover took over 5 seconds. We needed sub-second failover across 14 regions with cost-aware traffic distribution.",
    solution:
      "Built a gossip-based health check layer in Go with a SWIM protocol variant. Routing uses a weighted scoring model combining latency, cost, and health. Failover triggers at 700ms via a quorum of 3 witnesses.",
    features: [
      "Latency-aware traffic routing",
      "Health-based regional failover",
      "Cost-aware route scoring",
    ],
    tech: ["Go", "Envoy", "Redis", "GCP", "Istio"],
    liveUrl: "#contact",
    codeUrl: "https://github.com",
    metrics: [
      { label: "Regions", value: "14" },
      { label: "Failover", value: "<700ms" },
      { label: "Active routes", value: "3.4K" },
    ],
    status: "Shipped to production — 14 regions — Active",
  },
  {
    name: "Marlowe",
    subtitle: "Search Infrastructure Rewrite",
    year: "2020",
    category: "Data Infrastructure",
    description:
      "Replaced a creaky Elasticsearch cluster with a custom inverted-index engine in Rust. The old system was eating $40K/month in compute. The new one does 60% better latency for a third of the cost.",
    problem:
      "Elasticsearch cluster was expensive, slow on complex queries, and index rebuilds took hours. The team needed faster search with lower costs and faster reindexing.",
    solution:
      "Custom inverted-index engine in Rust with BM25 scoring, compressed posting lists, and incremental indexing. Rebuilds use a shadow-index strategy with atomic switchover. Deployed on Kubernetes with autoscaling.",
    features: [
      "BM25 full-text search",
      "Incremental index updates",
      "Atomic shadow-index rebuilds",
    ],
    tech: ["Rust", "Python", "Kubernetes", "Prometheus"],
    liveUrl: "#contact",
    codeUrl: "https://github.com",
    metrics: [
      { label: "Latency gain", value: "60%" },
      { label: "Cost saved", value: "$27K/mo" },
      { label: "Index size", value: "6.2TB" },
    ],
    status: "Shipped to production — 8TB index — Stable",
  },
  {
    name: "Cinder",
    subtitle: "Real-Time Analytics Pipeline",
    year: "2019",
    category: "Data Infrastructure",
    description:
      "A streaming analytics pipeline ingesting ~500K events per second and powering dashboards with sub-second freshness. Built on Kafka and Flink with a query fan-out layer I am still mildly proud of.",
    problem:
      "The analytics team needed sub-second dashboards over 500K events/sec. Existing batch pipelines had 15-minute lag and the business needed real-time.",
    solution:
      "Kafka for ingestion, Flink for stream processing, ClickHouse for serving. Built a custom query fan-out layer that parallelizes aggregations across shards and merges results in-flight.",
    features: [
      "500K events per second ingestion",
      "Sub-second dashboard freshness",
      "Parallel shard query fan-out",
    ],
    tech: ["Python", "Kafka", "Flink", "ClickHouse", "Grafana"],
    liveUrl: "#contact",
    codeUrl: "https://github.com",
    metrics: [
      { label: "Events/sec", value: "500K" },
      { label: "Dashboards", value: "180+" },
      { label: "Query p99", value: "340ms" },
    ],
    status: "Shipped to production — 180+ dashboards — Active",
  },
  {
    name: "Drawbridge",
    subtitle: "CI/CD Orchestration",
    year: "2018",
    category: "Developer Tooling",
    description:
      "A distributed build system with intelligent test selection — it figures out which tests actually need to run for a given diff. Cut average build times from 22 minutes to 4.",
    problem:
      "Builds were taking 22+ minutes and deploy frequency was suffering. Running all tests on every PR was wasteful and teams were skipping CI to save time.",
    solution:
      "Dependency graph analysis in Go to select only affected tests. Distributed execution on Kubernetes with gRPC coordination. Flaky-test detection via historical pass/fail patterns with automatic quarantine.",
    features: [
      "Intelligent test selection",
      "Distributed build execution",
      "Automatic flaky-test quarantine",
    ],
    tech: ["Go", "Docker", "Kubernetes", "gRPC"],
    liveUrl: "#contact",
    codeUrl: "https://github.com",
    metrics: [
      { label: "Build time", value: "4 min" },
      { label: "Test skip rate", value: "73%" },
      { label: "Daily deploys", value: "400+" },
    ],
    status: "Shipped to production — 400+ daily deploys — Active",
  },
];

export const education = career.map((item) => ({
  institution: item.name,
  degree: item.degree,
  period: item.period,
  detail: item.description,
  location: personal.location,
}));

export const writing = [
  {
    title: "On the cost of exactly-once",
    date: "Mar 2024",
    summary:
      "Why exactly-once delivery is rarely worth what you pay for it, and what to ask for instead.",
  },
  {
    title: "Idempotency keys are not magic",
    date: "Nov 2023",
    summary:
      "A practical guide to making retries safe without lying to yourself about the trade-offs.",
  },
  {
    title: "Postmortems that do not blame the database",
    date: "Aug 2023",
    summary:
      "How to write incident retrospectives that actually change how your team builds things.",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Go", "Python", "Rust", "TypeScript", "SQL", "Bash"],
  },
  {
    title: "Data Stores",
    skills: [
      "PostgreSQL",
      "Redis",
      "ClickHouse",
      "Kafka",
      "Cassandra",
      "DynamoDB",
    ],
  },
  {
    title: "Infrastructure & Ops",
    skills: ["AWS", "Kubernetes", "Terraform", "Docker", "Nginx", "Linux"],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      "Event Sourcing",
      "CQRS",
      "Sagas",
      "Idempotency",
      "Backpressure",
      "Circuit Breakers",
    ],
  },
  {
    title: "Observability",
    skills: [
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "Jaeger",
      "Loki",
      "Sentry",
    ],
  },
  {
    title: "Practices",
    skills: [
      "Schema Evolution",
      "Graceful Degradation",
      "Cost-Aware Design",
      "Threat Modeling",
      "Postmortems",
      "SLO/SLI Design",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Career", href: "#career" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
