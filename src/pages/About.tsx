import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Users, 
  Code, 
  Target,
  Coffee,
  Lightbulb,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';
import { personalInfo, milestones } from '@/data/portfolio';

const skills = [
  { category: 'Frontend', techs: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
  { category: 'Backend', techs: ['Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB'] },
  { category: 'SaaS Tools', techs: ['Stripe', 'SendGrid', 'Mixpanel', 'Intercom', 'Vercel'] },
  { category: 'Marketing', techs: ['SEO', 'Content Marketing', 'Email Marketing', 'Social Media'] }
];

const values = [
  {
    icon: Coffee,
    title: 'Ship Fast, Learn Faster',
    description: 'I believe in rapid iteration and learning from real user feedback rather than endless planning.'
  },
  {
    icon: Lightbulb,
    title: 'Transparency First',
    description: 'I share everything - successes, failures, revenue numbers, and lessons learned along the way.'
  },
  {
    icon: Target,
    title: 'Customer-Centric',
    description: 'Every product decision starts with understanding and solving real customer problems.'
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Growth',
    description: 'Building profitable, sustainable businesses rather than chasing unsustainable metrics.'
  }
];

export default function About() {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - (currentYear - personalInfo.yearsBuilding);

  return (
    <>
      <SEOHead 
        title="About Alex Johnson - SaaS Founder & Indie Hacker"
        description="Learn about my journey from developer to SaaS founder, building multiple products on the road to $1M ARR. My story, values, and approach to building software businesses."
        keywords="Alex Johnson, SaaS founder, indie hacker, entrepreneur, software developer, startup founder"
      />
      
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Profile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1 text-center lg:text-left"
              >
                <div className="w-48 h-48 mx-auto lg:mx-0 mb-6 hero-gradient rounded-full flex items-center justify-center text-white text-6xl font-bold glow">
                  AJ
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {personalInfo.yearsBuilding} years building SaaS
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-success">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    ${(personalInfo.currentMRR / 1000).toFixed(0)}K MRR
                  </div>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Hey, I'm {personalInfo.name.split(' ')[0]} 👋
                  </h1>
                  <h2 className="text-xl text-primary mb-6">
                    {personalInfo.title}
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="leading-relaxed">
                    {personalInfo.bio}
                  </p>
                  <p className="leading-relaxed">
                    Over the past {personalInfo.yearsBuilding} years, I've built {personalInfo.productsBuilt} different software products, 
                    serving over {(personalInfo.totalUsers / 1000).toFixed(0)}K users worldwide. Some succeeded, others failed spectacularly, 
                    but each taught me valuable lessons about building, marketing, and scaling SaaS businesses.
                  </p>
                  <p className="leading-relaxed">
                    I believe in building in public, sharing both wins and losses, and helping other indie hackers 
                    avoid the mistakes I've made. This transparency has helped me connect with an amazing community 
                    of builders and entrepreneurs.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/portfolio">
                    <Button size="lg" className="hero-gradient group">
                      <span>View My Work</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg">
                      Get In Touch
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                My Journey in Numbers
              </h2>
              <p className="text-lg text-muted-foreground">
                Key metrics from my entrepreneurial journey
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, label: 'Monthly MRR', value: `$${(personalInfo.currentMRR / 1000).toFixed(0)}K`, color: 'text-success' },
                { icon: Users, label: 'Total Users', value: `${(personalInfo.totalUsers / 1000).toFixed(1)}K`, color: 'text-primary' },
                { icon: Code, label: 'Products Built', value: personalInfo.productsBuilt.toString(), color: 'text-purple-500' },
                { icon: Target, label: 'Years Building', value: personalInfo.yearsBuilding.toString(), color: 'text-orange-500' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <Card className="border-card-border card-gradient p-6">
                      <Icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                My Values & Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide how I build products and run my businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <Card className="border-card-border card-gradient h-full">
                      <CardHeader>
                        <Icon className="h-8 w-8 text-primary mb-2" />
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Skills & Technologies
              </h2>
              <p className="text-lg text-muted-foreground">
                The tools and technologies I use to build and scale SaaS products
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <Card className="border-card-border card-gradient h-full">
                    <CardHeader>
                      <CardTitle className="text-lg text-center">
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {skillGroup.techs.map((tech) => (
                          <div 
                            key={tech}
                            className="text-sm text-muted-foreground text-center py-1 px-2 rounded bg-accent"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I love connecting with other builders, sharing insights, and helping fellow entrepreneurs. 
                Whether you want to discuss SaaS strategy, share your own journey, or just say hi, I'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={personalInfo.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="hero-gradient group">
                    <span>Follow on Twitter</span>
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </a>
                
                <a 
                  href={`mailto:${personalInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    Send me an email
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