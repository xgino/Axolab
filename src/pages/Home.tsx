import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Code, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';
import Timeline from '@/components/Timeline';
import ProjectCard from '@/components/ProjectCard';
import { personalInfo, milestones, projects } from '@/data/portfolio';

const stats = [
  {
    label: 'Monthly MRR',
    value: `$${(personalInfo.currentMRR / 1000).toFixed(0)}K`,
    icon: TrendingUp,
    color: 'text-success'
  },
  {
    label: 'Total Users',
    value: `${(personalInfo.totalUsers / 1000).toFixed(1)}K`,
    icon: Users,
    color: 'text-primary'
  },
  {
    label: 'Products Built',
    value: personalInfo.productsBuilt.toString(),
    icon: Code,
    color: 'text-purple-500'
  },
  {
    label: 'Years Building',
    value: personalInfo.yearsBuilding.toString(),
    icon: Target,
    color: 'text-orange-500'
  }
];

export default function Home() {
  const featuredProjects = projects.filter(p => p.type === 'Success' || p.type === 'Free Tool').slice(0, 3);

  return (
    <>
      <SEOHead 
        title="Alex Johnson - SaaS Founder & Indie Hacker"
        description="Follow my journey building multiple SaaS products on the road to $1M ARR. Learn from successes, failures, and everything in between."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="absolute top-20 left-10 w-72 h-72 hero-gradient rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-20 right-10 w-96 h-96 success-gradient rounded-full blur-3xl opacity-10" />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent border border-border text-sm text-muted-foreground mb-8">
                  <TrendingUp className="h-4 w-4 mr-2 text-success" />
                  Currently at ${(personalInfo.currentMRR / 1000).toFixed(0)}K MRR • Growing towards $1M ARR
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-glow"
              >
                Building SaaS Products
                <span className="hero-gradient bg-clip-text text-transparent"> One Launch</span> at a Time
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                I'm {personalInfo.name}, a {personalInfo.title.toLowerCase()} documenting my journey to $1M ARR. 
                I share the successes, failures, and lessons learned from building {personalInfo.productsBuilt} products over {personalInfo.yearsBuilding} years.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              >
                <Link to="/portfolio">
                  <Button size="lg" className="hero-gradient text-lg px-8 py-4 group">
                    <span>Explore My Projects</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>

                <Link to="/blog">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                    Read My Journey
                  </Button>
                </Link>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={stat.label} className="border-card-border card-gradient">
                      <CardContent className="p-6 text-center">
                        <Icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                        <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                My SaaS Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones and lessons learned on the path to $1M ARR
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Timeline milestones={milestones} />
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of my most successful and impactful SaaS products
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="group">
                  <span>View All Projects</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Follow My Journey to $1M ARR
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get insights, lessons, and updates as I build, launch, and scale SaaS products. 
                Learn from both my successes and failures.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/blog">
                  <Button size="lg" variant="secondary" className="px-8 py-4">
                    Read My Blog
                  </Button>
                </Link>
                <a 
                  href={personalInfo.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
                    Follow on Twitter
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}