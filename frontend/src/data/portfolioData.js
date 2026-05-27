// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║  PORTFOLIO DATA CONFIG — Edit this file to customize your entire portfolio  ║
// ║  All dummy data is centralized here for easy modification.                  ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────
// 1. PERSONAL PROFILE
// ─────────────────────────────────────────────────────
export const PROFILE = {
  name: "Mohamed Ashish Roshan",
  firstName: "Ashish Roshan",
  initials: "MAR",
  title: "Full-Stack Developer & Security Engineer",
  tagline: "I build enterprise-grade security platforms, full-stack applications, and AI-powered systems that solve real-world problems.",
  bio: "Passionate software engineer specializing in cybersecurity platforms, DevSecOps intelligence, and full-stack web applications. I thrive on turning complex security challenges into elegant, production-ready solutions.",
  email: "mohamedashishroshanpc@gmail.com",
  phone: "+91 8148199506",
  location: "Tiruchirappalli,India",
  website: "https://ashishroshan.dev",
  github_url: "https://github.com/AshishRoshan26",
  linkedin_url: "https://linkedin.com/in/ashishroshan",
  instagram_url: "https://instagram.com/aroshanash",
  resume_url: "/mar-resume.pdf",
  available_for_work: true,
  years_experience: 0 - 1,
  projects_completed: 5,
  technologies_used: 36,
};

// ─────────────────────────────────────────────────────
// 2. HERO SECTION — Rotating titles
// ─────────────────────────────────────────────────────
export const HERO_TITLES = [
  "Full-Stack Python Developer",
  "Software Engineer",
  "DevSecOps Architect",
  "Security Engineer",
  "AI Systems Builder",
];

// ─────────────────────────────────────────────────────
// 3. STATS (Hero section counters)
// ─────────────────────────────────────────────────────
export const STATS = {
  projects_count: 5,
  total_modules: 68,
  technologies_used: 36,
  github_contributions: 847,
  lines_of_code: "150K+",
  cups_of_coffee: 1200,
};

// ─────────────────────────────────────────────────────
// 4. NAVIGATION ITEMS
// ─────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

// ─────────────────────────────────────────────────────
// 5. ABOUT SECTION
// ─────────────────────────────────────────────────────
export const ABOUT = {
  headline: "Crafting secure, scalable digital experiences",
  description: `I'm a passionate Full-Stack Developer and Security Engineer based in Chennai, India. With a strong foundation in Python, Django, FastAPI, and React, I specialize in building enterprise-grade security platforms and AI-powered systems.

My journey began with a fascination for cybersecurity, which led me to develop SentinelX AURAPRIME — a 26-module AI-driven DevSecOps intelligence platform. Since then, I've been dedicated to creating production-ready applications that combine cutting-edge security with exceptional user experiences.

When I'm not coding, you'll find me researching emerging threats, contributing to open-source projects, or writing technical articles about secure software development.`,
  highlights: [
    { icon: "shield", label: "Security First", desc: "Every line of code written with security in mind" },
    { icon: "rocket", label: "Production Ready", desc: "Enterprise-grade architectures built to scale" },
    { icon: "brain", label: "AI Powered", desc: "Leveraging AI for intelligent automation" },
    { icon: "code", label: "Clean Code", desc: "Maintainable, documented, and tested codebases" },
  ],
  funFacts: [
    { value: "150K+", label: "Lines of Code" },
    { value: "847", label: "GitHub Contributions" },
    { value: "1000+", label: "Debugging Hours" },
    { value: "∞", label: "Curiosity" },
  ],
};

