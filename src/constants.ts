import React from 'react';
import type { Experience, Project, Certification, Skill } from './types';
import { CertificationStatus } from './types';
import { 
    CppIcon, JavaIcon, LuaIcon, PythonIcon, JavaScriptIcon, HtmlIcon, CssIcon, AwsIcon, 
    JiraIcon, ViteIcon, DockerIcon, SpringBootIcon, ReactIcon, TailwindIcon, 
    BootstrapIcon, IntellijIcon, VsCodeIcon, GitIcon, DocumentIcon, ShieldIcon, ScanIcon,
    LockIcon, NetworkIcon, CodeIcon
} from './components/SkillIcons';

export const EXPERIENCES: Experience[] = [
  {
    company: 'DoD Naval Undersea Warfare Center Keyport',
    role: 'Information System Security Engineer',
    duration: '2022 - Present',
    location: 'Keyport, WA',
    responsibilities: [
      'Applied NAO and FAO RMF across a wide range of systems, successfully receiving ATO letters.',
      'Monitored and cataloged POA&M items using risk management frameworks to ensure compliance.',
      'Generated and implemented DISA STIG and ACAS scans to assess Common Vulnerabilities and Exposures (CVEs).',
      'Created and maintained system documents and policies (SOP, SAP, etc.) ensuring compliance with NIST 800-53 controls.',
      'Led cross-functional teamwork between multiple IT departments to achieve project milestones.'
    ],
    technologies: ['NIST RMF', 'DISA STIGs', 'ACAS Scans', 'Cyber Security', 'Documentation'],
  },
  {
    company: 'Amazon',
    role: 'Fulfillment Associate',
    duration: '2021 - 2022',
    location: 'Kent-SeaTac, WA',
    responsibilities: [
      'Updated warehouse database after receiving shipment orders, ensuring accurate inventory tracking.',
      'Followed specific protocols from storing to handling errors, maintaining safety and efficiency.',
      'Handled a wide range of warehouse equipment for locating and moving packages.',
      'Adapted to various settings, ensuring seamless workflow and productivity.'
    ],
    technologies: ['Inventory Management', 'Database Updates', 'Operational Efficiency', 'Safety Protocols'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Stig Manager Website',
    duration: 'Spring 2024',
    description: [
      'Developed and deployed a dynamic web application using Spring Boot for backend services and RESTful APIs.',
      'Designed and implemented a responsive front-end using Bootstrap and JSP for dynamic content rendering.',
      'Managed data persistence with JPA and SQL for efficient database operations and queries.',
      'Integrated Spring Security for authentication and authorization, ensuring secure access control.',
      'Containerized the application using Docker for streamlined deployment and scalability on an Apache Tomcat server.'
    ],
    details: [
        "Architected a full-stack web application from the ground up to streamline the management of Security Technical Implementation Guides (STIGs).",
        "The backend, built with Spring Boot, exposes a comprehensive RESTful API for CRUD operations on STIG data, system configurations, and user roles.",
        "A server-side rendered front-end was created using JSP and Bootstrap, providing a dynamic and responsive user interface that works across various devices.",
        "Leveraged Spring Data JPA and a PostgreSQL database to manage data persistence, ensuring data integrity and efficient querying.",
        "Implemented role-based access control (RBAC) using Spring Security, safeguarding sensitive system data from unauthorized access.",
        "The entire application was containerized with Docker, simplifying the deployment process and ensuring consistency across different environments on an Apache Tomcat server."
    ],
    technologies: ['Spring Boot', 'Java', 'RESTful API', 'Bootstrap', 'JSP', 'JPA', 'SQL', 'Spring Security', 'Docker'],
    link: 'https://github.com/Baosome/stig-manager-website',
  },
  {
    title: 'RSA Public-Key Encryption and Signature',
    duration: 'Fall 2022',
    description: [
      'Implemented custom TLS client and server applications using Python, gaining deep understanding of cryptographic protocols at the packet level.',
      'Developed a Man-in-the-Middle (MITM) HTTPS proxy that demonstrated vulnerabilities in PKI infrastructure, showcasing ability to work with low-level network protocols.',
      'Analyzed network traffic using Wireshark to understand TCP/IP fundamentals, TLS handshake processes, and security implications.',
      'Gained practical experience with Public Key Infrastructure (PKI), certificate verification, and cryptographic security practices.',
      'Engineered a multi-threaded proxy server capable of handling concurrent connections, demonstrating scalability considerations.'
    ],
    details: [
      'Implemented custom TLS client and server applications using Python, gaining deep understanding of cryptographic protocols at the packet level.',
      'Developed a Man-in-the-Middle (MITM) HTTPS proxy that demonstrated vulnerabilities in PKI infrastructure, showcasing ability to work with low-level network protocols.',
      'Analyzed network traffic using Wireshark to understand TCP/IP fundamentals, TLS handshake processes, and security implications.',
      'Gained practical experience with Public Key Infrastructure (PKI), certificate verification, and cryptographic security practices.',
      'Engineered a multi-threaded proxy server capable of handling concurrent connections, demonstrating scalability considerations.'
    ],
    technologies: ['Python', 'TLS', 'MITM Proxy', 'Wireshark', 'TCP/IP', 'PKI', 'Multi-threading'],
    link: 'https://github.com/Baosome/RSA',
  },
  {
    title: 'Robo Run',
    duration: 'Summer 2024',
    description: [
        'Developed a 3D action game in Unreal Engine 5 using C++ for core gameplay mechanics.',
        "Implemented Unreal's Gameplay Ability System (GAS) for modular and scalable character abilities.",
        'Utilized the new Procedural Content Generation (PCG) framework to create dynamic and replayable levels.',
        'Designed and scripted character controls, enemy AI, and game state management.'
    ],
    details: [
        "Engineered a fast-paced action game, 'Robo Run', leveraging the power of Unreal Engine 5.",
        "Wrote core gameplay mechanics and character controls in C++ for optimal performance and control.",
        "Integrated the Gameplay Ability System (GAS) to build a flexible system for player skills, power-ups, and status effects.",
        "Leveraged Unreal's new Procedural Content Generation (PCG) framework to automatically generate diverse environments, enhancing replayability.",
        "Focused on creating a polished player experience through responsive controls and clear visual feedback."
    ],
    technologies: ['Unreal Engine 5', 'C++', 'Gameplay Ability System', 'PCG', 'Game Development'],
  },
  {
    title: 'BookReader - Book Rating Website',
    duration: 'Spring 2023',
    description: [
        'A full-stack web application for users to rate and comment on books.',
        'Backend built with Spring Boot, handling RESTful API requests and business logic.',
        'Frontend rendered server-side using Thymeleaf and styled with Bootstrap for responsiveness.',
        'Utilized MySQL for the database to store user, book, and rating information.'
    ],
    details: [
        "Developed 'BookReader', a community-driven website for discovering and rating books.",
        "The backend is powered by Spring Boot, providing robust APIs for managing user accounts, book data, ratings, and comments.",
        "A dynamic, server-side rendered frontend was built using Thymeleaf, allowing for seamless integration with the Spring backend.",
        "Styled with Bootstrap to ensure a responsive and mobile-first user experience.",
        "Managed data persistence with Spring Data JPA and a MySQL database to ensure data integrity."
    ],
    technologies: ['Spring Boot', 'Java', 'Thymeleaf', 'MySQL', 'Bootstrap', 'JPA', 'SQL'],
  },
  {
    title: 'Baodle - Wordle Clone',
    duration: 'Winter 2022',
    description: [
        'Created a desktop version of the popular word-guessing game Wordle.',
        'Developed entirely in Java, utilizing the Swing toolkit for the graphical user interface (GUI).',
        'Implemented all game logic, including word validation, guess checking, and UI feedback.',
        'Packaged as a standalone executable application for easy distribution and play.'
    ],
    details: [
        "Recreated the viral word puzzle game 'Wordle' as a standalone desktop application named 'Baodle'.",
        "The application was built from scratch using Java, with Java Swing for all graphical components, including the grid, keyboard, and notifications.",
        "Designed and implemented the core game logic, which manages a secret word from a dictionary, processes user guesses, and provides real-time visual feedback.",
        "Included features like a valid word dictionary check and end-of-game statistics."
    ],
    technologies: ['Java', 'Java Swing', 'GUI', 'Desktop App'],
  },
  {
    title: 'League of Legends Champion Data Viewer',
    duration: 'Fall 2023',
    description: [
        'Built a web application to display League of Legends champion data from the Riot Games API.',
        'Used Spring Boot to handle API requests and serve formatted data to the front end.',
        'Developed a user-friendly interface with Bootstrap to display champion info, abilities, and skins.',
        'Implemented caching to reduce API call frequency and improve performance.'
    ],
    details: [
        "Created a web-based tool for League of Legends players to quickly look up champion statistics, abilities, and skins.",
        "The backend, powered by Spring Boot, acts as a proxy to the Riot Games API, handling authentication and data fetching.",
        "Data retrieved from the API is processed and formatted before being displayed.",
        "The user interface is built with Bootstrap, providing a clean, responsive layout for viewing detailed champion information.",
        "Integrated a simple caching mechanism to minimize redundant API calls and speed up response times."
    ],
    technologies: ['Java', 'Spring Boot', 'Riot Games API', 'RESTful API', 'Bootstrap'],
  },
  {
  title: 'AI Number Guessing Game',
  duration: 'Winter 2025', 
  description: [
    'Developed a cross-platform mobile game using React Native and Expo where an AI uses logic to guess the user’s secret number.',
    'Implemented a binary search algorithm to ensure the AI makes optimal guesses based on real-time user feedback.',
    'Designed a responsive, multi-screen UI featuring custom components and gradient styling.',
    'Managed complex game states and guess history tracking using React Hooks and TypeScript.'
  ],
  details: [
    "Built a mobile application that features an interactive AI opponent capable of narrowing down numerical ranges through dynamic boundary adjustments.",
    "Leveraged Expo Router for seamless file-based navigation between the Start, Game, and Game Over screens.",
    "Engineered reusable UI components including custom buttons, cards, and containers to maintain a consistent design language and clean code architecture.",
    "Optimized performance for guess history tracking by utilizing FlatList for efficient rendering of long lists on mobile devices.",
    "Ensured a high-quality user experience with input validation, native alerts, and SafeAreaView for compatibility across various iOS and Android screen sizes."
  ],
  technologies: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'JavaScript'],
}
];

