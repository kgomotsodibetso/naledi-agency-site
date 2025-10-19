import type { ReactElement, ComponentType } from 'react';

export enum Page {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Portfolio = 'portfolio',
  Blog = 'blog',
  Contact = 'contact',
  Resources = 'resources',
  PrivacyPolicy = 'privacy-policy',
  TermsOfService = 'terms-of-service',
  PersonaGenerator = 'persona-generator',
  Search = 'search',
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  icon: string | ComponentType<{ className?: string }>;
  title: string;
  description: string;
  whatsIncluded: string[];
  whoItsFor: string;
  deliverables: string;
}

export interface PortfolioItem {
  id: string;
  client: string;
  title: string;
  services: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
}

export interface LeadMagnetInfo {
  icon: string | ComponentType<{ className?: string }>;
  title: string;
  description: string;
  ctaText: string;
}