// ─────────────────────────────────────────────────────
// 6. PROJECTS
// ─────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: 'SentinelX AURAPRIME',
    subtitle: 'AI-Driven DevSecOps Intelligence Platform',
    slug: 'sentinelx-auraprime',
    category: 'cybersecurity',
    category_display: 'Cybersecurity',
    status: 'production',
    short_description: 'Enterprise AI-driven DevSecOps platform with 26 security modules, autonomous pentesting, neural WAF, and post-quantum cryptography readiness.',
    description: 'SentinelX AURAPRIME is an enterprise-grade AI-driven DevSecOps intelligence platform featuring 26 fully integrated security modules and 55 API endpoints. It includes autonomous penetration testing, neural web application firewall, post-quantum cryptography scanning, and a complete SOAR engine for automated incident response.',
    tech_stack: ['FastAPI', 'React', 'SQLite', 'Claude API', 'Tailwind CSS', 'Framer Motion'],
    features: [
      '26 Integrated Security Modules',
      '55 REST API Endpoints',
      'AI-Powered Penetration Testing',
      'Neural WAF with Pattern Matching',
      'Post-Quantum Cryptography Scanner',
      'Auto-Healing Infrastructure',
      'SOAR Engine for Incident Response',
      'Dark Web Intelligence Monitoring',
    ],
    modules_count: 26,
    api_endpoints: 55,
    is_featured: true,
    gradient_from: '#06b6d4',
    gradient_to: '#8b5cf6',
    architecture: 'Modular monolith with FastAPI backend, React frontend with Framer Motion animations, SQLite database with async ORM. Triple AI fallback system (Claude, GPT-4, Local) for intelligent threat analysis.',
    github_url: 'https://github.com/AshishRoshan26/Final-Sentinel',
    live_url: 'https://github.com/AshishRoshan26/Final-Sentinel',
    demo_url: '#',
    year: '2025',
    duration: '6 months',
  },
  {
    id: 2,
    title: 'TrafficGuard Firewall',
    subtitle: 'AI-Powered Enterprise Application Firewall',
    slug: 'trafficguard-firewall',
    category: 'cybersecurity',
    category_display: 'Cybersecurity',
    status: 'production',
    short_description: 'Enterprise application firewall with dynamic rule engine, behavioral anomaly detection, incident management, and IP reputation scoring.',
    description: 'TrafficGuard is a production-inspired enterprise application firewall with comprehensive traffic monitoring and security enforcement. It features a 7-type dynamic rule engine with priority-based evaluation, behavioral anomaly detection, and a complete incident management lifecycle.',
    tech_stack: ['Django', 'Django REST Framework', 'React', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
    features: [
      '7-Type Dynamic Rule Engine',
      'Behavioral Anomaly Detection',
      'Full Incident Management Lifecycle',
      'IP Reputation Scoring System',
      'Comprehensive Audit Logging',
      'Advanced Rate Limiting',
      'Role-Based Access Control',
    ],
    modules_count: 9,
    api_endpoints: 25,
    is_featured: true,
    gradient_from: '#ef4444',
    gradient_to: '#f97316',
    architecture: 'Django middleware-based request inspection pipeline with priority-based rule engine. Redis caching for real-time threat intelligence.',
    github_url: 'https://github.com/AshishRoshan26/Firewall2',
    live_url: 'https://github.com/AshishRoshan26/Firewall2',
    demo_url: '#',
    year: '2025',
    duration: '3 months',
  },
  {
    id: 3,
    title: 'SysMonitor Pro',
    subtitle: 'AI-Powered System Monitoring Desktop Application',
    slug: 'sysmonitor-pro',
    category: 'devops',
    category_display: 'DevOps',
    status: 'production',
    short_description: 'Enterprise system monitoring with AI anomaly detection, predictive MTTR, real-time WebSocket dashboards, and desktop application.',
    description: 'SysMonitor Pro is an enterprise-grade system monitoring platform providing real-time observability with AI-powered anomaly detection. Features include predictive Mean Time To Resolve (MTTR), WebSocket-based live dashboards, and a desktop application via Electron.',
    tech_stack: ['Django', 'React', 'Electron', 'PostgreSQL', 'WebSockets', 'Celery'],
    features: [
      'Real-time WebSocket Dashboards',
      'AI-Powered Anomaly Detection',
      'Predictive MTTR Analytics',
      'Automated Health Checks',
      '5-Whys Root Cause Analysis',
      'Cross-Platform Desktop App',
      'Comprehensive Audit Logging',
    ],
    modules_count: 13,
    api_endpoints: 30,
    is_featured: true,
    gradient_from: '#10b981',
    gradient_to: '#06b6d4',
    architecture: 'Django REST backend with WebSocket support via Django Channels, React frontend with Electron wrapper for desktop deployment. Celery for background task processing.',
    github_url: 'https://github.com/AshishRoshan26/sysmonitor',
    live_url: 'https://github.com/AshishRoshan26/sysmonitor',
    demo_url: '#',
    year: '2024',
    duration: '4 months',
  },
  {
    id: 4,
    title: 'Shipping Doc Validator',
    subtitle: 'Intelligent Document Verification & OCR Platform',
    slug: 'shipping-doc-validator',
    category: 'fullstack',
    category_display: 'Full-Stack',
    status: 'production',
    short_description: 'Automated shipping document validator with OCR processing, Django backend, secure API integrations, and CSRF-protected workflows.',
    description: 'The Shipping Document Validator is a full-stack system built during a professional internship at Vdart Academy. It automates document verification workflows using OCR technology, with a robust Django backend handling API integrations for document processing, secure PostgreSQL/MySQL data management, and a polished frontend for uploading and triggering document validation.',
    tech_stack: ['Django', 'Python', 'OCR', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
    features: [
      'OCR-Powered Document Extraction',
      'Automated Verification Workflows',
      'Secure API Integrations',
      'HTTPS & CSRF Protection',
      'Cookie-Based Authentication',
      'PostgreSQL/MySQL Data Storage',
      'Document Upload & Processing UI',
    ],
    modules_count: 6,
    api_endpoints: 12,
    is_featured: true,
    gradient_from: '#a855f7',
    gradient_to: '#ec4899',
    architecture: 'Django monolith with OCR pipeline for document ingestion, PostgreSQL for structured storage, and Django Template Language frontend with secure CSRF token exchange.',
    github_url: 'https://github.com/aroshanash/final-doc',
    live_url: 'https://github.com/aroshanash/final-doc',
    demo_url: '#',
    year: '2025',
    duration: '1 month',
  },
  {
    id: 5,
    title: 'Railway Snack Ops',
    subtitle: 'Command Center for Railway Platform Snack Management',
    slug: 'railway-snack-ops',
    category: 'fullstack',
    category_display: 'Full-Stack',
    status: 'production',
    short_description: 'Full-stack snack shop management with POS, Stripe payments, real-time analytics, QR code menu, and inventory tracking.',
    description: 'Railway Snack Ops is a full-stack railway platform snack shop management system. It features a complete Point of Sale system, Stripe payment integration, real-time sales analytics, QR code menu generation, and comprehensive inventory management.',
    tech_stack: ['FastAPI', 'React (Vite)', 'MongoDB', 'Stripe', 'Recharts'],
    features: [
      'Real-time Sales Analytics Dashboard',
      'Point of Sale Terminal',
      'Stripe Payment Integration',
      'Inventory Management System',
      'QR Code Menu Generation',
      'Role-Based Access Control',
    ],
    modules_count: 10,
    api_endpoints: 20,
    is_featured: true,
    gradient_from: '#f59e0b',
    gradient_to: '#ef4444',
    architecture: 'FastAPI async backend with Motor (async MongoDB driver), React Vite frontend with Recharts for analytics visualization.',
    github_url: 'https://github.com/AshishRoshan26/Railway',
    live_url: 'https://github.com/AshishRoshan26/Railway',
    demo_url: '#',
    year: '2024',
    duration: '2 months',
  },
];

export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'cybersecurity', label: 'Cybersecurity' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'devops', label: 'DevOps' },
];

