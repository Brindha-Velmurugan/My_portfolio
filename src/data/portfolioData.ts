import { ContactInfo, EducationItem, InternshipItem, ProjectItem, CertificationItem, SkillCategory, PreferredInterest } from '../types';

import profileAvatar from '../assets/images/brindha_real_portrait_1787575589488.jpg';
import projectFarmer from '../assets/images/project_farmer_market_1786365857700.jpg';
import projectCitizen from '../assets/images/project_citizen_connect_1786365874776.jpg';

export const deployedPortfolioUrl = 'https://ais-pre-kengpwstwti4tgyzxojkyl-827837213166.asia-southeast1.run.app';

export const contactInfo: ContactInfo = {
  name: 'Brindha V',
  phone: '9342916991',
  email: 'brindhav1312@gmail.com',
  github: 'https://github.com/Brindha-Velmurugan',
  linkedin: 'https://www.linkedin.com/in/v-brindha-2132232ba',
  location: 'Trichy, Tamil Nadu, India',
  portfolioUrl: deployedPortfolioUrl,
};

export const profileAvatarUrl = profileAvatar;

export const educationList: EducationItem[] = [
  {
    degree: 'Masters of Computer Applications (MCA)',
    institution: 'Holy Cross College (Autonomous), Trichy',
    score: 'CGPA: 8.83',
    period: '2025 - 2027',
    highlight: 'Postgraduate Scholar with High Academic Performance'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Holy Cross College (Autonomous), Trichy',
    score: 'CGPA: 8.56',
    period: '2022 - 2025',
    highlight: 'Graduated with Distinction in Computer Applications'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Dhava Amudham Matric Higher Secondary School, Cuddalore',
    score: 'Percentage: 90.5%',
    period: '2021 - 2022',
    highlight: 'Academic Distinction in Higher Secondary'
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Dhava Amudham Matric Higher Secondary School, Cuddalore',
    score: 'Percentage: 89%',
    period: '2019 - 2020',
    highlight: 'First Class High School Scholar'
  }
];

export const internshipList: InternshipItem[] = [
  {
    company: 'eSoft IT Solutions',
    domain: 'Database & Dynamic Web Applications',
    role: 'Web Development Intern',
    skillsAcquired: ['Backend Logic Building', 'Relational Database Queries', 'CRUD Operations', 'Session Management'],
    description: 'Assisted in building dynamic web modules, designing relational schemas, and developing secure user database authentication flows.'
  },
  {
    company: 'IAFC, Trichy',
    domain: 'Enterprise Software & Core Logic',
    role: 'Software Development Intern',
    skillsAcquired: ['Object-Oriented Programming', 'Core Application Logic', 'Data Structures', 'Modular Architecture'],
    description: 'Focused on core object-oriented software patterns, exception handling, data collections, and building re-usable application modules.'
  },
  {
    company: 'HCC IICT, Trichy',
    domain: 'Full Stack Development',
    role: 'Full Stack Intern',
    skillsAcquired: ['Responsive UI Layouts', 'RESTful Endpoints', 'Client-Server Synchronization', 'Component Integration'],
    description: 'Worked on end-to-end full stack web architecture, creating responsive frontend user views and establishing clean backend endpoints.'
  },
  {
    company: 'T4TEQ Software Solutions',
    domain: 'Data Visualization & Business Intelligence',
    role: 'Business Intelligence Intern',
    skillsAcquired: ['Interactive Dashboards', 'Data Transformation', 'KPI Metric Tracking', 'Visual Analytics'],
    description: 'Transformed structured datasets into visual dashboards, generating insightful business reports and key performance indicators.'
  },
  {
    company: 'HCC IICT, Trichy',
    domain: 'Sensor Technology & Embedded Logic',
    role: 'Embedded Systems Intern',
    skillsAcquired: ['Hardware Interface Logic', 'Real-time Signal Analysis', 'IoT Data Telemetry', 'Sensor Integration'],
    description: 'Gained hands-on exposure to sensor telemetry, real-time signal logging, and interfacing physical sensory hardware with software interfaces.'
  },
  {
    company: 'T4TEQ Software Solutions',
    domain: 'Data Analytics & Predictive Insights',
    role: 'Data Analytics Intern',
    skillsAcquired: ['Data Cleaning & Prep', 'Statistical Trends', 'Exploratory Analytics', 'Report Synthesis'],
    description: 'Performed structured exploratory data analysis, data cleansing, trend mapping, and multi-factor analytical reporting.'
  }
];

