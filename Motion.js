import React from 'react';
import { motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, duration = 0.7, y = 40 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export const ScaleOnHover = ({ children }) => (
  <motion.div whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 300 }}>
    {children}
  </motion.div>
);

export const SlideIn = ({ children, delay = 0, x = -60, duration = 0.7 }) => (
  <motion.div
    initial={{ opacity: 0, x }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export const Card3DTilt = ({ children }) => (
  <motion.div
    whileHover={{ rotateY: 15, rotateX: -10, scale: 1.07 }}
    whileTap={{ rotateY: -15, rotateX: 10, scale: 0.97 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    style={{ perspective: 1000 }}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, staggerChildren = 0.1 }) => (
  <motion.div
    initial="hidden"
    animate="show"
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, y = 20 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y },
      show: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);
