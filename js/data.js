/* ═══════════════════════════════════════════════════════════════
   DATA.JS — All portfolio content in one place.
   Edit this file to update your portfolio without touching HTML/JS.
   ═══════════════════════════════════════════════════════════════ */

const PORTFOLIO_DATA = {
  /* ── PERSONAL INFO ─────────────────────────────────────────── */
  name: "Suraj Kumar",
  shortName: "Suraj",
  title: "Software Engineer · MERN & Distributed Systems",
  tagline: "Software Engineer Intern, Bengaluru",
  bio: [
    "I'm a Software Engineer based in Bengaluru with 6 months of internship experience at <em>Earth Services</em> (Patna, India), where I contributed to frontend views and backend modules for an internal loan collections and borrower case-tracking web portal.",

    "I specialize in building full-stack applications with the MERN stack (React.js, Node.js, Express, MongoDB) and architecting scalable distributed systems. My deep-dive work includes designing an 8-microservice distributed railway platform with Apache Kafka, Redis distributed seat locks, and Saga choreography (TrainTravel), an ACID-compliant fintech banking system with pessimistic locking (Swiss Bank), and serverless P2P WebRTC data channels (NoShare).",

    "I focus on writing clean, maintainable code, solving real-world concurrency challenges, and shipping high-performance web applications.",
  ],
  availability: "Open to Software Engineer & Developer Roles",
  resumeUrl: "assets/Suraj_Kumar_Resume.pdf",

  /* ── CONTACT ───────────────────────────────────────────────── */
  contact: {
    email: "surajsinghania11292@gmail.com",
    phone: "+91 7258025793",
    github: "https://github.com/surajsinghania11292",
    linkedin: "https://www.linkedin.com/in/suraj-kumar-1b9a65250/",
    location: "Bengaluru, India",
  },

  /* ── STATS ─────────────────────────────────────────────────── */
  stats: [
    { num: "6 Mo", label: "Intern Experience" },
    { num: "4", label: "Core Projects" },
    { num: "12+", label: "Tech Stack" },
    { num: "100%", label: "Production Deploys" },
  ],

  /* ── CURRENTLY LEARNING ────────────────────────────────────── */
  learning: [
    "TypeScript",
    "Next.js",
    "System Design",
    "Redis",
    "PostgreSQL",
    "Docker & Kubernetes",
    "AWS",
    "GraphQL",
  ],

  /* ── EXPERIENCE ─────────────────────────────────────────────── */
  experience: [
    {
      id: "earth-services-2026",
      role: "Software Engineer Intern",
      company: "Earth Services",
      location: "Patna, India",
      period: "Feb 2026 — Jul 2026",
      duration: "6 months",
      bullets: [
        "Assisted the engineering team in developing and maintaining frontend views and backend modules for an internal loan collections and borrower case-tracking web portal",
        "Built responsive dashboard tables, search forms, and filter components using React.js and Tailwind CSS to help support staff view assigned borrower accounts and overdue delinquency statuses",
        "Developed and updated RESTful API endpoints using Node.js and Express.js for borrower profile lookups, call-disposition remarks logging, and follow-up reminder updates",
        "Created database schemas, basic CRUD queries, and server-side pagination using MongoDB and Mongoose to organize borrower account records and daily agent activity logs",
        "Implemented login session handling and route-level access checks using JSON Web Tokens (JWT) middleware so team leads and agents could only view their assigned cases",
        "Tested API endpoints, request payloads, and status codes using Postman, and collaborated with senior developers using Git, GitHub, and Jira for bug fixes and code reviews",
      ],
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Tailwind CSS",
        "REST APIs",
        "Postman",
        "Jira",
        "Git",
      ],
    },
  ],

  /* ── CURRENTLY BUILDING ────────────────────────────────────── */
  currentlyBuilding: {
    title: "TrainTravel — Distributed Railway Reservation System",
    github: "https://github.com/surajsinghania11292/TrainTravel",
    desc: "Building a scalable microservices railway booking platform with Kafka event streams, Redis distributed seat locks with TTL auto-expiry, Elasticsearch fast station search, and Saga transaction choreography across 8 services.",
    stack: ["React", "Node.js", "Kafka", "Redis", "PostgreSQL", "Prisma", "Elasticsearch", "Docker"],
    startedMonth: "Aug 2026",
    status: "in-progress",
    nextUp: {
      title: "SaaS Dashboard — Full-Stack App",
      desc: "A production-ready SaaS boilerplate with auth, billing, team management, and a clean dashboard — built on Next.js + Prisma + Stripe.",
      status: "planned",
    },
  },

  /* ── PROJECTS ──────────────────────────────────────────────── */
  projects: [
    {
      id: "traintravel",
      category: "Full-Stack · Microservices · Distributed Systems",
      title: "TrainTravel — Scalable Train Reservation Platform",
      desc: "A production-grade microservices railway ticketing platform featuring 8 decoupled services, Apache Kafka asynchronous event streaming, Redis distributed seat locking with TTL auto-expiry, Elasticsearch low-latency route discovery, and Saga transaction choreography.",
      metric: "★ Flagship Architecture · 8 Microservices · Kafka Streams · Redis Locking",
      period: "2026",
      featured: true,
      hero: true,
      ribbon: "★ Flagship · Most Complex Project",
      tags: ["React", "Node.js", "Kafka", "Redis", "PostgreSQL", "Prisma", "Elasticsearch", "Docker"],
      github: "https://github.com/surajsinghania11292/TrainTravel",
      repo: "TrainTravel",
      demo: "",
      casestudy: {
        problem:
          "High-concurrency railway ticketing systems face severe data race conditions (seat double-booking), distributed transaction failures during multi-step checkout (inventory, billing, booking), and database I/O bottlenecks during peak station and schedule search spikes.",
        approach:
          "Architected an 8-service distributed backend (API Gateway, User, Search, Admin, Notification, Booking, Payment, Inventory) adhering to Database-per-Service data isolation. Built Redis distributed seat locking with exponential backoff and PostgreSQL advisory locks for leader election to guarantee strict seat exclusivity during high concurrency windows. Integrated Apache Kafka event streams for asynchronous booking saga choreography (orchestrating booking creation, seat locks, Razorpay webhooks, and automatic rollbacks) and email delivery. Deployed Elasticsearch 8 with real-time Kafka index synchronization for sub-millisecond train search.",
        challenges: [
          "Preventing race conditions and double-booking during flash-crowd seat reservation — solved using Redis distributed locks with TTL auto-expiry and atomic rollback mechanisms",
          "Coordinating multi-service transactions across Booking, Payment, and Inventory — orchestrated with event-driven Kafka Saga choreography with automated compensating actions",
          "Handling high-volume station and schedule searches without overloading PostgreSQL — deployed Elasticsearch cluster with real-time Kafka index synchronization",
        ],
        outcome:
          "A fault-tolerant, horizontally scalable microservices ticketing architecture capable of handling concurrent seat reservations with zero double-booking, resilient async payments with Razorpay, and instant train route discovery.",
        lessons:
          "Designing for distributed systems requires embracing eventual consistency where appropriate, while keeping mission-critical paths (like seat inventory) strictly isolated with distributed locks and idempotent consumer patterns.",
      },
    },
    {
      id: "swiss-bank",
      category: "Full-Stack · Fintech · Security",
      title: "Swiss Bank — Secure NetBanking & Vault System",
      desc: "An enterprise-grade banking platform utilizing a double-entry ledger engine, atomic ACID-compliant P2P transfers via pessimistic row-level database locking, 256-bit AES encryption, Express session management with HTTP-only cookies, and 2FA (TOTP) to protect user assets.",
      metric: "Double-Entry Ledger · Row-Level Locking · 2FA (TOTP) · 256-Bit AES",
      period: "2025",
      featured: true,
      hero: true,
      ribbon: "★ Enterprise Fintech · Security",
      tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Express.js", "JWT", "BCrypt", "Vercel"],
      github: "https://github.com/surajsinghania11292/Swiss_Bank",
      repo: "Swiss_Bank",
      demo: "https://swiss-bank-99.vercel.app",
      casestudy: {
        problem:
          "Designing a high-security online banking interface that demonstrates robust financial transaction flows, double-entry accuracy without floating-point errors, and race condition prevention during simultaneous debit and credit operations.",
        approach:
          "Architected an enterprise banking platform utilizing a double-entry ledger engine to guarantee immutable transaction history and exact balance calculations. Implemented atomic ACID-compliant peer-to-peer transfers using pessimistic row-level database locking (lowest account number first) to prevent race conditions and deadlocks during concurrent transfers. Fortified with an advanced security layer using Express sessions with HTTP-only cookies, BCrypt password/PIN hashing, and 2FA (TOTP) to protect virtual cards and account vaults.",
        challenges: [
          "Eliminating floating-point rounding errors and ensuring immutable financial transaction history — resolved with a double-entry ledger architecture",
          "Preventing race conditions and deadlocks during concurrent mutual transfers — implemented ordered pessimistic row-level locking",
          "Securing session cookies and user authentication against XSS and session hijacking — deployed HTTP-only secure cookie configurations with TOTP 2FA",
        ],
        outcome:
          "A live fintech banking web application deployed at swiss-bank-99.vercel.app with instant atomic fund transfers, 256-bit security visualizers, and responsive account analytics.",
        lessons:
          "Financial architectures require strict transactional consistency, pessimistic locking in deterministic order, and server-side balance validation at every stage to prevent state desynchronization.",
      },
    },
    {
      id: "noshare",
      category: "Full-Stack · P2P · WebRTC",
      title: "NoShare — Decentralized P2P File Transfer",
      desc: "A serverless file-sharing platform using WebRTC data channels — no intermediate server storage, zero uploads, just direct browser-to-browser transfer reducing latency by 60%. Fortified with an Express.js signaling server with in-memory IP rate limiting to mitigate DDoS vectors.",
      metric: "60% lower latency · Zero server storage · In-Memory Rate Limiting",
      period: "2025",
      featured: true,
      hero: true,
      ribbon: "★ Decentralized P2P · WebRTC",
      tags: ["React", "WebRTC", "WebSockets", "Express.js", "Render"],
      github: "https://github.com/surajsinghania11292/NoShare",
      repo: "NoShare",
      demo: "https://noshare.onrender.com",
      casestudy: {
        problem:
          "Traditional file sharing requires uploading to a server, waiting, then downloading — adding latency, cost, and privacy risk. For direct peer sharing, this is unnecessary overhead.",
        approach:
          "Engineered a fully serverless architecture using WebRTC data channels for direct browser-to-browser file transfer — no server ever touches the file bytes. Built an Express.js signaling server to handle WebRTC offer/answer exchange and ICE candidate negotiation. Added an in-memory IP rate limiter to throttle room handshakes and block DDoS flood vectors. Developed custom React hooks (useWebRTC, useSocket) to dynamically render real-time P2P connection states and file transfer progress.",
        challenges: [
          "Handling NAT traversal for users behind firewalls — solved with STUN servers and ICE candidate exchange through the signaling layer",
          "Streaming large files over WebRTC data channels without memory overflow — implemented chunked transfer with progress tracking",
          "Designing the rate limiter to block abuse without breaking legitimate multi-room use cases",
        ],
        outcome:
          "A live, fully serverless P2P file sharing platform at noshare.onrender.com — files transfer directly between browsers with zero server storage cost and 60% lower latency than server-relay alternatives.",
        lessons:
          "WebRTC's complexity hides behind the ICE negotiation — once you understand STUN/TURN and the offer/answer flow, the data channel itself is surprisingly clean. Custom hooks were the right abstraction for managing the connection lifecycle in React.",
      },
    },
    {
      id: "portfolio-site",
      category: "Frontend · Performance · SEO",
      title: "Personal Portfolio Website",
      desc: "A responsive developer portfolio scoring 95+ on Google Lighthouse across all categories, with dark/light/terminal themes, terminal emulator, SEO optimization, and fine-tuned performance. Live on Vercel.",
      metric: "95+ Lighthouse · Sub-second CDN · Vanilla JS & CSS",
      period: "2026",
      featured: true,
      hero: true,
      ribbon: "★ High-Performance Engineering",
      tags: ["HTML5", "CSS3", "JavaScript", "Vercel", "SEO"],
      github: "https://github.com/surajsinghania11292/Suraj_Portfolio",
      repo: "Suraj_Portfolio",
      demo: "https://suraj-portfolio-99.vercel.app/",
      casestudy: {
        problem:
          "Creating a developer portfolio that stands out visually with animations, glassmorphism, and responsive interactivity — without relying on heavy frameworks that hurt Lighthouse performance or introduce cold starts.",
        approach:
          "Engineered the entire application with vanilla JavaScript, modern CSS custom properties, and semantic HTML5. Implemented a data-driven architecture where all content lives in a structured data layer, paired with dynamic DOM rendering, custom CSS keyframe animations, and client-side theme switching. Deployed to Vercel's global Edge CDN for instantaneous worldwide delivery.",
        challenges: [
          "Delivering rich SVG animations, custom terminal commands, and particle visuals while maintaining 95+ Lighthouse scores",
          "Designing a consistent dark/light/terminal theme token system without CSS flashes during page transitions",
          "Building fully accessible modals, responsive layouts, and interactive components with zero external framework dependencies",
        ],
        outcome:
          "A live, high-performance personal portfolio at suraj-portfolio-99.vercel.app with 95+ Lighthouse performance scores, instant page loads, and responsive design across all screen sizes.",
        lessons:
          "Vanilla web technologies, when architected properly with modular component patterns, deliver superior performance and load speeds compared to heavy client-side JavaScript bundles.",
      },
    },
  ],

  /* ── SKILLS ────────────────────────────────────────────────── */
  skills: [
    {
      group: "Frontend Development",
      icon: "{ }",
      items: [
        "JavaScript (ES6+)",
        "React.js",
        "Redux Toolkit",
        "Zustand",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      group: "Backend & APIs",
      icon: "◈",
      items: [
        "Node.js",
        "Express.js",
        "RESTful API Design",
        "Authentication (JWT, OAuth)",
        "Postman",
        "Swagger",
      ],
    },
    {
      group: "Databases & Storage",
      icon: "🗄️",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Mongoose ODM",
        "Prisma ORM",
        "Redis (Distributed Locks)",
        "Elasticsearch",
      ],
    },
    {
      group: "Architecture & Real-Time",
      icon: "⬡",
      items: [
        "Microservices",
        "Apache Kafka",
        "Saga Pattern",
        "WebSockets",
        "Socket.io",
        "WebRTC (P2P)",
        "Event-Driven Architecture",
      ],
    },
    {
      group: "Cloud, DevOps & Tools",
      icon: "☁",
      items: [
        "Docker",
        "Docker Compose",
        "CI/CD (GitHub Actions)",
        "Git & GitHub",
        "Vercel",
        "Render",
        "Jira",
        "Linux",
      ],
    },
    {
      group: "CS Fundamentals",
      icon: "⚙",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
    },
  ],

  /* ── EDUCATION ─────────────────────────────────────────────── */
  education: [
    {
      type: "Bachelor's Degree",
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Aryabhatta Knowledge University",
      location: "Patna, India",
      period: "Jun 2020 — Aug 2023",
      grade: "CGPA 8.08",
      gradeNote: "AKU Patna",
    },
  ],

  /* ── CERTIFICATIONS ───────────────────────────────────────── */
  certifications: [
    {
      name: "Full Stack Web Development Course",
      issuer: "Full Stack Web Development",
      issuerLogo: "FullStack",
      date: "2023",
      credentialId: "FS-WEB-DEV",
      verifyUrl: "#",
      tags: ["Full-Stack", "React", "Node.js", "MERN"],
    },
  ],

  /* ── BLOG POSTS ─────────────────────────────────────────────── */
  blog: [
    {
      id: "webrtc-p2p-deep-dive",
      title: "Building a Real P2P File Transfer App with WebRTC — No Server Storage",
      subtitle: "From ICE negotiation to chunked file streaming in the browser.",
      summary: "A deep dive into building NoShare — how WebRTC data channels, signaling servers, and custom React hooks combine to create a zero-server-storage file transfer experience.",
      platform: "Engineering Deep Dive",
      date: "Upcoming",
      readTime: "8 min read",
      tags: ["WebRTC", "P2P", "React", "Full-Stack"],
      isPublished: false,
      url: "#",
      notifyText: "Coming soon",
    },
    {
      id: "socket-io-scale",
      title: "Real-Time at Scale: Lessons from Building a Production Chat App",
      summary: "What I learned shipping a Socket.io chat app on Docker + Render — connection stability, cold-start elimination, and asynchronous webhook sync patterns.",
      platform: "Dev.to",
      date: "Upcoming",
      url: "https://dev.to",
      notifyText: "Follow on Dev.to ↗",
      tags: ["Socket.io", "Docker", "Node.js", "Real-Time"],
      readTime: "6 min read",
      isPublished: false,
    },
  ],

  /* ── MARQUEE TECH ──────────────────────────────────────────── */
  marqueeItems: [
    "React.js",
    "Node.js",
    "Kafka",
    "Redis",
    "PostgreSQL",
    "Elasticsearch",
    "Prisma",
    "MongoDB",
    "Express.js",
    "Socket.io",
    "WebRTC",
    "Docker",
    "JavaScript",
    "Tailwind CSS",
    "JWT",
    "REST APIs",
    "GitHub Actions",
    "Vercel",
    "Clerk",
    "Gemini AI",
    "Twilio",
    "Redux Toolkit",
    "Mongoose",
  ],
};