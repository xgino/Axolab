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
  status: 'active' | 'archived' | 'failed' | 'completed';
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
    id: 'Google-Maps-Company-scraper',
    title: 'Google Maps Scraper',
    description: 'Build a Business scraper to analyse x companies in x regeon. and also usefull for later to have a DB with companies i can contact for my future saas.',
    longDescription: '',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Python', 'CSV', 'Playwright scraper', 'IP Rotation', 'Paralel speed'],
    duration: {
      start: '2023-12',
      end: '2023-12'
    },
    type: 'Free Tool',
    arrMilestone: '$0',
    status: 'completed',
    lessons: [
      'Scraping data with IP rotation and efficiency of paralel scripts',
      'Data organizing cleaning and storing for future expantion',
    ],
    techStack: {
      frontend: ['NO'],
      backend: ['Python'],
      database: ['CSV'],
      tools: ['Playwright scraper', 'IP rotation', 'Paralel scripts']
    },
    metrics: {
      users: 1,
      revenue: 0
    },
    links: {
      live: 'https://github.com/xgino/Google-Map-Scaper',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'Website-Contact-Email-scraper',
    title: 'Website Email Scraper',
    description: 'Build a Email scraper base on the Google maps scraper, after we got the business data to scrape emails of those comanies for later to contact with',
    longDescription: '',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Python', 'CSV', 'Bs4 scraper', 'Paralel speed'],
    duration: {
      start: '2023-12',
      end: '2023-12'
    },
    type: 'Free Tool',
    arrMilestone: '$0',
    status: 'completed',
    lessons: [
      'GPDR of EU on email collection. since this is public available data. its the same as doing this manualy. ofc respecting robots.txt and policy first before scraping anything.',
      'Unfortunately no IP rotation, since we are visiting each website 1x so there is not need for a ip rotate, but scraping 100k websites might seem weird to my internet provider. no normal person visits 100k websites a day. and internet is very slow while in use',
      'Every website has a difirent structure and where they put email, in contact, support, or other pages. maybe footer header everywhere is possible. so we need a scipt that is adaptable to any website'
    ],
    techStack: {
      frontend: ['NO'],
      backend: ['Python'],
      database: ['CSV'],
      tools: ['BS4 scraper', 'Paralel scripts']
    },
    metrics: {
      users: 1,
      revenue: 0
    },
    links: {
      live: 'https://github.com/xgino/Email-Web-Scraper',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'Dating-App-Website',
    title: 'Dating Web App',
    description: 'Build a dating website with ML match algor, to match perfect between users.',
    longDescription: '',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Python', 'Html', 'CSS', 'JS', 'ML matching alg'],
    duration: {
      start: '2024-01',
      end: '2024-03'
    },
    type: 'Failed',
    arrMilestone: '$0',
    status: 'archived',
    lessons: [
      'Did some marketing beforhand and see cases that succeeded',
      'Building Frontend website with swipe functions',
      'Didint dive deeper into the marketing aspect wich critical',
      'Luckly i didnt build the match algorithm yet, so not much time has been wasted beside webdev'
    ],
    techStack: {
      frontend: ['HTML', 'CSS', 'JS'],
      backend: ['Django'],
      database: ['PostgreSQL'],
      tools: ['Web Design', 'Backend dev', 'Frontend dev']
    },
    metrics: {
      users: 0,
      revenue: 0
    },
    links: {
      live: 'https://github.com/xgino/Cupid',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'Web-Agency',
    title: 'WebResolute Web Agency',
    description: 'Since i have exp with Frontend Backend dev, i can do full stack dev so I can freelance with webagency. ',
    longDescription: '',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Python', 'Html', 'CSS', 'JS', 'Django'],
    duration: {
      start: '2024-04',
      end: '2024-09'
    },
    type: 'Failed',
    arrMilestone: '$0',
    status: 'archived',
    lessons: [
      'Didnt spend much on marketing, wich is the case of fail',
      'did research on similair angecies but am bad with marketing',
    ],
    techStack: {
      frontend: ['HTML', 'CSS', 'JS'],
      backend: ['Django'],
      database: ['PostgreSQL'],
      tools: ['Web Design', 'Backend dev', 'Frontend dev']
    },
    metrics: {
      users: 0,
      revenue: 0
    },
    links: {
      live: 'https://webresolute.com',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'Data-Agency',
    title: 'Bolar Data Agency',
    description: 'Since i study CS student, Why not selling some data? since we work somuch with data. so data angency selling data I scrape form the internet.',
    longDescription: '',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Python', 'Html', 'CSS', 'JS', 'Django'],
    duration: {
      start: '2024-04',
      end: '2024-05'
    },
    type: 'Failed',
    arrMilestone: '$0',
    status: 'archived',
    lessons: [
      'Didnt spend much on marketing, wich is the case of fail',
      'did research on similair angecies but am bad with marketing',
    ],
    techStack: {
      frontend: ['HTML', 'CSS', 'JS'],
      backend: ['Django'],
      database: ['PostgreSQL'],
      tools: ['Web Design', 'Backend dev', 'Frontend dev']
    },
    metrics: {
      users: 0,
      revenue: 0
    },
    links: {
      live: 'https://bolar.co',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'Sandhook-Emailer',
    title: 'Sandhook Cold Email Automation',
    description: 'Since I have all the data, I shuold build a email sender that is able to send cold emails to new potential users or clients. also good for my future saas to find users.',
    longDescription: '',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Cold Email', 'Email sender', 'Email Campaigne', 'Python', 'Django'],
    duration: {
      start: '2024-06',
      end: '2024-09'
    },
    type: 'Ongoing',
    arrMilestone: '$0',
    status: 'archived',
    lessons: [
      'Build the nice landing page in hope users will signup for a preorder no users',
      'no marketing was done so This is the issue.',
      'Have a version that works on my local machine but since there is no presignups and my MVP is not ready yet i have left this for now as it is',
    ],
    techStack: {
      frontend: ['HTML', 'CSS', 'JS'],
      backend: ['Django'],
      database: ['PostgreSQL'],
      tools: ['Python']
    },
    metrics: {
      users: 5,
      revenue: 0
    },
    links: {
      live: 'https://sandhook.com',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'QR-Generator',
    title: 'QRDive - QR Tracking SaaS',
    description: 'QR code generator & tracking SaaS with Stripe.',
    longDescription: 'First real SaaS with subscription system. Learned Stripe deeply, handled user data, built full product in ~2 months. Later tried ads, SEO, posting on HN/ProductHunt but failed to scale due to boring niche.',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Django', 'QR', 'SaaS', 'Stripe'],
    duration: {
      start: '2024-07',
      end: '2025-05'
    },
    type: 'Ongoing',
    arrMilestone: '$0',
    status: 'active',
    lessons: [
      'Stripe integration into my django site took about 50% of the build duration 2 weeks of 4.',
      'Posting on all channels are not usefull, since ProductHunt all visitors are devs or scouts. QR is kinda old tech and not relevant to the users',
      'Boilerplate is really needed for a smooth future saas dev',
    ],
    techStack: {
      frontend: ['HTML', 'CSS', 'JS'],
      backend: ['Django'],
      database: ['SQLite'],
      tools: ['Python']
    },
    metrics: {
      users: 45,
      revenue: 0
    },
    links: {
      live: 'https://qrdive.com',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'Saas-Boilerplate',
    title: 'Saas Django Boilerplate',
    description: 'Prebuild saas boilerplate with user auth, stripe and defailt items needed in every saas',
    longDescription: 'After QR dive, I see boilerplate is essential to build my future saas to have a more saass factory. So i never want to spend 2 weeks on stripe again, and also building user auth for every app took about 2h each saas so with this i can simply clone the github boilerplate and save hours of work and directly start with feature development to launch in 40h',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Django', 'SaaS', 'User Auth', 'Stripe'],
    duration: {
      start: '2025-02',
      end: '2025-03'
    },
    type: 'Ongoing',
    arrMilestone: '$0',
    status: 'active',
    lessons: [
      'Save time by not doing stripe anymore',
      'dont waste time on user auth for every project',
      'Save 100h + of dev time'
    ],
    techStack: {
      frontend: ['HTML', 'CSS', 'JS'],
      backend: ['Django', 'Stripe'],
      database: ['SQLite'],
      tools: ['Django', 'Stripe']
    },
    metrics: {
      users: 0,
      revenue: 0
    },
    links: {
      live: 'https://hoverlab.co',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'Product-Text-Generator',
    title: 'Shoptekst - AI Product Description Generator',
    description: 'SEO-rich product description generator for Bol.com & shopify sellers.',
    longDescription: 'Built in 1 week using boilerplate. Uses GPT API for SEO keyword-rich product descriptions. Manual outreach → 2 users but little activity. Learned GPT API + prompt engineering.',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['GPT', 'SEO', 'Ecommerce', 'Django'],
    duration: {
      start: '2025-06',
      end: '2025-06'
    },
    type: 'Ongoing',
    arrMilestone: '$0',
    status: 'active',
    lessons: [
      'Spend 10h to send manual emails to businesses on Bol contact form. with no result.',
      'Perhaps I need a guide JS that teach user how to use my app',
    ],
    techStack: {
      frontend: ['HTML', 'CSS', 'JS'],
      backend: ['Django', 'Stripe'],
      database: ['SQLite'],
      tools: ['Django', 'Stripe', 'OpenAPI API']
    },
    metrics: {
      users: 5,
      revenue: 0
    },
    links: {
      live: 'https://shoptekst.nl',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'Barbeon',
    title: 'Barbeon - Barber Booking Platform',
    description: 'Booking system concept for barbers.',
    longDescription: 'Landing page MVP to validate barber booking platform idea (reduce no-shows). Similar to ticket sales platform. Early stage only.',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Booking', 'Django'],
    duration: {
      start: '2025-07',
      end: '2025-07'
    },
    type: 'Ongoing',
    arrMilestone: '$0',
    status: 'active',
    lessons: [
      
    ],
    techStack: {
      frontend: ['React',],
      backend: ['Fast API'],
      database: ['SQL'],
      tools: ['React', 'Python', 'Fast API']
    },
    metrics: {
      users: 0,
      revenue: 0
    },
    links: {
      live: 'https://barbeon.com',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'Halalspace',
    title: 'Halalspace - Local Event Platform',
    description: 'Event posting + future ticket sales with commission.',
    longDescription: 'Reused boilerplate to build Halalspace MVP in 1 week. Focus on SEO structured URLs for events. First stage = posting only, ticket sales later.',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Events', 'SEO', 'Web'],
    duration: {
      start: '2025-08',
      end: '2025-08'
    },
    type: 'Ongoing',
    arrMilestone: '$0',
    status: 'active',
    lessons: [
      'Build a SEO optimized URL for Events in Search Engines like Google',
      'SEO structure critical for event platforms',
    ],
    techStack: {
      frontend: ['HTML','CSS','JS',],
      backend: ['Django'],
      database: ['SQLite'],
      tools: ['Django', 'Stripe']
    },
    metrics: {
      users: 2,
      revenue: 0
    },
    links: {
      live: 'https://halalspace.nl',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'Invoicor',
    title: 'Invoicor - Free Invoice Generator',
    description: 'Free invoice generation tool.',
    longDescription: 'Built in 10h before uni start. Free tool to auto-generate invoices instead of manual work. Simple and effective.',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Free Tool', 'Finance'],
    duration: {
      start: '2025-08',
      end: '2025-08'
    },
    type: 'Free Tool',
    arrMilestone: '$0',
    status: 'active',
    lessons: [
      'This free tool can promote one of my saas or future saas.',
    ],
    techStack: {
      frontend: ['HTML','CSS','JS',],
      backend: ['No'],
      database: ['No'],
      tools: ['CSS', 'JS']
    },
    metrics: {
      users: 21,
      revenue: 0
    },
    links: {
      live: 'https://invoicor.com',
      case_study: '/case-study/saas-analytics'
    }
  },
  {
    id: 'Internship-Scraper',
    title: 'Internship & Jobs Scraper',
    description: 'Scraper + marketplace for internships/jobs.',
    longDescription: 'Started for required uni internship. Internship scraper in AI/DS → expandable to job listings + CV checker matching. Long-term vision: free job marketplace.',
    bannerImage: '/projects/saas-analytics-banner.jpg',
    logoImage: '/projects/saas-analytics-logo.png',
    tags: ['Scraper', 'Jobs', 'AI'],
    duration: {
      start: '2025-09',
      end: '2025-11'
    },
    type: 'Free Tool',
    arrMilestone: '$0',
    status: 'active',
    lessons: [

    ],
    techStack: {
      frontend: ['No',],
      backend: ['Python'],
      database: ['CSV'],
      tools: ['Python']
    },
    metrics: {
      users: 0,
      revenue: 0
    },
    links: {
      live: 'https://github.com/xgino/Internship-Scraper',
      case_study: '/case-study/saas-analytics'
    }
  },

];

export const blogPosts: BlogPost[] = [
  {
    id: 'seo-basics',
    title: 'SEO for SaaS: Beyond Head Tags',
    description: 'In-page keyword targeting, indexing, and keeping up with trends.',
    content: `SEO is not just about meta head tags. You need in-page keyword targeting, adding your site to Google Search Console, and requesting indexing. Keywords should be updated regularly based on trends.`,
    publishedAt: '2024-01-10',
    readTime: 6,
    tags: ['SEO', 'SaaS', 'Marketing'],
    featured: true
  },
  {
    id: 'google-ads-targeting',
    title: 'Google Ads for SaaS: Going Hyper-Specific',
    description: 'Why subcategories and local targeting lower CPC and improve conversion.',
    content: `Instead of broad keywords, create subcategories. Example: “QR code generator for seasonal sales in Rotterdam.” Very specific keywords mean lower cost per click and higher intent.`,
    publishedAt: '2024-02-05',
    readTime: 7,
    tags: ['Ads', 'SaaS', 'Growth']
  },
  {
    id: 'seo-urls-platforms',
    title: 'SEO-Friendly URLs for Platforms & SaaS',
    description: 'Dynamic vs stored URLs, broken links, and Google ranking impact.',
    content: `URLs should contain keywords: e.g. halalspace.nl/events/Bazar_Rotterdam/09sep2025. Problem: if users edit, links break and rankings drop. Fix: save canonical URL in DB and redirect by ID (/events/213).`,
    publishedAt: '2024-03-01',
    readTime: 8,
    tags: ['SEO', 'SaaS', 'Platforms']
  },
  {
    id: 'head-tags-strategy',
    title: 'Dynamic Head Tags for SaaS Growth',
    description: 'How to generate page-specific SEO head tags for better indexing.',
    content: `Each mini page (events, ecommerce items) needs its own meta description and keywords. Update tags regularly depending on trends.`,
    publishedAt: '2024-03-20',
    readTime: 5,
    tags: ['SEO', 'SaaS']
  },
  {
    id: 'hosting-options',
    title: 'Cheap SaaS Hosting: When Shared Hosting is Enough',
    description: 'Using Namecheap, cPanel, and when to move to VPS.',
    content: `Namecheap shared hosting: ~€70/year for 10 sites, fine if <500 visitors per month each. SSL costs extra unless on VPS. Good support, but scaling means moving.`,
    publishedAt: '2024-04-10',
    readTime: 6,
    tags: ['Hosting', 'SaaS', 'Tools']
  },
  {
    id: 'page-speed-matters',
    title: 'Why Page Speed is Critical in SaaS',
    description: '3s slower load = churn. Optimize images, CSS, JS, load order.',
    content: `Optimize critical CSS/JS first, defer unused resources. Every second counts, directly impacts retention and revenue.`,
    publishedAt: '2024-05-01',
    readTime: 6,
    tags: ['Performance', 'SaaS', 'UX']
  },
  {
    id: 'landing-pages-seo',
    title: 'Multi-Landing Pages for SEO Wins',
    description: 'Target different audiences (Amazon, Shopify, Squarespace) with custom pages.',
    content: `Each landing page should have audience-specific SEO head tags. More targeted pages → more keywords indexed → higher ranking.`,
    publishedAt: '2024-05-20',
    readTime: 7,
    tags: ['SEO', 'SaaS', 'Growth']
  },
  {
    id: 'analytics-for-saas',
    title: 'Using Analytics to Fix SaaS UX',
    description: 'Google Analytics + PostHog to spot weak points in your funnel.',
    content: `Check scroll depth, bounce rates, drop-off points. Example: if nobody scrolls past hero, redesign. If users sign up but don’t continue, onboarding fails.`,
    publishedAt: '2024-06-05',
    readTime: 8,
    tags: ['Analytics', 'SaaS', 'UX']
  },
  {
    id: 'free-tools-strategy',
    title: 'Free Tools as SaaS Marketing (Invoicor Case)',
    description: 'How free tools + AdSense can drive traffic and awareness.',
    content: `Built Invoicor as free invoice generator. Free tools bring organic traffic, can monetize with AdSense, but you need huge volumes. Works better for blogs/tools than B2B SaaS.`,
    publishedAt: '2024-07-01',
    readTime: 9,
    tags: ['Growth', 'SaaS', 'Marketing']
  },
  {
    id: 'saas-pricing',
    title: 'Finding the Right SaaS Pricing Strategy',
    description: 'How to research competitors and avoid feature bloat.',
    content: `Check 5 competitors → map features + pricing. Too few competitors = bad market. Don’t overbuild. Focus on features that sell. Quality > quantity.`,
    publishedAt: '2024-08-01',
    readTime: 10,
    tags: ['Pricing', 'SaaS', 'Growth'],
    featured: true
  },
  {
    id: 'selling-before-building',
    title: 'Sell Before You Build: The SaaS Pre-Sell Strategy',
    description: 'Pitch features before coding to validate demand.',
    content: `Sometimes you should sell the vision first. Works best for big projects needing investment. Helps validate demand before wasting time building.`,
    publishedAt: '2024-09-01',
    readTime: 7,
    tags: ['Validation', 'SaaS', 'Strategy']
  }
];

export const milestones: Milestone[] = [
  {
    id: 'maps-scraper-build',
    date: '2023-12',
    title: 'Built Google Maps Scraper',
    description: 'Created CLI scraper integrated with Github',
    type: 'learning'
  },
  {
    id: 'email-scraper-build',
    date: '2023-12',
    title: 'Built Email Scraper',
    description: 'Automated tool to scrape emails from websites',
    type: 'learning'
  },
  {
    id: 'dating-app-failure',
    date: '2024-03',
    title: 'Dating App Dropped',
    description: '80% built but failed due to critical marketing issues',
    type: 'learning'
  },
  {
    id: 'webresolute Webagency',
    date: '2024-04',
    title: 'Started Webresolute Agency',
    description: 'Launched freelance web agency, later dropped due to burnout risk',
    type: 'learning'
  },
  {
    id: 'bolar Dataangency',
    date: '2024-05',
    title: 'Bolar Data Agency Dropped',
    description: 'No buyers due to lack of marketing/SEO',
    type: 'learning'
  },
  {
    id: 'Sandhook-Build',
    date: '2024-06',
    title: 'Sandhook Cold Email Automation',
    description: 'Built CLI backend for cold emails, project not completed',
    type: 'learning'
  },
  {
    id: 'QRDive-launch',
    date: '2024-10',
    title: 'QRDive SaaS Launch',
    description: 'First SaaS with Stripe subscriptions and QR tracking',
    type: 'launch'
  },
  {
    id: 'ads-test-webresolute',
    date: '2024-09',
    title: 'Spent €200 on Ads',
    description: 'Tried ads for Webresolute → no clients, wasted money',
    type: 'learning'
  },
  {
    id: 'stripe-boilerplate',
    date: '2025-02',
    title: 'Stripe Boilerplate Build',
    description: 'Created boilerplate to save weeks on future SaaS billing integrations',
    type: 'learning'
  },
  {
    id: 'ads-test-qrdive',
    date: '2025-03',
    title: 'Spent €200 Ads on QRDive',
    description: 'Another failed ad test, deeper learning on ads creation',
    type: 'learning'
  },
  {
    id: 'shoptekst-launch',
    date: '2025-06',
    title: 'Shoptekst Launched',
    description: 'SEO-rich product description generator built in 1 week',
    type: 'launch'
  },
  {
    id: 'barbeon-start',
    date: '2025-07',
    title: 'Barbeon MVP Landing Page',
    description: 'Barber booking platform idea validation via landing page',
    type: 'launch'
  },
  {
    id: 'halalspace-launch',
    date: '2025-08',
    title: 'Halalspace MVP Launched',
    description: 'Local event posting platform launched in 1 week',
    type: 'launch'
  },
  {
    id: 'invoicor-launch',
    date: '2025-08',
    title: 'Invoicor Built in 10h',
    description: 'Launched free invoice generator tool',
    type: 'launch'
  },
  {
    id: 'internship-scraper-start',
    date: '2025-09',
    title: 'Internship Scraper Start',
    description: 'Started scraper for internships and jobs, expandable to CV checker',
    type: 'learning'
  }
];

export const personalInfo = {
  name: 'Gin',
  title: 'SaaS Founder & Indie Hacker',
  bio: 'Building my way to $1M ARR through multiple SaaS products. I share everything I learn about building, growing, and scaling software businesses.',
  currentMRR: 0,
  totalUsers: 124,
  productsBuilt: 13,
  yearsBuilding: 2,
  location: 'The Netherland',
  email: 'qingge43@gmail.com',
  social: {
    twitter: '',
    linkedin: '',
    github: 'https://github.com/xgino'
  }
};