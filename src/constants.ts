import { Code, Layout, Server, Database, Smartphone, Globe, Zap, Palette, Terminal } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO, TechStart Inc.',
    content: 'Rishi transformed our outdated website into a modern, high-converting platform. His attention to detail and mastery of TypeScript ensured a bug-free launch.',
    image: 'https://picsum.photos/seed/sarah/200/200',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateX',
    content: 'Working with Rishi was a breeze. He understood our requirements perfectly and delivered a stunning UI that exceeded our expectations. Highly recommended!',
    image: 'https://picsum.photos/seed/michael/200/200',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Digital Dream Creation',
    description: 'A professional studio portfolio showcasing wedding cinematic films and album editing services.',
    tech: ['TypeScript', 'HTML5', 'CSS', 'AI Assisted'],
    image: 'https://i.ibb.co/zhWmvQ3Y/image-2026-02-25-205947038.png',
    liveLink: 'https://digitaldreamcreation.vercel.app',
    githubLink: '',
  },
];

export const SKILLS = [
  {
    category: 'Core Technologies',
    icon: Layout,
    items: [
      { name: 'HTML5', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS', level: 85 },
    ],
  },
  {
    category: 'AI & Workflow',
    icon: Terminal,
    items: [
      { name: 'AI Assistance', level: 100 },
      { name: 'VS Code', level: 90 },
      { name: 'Git / GitHub', level: 80 },
    ],
  },
];

export const SERVICES = [
  {
    title: 'Web Development',
    description: 'Building fast, responsive, and accessible websites using clean, semantic code.',
    icon: Globe,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually stunning user interfaces with a focus on user experience.',
    icon: Palette,
  },
  {
    title: 'Performance Optimization',
    description: 'Enhancing website speed and performance for better SEO and user retention.',
    icon: Zap,
  },
  {
    title: 'Mobile-First Design',
    description: 'Ensuring your site looks and works perfectly on all devices, from phones to desktops.',
    icon: Smartphone,
  },
];
