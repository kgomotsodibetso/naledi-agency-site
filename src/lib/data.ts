
import type { Service, PortfolioItem, Testimonial, BlogPost, LeadMagnetInfo } from './types';
import { serviceIcons, StarIcon, BookOpenIcon, ClipboardCheckIcon } from '@/components/icons';

export const servicesData: Service[] = [
  { 
    icon: 'social', 
    title: 'Social Media Strategy & Management', 
    description: 'Your brand’s story deserves to be heard. We create tailored social media strategies that connect with your audience, grow your community, and convert followers into loyal customers.',
    whatsIncluded: [
      'Platform selection & optimization (Instagram, Facebook, LinkedIn, TikTok, etc.)',
      'Monthly content strategy and calendars',
      'Creative content production (graphics, captions, short-form video direction)',
      'Community engagement & management',
      'Analytics, reporting, and performance insights'
    ],
    whoItsFor: 'Startups and small businesses that want to stand out in the noise and build a consistent online presence.',
    deliverables: 'Strategy deck, monthly calendar, content packs, reports.'
  },
  { 
    icon: 'website', 
    title: 'Website Design & Vibe Coding', 
    description: 'Your website is your digital home. We design clean, professional websites that showcase your brand, drive leads, and feel alive with your identity.',
    whatsIncluded: [
      'Website strategy & structure planning',
      'Custom website design (desktop + mobile responsive)',
      'Vibe coding for modern, interactive elements',
      'SEO-friendly build for visibility',
      'Integration with CRM, email, and social tools',
      'Maintenance & support options'
    ],
    whoItsFor: 'Entrepreneurs and businesses ready to create a strong online presence or revamp an outdated site.',
    deliverables: 'Fully functional website, style guide, training handover.'
  },
  { 
    icon: 'email', 
    title: 'Email Marketing & Campaigns', 
    description: 'Email is where loyalty lives. We design and execute campaigns that nurture leads, build relationships, and drive repeat business.',
    whatsIncluded: [
      'Email strategy and list segmentation',
      'Campaign creation (newsletters, promos, launches)',
      'Automation workflows (welcome sequences, follow-ups, drip campaigns)',
      'Template design (on-brand, reusable)',
      'Analytics, A/B testing, and reporting'
    ],
    whoItsFor: 'Businesses that want to turn one-time buyers into long-term customers.',
    deliverables: 'Strategy, templates, automated flows, campaign reports.'
  },
  { 
    icon: 'crm', 
    title: 'CRM Setup & Automation', 
    description: 'Managing customers shouldn’t be complicated. We help you set up and streamline your CRM so you can focus on growth while the tech does the heavy lifting.',
    whatsIncluded: [
      'CRM platform setup (HubSpot, Zoho, or your preferred tool)',
      'Contact segmentation & data organization',
      'Sales pipeline creation',
      'Workflow automation (emails, tasks, reminders)',
      'Training & documentation for your team'
    ],
    whoItsFor: 'Businesses scaling beyond spreadsheets and looking to professionalize their sales and client management.',
    deliverables: 'Fully functional CRM setup, automations, training materials.'
  },
  { 
    icon: 'community', 
    title: 'Community Building & Engagement', 
    description: 'Brands aren’t built in isolation — they grow through people. We help you build and nurture communities around your business so your audience becomes your biggest advocate.',
    whatsIncluded: [
      'Community strategy (goals, platforms, engagement tactics)',
      'Group setup (Facebook, WhatsApp, Slack, Discord, LinkedIn)',
      'Content and conversation planning',
      'Moderation and community management support',
      'Growth and retention strategies'
    ],
    whoItsFor: 'Brands that want to create belonging, loyalty, and advocacy beyond just selling.',
    deliverables: 'Community platform setup, engagement frameworks, playbook.'
  },
];

