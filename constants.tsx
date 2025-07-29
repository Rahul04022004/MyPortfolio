import React from 'react';
import type { NavLink, SocialLink, EducationItem, Stat, Project, SkillCategory, ContactInfo, Achievement } from './types';
import {
    GithubIcon, LinkedinIcon, LeetCodeIcon, MailIcon, PhoneIcon,
    SchoolIcon, CollegeIcon, LanguageIcon, CodeBracketIcon, ServerIcon,
    CircleStackIcon, TrophyIcon, CertificateIcon, CoffeeIcon
} from './components/Icons';


// Navigation
export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/Rahul04022004', icon: GithubIcon },
  { name: 'LinkedIn', href: 'www.linkedin.com/in/rahul-tamgale-cs233', icon: LinkedinIcon },
  { name: 'LeetCode', href: 'https://leetcode.com/u/Rahul_0402/', icon: LeetCodeIcon },
];

// Hero Section
export const GREETINGS: string[] = ["Hello", "ನಮಸ್ಕಾರಗಳು", "नमस्ते", "नमस्कार"];

export const TYPING_TITLES: string[] = [
  "Full-Stack Developer",
  "AI Enthusiast",
  "Engineering Student",
  "Problem Solver"
];

export const TERMINAL_PHILOSOPHY: string[] = [
  "Building software with cosmic ambition.",
  "Finding stellar solutions to earthly problems.",
  "Coding the future, inspired by the stars.",
  "Exploring the universe, one line of code at a time.",
  "Crafting elegant systems from chaotic data, like nebulae forming stars.",
  "Architecting scalable universes of logic and creativity.",
  "Navigating the event horizon of technology's next frontier."
];

export const ASTRONOMICAL_MANIFESTO_TITLE = "The Cosmic Coder's Manifesto";

export const ASTRONOMICAL_MANIFESTO: string[] = [
  "Engineer digital constellations that guide and inspire.",
  "Believe code is a telescope, bringing distant possibilities into focus.",
  "Craft each function as a star, each module a galaxy in an expanding digital universe.",
  "Navigate software complexity with the precision of an astronomer charting new worlds.",
  "Launch applications into new orbits of innovation, not just build them.",
  "Journey to the frontiers of technology, where every line of code is a step into the cosmos."
];


// About Section
export const ABOUT_TEXT = "Computer Science undergraduate specializing in full-stack web development and applied AI solutions. Experienced with React, Node.js, Firebase, and databases like MongoDB and PostgreSQL. Developed projects in fintech, civic-tech, and mobility domains. Adept at building scalable apps, collaborating in teams, and delivering practical impact through technology.";

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    institution: 'Dayananda Sagar College Of Engineering, Bengaluru',
    degree: 'BE in Computer Science and Engineering',
    duration: '2023 - 2027',
    details: 'CGPA: 9.1',
    logo: CollegeIcon,
  },
  {
    institution: 'Dimond PU Science College, Bhalki',
    degree: 'Pre-University (PU)',
    duration: '2020 - 2022',
    details: 'Percentage: 93.16%',
    logo: SchoolIcon,
  },
   {
    institution: 'Shree Swami Samarth English Medium School, Pune',
    degree: 'Xth Standard',
    duration: 'Completed 2020',
    details: 'Percentage: 78.20%',
    logo: SchoolIcon,
  },
];

export const STATS: Stat[] = [
    { icon: CoffeeIcon, value: '∞', label: 'Coffee Consumed' },
    { icon: ServerIcon, value: '3+', label: 'Projects Completed' },
    { icon: TrophyIcon, value: '1', label: 'Hackathons Participated' },
    { icon: CertificateIcon, value: '3+', label: 'Certifications' }
];

// Projects Section
export const PROJECTS: Project[] = [
  {
    title: 'NyaySarthi',
    description: 'AI-powered legal filing system using regional language speech-to-text via Bhashini API & GPT-4 to bridge the justice access gap.',
    tags: ['Next.js', 'AI/ML', 'Firebase', 'GPT-4', 'Bhashini'],
    image: '/project-nyaysarthi.png',
    codeLink: '#',
    liveLink: '#',
  },
  {
    title: 'WiseWallet',
    description: 'Full-stack personal finance platform to manage expenses, SIPs, and investments, with Razorpay and AngelOne API integration.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'Firebase'],
    image: '/project-wisewallet.png',
    codeLink: 'https://github.com/Rahul04022004/WiseWallet',
    liveLink: '#',
  },
  {
    title: 'BoostFleet',
    description: 'An awareness platform promoting energy-efficient vehicle practices, eco-driving, and smart fleet operations using HTML, CSS & JS.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/project-boostfleet.png',
    codeLink: 'https://github.com/Rahul04022004/Boost-Fleet',
    liveLink: '#',
  },
];

// Skills Section
export const SKILLS: SkillCategory[] = [
  {
    name: 'Languages',
    icon: LanguageIcon,
    skills: [
      { name: 'C / C++', level: 80 },
      { name: 'JavaScript / TypeScript', level: 50 },
      { name: 'Java (DSA)', level: 85 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    name: 'Frontend',
    icon: CodeBracketIcon,
    skills: [
      { name: 'React.js / Next.js', level: 70 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Tailwind CSS', level: 60 },
    ],
  },
  {
    name: 'Backend',
    icon: ServerIcon,
    skills: [
      { name: 'Node.js / Express.js', level: 85 },
    ],
  },
  {
    name: 'Databases',
    icon: CircleStackIcon,
    skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 90 },
    ],
  },
];


// Contact Section
export const CONTACT_DETAILS: ContactInfo[] = [
    { icon: MailIcon, label: 'Email', value: 'tamgalerahul0402@gmail.com', href: 'mailto:tamgalerahul0402@gmail.com' },
    { icon: PhoneIcon, label: 'Phone', value: '+91 9834599179', href: 'tel:+919834599179' },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'Rahul Tamgale', href: 'www.linkedin.com/in/rahul-tamgale-cs233' },
];


// Achievements
export const ACHIEVEMENTS: Achievement[] = [
    { 
        name: 'Complete Full-Stack Web Development Bootcamp', 
        source: 'Udemy', 
        icon: CertificateIcon, 
        link: '#' 
    },
    { 
        name: '100 Days of Code - Python Bootcamp', 
        source: 'Udemy', 
        icon: CertificateIcon, 
        link: '#' 
    },
    { 
        name: 'Complete Data Science, Machine Learning, Deep Learning, NLP Bootcamp', 
        source: 'Udemy', 
        icon: CertificateIcon, 
        link: '#' 
    },
];