// ─────────────────────────────────────────────────────
// 7. SKILLS & TECHNOLOGIES
// ─────────────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    id: 'backend',
    title: 'Languages & Backend',
    icon: '⚡',
    color: '#3776ab',
    gradient: 'linear-gradient(135deg, #3776ab, #009688)',
    skills: [
      { name: 'Python', level: 'Intermediate', context: 'Core language for SentinelX AURAPRIME (26 modules), TrafficGuard Firewall, SysMonitor Pro, and Shipping Doc Validator' },
      { name: 'Django', level: 'Internediate', context: 'Built TrafficGuard Firewall and Shipping Doc Validator — REST APIs, middleware pipelines, and admin dashboards' },
      { name: 'FastAPI', level: 'Advanced', context: 'Powered SentinelX AURAPRIME backend (55 endpoints) and Railway Snack Ops async API layer' },
      { name: 'REST API Development', level: 'Advanced', context: 'Designed and built 100+ REST endpoints across 5 production projects with proper auth, pagination, and error handling' },
      { name: 'SQL', level: 'Intermediate', context: 'Complex queries, joins, and schema design for PostgreSQL/MySQL across all Django and FastAPI projects' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend (Basic)',
    icon: '🎨',
    color: '#f7df1e',
    gradient: 'linear-gradient(135deg, #f7df1e, #61dafb)',
    skills: [
      { name: 'JavaScript', level: 'Beginner', context: 'Frontend interactivity for SentinelX dashboard, Railway Snack Ops POS terminal, and this portfolio site' },
      { name: 'React.js', level: 'Beginner', context: 'Built SentinelX AURAPRIME dashboard, Railway Snack Ops analytics UI, and this portfolio with Framer Motion' },
      { name: 'Bootstrap', level: 'Intermediate', context: 'Responsive layouts for Shipping Doc Validator and SysMonitor Pro admin interfaces' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: '🗄️',
    color: '#336791',
    gradient: 'linear-gradient(135deg, #336791, #47a248)',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', context: 'Primary database for TrafficGuard Firewall and SysMonitor Pro — complex schema design with indexing' },
      { name: 'MySQL', level: 'Intermediate', context: 'Used in Shipping Doc Validator for document metadata storage and retrieval' },
      { name: 'MongoDB', level: 'Intermediate', context: 'NoSQL store for Railway Snack Ops — inventory, orders, and real-time analytics with Motor async driver' },
      { name: 'SQLite', level: 'Intermediate', context: 'Lightweight database for SentinelX AURAPRIME — async ORM integration for rapid prototyping' },
      { name: 'Database Design', level: 'Intermediate', context: 'Normalized schemas, ER diagrams, and migration strategies across all production projects' },
      { name: 'Query Optimization (Basic)', level: 'Learning', context: 'Index tuning and query analysis for PostgreSQL performance in TrafficGuard Firewall' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing & Quality',
    icon: '🧪',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
    skills: [
      { name: 'pytest', level: 'Advanced', context: 'Test suites for FastAPI endpoints in SentinelX AURAPRIME and Railway Snack Ops' },
      { name: 'unittest', level: 'Advanced', context: 'Django test framework for TrafficGuard Firewall rule engine validation' },
      { name: 'Unit Testing', level: 'Advanced', context: 'Isolated module testing across all backend projects — models, views, and serializers' },
      { name: 'Integration Testing', level: 'Learning', context: 'End-to-end API flow testing for SentinelX security module interactions' },
      { name: 'Test Coverage', level: 'Learning', context: 'Coverage reports and gap analysis for critical security modules in SentinelX' },
      { name: 'Code Review', level: 'Advanced', context: 'Peer review practices, PR-based workflows, and code quality standards across team projects' },
    ],
  },
  {
    id: 'systems',
    title: 'Systems & Networking',
    icon: '🖧',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    skills: [
      { name: 'Linux', level: 'Advanced', context: 'Server administration, deployment environments, and shell-based automation for all backend projects' },
      { name: 'Bash Scripting', level: 'Advanced', context: 'Automation scripts for deployment, log rotation, and system health checks in SysMonitor Pro' },
      { name: 'TCP/IP', level: 'Advanced', context: 'Network protocol analysis and packet inspection concepts applied in TrafficGuard Firewall' },
      { name: 'OSI Model', level: 'Advanced', context: 'CCNT certification — applied networking layers knowledge in firewall rule design' },
      { name: 'System Troubleshooting', level: 'Intermediate', context: 'Debugging production issues, log analysis, and 5-Whys root cause analysis in SysMonitor Pro' },
    ],
  },
  {
    id: 'vcs',
    title: 'Version Control',
    icon: '📝',
    color: '#f1502f',
    gradient: 'linear-gradient(135deg, #f1502f, #ef4444)',
    skills: [
      { name: 'Git', level: 'Advanced', context: 'Daily workflow across all 5 projects — branching, merging, rebasing, and conflict resolution' },
      { name: 'Feature-Branch Workflow', level: 'Advanced', context: 'Structured development with feature branches, staging, and production-ready main branch' },
      { name: 'Pull Requests', level: 'Advanced', context: 'Code review and collaborative development through GitHub PRs across team projects' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps (In Progress)',
    icon: '🐳',
    color: '#2496ed',
    gradient: 'linear-gradient(135deg, #2496ed, #ff9900)',
    badge: 'In Progress',
    skills: [
      { name: 'Docker', level: 'Intermediate', context: 'Containerized SentinelX AURAPRIME and TrafficGuard Firewall for consistent deployment environments' },
      { name: 'GitHub Actions', level: 'Learning', context: 'CI pipeline setup for automated testing and linting on push events' },
      { name: 'CI/CD Pipelines', level: 'Learning', context: 'Automated build-test-deploy workflows for production-ready application delivery' },
      { name: 'AWS (EC2, S3, RDS)', level: 'Learning', context: 'AWS Cloud Quest certification — hands-on with compute, storage, and managed database services' },
    ],
  },
  {
    id: 'ai',
    title: 'AI Prompting & Tools',
    icon: '🤖',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
    badge: 'Emerging',
    skills: [
      { name: 'Claude Code', level: 'Intermediate', context: 'AI pair programming for SentinelX AURAPRIME module development and code refactoring' },
      { name: 'OpenAI Codex (GPT)', level: 'Intermediate', context: 'Triple AI fallback system in SentinelX — GPT-4 as secondary AI for threat analysis' },
      { name: 'Prompt Engineering', level: 'Intermediate', context: 'Crafting structured prompts for code generation, security analysis, and documentation' },
      { name: 'AI-assisted Development', level: 'Intermediate', context: 'Leveraging AI tools to accelerate development velocity across all recent projects' },
    ],
  },
];

// ─────────────────────────────────────────────────────
// 8. EXPERIENCE & EDUCATION
// ─────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    id: 1,
    type: 'project',
    type_display: 'Major Project',
    title: 'SentinelX AURAPRIME Development',
    organization: 'Personal / Academic',
    start_date: '2025-03-01',
    end_date: '2025-09-01',
    description: 'Designed and built a 26-module AI-driven DevSecOps intelligence platform with enterprise-grade security features.',
    highlights: [
      'Architected modular monolith with FastAPI backend',
      'Implemented triple AI fallback system (Claude/GPT-4/Local)',
      'Built neural WAF with real-time pattern matching',
      'Published IEEE-format research paper',
    ],
  },
  {
    id: 2,
    type: 'project',
    type_display: 'Major Project',
    title: 'TrafficGuard Firewall Development',
    organization: 'Personal / Academic',
    start_date: '2025-01-01',
    end_date: '2025-04-01',
    description: 'Built enterprise-grade application firewall with Django and comprehensive traffic monitoring.',
    highlights: [
      'Implemented priority-based 7-type rule engine',
      'Built behavioral anomaly detection system',
      'Deployed in college server room for production testing',
      'Full incident management lifecycle',
    ],
  },
  {
    id: 3,
    type: 'Internship',
    type_display: 'Internship',
    title: 'Full Stack Developer Intern',
    organization: 'Vdart Academy',
    location: 'Tiruchirappalli,Tamilnadu, India',
    start_date: '2025-07-21',
    end_date: '2025-08-10',
    description: 'Dveloped the Shipping Document Validator System using Django and OCR automating document Verfication Workflows',
    highlights: [
      'Built Backend logic and handled API Integrations for Doc processing.',
      'Worked with PostgreSQL/MySQL for storing and managing document data',
      'Developed a Robust Frontend for uploading and Triggering to ensure smooth application functionality',
      'Ensured Secure connection between Frontend and Backend using HTTPS,Cookie Authentication and CSRF Protection',
      'Used HTML,CSS,and Django Template Language for building frontend',
    ],
  },
  {
    id: 4,
    type: 'education',
    type_display: 'Education',
    title: 'B.E Computer Science & Engineering',
    organization: 'M.I.E.T Engineering College(Autonomous)',
    location: 'Tiruchirappalli,Tamilnadu, India',
    start_date: '2022-08-01',
    is_current: false,
    end_date: '2026-05-10',
    description: 'Bachelor of Engineering  in Computer Science & Engineering ',
    highlights: [
      'Overall CGPA: 8.5',
      'Focus on Backend Development and Security',
      'Led multiple full-stack production projects',
      'Determination of Strong Leadership and Teamwork',
      'Represented college in Hackathons and Technical Symposiums',
    ],
  },
];

// ─────────────────────────────────────────────────────
// 9. TESTIMONIALS
// ─────────────────────────────────────────────────────
export const TESTIMONIALS = [];

// ─────────────────────────────────────────────────────
// 10. CERTIFICATIONS (Professional & Industry)
// ─────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    id: 1,
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    description: "Hands-on cloud practitioner training — AWS core services, EC2, S3, IAM, VPC, and cloud architecture fundamentals",
    icon: "☁️",
    color: "#ff9900",
    link: "#",
  },
  {
    id: 2,
    title: "Oracle Certified Database for Developers",
    issuer: "Oracle",
    date: "2025",
    description: "Enterprise database development — PL/SQL programming, performance tuning, data modeling, and Oracle DB administration",
    icon: "🔶",
    color: "#f80000",
    link: "#",
  },
  {
    id: 3,
    title: "SQL Server Certificate",
    issuer: "Alison",
    date: "2025",
    description: "Microsoft SQL Server administration and development — T-SQL queries, stored procedures, indexing, and database design",
    icon: "🗄️",
    color: "#cc2927",
    link: "#",
  },
  {
    id: 4,
    title: "Django Web Development",
    issuer: "Guvi (IIT Madras)",
    date: "2024",
    description: "Full-stack web development with Django framework — building robust backend systems and REST APIs",
    icon: "🌐",
    color: "#092e20",
    link: "#",
  },
  {
    id: 5,
    title: "Python Selenium Automation",
    issuer: "Guvi (IIT Madras)",
    date: "2024",
    description: "Python and Selenium for automation testing — building real-world automation projects and test suites",
    icon: "🐍",
    color: "#3776ab",
    link: "#",
  },
  {
    id: 6,
    title: "CCNT (Cisco Certified Network Technician)",
    issuer: "Cisco",
    date: "2024",
    description: "Networking fundamentals, TCP/IP, OSI model, routing, switching, and network troubleshooting",
    icon: "🔌",
    color: "#049fd9",
    link: "#",
  },
  {
    id: 7,
    title: "Docker For Beginners",
    issuer: "KodeKloud",
    date: "2024",
    description: "Container fundamentals, Docker images, volumes, networking, and container orchestration basics",
    icon: "🐳",
    color: "#2496ed",
    link: "#",
  },
  {
    id: 8,
    title: "Web Scraping",
    issuer: "Great Learning",
    date: "2024",
    description: "Data extraction and web scraping techniques using Python — BeautifulSoup, requests, and automation",
    icon: "🕸️",
    color: "#06b6d4",
    link: "#",
  },
];

// ─────────────────────────────────────────────────────
// 10b. TECHNICAL EVENTS & COMPETITIONS
// ─────────────────────────────────────────────────────
export const TECHNICAL_EVENTS = [
  {
    id: 1,
    title: "National Technical Exhibition",
    venue: "Dr. Ambedkar Institute, Bangalore",
    type: "exhibition",
    type_display: "Exhibition",
    description: "Showcased technical project work at a national-level technical exhibition, demonstrating innovative solutions to real-world problems.",
    icon: "🏆",
    color: "#f59e0b",
  },
  {
    id: 2,
    title: "CodeHunters – Algorithm Optimization Challenge",
    venue: "Inter-College Competition",
    type: "competition",
    type_display: "Coding Challenge",
    description: "Participated in an algorithm optimization challenge focused on problem-solving, logical thinking, and efficient code design.",
    icon: "🧩",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "HackSprint25 – 24-Hour Hackathon",
    venue: "Hackathon Event",
    type: "hackathon",
    type_display: "Hackathon",
    description: "Collaborated in a team to develop a working web-based solution within 24-hour time constraints, showcasing rapid prototyping skills.",
    icon: "⚡",
    color: "#ef4444",
  },
];

export const COMPETITIVE_ACHIEVEMENTS = [
  {
    id: 1,
    title: "TCS CodeVita – Round 3",
    description: "Advanced to Round 3 of TCS CodeVita, demonstrating strong algorithmic problem-solving skills among thousands of national participants.",
    icon: "🥇",
    color: "#06b6d4",
  },
  {
    id: 2,
    title: "LeetCode DSA Practice",
    description: "Regular practice on LeetCode focusing on Arrays, Strings, HashMaps, and Dynamic Programming — building strong algorithmic foundations.",
    icon: "💡",
    color: "#f59e0b",
  },
];


// ─────────────────────────────────────────────────────
// 11. GITHUB ACTIVITY (simulated for display)
// ─────────────────────────────────────────────────────
export const GITHUB_ACTIVITY = {
  username: "AshishRoshan26",
  repos: 12,
  stars: 34,
  forks: 8,
  followers: 45,
  contributions_last_year: 847,
  languages: [
    { name: 'Python', percentage: 45, color: '#3776ab' },
    { name: 'JavaScript', percentage: 30, color: '#f7df1e' },
    { name: 'TypeScript', percentage: 10, color: '#3178c6' },
    { name: 'HTML/CSS', percentage: 10, color: '#e34f26' },
    { name: 'Other', percentage: 5, color: '#6b7280' },
  ],
  recentCommits: [
    { repo: 'Final-Sentinel', message: 'feat: add post-quantum crypto scanner module', date: '2 days ago' },
    { repo: 'Final-Sentinel', message: 'fix: neural WAF false positive reduction', date: '4 days ago' },
    { repo: 'Firewall2', message: 'feat: implement IP reputation scoring', date: '1 week ago' },
    { repo: 'final-doc', message: 'feat: OCR pipeline for document validation', date: '1 week ago' },
    { repo: 'sysmonitor', message: 'feat: add predictive MTTR analytics', date: '2 weeks ago' },
    { repo: 'Railway', message: 'feat: Stripe POS integration', date: '3 weeks ago' },
  ],
};

// ─────────────────────────────────────────────────────
// 12. SOCIAL LINKS (for footer & sharing)
// ─────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { platform: 'GitHub', url: 'https://github.com/AshishRoshan26', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/ashishroshan', icon: 'linkedin' },
  { platform: 'Instagram', url: 'https://instagram.com/aroshanash', icon: 'instagram' },
  { platform: 'Email', url: 'mailto:mohamedashishroshanpc@gmail.com', icon: 'mail' },
];

// ─────────────────────────────────────────────────────
// 13. SEO & META
// ─────────────────────────────────────────────────────
export const SEO = {
  title: "Mohamed Ashish Roshan | Full-Stack Developer & Security Engineer",
  description: "Portfolio of Mohamed Ashish Roshan — Full-Stack Developer & Security Engineer. Building enterprise-grade security platforms, AI-powered systems, and production-ready applications.",
  keywords: "portfolio, developer, security engineer, Django, React, FastAPI, cybersecurity, DevSecOps, Python",
  ogImage: "/og-image.png",
};
