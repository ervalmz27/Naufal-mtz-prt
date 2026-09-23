import type { NavLink, Project, Skill, ExperienceItem, StatItem } from '../types'

export const NAV_LINKS: NavLink[] = [
  { id: 'overview', label: 'Overview', href: '#overview' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'terminal', label: 'Terminal', href: '#terminal' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const HERO_DATA = {
  badge: 'Available for High-Impact Roles & Architecture Consulting',
  name: 'Naufal Mumtaz',
  title: 'Senior Backend & Systems Engineer',
  roles: [
    'Senior Backend Engineer',
    'OSINT & Security Architect',
    'Full-Stack Developer',
    'Enterprise Systems Builder',
  ],
  description:
    'Engineering resilient backend systems, high-throughput microservices, and intelligence pipelines. Over 5 years of battle-tested experience delivering mission-critical platforms for enterprise banking, government infrastructure, and cyber threat intelligence.',
  location: 'Bandung, Indonesia (UTC+7)',
  email: 'naufalmumtaz27@gmail.com',
  github: 'https://github.com/ervalmz27',
  linkedin: 'https://www.linkedin.com/in/naufal-mumtaz-537a4a1bb',
  telegram: 'https://t.me/Slay90',
}

export const STATS_DATA: StatItem[] = [
  { value: '5+', label: 'Years Experience', subtext: 'In backend & full-stack systems' },
  { value: '20+', label: 'Shipped Systems', subtext: 'Production grade deployments' },
  { value: '8+', label: 'Companies Served', subtext: 'Enterprise, banking & tech startups' },
  { value: '99.9%', label: 'Uptime Standard', subtext: 'Reliable, fault-tolerant design' },
]

export const ABOUT_DATA = {
  headline: 'Engineering scalable backends with uncompromised security and performance.',
  paragraphs: [
    'Based in Bandung, Indonesia, I have spent the last half-decade designing, deploying, and maintaining high-performance software systems. My engineering expertise spans scalable RESTful & gRPC APIs, enterprise relational databases, asynchronous job pipelines, and automated intelligence ingestion.',
    'Currently specializing in Cyber Security and Open Source Intelligence (OSINT): architecting automated threat intelligence systems integrating Shodan, WhoisXML, DeHashed, and Wayback Machine, while deploying isolated OpenVPN proxy gateways and MobSF mobile security scanning.',
    'I believe that the best backend code is invisible to the end user: ultra-fast response times, zero unexpected downtime, secure data transit, and clean, self-documenting architecture that scales effortlessly.',
  ],
  coreValues: [
    {
      title: 'Security-First Architecture',
      desc: 'Zero-trust design, sanitized inputs, encrypted transport, and proactive vulnerability scanning.',
      icon: 'Shield',
    },
    {
      title: 'Performance & Scalability',
      desc: 'Query optimization, connection pooling, Redis caching, and resilient asynchronous queue workers.',
      icon: 'Zap',
    },
    {
      title: 'Clean, Maintainable Code',
      desc: 'Modular design patterns, comprehensive Swagger/OpenAPI documentation, and rigorous type safety.',
      icon: 'Code',
    },
    {
      title: 'Cross-Domain Fluency',
      desc: 'Seamless orchestration between backend databases, mobile native bridges, and frontend interfaces.',
      icon: 'Layers',
    },
  ],
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Cyber Threat Intelligence & OSINT Platform',
    subtitle: 'Automated Threat Reconnaissance & Mobile APK Security Scanner',
    description:
      'High-security threat intelligence engine automating multi-source OSINT investigations. Ingests data across Shodan, WhoisXML, DeHashed, and Wayback Machine, coupled with an isolated MobSF static security scanning engine.',
    architecture:
      'Engineered with PHP/Yii2 and MySQL, backed by automated background worker queues and secure OpenVPN proxy tunnels for anonymous reconnaissance. Authored 40+ Swagger OpenAPI endpoint specifications.',
    metrics: '40+ OpenAPI Endpoints • Real-time Threat Feeds • Isolated Proxy Routing',
    tech: ['PHP / Yii2', 'MySQL', 'OpenVPN', 'MobSF', 'Swagger', 'OSINT APIs'],
    category: 'security',
    categoryLabel: 'Threat Intel & Security',
    image: '/projects/screenshot-prismkey.jpeg',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'IKN Nusantara Government Mobile App',
    subtitle: "Official Citizen Services Application for Indonesia's New Capital",
    description:
      'Official multi-service governmental mobile platform engineered for IKN Nusantara (Indonesia\'s new state capital), integrating digital public administration, news, civic reporting, and municipal services.',
    architecture:
      'Constructed with Swift UI and high-performance native WebView bridge for dynamic service modules, implementing robust government API authentication and low-latency state synchronization.',
    metrics: 'National Capital Scale • Swift UI Native • Secure Citizen Authentication',
    tech: ['Swift UI', 'iOS Native', 'WebView Bridge', 'REST API', 'Gov Gateway'],
    category: 'mobile',
    categoryLabel: 'Mobile & Government',
    image: '/projects/screenshot-ikn.jpeg',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Bank BSI Risk Management System',
    subtitle: 'Enterprise Operational Risk Assessment & Compliance Engine',
    description:
      'Mission-critical banking operational risk platform built for PT Bank Syariah Indonesia (BSI), powering real-time risk tracking, audit logs, and regulatory compliance monitoring.',
    architecture:
      'Features granular Role-Based Access Control (RBAC), multi-stage approval matrices, audit logging for financial compliance, and encrypted reporting exports.',
    metrics: 'Banking Regulatory Compliant • Multi-Tier Approval Workflow • Enterprise RBAC',
    tech: ['PHP / Laravel', 'Vue.js', 'MySQL', 'Docker', 'Audit Trail'],
    category: 'enterprise',
    categoryLabel: 'Enterprise & FinTech',
    image: '/projects/screenshot-bsi.jpeg',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'PT. Telkom Indonesia — Digicon Platform',
    subtitle: 'Enterprise Virtual Showcase & Interplay Telemetry Analytics',
    description:
      'High-concurrency virtual showcase platform for enterprise clients of PT. Telkom Indonesia, tracking real-time visitor interactions, multimedia asset delivery, and session analytics.',
    architecture:
      'Designed dual-database architecture leveraging PostgreSQL and Oracle DB for distinct relational records and high-volume analytical event logs, backed by Node.js/Express.js microservices.',
    metrics: 'PostgreSQL + Oracle DB Hybrid • Real-time Telemetry • Enterprise Low-Code',
    tech: ['Vue.js / Vuetify', 'Node.js', 'Express.js', 'PostgreSQL', 'Oracle DB'],
    category: 'enterprise',
    categoryLabel: 'Enterprise Analytics',
    image: '/projects/screenshot-digicon.jpeg',
    demo: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Suquise Tower Management Ecosystem',
    subtitle: 'Smart Building Operations & Biometric Security Platform',
    description:
      'End-to-end building operations system coordinating lease contracts, visitor control, private network routing, and automated tenant requests for a commercial skyscraper.',
    architecture:
      'Seamless synchronization between a PHP/Yii2 backend, MySQL database, and React Native cross-platform mobile apps for property managers and tenants, interfaced with hardware biometric attendance scanners.',
    metrics: 'Biometric Scanner Integration • Mobile Tenant App • Real-time Billing',
    tech: ['PHP / Yii2', 'React Native', 'MySQL', 'Biometric API', 'REST API'],
    category: 'platform',
    categoryLabel: 'Smart Building & IoT',
    image: '/projects/screenshot-squizetower.jpeg',
    demo: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'White-Label Social Finance SaaS',
    subtitle: 'Multi-Tenant Islamic Philanthropy & Payment Gateway Engine',
    description:
      'Scalable white-label fintech platform handling Zakat, Infaq, and Wakaf charitable distributions across independent tenant organizations with branded sub-domains.',
    architecture:
      'Built with Angular 12 component architecture, Node.js backend, multi-tenant database partitioning, and seamless Midtrans payment gateway with automated webhooks and Google OAuth.',
    metrics: 'Multi-Tenant Partitioning • Midtrans Webhooks • Google OAuth 2.0',
    tech: ['Angular 12', 'Node.js', 'Midtrans Gateway', 'Google OAuth', 'TypeScript'],
    category: 'platform',
    categoryLabel: 'FinTech & Multi-Tenant',
    image: '/projects/screenshot-bigamalsaas.jpeg',
    demo: '#',
    github: '#',
  },
  {
    id: 7,
    title: 'AIKON.id Smart Laundry System',
    subtitle: 'IoT-Connected Multi-Branch Laundromat Platform',
    description:
      'Full-stack management software coordinating hundreds of commercial washing machines across multi-outlet networks, with customer mobile wallets and revenue analytics.',
    architecture:
      'Next.js web application interfaced with IoT hardware controllers for remote machine triggering, promo voucher validation, and real-time revenue telemetry.',
    metrics: 'IoT Machine Telemetry • Multi-Outlet Dashboard • Next.js & Docker',
    tech: ['Next.js', 'Node.js', 'MySQL', 'IoT Protocols', 'Docker'],
    category: 'platform',
    categoryLabel: 'IoT & SaaS',
    image: '/projects/screenshot-aikonlaundry- web.jpeg',
    demo: '#',
    github: '#',
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: '2025 – Present',
    role: 'Backend Engineer & Security Specialist',
    company: 'Cyber Threat Intelligence Platform',
    location: 'Bandung, Indonesia (Remote)',
    type: 'Full-time',
    description:
      'Leading backend architecture and automated threat intelligence ingestion pipelines for an enterprise cybersecurity reconnaissance platform.',
    keyAchievements: [
      'Engineered automated connectors for Shodan, WhoisXML, DeHashed, and Wayback Machine APIs.',
      'Constructed sandboxed MobSF APK static vulnerability scanning endpoints with automated PDF/JSON reporting.',
      'Designed and deployed secure OpenVPN proxy routing infrastructure for anonymous scanning.',
      'Authored 40+ comprehensive OpenAPI/Swagger interactive API endpoint specifications.',
    ],
    tags: ['PHP / Yii2', 'MySQL', 'MobSF', 'OpenVPN', 'Swagger', 'OSINT', 'Docker'],
  },
  {
    period: '2025 (Feb – Dec)',
    role: 'Frontend & SaaS Architect',
    company: 'PT. Sarana Amal Indonesia (PT. SAI)',
    location: 'Bandung, Indonesia',
    type: 'Contract',
    description:
      'Developed white-label multi-tenant digital finance platform for social crowdfunding and charitable institutions across Indonesia.',
    keyAchievements: [
      'Architected modular Angular 12 component system supporting multi-brand theming and custom domains.',
      'Integrated Midtrans payment gateway and automated webhook reconciliation for bank transfers and QRIS.',
      'Implemented secure Google OAuth 2.0 authentication and state management with RxJS.',
    ],
    tags: ['Angular 12', 'Midtrans Gateway', 'Google OAuth', 'TypeScript', 'Multi-Tenant'],
  },
  {
    period: '2023 – 2024',
    role: 'Web & Mobile Systems Developer',
    company: 'CV. Kreasitech',
    location: 'Bandung, Indonesia',
    type: 'Full-time',
    description:
      'Engineered enterprise web platforms and native mobile applications across government, banking, and real-estate sectors.',
    keyAchievements: [
      'Delivered Bank BSI Operational Risk Management system adhering to Indonesian banking regulations.',
      'Developed the official IKN Nusantara government citizen services mobile app on Swift UI.',
      'Engineered Suquise Tower smart building platform including biometric device integration.',
    ],
    tags: ['PHP / Laravel', 'Swift UI', 'React Native', 'MySQL', 'Vue.js', 'Government APIs'],
  },
  {
    period: '2022',
    role: 'Full-Stack Developer',
    company: 'PT. Telkom Indonesia',
    location: 'Bandung, Indonesia',
    type: 'Internship / Project',
    description:
      'Developed low-code enterprise web solutions and data-intensive showcase applications for Indonesia\'s premier telecommunications enterprise.',
    keyAchievements: [
      'Architected virtual showcase analytics platform leveraging Node.js/Express and Vue.js.',
      'Configured and optimized relational data pipelines between PostgreSQL and Oracle DB systems.',
      'Collaborated directly with enterprise architects to establish CI/CD best practices.',
    ],
    tags: ['Node.js', 'Vue.js / Vuetify', 'PostgreSQL', 'Oracle DB', 'Enterprise CI/CD'],
  },
]

export const SKILLS: Skill[] = [
  // Backend Architecture
  { name: 'PHP (Laravel / Yii2)', level: 95, category: 'Backend Architecture', icon: 'server', featured: true },
  { name: 'Node.js / Express / NestJS', level: 90, category: 'Backend Architecture', icon: 'cpu', featured: true },
  { name: 'RESTful API & Swagger / OpenAPI', level: 94, category: 'Backend Architecture', icon: 'file-code', featured: true },
  { name: 'Microservices & Worker Queues', level: 86, category: 'Backend Architecture', icon: 'layers', featured: true },

  // Security & OSINT
  { name: 'OSINT Automation (Shodan / Whois)', level: 92, category: 'Security & OSINT', icon: 'shield', featured: true },
  { name: 'Mobile APK Security (MobSF)', level: 88, category: 'Security & OSINT', icon: 'smartphone', featured: true },
  { name: 'OpenVPN & Proxy Tunneling', level: 85, category: 'Security & OSINT', icon: 'lock', featured: true },
  { name: 'Data Breach Recon (DeHashed)', level: 89, category: 'Security & OSINT', icon: 'search', featured: false },

  // Databases & Cloud
  { name: 'MySQL & Query Optimization', level: 92, category: 'Databases & Cloud', icon: 'database', featured: true },
  { name: 'PostgreSQL & Oracle DB', level: 85, category: 'Databases & Cloud', icon: 'hard-drive', featured: true },
  { name: 'Docker & Containerization', level: 84, category: 'Databases & Cloud', icon: 'box', featured: true },
  { name: 'Linux Server & Nginx Tuning', level: 88, category: 'Databases & Cloud', icon: 'terminal', featured: true },

  // Frontend & Mobile
  { name: 'TypeScript & JavaScript', level: 90, category: 'Frontend & Mobile', icon: 'code', featured: true },
  { name: 'React / Next.js', level: 86, category: 'Frontend & Mobile', icon: 'layout', featured: true },
  { name: 'Swift UI (iOS Native)', level: 80, category: 'Frontend & Mobile', icon: 'apple', featured: true },
  { name: 'React Native & Flutter', level: 82, category: 'Frontend & Mobile', icon: 'smartphone', featured: false },
]

export const TERMINAL_COMMANDS: Record<string, string | { text: string; color?: string }[]> = {
  help: [
    { text: 'Available commands:', color: '#06b6d4' },
    { text: '  whoami          - View engineer identity and background' },
    { text: '  skills          - Inspect core technical stack & proficiencies' },
    { text: '  osint           - Inspect OSINT & security tool integrations' },
    { text: '  projects        - List notable production enterprise deployments' },
    { text: '  status          - Query real-time availability and WIB timezone' },
    { text: '  contact         - Get direct contact channels (email, telegram)' },
    { text: '  clear           - Clear terminal history' },
  ],
  whoami: [
    { text: 'NAME:        Naufal Mumtaz', color: '#10b981' },
    { text: 'ROLE:        Senior Backend & Systems Engineer' },
    { text: 'LOCATION:    Bandung, Indonesia (UTC+7)' },
    { text: 'EXPERIENCE:  5+ Years in High-Performance Backend & Fullstack' },
    { text: 'SPECIALTY:   OSINT Intelligence, Enterprise Architecture, API Design' },
  ],
  skills: [
    { text: 'CORE BACKEND:      PHP (Laravel, Yii2), Node.js (Express, NestJS), Python', color: '#8b5cf6' },
    { text: 'DATABASES:         MySQL, PostgreSQL, Oracle DB, Redis' },
    { text: 'SECURITY & OSINT:  Shodan, WhoisXML, DeHashed, MobSF, OpenVPN' },
    { text: 'DEVOPS & CLOUD:    Docker, Nginx, Linux Server Administration, CI/CD' },
    { text: 'MOBILE & CLIENT:   Swift UI (iOS), React / Next.js, React Native, TypeScript' },
  ],
  osint: [
    { text: '[+] Initializing threat intelligence recon sandbox...', color: '#06b6d4' },
    { text: '[+] Shodan API:      Connected (Host recon & banner parsing active)' },
    { text: '[+] WhoisXML API:    Connected (Domain registrant & DNS records)' },
    { text: '[+] DeHashed API:    Connected (Credential exposure verification)' },
    { text: '[+] MobSF Static:    Online (Automated APK security scan pipeline)' },
    { text: '[+] Proxy Routing:   OpenVPN tunnel active / IP disguised' },
    { text: '[✓] Status: All security pipelines operational with 40+ endpoints.', color: '#10b981' },
  ],
  projects: [
    { text: '1. Cyber Threat Intelligence Platform (PHP/Yii2, MobSF, OpenVPN, MySQL)', color: '#06b6d4' },
    { text: '2. IKN Nusantara Citizen Mobile App (Swift UI, iOS Native, Gov APIs)' },
    { text: '3. Bank BSI Risk Management Platform (PHP/Laravel, Vue.js, FinTech Compliance)' },
    { text: '4. PT. Telkom Indonesia Digicon Platform (PostgreSQL, Oracle DB, Node.js)' },
    { text: '5. Suquise Tower Management System (PHP/Yii2, React Native, Biometrics)' },
  ],
  status: [
    { text: 'SYSTEM STATUS:  ● OPERATIONAL (100% HEALTH)', color: '#10b981' },
    { text: 'AVAILABILITY:   Open to Senior Roles, Consulting & High-Impact Contracts' },
    { text: 'CURRENT TIME:   Bandung, Indonesia (WIB / UTC+7)' },
    { text: 'WORK FORMAT:    Remote / Hybrid / On-site' },
  ],
  contact: [
    { text: 'EMAIL:      naufalmumtaz27@gmail.com', color: '#06b6d4' },
    { text: 'GITHUB:     https://github.com/ervalmz27' },
    { text: 'LINKEDIN:   https://www.linkedin.com/in/naufal-mumtaz-537a4a1bb' },
    { text: 'TELEGRAM:   https://t.me/Slay90 (@Slay90)' },
  ],
}
