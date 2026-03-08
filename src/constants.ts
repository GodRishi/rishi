import { Code, Layout, Server, Database, Smartphone, Globe, Zap, Palette, Terminal, Shield, TrendingUp, Languages } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'What I Deliver', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO, TechStart Inc.',
    content: 'Rishi transformed our outdated website into a modern, high-converting platform. His attention to detail ensured a flawless launch, and our customer inquiries have doubled since the site went live.',
    image: 'https://picsum.photos/seed/sarah/200/200',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateX',
    content: 'Working with Rishi was a breeze. He understood our business goals perfectly and delivered a stunning site that truly represents our brand. Our clients love the new look!',
    image: 'https://picsum.photos/seed/michael/200/200',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Digital Dream Creation',
    description: 'A professional studio portfolio showcasing wedding cinematic films and album editing services.',
    tech: ['Portfolio Showcase', 'Mobile-Optimized', 'Lead Generation'],
    image: 'https://i.ibb.co/zhWmvQ3Y/image-2026-02-25-205947038.png',
    liveLink: 'https://digitaldreamcreation.vercel.app',
    githubLink: '',
  },
  {
    id: 2,
    title: 'Mehta Urban Developers',
    description: 'A modern, responsive website for a leading real estate development firm, showcasing their portfolio of urban projects and services.',
    tech: ['Real Estate Portfolio', 'Responsive Design', 'Business Identity'],
    image: 'https://i.postimg.cc/g0r2N3ds/image-2026-03-02-093945440.png',
    liveLink: 'https://demowebsite001.vercel.app/#',
    githubLink: '',
  },
];

export const SKILLS = [
  {
    name: 'Lightning Fast Load Times',
    icon: Zap,
    description: 'Optimized performance for better user retention and SEO rankings.',
  },
  {
    name: 'Flawless Mobile Design',
    icon: Smartphone,
    description: 'Responsive layouts that look perfect on every device, from phones to desktops.',
  },
  {
    name: 'Secure & Reliable',
    icon: Shield,
    description: 'Built with best practices to ensure your data and your users remain safe.',
  },
  {
    name: 'SEO Optimized',
    icon: TrendingUp,
    description: 'Structured to help your business rank higher and reach more customers.',
  },
];

export const SERVICES = [
  {
    title: 'Custom Websites',
    description: 'Unique, hand-coded websites that perfectly reflect your brand identity and business goals.',
    icon: Globe,
  },
  {
    title: 'Web Applications',
    description: 'Interactive, feature-rich platforms that streamline your business operations and engage users.',
    icon: Code,
  },
  {
    title: 'Landing Pages',
    description: 'High-converting single-page sites designed specifically for marketing campaigns and product launches.',
    icon: Layout,
  },
  {
    title: 'Localization (Benglish)',
    description: 'Expand your reach with websites that seamlessly blend English and Bengali to connect authentically with local audiences.',
    icon: Languages,
  },
];
