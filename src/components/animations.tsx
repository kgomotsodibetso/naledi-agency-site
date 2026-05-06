
import { motion } from 'framer-motion';
import React from 'react';

export const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }: { 
  children: React.ReactNode; 
  delay?: number; 
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 0.6, 
        delay, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for professional feel
      } 
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const HoverCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