export const projectList: ProjectItem[] = [
  {
    id: 'farmer-market',
    title: 'Direct Market Access for Farmers',
    role: 'Full-Stack Developer',
    summary: 'A direct digital marketplace enabling agricultural producers to list harvested crops directly to consumers, cutting out intermediaries to guarantee fair market value.',
    description: 'This platform empowers local agricultural producers by establishing a direct digital bridge between farm harvests and retail consumers. By eliminating traditional supply chain intermediaries, farmers gain higher profit margins while buyers receive fresh, verified farm produce at fair prices. The system includes product cataloging, buyer-seller direct messaging, transparent pricing charts, and real-time order placement.',
    image: projectFarmer,
    keyFeatures: [
      'Direct Producer-to-Consumer Marketplace catalog',
      'Transparent crop pricing and market value insights',
      'Direct order inquiry and buyer communication system',
      'Location-based farm fresh inventory search',
      'Streamlined digital transaction & order status tracking'
    ],
    impact: 'Increases farmer revenue by eliminating middleman markups while providing consumers with access to fresh, traceable agricultural products.',
    userType: 'Agricultural Producers & Retail Buyers'
  },
  {
    id: 'citizen-connect',
    title: 'CitizenConnect - Civic Issue Resolution Portal',
    role: 'Lead Developer',
    summary: 'A civic engagement platform enabling citizens to report local municipal issues like water supply, power outages, and road repairs with real-time tracking.',
    description: 'CitizenConnect bridges the communication gap between urban residents and local municipal administration. Citizens can easily lodge location-tagged complaints regarding infrastructure breakdowns, water scarcity, street lighting, or sanitation. Municipal authorities can categorize, prioritize, assign, and update resolution progress with transparent status badges accessible to the community.',
    image: projectCitizen,
    keyFeatures: [
      'Instant civic complaint submission with location tagging',
      'Categorized issue tracking (Water, Power, Roads, Sanitation)',
      'Real-time resolution status timeline & status updates',
      'Community priority voting & duplicate issue merging',
      'Admin dashboard for department assignment and analytics'
    ],
    impact: 'Enhances municipal transparency, accelerates issue resolution turnarounds, and fosters active civic participation in local governance.',
    userType: 'Local Citizens & Municipal Authorities'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    type: 'languages',
    skills: [
      { name: 'Java', level: 90, iconName: 'Code' },
      { name: 'HTML & CSS', level: 92, iconName: 'Layout' },
      { name: 'PHP', level: 85, iconName: 'Server' },
      { name: 'C Language', level: 80, iconName: 'Cpu' }
    ]
  },
  {
    title: 'Core Domains',
    type: 'domain',
    skills: [
      { name: 'Web Development', level: 95, iconName: 'Globe' },
      { name: 'Full Stack Development', level: 90, iconName: 'Layers' },
      { name: 'Data Analytics', level: 85, iconName: 'BarChart3' },
      { name: 'UI/UX Design Concepting', level: 88, iconName: 'Palette' }
    ]
  },
  {
    title: 'Software & Tools',
    type: 'tools',
    skills: [
      { name: 'VS Code', level: 95, iconName: 'Terminal' },
      { name: 'Power BI', level: 88, iconName: 'PieChart' },
      { name: 'Figma', level: 85, iconName: 'Figma' },
      { name: 'Microsoft Excel', level: 90, iconName: 'Table' },
      { name: 'Microsoft PowerPoint', level: 92, iconName: 'Presentation' },
      { name: 'Microsoft Word', level: 95, iconName: 'FileText' }
    ]
  }
];

export const workshopsList = [
  {
    title: '2-Day National Workshop on "MERN Stack Development"',
    organizer: 'PG Department of Computer Applications, Jamal Mohamed College & Holy Cross College (Autonomous), Trichy',
    focus: 'Hands-on full stack architecture, Express services, MongoDB integration, and React component design.'
  }
];

