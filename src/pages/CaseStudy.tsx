import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  TrendingUp, 
  Users, 
  DollarSign,
  CheckCircle,
  XCircle,
  Lightbulb,
  Code,
  Database,
  Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import SEOHead from '@/components/SEOHead';
import { projects } from '@/data/portfolio';

const sectionIcons = {
  frontend: Code,
  backend: Database,
  database: Database,
  tools: Wrench
};

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const formatDuration = () => {
    const start = new Date(project.duration.start).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
    const end = project.duration.end 
      ? new Date(project.duration.end).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long' 
        })
      : 'Ongoing';
    return `${start} → ${end}`;
  };

  const getStatusIcon = () => {
    switch (project.type) {
      case 'Success':
        return <CheckCircle className="h-5 w-5 text-success" />;
      case 'Failed':
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <TrendingUp className="h-5 w-5 text-primary" />;
    }
  };

  const getStatusColor = () => {
    switch (project.type) {
      case 'Success':
        return 'text-success border-success/20 bg-success/10';
      case 'Failed':
        return 'text-destructive border-destructive/20 bg-destructive/10';
      case 'Free Tool':
        return 'text-primary border-primary/20 bg-primary/10';
      default:
        return 'text-warning border-warning/20 bg-warning/10';
    }
  };

  return (
    <>
      <SEOHead 
        title={`${project.title} Case Study - AxoLab`}
        description={`${project.longDescription.slice(0, 160)}...`}
        keywords={`${project.title}, ${project.tags.join(', ')}, case study, SaaS`}
      />
      
      <div className="min-h-screen pt-20">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/portfolio">
                <Button variant="ghost" className="mb-8 group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                  Back to Portfolio
                </Button>
              </Link>

              <div className="flex items-center space-x-3 mb-6">
                {getStatusIcon()}
                <Badge className={`${getStatusColor()} flex items-center space-x-1`}>
                  <span>{project.type}</span>
                </Badge>
                {project.arrMilestone && (
                  <Badge className="bg-success text-success-foreground">
                    {project.arrMilestone}
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDuration()}
                </div>
                {project.metrics?.users && (
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {project.metrics.users.toLocaleString()} users
                  </div>
                )}
                {project.metrics?.revenue && (
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    ${project.metrics.revenue.toLocaleString()} revenue
                  </div>
                )}
              </div>

              {project.links?.live && (
                <div className="flex space-x-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="hero-gradient group">
                      <span>Visit Live Site</span>
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </Button>
                  </a>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">
                        <span>View Code</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Project Banner */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden hero-gradient flex items-center justify-center"
            >
              <div className="text-8xl md:text-9xl text-white/20 font-bold">
                {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tags */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">Tech Stack</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(project.techStack).map(([category, techs]) => {
                  const Icon = sectionIcons[category as keyof typeof sectionIcons] || Code;
                  return (
                    <Card key={category} className="border-card-border card-gradient">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg capitalize">
                          <Icon className="h-5 w-5 mr-2 text-primary" />
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lessons Learned */}
        {project.lessons && project.lessons.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/30">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center mb-8">
                  <Lightbulb className="h-6 w-6 mr-3 text-warning" />
                  <h2 className="text-2xl font-bold text-foreground">
                    {project.type === 'Failed' ? 'Lessons from Failure' : 'Key Lessons Learned'}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {project.lessons.map((lesson, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-card border border-card-border"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-semibold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-card-foreground leading-relaxed">
                        {lesson}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">More Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects
                  .filter(p => p.id !== project.id)
                  .slice(0, 2)
                  .map((relatedProject) => (
                    <Card key={relatedProject.id} className="border-card-border card-gradient hover:shadow-lg hover:glow transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={
                            relatedProject.type === 'Success' ? 'bg-success text-success-foreground' :
                            relatedProject.type === 'Failed' ? 'bg-destructive text-destructive-foreground' :
                            relatedProject.type === 'Free Tool' ? 'bg-primary text-primary-foreground' :
                            'bg-warning text-warning-foreground'
                          }>
                            {relatedProject.type}
                          </Badge>
                          {relatedProject.arrMilestone && (
                            <Badge className="bg-success text-success-foreground text-xs">
                              {relatedProject.arrMilestone}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg hover:text-primary transition-colors duration-200">
                          <Link to={`/case-study/${relatedProject.id}`}>
                            {relatedProject.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {relatedProject.description}
                        </p>
                        <Link to={`/case-study/${relatedProject.id}`}>
                          <Button variant="outline" size="sm" className="group">
                            <span>Read Case Study</span>
                            <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
              
              <div className="text-center mt-8">
                <Link to="/portfolio">
                  <Button variant="outline" className="group">
                    <span>View All Projects</span>
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}