import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo } from '@/data/portfolio';

const socialLinks = [
  {
    name: 'Twitter',
    href: personalInfo.social.twitter,
    icon: Twitter,
    color: 'hover:text-blue-400'
  },
  {
    name: 'LinkedIn',
    href: personalInfo.social.linkedin,
    icon: Linkedin,
    color: 'hover:text-blue-600'
  },
  {
    name: 'GitHub',
    href: personalInfo.social.github,
    icon: Github,
    color: 'hover:text-gray-400'
  },
  {
    name: 'Email',
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    color: 'hover:text-green-500'
  }
];

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'About', href: '/about' }
    ]
  },
  {
    title: 'Projects',
    links: [
      { name: 'SaaS Analytics Pro', href: '/case-study/saas-analytics' },
      { name: 'Startup Toolkit', href: '/case-study/startup-toolkit' },
      { name: 'All Projects', href: '/portfolio' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'SaaS Pricing Guide', href: '/blog/saas-pricing-strategy' },
      { name: 'Startup Lessons', href: '/blog/failed-startup-lessons' },
      { name: 'Stripe Integration', href: '/blog/stripe-integration-guide' }
    ]
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:glow transition-all duration-300">
                AJ
              </div>
              <span className="text-xl font-semibold text-foreground">
                Alex Johnson
              </span>
            </Link>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Building my way to $1M ARR through multiple SaaS products. 
              I share everything I learn about building, growing, and scaling software businesses.
            </p>

            {/* Current Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold text-success">
                  ${(personalInfo.currentMRR / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-muted-foreground">Monthly MRR</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  {(personalInfo.totalUsers / 1000).toFixed(1)}K
                </div>
                <div className="text-sm text-muted-foreground">Total Users</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg bg-accent hover:bg-accent/80 text-muted-foreground ${social.color} transition-all duration-200`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm animated-underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link 
                to="/privacy" 
                className="hover:text-foreground transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-foreground transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <div className="flex items-center space-x-1">
                <span>Built with</span>
                <a 
                  href="https://lovable.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Lovable</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;