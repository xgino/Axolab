import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const typeConfig = {
  'Success': { 
    color: 'bg-success text-success-foreground', 
    icon: TrendingUp,
    gradient: 'success-gradient'
  },
  'Free Tool': { 
    color: 'bg-primary text-primary-foreground', 
    icon: Users,
    gradient: 'hero-gradient'
  },
  'Failed': { 
    color: 'bg-destructive text-destructive-foreground', 
    icon: Calendar,
    gradient: 'bg-destructive'
  },
  'Ongoing': { 
    color: 'bg-warning text-warning-foreground', 
    icon: Calendar,
    gradient: 'bg-warning'
  }
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const config = typeConfig[project.type];
  const Icon = config.icon;

  const formatDuration = () => {
    const start = new Date(project.duration.start).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
    const end = project.duration.end 
      ? new Date(project.duration.end).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short' 
        })
      : 'Ongoing';
    return `${start} → ${end}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Card className="h-full overflow-hidden border-card-border hover:shadow-lg hover:glow transition-all duration-300 card-gradient">
        <CardHeader className="p-0">
          {/* Project Banner */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 hero-gradient opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl text-primary/30 font-bold">
                {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
              </div>
            </div>
            
            {/* Type Badge */}
            <div className="absolute top-4 right-4">
              <Badge className={`${config.color} flex items-center space-x-1`}>
                <Icon className="h-3 w-3" />
                <span>{project.type}</span>
              </Badge>
            </div>

            {/* ARR Badge */}
            {project.arrMilestone && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-success text-success-foreground flex items-center space-x-1">
                  <DollarSign className="h-3 w-3" />
                  <span>{project.arrMilestone}</span>
                </Badge>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Title & Description */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center text-sm text-subtle">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDuration()}
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="flex space-x-4 text-sm">
                {project.metrics.users && (
                  <div className="flex items-center text-primary">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{project.metrics.users.toLocaleString()} users</span>
                  </div>
                )}
                {project.metrics.revenue && (
                  <div className="flex items-center text-success">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span>${project.metrics.revenue.toLocaleString()}</span>
                  </div>
                )}
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="text-xs"
                >
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.tags.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex justify-between items-center">
          <Link to={`/case-study/${project.id}`}>
            <Button variant="outline" size="sm" className="group/btn">
              <span>View Case Study</span>
              <ExternalLink className="h-3 w-3 ml-2 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
            </Button>
          </Link>

          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="hero-gradient">
                <span>Visit Live</span>
                <ExternalLink className="h-3 w-3 ml-2" />
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;