export const CERTIFICATIONS: Certification[] = [
    {
        name: 'CompTIA Security+',
        acronym: 'SEC+',
        status: CertificationStatus.InProgress,
        timeline: 'Currently studying',
        description: 'Establishes the core knowledge required of any cybersecurity role and provides a springboard to intermediate-level cybersecurity jobs.',
        progress: 65,
    },
    // {
    //     name: 'Cisco Certified Network Professional',
    //     acronym: 'CCNP',
    //     status: CertificationStatus.Planned,
    //     timeline: 'After SEC+',
    //     description: 'A professional-level certification for those who work with Cisco networking solutions. Focus on enterprise networking.',
    //     progress: 5,
    // },
    // {
    //     name: 'Certified Information Systems Security Professional',
    //     acronym: 'CISSP',
    //     status: CertificationStatus.Planned,
    //     timeline: 'Requires 2 more years of experience',
    //     description: 'A globally recognized certification in the field of information security for experienced security practitioners, managers and executives.',
    //     progress: 10,
    // }
];

// FIX: Replaced JSX syntax with React.createElement to be compatible with .ts files.
// The TypeScript compiler interprets JSX syntax as type assertions in .ts files, causing compilation errors.
// Using React.createElement() avoids this issue by creating React elements through function calls instead of JSX tags.
export const SKILLS: Skill[] = [
    // Software
    { name: 'C++', icon: React.createElement(CppIcon), category: 'Software' },
    { name: 'Java', icon: React.createElement(JavaIcon), category: 'Software' },
    { name: 'Lua', icon: React.createElement(LuaIcon), category: 'Software' },
    { name: 'Python', icon: React.createElement(PythonIcon), category: 'Software' },
    { name: 'JavaScript', icon: React.createElement(JavaScriptIcon), category: 'Software' },
    { name: 'HTML', icon: React.createElement(HtmlIcon), category: 'Software' },
    { name: 'CSS', icon: React.createElement(CssIcon), category: 'Software' },
    { name: 'AWS', icon: React.createElement(AwsIcon), category: 'Software' },
    { name: 'Jira', icon: React.createElement(JiraIcon), category: 'Software' },
    { name: 'Vite', icon: React.createElement(ViteIcon), category: 'Software' },
    { name: 'Spring Boot', icon: React.createElement(SpringBootIcon), category: 'Software' },
    { name: 'React', icon: React.createElement(ReactIcon), category: 'Software' },
    { name: 'Tailwind', icon: React.createElement(TailwindIcon), category: 'Software' },
    { name: 'Bootstrap', icon: React.createElement(BootstrapIcon), category: 'Software' },
    { name: 'IntelliJ', icon: React.createElement(IntellijIcon), category: 'Software' },
    { name: 'VS Code', icon: React.createElement(VsCodeIcon), category: 'Software' },
    { name: 'Git', icon: React.createElement(GitIcon), category: 'Software' },

    // Cybersecurity
    { name: 'NIST RMF', icon: React.createElement(DocumentIcon), category: 'Cybersecurity' },
    { name: 'DISA STIGs', icon: React.createElement(ShieldIcon), category: 'Cybersecurity' },
    { name: 'ACAS Scans', icon: React.createElement(ScanIcon), category: 'Cybersecurity' },
    { name: 'Cryptography', icon: React.createElement(LockIcon), category: 'Cybersecurity' },
    { name: 'Network Security', icon: React.createElement(NetworkIcon), category: 'Cybersecurity' },
    { name: 'Docker', icon: React.createElement(DockerIcon), category: 'Cybersecurity' },
    { name: 'Secure Coding', icon: React.createElement(CodeIcon), category: 'Cybersecurity' },
];
