import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Users, Lightbulb, Rocket } from 'lucide-react';
import { Milestone } from '@/data/portfolio';

interface TimelineProps {
  milestones: Milestone[];
}

const typeConfig = {
  launch: { 
    icon: Rocket, 
    color: 'text-primary', 
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/20'
  },
  revenue: { 
    icon: TrendingUp, 
    color: 'text-success', 
    bgColor: 'bg-success/10',
    borderColor: 'border-success/20'
  },
  users: { 
    icon: Users, 
    color: 'text-blue-500', 
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  feature: { 
    icon: Calendar, 
    color: 'text-purple-500', 
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  learning: { 
    icon: Lightbulb, 
    color: 'text-warning', 
    bgColor: 'bg-warning/10',
    borderColor: 'border-warning/20'
  }
};

export function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="space-y-8">
      {milestones.map((milestone, index) => {
        const config = typeConfig[milestone.type];
        const Icon = config.icon;
        const isLast = index === milestones.length - 1;

        return (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="relative flex items-start space-x-4"
          >
            {/* Timeline Line */}
            {!isLast && (
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-border" />
            )}

            {/* Icon */}
            <div className={`
              relative z-10 flex items-center justify-center w-12 h-12 rounded-full 
              ${config.bgColor} ${config.borderColor} border-2 ${config.color}
            `}>
              <Icon className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {milestone.description}
                  </p>
                </div>
                
                <div className="text-right ml-4">
                  <div className="text-sm font-medium text-foreground">
                    {new Date(milestone.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short'
                    })}
                  </div>
                  {milestone.value && (
                    <div className={`text-sm font-semibold ${config.color}`}>
                      {milestone.value}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Timeline;