import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'destructive';
  size?: 'sm' | 'default' | 'lg';
  interactive?: boolean;
  onClick?: () => void;
}

const tagVariants = {
  default: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  outline: 'border border-border text-foreground bg-transparent',
  success: 'bg-success text-success-foreground',
  warning: 'bg-warning text-warning-foreground',
  destructive: 'bg-destructive text-destructive-foreground'
};

const tagSizes = {
  sm: 'text-xs px-2 py-1',
  default: 'text-sm px-2.5 py-1.5',
  lg: 'text-base px-3 py-2'
};

export function Tag({ 
  children, 
  variant = 'default', 
  size = 'default',
  interactive = false,
  onClick 
}: TagProps) {
  const Component = interactive ? motion.button : motion.div;
  
  return (
    <Component
      whileHover={interactive ? { scale: 1.05 } : undefined}
      whileTap={interactive ? { scale: 0.95 } : undefined}
      onClick={onClick}
      className={`
        inline-flex items-center rounded-full font-medium transition-all duration-200
        ${tagVariants[variant]}
        ${tagSizes[size]}
        ${interactive ? 'cursor-pointer hover:shadow-md' : ''}
      `}
    >
      {children}
    </Component>
  );
}

export default Tag;