export const certificationsList: CertificationItem[] = [
  {
    title: 'Full Stack Development Certification',
    issuer: 'Novi-Tech R&D Private Limited',
    category: 'Certification',
    badge: 'Professional Certification'
  },
  {
    title: 'Soft Skill and Development',
    issuer: 'NPTEL (Swayam)',
    category: 'NPTEL',
    badge: 'National Honor'
  },
  {
    title: 'Developing Soft Skills and Personality',
    issuer: 'NPTEL (Swayam)',
    category: 'NPTEL',
    badge: 'National Honor'
  },
  {
    title: 'Typewriting (English Junior)',
    issuer: 'Department of Technical Education',
    category: 'Certification',
    badge: 'First Class with Distinction'
  },
  {
    title: 'Basics of Python',
    issuer: 'UniAthena',
    category: 'Course',
    badge: 'Verified Skill'
  },
  {
    title: 'Digital Skills: Web Analytics',
    issuer: 'Accenture',
    category: 'Course',
    badge: 'Industry Credential'
  },
  {
    title: 'Next Gen AI: Innovations and Impacts for Shaping the Future',
    issuer: 'PG Dept. of Computer Applications, Holy Cross College',
    category: 'Summit',
    badge: 'National Event'
  },
  {
    title: 'International Digital Innovation Summit: Environmental Tech & Computing Solutions',
    issuer: 'PG Dept. of Computer Applications, Holy Cross College',
    category: 'Summit',
    badge: 'International Summit'
  },
  {
    title: 'Futuristic Trends in Computational Sciences',
    issuer: 'PG Dept. of Computer Applications, Holy Cross College',
    category: 'Summit',
    badge: 'Academic Symposium'
  },
  {
    title: 'National Cyber Security Conclave',
    issuer: 'PG Dept. of Computer Applications, Holy Cross College',
    category: 'Summit',
    badge: 'National Conclave'
  },
  {
    title: 'Research Areas in Data Analytics and Security',
    issuer: 'PG Dept. of Computer Applications, Holy Cross College',
    category: 'Summit',
    badge: 'Research Forum'
  }
];

export const preferredInterestsList: PreferredInterest[] = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Crafting Intuitive, Aesthetic & Human-Centered Digital Interfaces',
    iconName: 'Palette',
    description: 'Passionate about translating user needs and software requirements into clean, accessible, and engaging digital experiences. Focused on wireframing, interactive prototyping, color harmony, typography hierarchy, and scalable design systems.',
    keyHighlights: [
      'User Research, Persona Mapping & Journey Flows',
      'High-Fidelity Interactive Prototypes in Figma',
      'Design System Architecture & Component Reusability',
      'Accessibility (WCAG AA), Usability & Micro-Interactions'
    ],
    toolsAndMethods: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'Tailwind CSS', 'User Research'],
    gradient: 'from-violet-600 via-indigo-600 to-blue-600'
  },
  {
    id: 'frontend-web-dev',
    title: 'Frontend Web Development',
    tagline: 'Building High-Performance, Responsive & Interactive Web Interfaces',
    iconName: 'Code',
    description: 'Dedicated to turning designs into pixel-perfect, lightning-fast web applications. Specializing in modern JavaScript/TypeScript, React ecosystems, responsive fluid styling, and seamless state management.',
    keyHighlights: [
      'Modern React (Hooks, Context, Modular Components)',
      'Responsive, Mobile-First Web Architecture',
      'Cross-Browser Compatibility & Performance Optimization',
      'Dynamic State Handling & Motion Transitions'
    ],
    toolsAndMethods: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Vite', 'REST API Integration'],
    gradient: 'from-blue-600 via-indigo-600 to-teal-600'
  },
  {
    id: 'fullstack-web-dev',
    title: 'Full-Stack Web Development',
    tagline: 'Architecting End-to-End Scalable Solutions from Frontend to Database',
    iconName: 'Layers',
    description: 'Bridging client-side interactivity with reliable server-side backends and relational/NoSQL databases. Experienced in building full-stack workflows like Citizen Connect and Farmer Consumer Market.',
    keyHighlights: [
      'Client-Server Architecture & RESTful API Design',
      'Database Modeling, CRUD Operations & Security',
      'End-to-End Workflow Implementation & Deployment',
      'Integration of Authentication & Cloud Services'
    ],
    toolsAndMethods: ['React', 'Node.js', 'Express', 'SQL / MySQL', 'MongoDB', 'REST APIs'],
    gradient: 'from-indigo-600 via-violet-600 to-teal-600'
  },
  {
    id: 'data-analytics-visualization',
    title: 'Data Analytics & Visualization',
    tagline: 'Transforming Raw Data into Actionable Insights & Compelling Dashboards',
    iconName: 'BarChart3',
    description: 'Enthusiastic about discovering trends, patterns, and valuable business metrics through statistical analysis, structured querying, and intuitive visual storytelling using interactive dashboards.',
    keyHighlights: [
      'Interactive Dashboard Design with Power BI & Excel',
      'SQL Querying, Data Cleaning & Aggregation',
      'Visual Storytelling with Charts & Key Metric Tracking',
      'Descriptive & Diagnostic Data Analysis'
    ],
    toolsAndMethods: ['Power BI', 'Advanced Excel', 'SQL', 'Data Cleaning', 'Data Modeling', 'Charts & Reporting'],
    gradient: 'from-teal-600 via-blue-600 to-indigo-600'
  }
];