export const portfolioItems: PortfolioItem[] = [
    { id: 'cs-1', client: 'Neno Ferreira', title: 'Crafting a Bold Brand Voice', services: 'Brand Strategy, Social Media', imageUrl: 'https://picsum.photos/seed/portraitart/800/600', description: 'We developed a comprehensive brand strategy and social media plan for Neno Ferreira, resulting in a 200% increase in engagement and a defined, powerful online presence.'},
    { id: 'cs-2', client: 'Tshiamiso Astronauts', title: 'Launching a Galactic Brand', services: 'Branding & Communications', imageUrl: 'https://picsum.photos/seed/spacegalaxy/800/600', description: 'For Tshiamiso Astronauts, we created a full branding suite and communications strategy, successfully launching their mission to inspire the next generation of space explorers.'},
    { id: 'cs-3', client: 'Future Client', title: 'Your Success Story Here', services: 'Your Custom Solution', imageUrl: 'https://picsum.photos/seed/businesssuccess/800/600', description: 'Your business could be our next big success story. Let\'s work together to build something amazing and showcase your growth.'},
];

export const testimonialsData: Testimonial[] = [
    { quote: "Naledi Digital transformed our online presence. Their strategic approach to social media was a game-changer for us.", author: "Neno Ferreira", company: "Artist & Creator" },
    { quote: "The website they built is not just beautiful, it's a true reflection of our brand's vibe. We've seen a huge uptick in inquiries.", author: "T. Mokoena", company: "Tshiamiso Astronauts" },
    { quote: "Working with them was a dream. They understood our vision and executed it flawlessly, helping us grow from an idea to a real business.", author: "J. Doe", company: "Startup Founder" }
];

export const blogPostsData: BlogPost[] = [
    {
        id: 'blog-1',
        title: '5 Ways a Strong Brand Strategy Can 10x Your Growth',
        excerpt: 'Discover the foundational branding elements that separate successful startups from the ones that fizzle out.',
        imageUrl: 'https://picsum.photos/seed/strategy/800/600',
        author: 'Naledi Digital',
        date: 'October 26, 2023',
        category: 'Brand Strategy',
    },
    {
        id: 'blog-2',
        title: 'The Art of Vibe Coding: Is Your Website Speaking Your Language?',
        excerpt: 'Your website is more than just code; it\'s your digital storefront. We explore how to infuse your brand\'s personality into every pixel.',
        imageUrl: 'https://picsum.photos/seed/webdesign/800/600',
        author: 'Naledi Digital',
        date: 'October 15, 2023',
        category: 'Web Design',
    },
    {
        id: 'blog-3',
        title: 'Building Community: The Secret Sauce for Sustainable Growth',
        excerpt: 'Learn how to turn customers into loyal advocates by building a thriving community around your brand.',
        imageUrl: 'https://picsum.photos/seed/community/800/600',
        author: 'Naledi Digital',
        date: 'September 30, 2023',
        category: 'Community Building',
    },
];

export const guidesData: LeadMagnetInfo[] = [
  {
    icon: 'StarIcon',
    title: 'From Spark to Star: 5 Steps to Build a Brand That Grows',
    description: 'Our foundational guide to building a memorable brand. Learn how to define your mission, identify your audience, and create a visual identity that stands out.',
    ctaText: 'Download the Guide'
  },
  {
    icon: 'BookOpenIcon',
    title: 'The Startup Social Media Playbook',
    description: 'Struggling with social? This playbook provides actionable tips on how to post, engage, and convert followers into customers on any platform.',
    ctaText: 'Get the Playbook'
  },
  {
    icon: 'crm',
    title: 'CRM Made Simple: How to Organize Your Leads',
    description: 'Move beyond spreadsheets. This guide breaks down the basics of CRM and helps you choose and set up a system to manage your leads without the overwhelm.',
    ctaText: 'Simplify Your CRM'
  }
];

export const auditsData: LeadMagnetInfo[] = [
  {
    icon: 'ClipboardCheckIcon',
    title: 'Free Social Media Audit',
    description: 'Get a professional review of one of your social media profiles. We\'ll provide actionable recommendations to improve your content, engagement, and growth.',
    ctaText: 'Request Your Audit'
  },
  {
    icon: 'website',
    title: 'Free Website Mini-Audit',
    description: 'Is your website converting? We\'ll review your homepage for clarity, mobile-friendliness, and usability, giving you quick wins to improve your online presence.',
    ctaText: 'Audit My Website'
  },
  {
    icon: 'StarIcon',
    title: 'Marketing Health Check Quiz',
    description: 'Take our interactive quiz to get a personalized report on your marketing health and discover your biggest opportunities for growth.',
    ctaText: 'Take the Quiz'
  }
];
