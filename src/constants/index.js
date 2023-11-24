import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cubersecurity",
    icon: web,
  },
  {
    title: "Senior Solutions Architect",
    icon: mobile,
  },
  {
    title: "IAM & PAM",
    icon: backend,
  },
  {
    title: "CISSP",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Solutions Architect & Team Lead",
    company_name: "Ericsson",
    icon: img4,
    iconBg: "#383E56",
    date: "April 2019 - Oct 2019",
    points: [
      "Domain - Telecommunication",
      "Solutions Architect & Team Lead",
      "Designing & deploying PAM Solution in a multi-tenant environment for various customers across the globe - Europe, USA & Asia",
      "Leading team to implement and manage the PAM solution for on-boarding assets, accounts and configure the solution for password and session management",
    ],
  },
  {
    title: "Solutions Architect",
    company_name: "Standard Chartered Bank",
    icon: img3,
    iconBg: "#E6DEDD",
    date: "Oct 2019 - Dec 2020",
    points: [
      "Domain - Banking",
      "Solutions Architect",
      "Implementing PAM solution and migrating assets and accounts from a legacy solution for the bank. ",
      "Remediation of Service Accounts or Static Accounts with various approaches i.e. API, Custom Platforms, etc. Enabling password management & session management for interactive & non-interactive accounts as per need.",
    ],
  },
  {
    title: "Product Manager (Privileged Access Management) / Senior IAM Engineer",
    company_name: "Nets Group",
    icon: img2,
    iconBg: "#383E56",
    date: "Dec 2020 - Jun 2022",
    points: [
      "Domain - FinTech",
      "Solutions Architect / Team Lead / Scrum Master",
      "Leading the organization-wide deployment of PAM solutions (PASM & PEDM) to meet internal & compliance requirements, mitigate audit findings and minimize the inherent risks related privileged accounts.",
      "Presenting the current & future state, gaps & related risks to ExCo in organization's IAM & PAM space along with action plan.",
    ],
  },
  {
    title: "Senior Solutions Architect",
    company_name: "ForgeRock",
    icon: img1,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      "Identity & Access Management (IAM)",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Information Technology",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fiverr Shop",
    description:
      "Discover an online shopping paradise! Explore and buy your beloved products effortlessly on our sleek e-commerce platform. Your favorite items are just a click away. Dive in and indulge today!",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/harsh-sangwan2003/fiverr-shop",
  },
  {
    name: "Movix App",
    description:
      "Experience a cinematic journey with our project! Explore a vast collection of movies from TMDB, curate your favorites, and enjoy seamless login and signup options. Your movie haven awaits!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tmdbapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/harsh-sangwan2003/movix-app",
  },
  {
    name: "Alan AI News App",
    description:
      "Step into the future of news! Our React.js News App, fueled by AI, transforms how you engage with headlines—empowering you to control the news effortlessly, simply by using your voice.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "alan ai",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/harsh-sangwan2003/alan-ai-news-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
