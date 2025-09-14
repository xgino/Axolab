export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  bannerImage: string;
  logoImage?: string;
  tags: string[];
  duration: {
    start: string;
    end?: string; // undefined means ongoing
  };
  type: 'Success' | 'Free Tool' | 'Failed' | 'Ongoing';
  arrMilestone?: string;
  status: 'active' | 'archived' | 'failed';
  lessons?: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  metrics?: {
    users?: number;
    revenue?: number;
    growth?: string;
  };
  links?: {
    live?: string;
    github?: string;
    case_study?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
}

export interface Milestone {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'launch' | 'revenue' | 'users' | 'feature' | 'learning';
  value?: string;
}

// Sample portfolio data - replace with actual projects
export const projects: Project[] = [
  {
    id: 'saas-analytics',
    title: 'SaaS Analytics Pro',
    description: 'Comprehensive analytics dashboard for SaaS businesses with real-time metrics and custom reporting.',
    longDescription: 'Built a complete analytics platform that helps SaaS founders track key metrics like MRR, churn, LTV, and user engagement. Features include custom dashboards, automated reports, and integration with major payment providers.',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Analytics', 'SaaS'],
    duration: {
      start: '2023-01',
      end: '2024-03'
    },
    type: 'Success',
    arrMilestone: '$15K MRR',
    status: 'active',
    lessons: [
      'Focus on solving real pain points rather than building features',
      'Customer interviews are crucial for product-market fit',
      'Pricing strategy can make or break a SaaS business'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      backend: ['Node.js', 'Express', 'JWT Authentication'],
      database: ['PostgreSQL', 'Redis'],
      tools: ['Stripe API', 'SendGrid', 'Docker', 'AWS']
    },
    metrics: {
      users: 450,
      revenue: 15000
    },
    links: {
      live: 'https://saasanalyticspro.com',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'startup-toolkit',
    title: 'Startup Toolkit',
    description: 'Free collection of essential tools and templates for early-stage startups.',
    longDescription: 'Created a comprehensive toolkit with business plan templates, financial models, pitch decks, and growth strategies. Became a go-to resource for entrepreneurs.',
    bannerImage: '/projects/startup-toolkit-banner.jpg',
    tags: ['Community', 'Templates', 'SEO', 'Content Marketing'],
    duration: {
      start: '2022-06'
    },
    type: 'Free Tool',
    status: 'active',
    lessons: [
      'Free tools can be powerful lead magnets',
      'Community building is more valuable than direct monetization',
      'SEO and content marketing compound over time'
    ],
    techStack: {
      frontend: ['Next.js', 'React', 'Tailwind CSS'],
      backend: ['Vercel Functions', 'Airtable API'],
      database: ['Airtable'],
      tools: ['Mailchimp', 'Google Analytics', 'Hotjar']
    },
    metrics: {
      users: 12000
    },
    links: {
      live: 'https://startuptoolkit.co',
      case_study: '/case-study/startup-toolkit'
    }
  },
  {
    id: 'social-scheduler',
    title: 'Social Media Scheduler',
    description: 'Automated social media posting tool that failed to gain traction despite solid execution.',
    longDescription: 'Built a comprehensive social media scheduling platform with multi-platform support, analytics, and team collaboration features. Despite good execution, failed to differentiate in a crowded market.',
    bannerImage: '/projects/social-scheduler-banner.jpg',
    tags: ['React', 'Python', 'Social Media', 'Automation', 'Failed'],
    duration: {
      start: '2021-09',
      end: '2022-04'
    },
    type: 'Failed',
    status: 'archived',
    lessons: [
      'Market research is crucial - the space was too crowded',
      'Differentiation is key in competitive markets',
      'Customer acquisition cost exceeded lifetime value',
      'Timing and market conditions matter more than execution'
    ],
    techStack: {
      frontend: ['React', 'Redux', 'Material-UI'],
      backend: ['Python', 'Django', 'Celery'],
      database: ['PostgreSQL', 'Redis'],
      tools: ['Social Media APIs', 'AWS', 'Stripe']
    },
    metrics: {
      users: 200,
      revenue: 800
    },
    links: {
      case_study: '/case-study/social-scheduler'
    }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'saas-pricing-strategy',
    title: 'How I Increased MRR by 300% with Strategic Pricing Changes',
    description: 'Lessons learned from experimenting with different pricing models and finding the sweet spot for SaaS growth.',
    content: 'Full blog post content here...',
    publishedAt: '2024-02-15',
    readTime: 8,
    tags: ['SaaS', 'Pricing', 'Growth', 'Strategy'],
    featured: true
  },
  {
    id: 'failed-startup-lessons',
    title: '5 Expensive Lessons from My Failed Social Media Startup',
    description: 'What I learned from building a product that nobody wanted and how it made me a better entrepreneur.',
    content: 'Full blog post content here...',
    publishedAt: '2024-01-20',
    readTime: 6,
    tags: ['Failure', 'Lessons', 'Startup', 'Marketing']
  },
  {
    id: 'stripe-integration-guide',
    title: 'Complete Guide to Stripe Integration for SaaS',
    description: 'Step-by-step tutorial for implementing subscriptions, webhooks, and billing in your SaaS application.',
    content: 'Full blog post content here...',
    publishedAt: '2024-01-05',
    readTime: 12,
    tags: ['Stripe', 'SaaS', 'Payments', 'Tutorial']
  }
];

export const milestones: Milestone[] = [
  {
    id: 'first-saas-launch',
    date: '2021-03',
    title: 'Launched First SaaS Product',
    description: 'Launched my first SaaS product after 6 months of development',
    type: 'launch'
  },
  {
    id: 'first-revenue',
    date: '2021-05',
    title: 'First $1K MRR',
    description: 'Reached my first milestone of $1,000 in monthly recurring revenue',
    type: 'revenue',
    value: '$1K MRR'
  },
  {
    id: 'social-scheduler-failure',
    date: '2022-04',
    title: 'Social Scheduler Shutdown',
    description: 'Learned valuable lessons about market research and differentiation',
    type: 'learning'
  },
  {
    id: 'analytics-launch',
    date: '2023-01',
    title: 'SaaS Analytics Pro Launch',
    description: 'Launched my most successful product focusing on analytics for SaaS businesses',
    type: 'launch'
  },
  {
    id: 'big-milestone',
    date: '2024-03',
    title: '$15K MRR Achieved',
    description: 'Hit a major revenue milestone with SaaS Analytics Pro',
    type: 'revenue',
    value: '$15K MRR'
  },
  {
    id: 'current-goal',
    date: '2024-12',
    title: 'Goal: $100K MRR',
    description: 'Working towards the next major milestone on the path to $1M ARR',
    type: 'revenue',
    value: '$100K MRR'
  }
];

export const personalInfo = {
  name: 'Alex Johnson',
  title: 'SaaS Founder & Indie Hacker',
  bio: 'Building my way to $1M ARR through multiple SaaS products. I share everything I learn about building, growing, and scaling software businesses.',
  currentMRR: 15000,
  totalUsers: 12650,
  productsBuilt: 8,
  yearsBuilding: 4,
  location: 'San Francisco, CA',
  email: 'alex@example.com',
  social: {
    twitter: 'https://twitter.com/alexjohnson',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    github: 'https://github.com/alexjohnson'
  }
};