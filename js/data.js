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
    "I'm a Software Engineer based in Bengaluru with 6 months of hands-on internship experience at <em>Earth Services</em> building <span class='about-highlight'>production web features with the MERN stack</span> and developing high-scale distributed side projects like TrainTravel.",

    "During my internship, I worked closely with senior engineers to deliver responsive React frontends, streamline RESTful endpoints in Node.js/Express, and resolve frontend performance bottlenecks. Beyond my internship, I dive deep into distributed architectures — building microservices with Apache Kafka, Redis distributed seat locks, and WebRTC P2P systems.",

    "I believe in <em>continuous learning, clean code, and shipping real projects</em>. Every project in this portfolio represents practical problem solving from concept to live deployment.",
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
      id: "earth-services-2024",
      role: "Software Engineer Intern",
      company: "Earth Services",
      period: "Oct 2025 — Mar 2026",
      duration: "6 months",
      bullets: [
        "Collaborated with senior engineers to develop and maintain responsive UI components for school management dashboards using React.js and Tailwind CSS",
        "Assisted in building and documenting modular RESTful API endpoints with Node.js, Express.js, and MongoDB for student record lookups and form submissions",
        "Investigated, debugged, and resolved 25+ frontend bug tickets, improving cross-browser responsiveness and UI rendering speeds across mobile and desktop views",
        "Assisted senior backend engineers in integrating JWT authentication checks and basic role verification for student and staff portals",
        "Wrote reusable utility functions, form validation handlers, and assisted in testing API routes with Postman prior to staging releases",
      ],
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
        "Git",
        "Postman",
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
      desc: "A production-grade digital banking web application with multi-layered transaction security, end-to-end 256-bit AES encryption, role-based vault authorization, real-time balance calculations, and simulated fund transfers with cryptographic audit logs.",
      metric: "256-Bit AES · MFA Vault · Real-Time Ledger",
      period: "2025",
      featured: false,
      hero: false,
      tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Vercel"],
      github: "https://github.com/surajsinghania11292/Swiss_Bank",
      repo: "Swiss_Bank",
      demo: "https://swiss-bank-99.vercel.app",
      casestudy: {
        problem:
          "Designing a high-security online banking interface that demonstrates robust financial transaction flows, role-based permissions, and fraud prevention mechanisms without introducing high client-side latency.",
        approach:
          "Engineered a full-stack MERN banking ecosystem with protected API endpoints, JWT-based session security, and Bcrypt password hashing. Implemented simulated atomic fund transfer logic with double-entry balance verification to prevent race conditions. Designed an interactive banking dashboard with real-time balance charts, beneficiary management, and instant transfer receipt generation.",
        challenges: [
          "Ensuring transaction integrity across simulated simultaneous debit and credit operations",
          "Designing an intuitive, responsive fintech interface with strict input validation and card number formatting",
          "Implementing tamper-evident audit logging for all account transactions and authentication attempts",
        ],
        outcome:
          "A live fintech banking web application deployed at swiss-bank-99.vercel.app with instant fund transfers, 256-bit security visualizers, and responsive account analytics.",
        lessons:
          "Financial architectures require strict transactional consistency and server-side balance validation at every stage to prevent state desynchronization.",
      },
    },
    {
      id: "noshare",
      category: "Full-Stack · P2P · WebRTC",
      title: "NoShare — Decentralized P2P File Transfer",
      desc: "A serverless file-sharing platform using WebRTC data channels — no server storage, no uploads, just pure peer-to-peer transfer. Reduced transfer latency by 60% vs. traditional server-relay approaches. Features a custom Express.js signaling server with in-memory IP rate limiting.",
      metric: "60% lower latency · Zero server storage",
      period: "2025",
      featured: false,
      hero: false,
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
      category: "Frontend · Performance",
      title: "Personal Portfolio Website",
      desc: "A responsive developer portfolio scoring 95+ on Google Lighthouse across all categories, with dark/light themes, terminal emulator, SEO optimization, and fine-tuned performance. Live on Vercel.",
      metric: "95+ Lighthouse · Sub-second CDN",
      period: "2026",
      featured: false,
      hero: false,
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
      group: "Frontend",
      icon: "{ }",
      items: [
        "JavaScript",
        "React.js",
        "Redux Toolkit",
        "Zustand",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      group: "Backend & Database",
      icon: "◈",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose ODM",
        "MySQL",
        "REST APIs",
        "JWT",
      ],
    },
    {
      group: "Architecture",
      icon: "⬡",
      items: [
        "WebRTC",
        "Socket.io",
        "WebSockets",
        "Peer-to-Peer (P2P)",
        "Event-Driven Sync",
        "RBAC",
        "MVC",
      ],
    },
    {
      group: "DevOps & Tools",
      icon: "☁",
      items: [
        "Git / GitHub",
        "Docker",
        "CI/CD Pipelines",
        "GitHub Actions",
        "Vercel",
        "Render",
        "Postman",
      ],
    },
    {
      group: "AI & Integrations",
      icon: "⚙",
      items: [
        "Gemini AI API",
        "Clerk Auth",
        "Twilio Verify (MFA)",
        "ImageKit",
        "Webhooks",
        "Razorpay",
      ],
    },
  ],

  /* ── EDUCATION ─────────────────────────────────────────────── */
  education: [
    {
      type: "Bachelor's Degree",
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Aryabhatta Knowledge University",
      location: "Bihar, India",
      period: "2020 — 2023",
      grade: "CGPA 8.08",
      gradeNote: "AKU",
    },
  ],

  /* ── CERTIFICATIONS ───────────────────────────────────────── */
  certifications: [
    {
      name: "Web Development Course with AI",
      issuer: "Udemy",
      issuerLogo: "Udemy",
      date: "2024",
      credentialId: "UDEMY-WEB-AI",
      verifyUrl: "#",
      tags: ["Web Development", "AI", "Full-Stack"],
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