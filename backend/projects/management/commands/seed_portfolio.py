"""
Seed the database with portfolio data for Mohamed Ashish Roshan.
"""

from django.core.management.base import BaseCommand
from projects.models import Project, Skill, Experience, ProfileInfo
from datetime import date


class Command(BaseCommand):
    help = 'Seed database with portfolio data'

    def handle(self, *args, **options):
        self.stdout.write('Seeding portfolio data...')
        
        self._seed_profile()
        self._seed_skills()
        self._seed_projects()
        self._seed_experience()
        
        self.stdout.write(self.style.SUCCESS('Portfolio data seeded successfully!'))

    def _seed_profile(self):
        ProfileInfo.objects.all().delete()
        ProfileInfo.objects.create(
            name="Mohamed Ashish Roshan",
            title="Full-Stack Developer & Security Engineer",
            tagline="I build enterprise-grade security platforms, full-stack applications, and AI-powered systems that solve real-world problems.",
            bio="Passionate software engineer specializing in cybersecurity platforms, DevSecOps intelligence, and full-stack web applications. "
                "I thrive on building production-ready systems with complex architectures — from AI-powered firewalls with 26 security modules "
                "to real-time monitoring dashboards and SaaS platforms. My work combines modern frontend (React) with robust backends "
                "(Django, FastAPI) and intelligent security automation.",
            email="ashishroshan@example.com",
            location="India",
            github_url="https://github.com/ashishroshan",
            linkedin_url="https://linkedin.com/in/ashishroshan",
            years_experience=2,
            projects_completed=4,
            technologies_used=25,
        )
        self.stdout.write('  [OK] Profile info created')

    def _seed_skills(self):
        Skill.objects.all().delete()
        skills = [
            # Languages
            {'name': 'Python', 'category': 'language', 'proficiency': 95, 'icon': 'Code2', 'color': '#3776ab', 'order': 1},
            {'name': 'JavaScript', 'category': 'language', 'proficiency': 90, 'icon': 'Braces', 'color': '#f7df1e', 'order': 2},
            {'name': 'TypeScript', 'category': 'language', 'proficiency': 75, 'icon': 'FileCode', 'color': '#3178c6', 'order': 3},
            {'name': 'HTML/CSS', 'category': 'language', 'proficiency': 90, 'icon': 'Globe', 'color': '#e34f26', 'order': 4},
            {'name': 'SQL', 'category': 'language', 'proficiency': 85, 'icon': 'Database', 'color': '#336791', 'order': 5},
            # Frameworks
            {'name': 'Django', 'category': 'framework', 'proficiency': 92, 'icon': 'Server', 'color': '#092e20', 'order': 1},
            {'name': 'FastAPI', 'category': 'framework', 'proficiency': 88, 'icon': 'Zap', 'color': '#009688', 'order': 2},
            {'name': 'React', 'category': 'framework', 'proficiency': 90, 'icon': 'Atom', 'color': '#61dafb', 'order': 3},
            {'name': 'Django REST Framework', 'category': 'framework', 'proficiency': 90, 'icon': 'Layers', 'color': '#a30000', 'order': 4},
            {'name': 'Electron', 'category': 'framework', 'proficiency': 70, 'icon': 'Monitor', 'color': '#47848f', 'order': 5},
            {'name': 'Vite', 'category': 'framework', 'proficiency': 85, 'icon': 'Flame', 'color': '#646cff', 'order': 6},
            # Databases
            {'name': 'PostgreSQL', 'category': 'database', 'proficiency': 85, 'icon': 'Database', 'color': '#336791', 'order': 1},
            {'name': 'MongoDB', 'category': 'database', 'proficiency': 80, 'icon': 'Leaf', 'color': '#47a248', 'order': 2},
            {'name': 'SQLite', 'category': 'database', 'proficiency': 85, 'icon': 'HardDrive', 'color': '#003b57', 'order': 3},
            {'name': 'Redis', 'category': 'database', 'proficiency': 70, 'icon': 'Cpu', 'color': '#dc382d', 'order': 4},
            # DevOps
            {'name': 'Docker', 'category': 'devops', 'proficiency': 80, 'icon': 'Container', 'color': '#2496ed', 'order': 1},
            {'name': 'Git', 'category': 'devops', 'proficiency': 90, 'icon': 'GitBranch', 'color': '#f1502f', 'order': 2},
            {'name': 'CI/CD', 'category': 'devops', 'proficiency': 75, 'icon': 'RefreshCcw', 'color': '#fc6d26', 'order': 3},
            # Security
            {'name': 'OWASP Top 10', 'category': 'security', 'proficiency': 90, 'icon': 'Shield', 'color': '#e11d48', 'order': 1},
            {'name': 'Network Security', 'category': 'security', 'proficiency': 85, 'icon': 'Wifi', 'color': '#7c3aed', 'order': 2},
            {'name': 'Penetration Testing', 'category': 'security', 'proficiency': 80, 'icon': 'Bug', 'color': '#dc2626', 'order': 3},
            {'name': 'DevSecOps', 'category': 'security', 'proficiency': 85, 'icon': 'Lock', 'color': '#0ea5e9', 'order': 4},
            # Tools
            {'name': 'Stripe API', 'category': 'tool', 'proficiency': 80, 'icon': 'CreditCard', 'color': '#635bff', 'order': 1},
            {'name': 'WebSockets', 'category': 'tool', 'proficiency': 78, 'icon': 'Radio', 'color': '#10b981', 'order': 2},
            {'name': 'Framer Motion', 'category': 'tool', 'proficiency': 82, 'icon': 'Sparkles', 'color': '#bb4eff', 'order': 3},
        ]
        for s in skills:
            Skill.objects.create(**s)
        self.stdout.write(f'  [OK] {len(skills)} skills created')

    def _seed_projects(self):
        Project.objects.all().delete()
        projects = [
            {
                'title': 'SentinelX AURAPRIME',
                'subtitle': 'AI-Driven DevSecOps Intelligence Platform',
                'slug': 'sentinelx-auraprime',
                'description': (
                    'SentinelX AURAPRIME is an enterprise-grade AI-driven DevSecOps intelligence platform featuring '
                    '26 fully integrated security modules and 55 API endpoints. The platform provides comprehensive '
                    'security coverage from code generation to deployment, including AI-powered penetration testing '
                    '(Strix Engine), autonomous vulnerability remediation (Auto-Healing), behavioral forensics with '
                    'code stylometry, post-quantum cryptography readiness scanning, neural WAF with real pattern matching, '
                    'dark web intelligence monitoring, and a full SOAR engine for automated incident response.\n\n'
                    'The architecture uses a triple AI fallback system (Claude API → Ollama → Simulation) ensuring '
                    'the platform operates under any conditions. Key features include a Global Threat Intelligence (GTI) '
                    'scoring engine, blast radius analysis with financial impact modeling, active deception with '
                    'honeytokens, and compliance mapping across SOC2, ISO 27001, PCI-DSS, HIPAA, GDPR, and NIST frameworks.'
                ),
                'short_description': 'Enterprise AI-driven DevSecOps platform with 26 security modules, '
                    'autonomous pentesting, neural WAF, and post-quantum cryptography readiness.',
                'category': 'cybersecurity',
                'status': 'completed',
                'tech_stack': ['FastAPI', 'React', 'SQLite', 'Claude API', 'Tailwind CSS', 'Framer Motion', 'Recharts'],
                'features': [
                    '26 Integrated Security Modules',
                    '55 REST API Endpoints',
                    'AI-Powered Penetration Testing (Strix Engine)',
                    'Neural WAF with Real Pattern Matching',
                    'Post-Quantum Cryptography Scanner',
                    'Autonomous Vulnerability Auto-Healing',
                    'Behavioral Forensics & Code Stylometry',
                    'Dark Web Intelligence Monitoring',
                    'SOAR Automated Incident Response',
                    'Blast Radius Analysis with Financial Impact',
                    'Active Deception with Honeytokens',
                    'Multi-Framework Compliance (SOC2, ISO, PCI-DSS, HIPAA)',
                    'Triple AI Fallback (Claude → Ollama → Simulation)',
                    'Global Threat Intelligence (GTI) Scoring',
                    'Command Palette (Ctrl+K) Navigation',
                ],
                'architecture': 'Modular monolith with FastAPI backend, React frontend with Framer Motion animations, '
                    'SQLite database with async ORM (SQLAlchemy + aiosqlite), JWT authentication, and triple LLM fallback.',
                'modules_count': 26,
                'api_endpoints': 55,
                'is_featured': True,
                'order': 1,
                'created_date': date(2025, 6, 1),
                'gradient_from': '#06b6d4',
                'gradient_to': '#8b5cf6',
            },
            {
                'title': 'TrafficGuard Firewall',
                'subtitle': 'AI-Powered Enterprise Application Firewall',
                'slug': 'trafficguard-firewall',
                'description': (
                    'TrafficGuard is a production-inspired enterprise application firewall with comprehensive '
                    'traffic monitoring and security enforcement. Features a dynamic rule engine with 7 rule types '
                    '(IP/CIDR, Path, Header, Payload Regex, Rate Limit, Time-based, User-Agent) and 4 action types '
                    '(Allow, Block, Throttle, Shadow Log).\n\n'
                    'The system includes behavioral anomaly detection for traffic spikes, brute-force attempts, and '
                    'endpoint abuse patterns. Full incident management lifecycle (Detected → Investigating → Mitigated → Closed) '
                    'with SLA tracking, analyst notes, and auto-escalation. Centralized logging with immutable audit '
                    'trails and IP reputation scoring system. Built with production patterns including fail-safe modes '
                    '(fail-open/fail-close), Redis-cached rule evaluation, and RBAC with 3 role tiers.'
                ),
                'short_description': 'Enterprise application firewall with dynamic rule engine, behavioral anomaly detection, '
                    'incident management, and centralized audit logging.',
                'category': 'cybersecurity',
                'status': 'completed',
                'tech_stack': ['Django', 'Django REST Framework', 'React', 'PostgreSQL', 'Tailwind CSS', 'Recharts', 'Redis'],
                'features': [
                    '7-Type Dynamic Rule Engine (IP, Path, Header, Regex, Rate, Time, UA)',
                    'Behavioral Anomaly Detection',
                    'Full Incident Management Lifecycle',
                    'IP Reputation Scoring System',
                    'Centralized Immutable Audit Logging',
                    'Rate Limiting with Sliding Window',
                    'SLA Tracking & Auto-Escalation',
                    'RBAC with 3 Role Tiers',
                    'Fail-Safe Mode (Fail-Open / Fail-Close)',
                    'Redis-Cached Rule Evaluation',
                    'Security Dashboard with Real-time Metrics',
                    'SOC Analyst Workflow Support',
                ],
                'architecture': 'Django middleware-based request inspection pipeline with priority-based rule engine, '
                    'decision processor, anomaly detector, and centralized logging.',
                'modules_count': 9,
                'api_endpoints': 25,
                'is_featured': True,
                'order': 2,
                'created_date': date(2025, 3, 1),
                'gradient_from': '#ef4444',
                'gradient_to': '#f97316',
            },
            {
                'title': 'SysMonitor Pro',
                'subtitle': 'AI-Powered System Monitoring Desktop Application',
                'slug': 'sysmonitor-pro',
                'description': (
                    'SysMonitor Pro is an enterprise-grade system monitoring platform providing real-time observability, '
                    'AI-powered anomaly detection, and intelligent incident management. Available as both a web application '
                    'and native desktop application (Windows/macOS/Linux) via Electron.\n\n'
                    'Features include real-time WebSocket-based dashboards, automated health checks with response time '
                    'tracking, AI anomaly detection using Z-Score statistical analysis, predictive MTTR with ML estimates, '
                    '5-Whys root cause analysis framework, SOC2-ready audit logging, and multi-format report export. '
                    'The desktop version includes system tray monitoring, keyboard shortcuts, and native notifications.'
                ),
                'short_description': 'Enterprise system monitoring with AI anomaly detection, predictive MTTR, '
                    'real-time WebSocket dashboards, and cross-platform desktop app.',
                'category': 'devops',
                'status': 'completed',
                'tech_stack': ['Django', 'Django REST Framework', 'React', 'Electron', 'PostgreSQL', 'WebSockets', 'Celery'],
                'features': [
                    'Real-time WebSocket Dashboards',
                    'AI Anomaly Detection (Z-Score Analysis)',
                    'Predictive MTTR Estimates',
                    'Automated Health Checks',
                    '5-Whys Root Cause Analysis',
                    'SOC2-Ready Audit Logging',
                    'Cross-Platform Desktop App (Electron)',
                    'System Tray Background Monitoring',
                    'PDF/CSV/Email Report Export',
                    'Glassmorphism Dark Mode UI',
                    'Keyboard Shortcuts',
                    'Network Endpoint Monitoring',
                ],
                'architecture': 'Django REST backend with WebSocket support, React frontend with Electron wrapper, '
                    'Celery for async tasks, CRACO build configuration.',
                'modules_count': 13,
                'api_endpoints': 30,
                'is_featured': True,
                'order': 3,
                'created_date': date(2025, 1, 1),
                'gradient_from': '#10b981',
                'gradient_to': '#06b6d4',
            },
            {
                'title': 'Railway Snack Ops',
                'subtitle': 'Command Center for Railway Platform Snack Management',
                'slug': 'railway-snack-ops',
                'description': (
                    'Railway Snack Ops is a full-stack railway platform snack shop management system with '
                    'real-time analytics, integrated online payments, order lifecycle tracking, and inventory management.\n\n'
                    'The platform features a Point of Sale system with product grid and cart, Stripe Checkout integration '
                    'supporting UPI and card payments, real-time revenue and inventory analytics with hourly heatmaps, '
                    'QR code generation for platform kiosks, automated low-stock alerts, staff activity logging, '
                    'and role-based access control for owners, managers, and staff.'
                ),
                'short_description': 'Full-stack snack shop management with POS, Stripe payments, real-time analytics, '
                    'QR menu system, and role-based access control.',
                'category': 'fullstack',
                'status': 'completed',
                'tech_stack': ['FastAPI', 'React (Vite)', 'MongoDB', 'Stripe', 'Recharts', 'Lucide Icons'],
                'features': [
                    'Real-time Revenue & Order Analytics',
                    'Point of Sale with Product Grid',
                    'Stripe Checkout (UPI + Card)',
                    'Inventory Management with Low-Stock Alerts',
                    'Full Order Lifecycle Tracking',
                    'Hourly Analytics Heatmap',
                    'QR Code Menu Generation',
                    'Automated Notification System',
                    'Staff Activity Logging',
                    'Role-Based Access (Owner/Manager/Staff)',
                ],
                'architecture': 'FastAPI async backend with Motor (async MongoDB driver), React Vite frontend, '
                    'Stripe API for payment processing, JWT authentication.',
                'modules_count': 10,
                'api_endpoints': 20,
                'is_featured': True,
                'order': 4,
                'created_date': date(2025, 8, 1),
                'gradient_from': '#f59e0b',
                'gradient_to': '#ef4444',
            },
        ]
        for p in projects:
            Project.objects.create(**p)
        self.stdout.write(f'  [OK] {len(projects)} projects created')

    def _seed_experience(self):
        Experience.objects.all().delete()
        experiences = [
            {
                'type': 'project',
                'title': 'SentinelX AURAPRIME Development',
                'organization': 'Personal / Academic',
                'start_date': date(2025, 3, 1),
                'end_date': date(2025, 9, 1),
                'description': 'Designed and built a 26-module AI-driven DevSecOps intelligence platform.',
                'highlights': [
                    'Architected modular monolith with FastAPI',
                    'Implemented triple AI fallback system',
                    'Built neural WAF with real pattern matching',
                    'Published IEEE-format research paper',
                ],
            },
            {
                'type': 'project',
                'title': 'TrafficGuard Firewall Development',
                'organization': 'Personal / Academic',
                'start_date': date(2025, 1, 1),
                'end_date': date(2025, 4, 1),
                'description': 'Built enterprise-grade application firewall with Django.',
                'highlights': [
                    'Implemented priority-based rule engine',
                    'Built behavioral anomaly detection',
                    'Production deployment in college server room',
                    'Full incident management lifecycle',
                ],
            },
            {
                'type': 'education',
                'title': 'B.Tech Computer Science',
                'organization': 'University',
                'location': 'India',
                'start_date': date(2022, 8, 1),
                'is_current': True,
                'description': 'Pursuing Bachelor of Technology in Computer Science & Engineering.',
                'highlights': [
                    'Focus on cybersecurity and AI',
                    'Led multiple full-stack projects',
                    'Research in DevSecOps',
                ],
            },
        ]
        for e in experiences:
            Experience.objects.create(**e)
        self.stdout.write(f'  [OK] {len(experiences)} experiences created')
