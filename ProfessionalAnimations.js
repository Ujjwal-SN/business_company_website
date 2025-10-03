import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

// Professional fade-in with direction and stagger - optimized for performance
export const FadeInPro = React.memo(({ children, direction = "up", delay = 0, duration = 0.6, distance = 30 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "100px" });
  
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        scale: 0.95
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1
      } : {}}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
        type: "tween"
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
});

// Advanced counter animation - optimized for performance
export const CounterAnimation = React.memo(({ end, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animationRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOutCubic * end));
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
});

// Floating element animation - optimized for performance
export const FloatingElement = React.memo(({ children, speed = 3, distance = 20 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
        rotate: [0, 2, -2, 0]
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
});

// Professional hover card with 3D transform - optimized for performance
export const HoverCard3D = React.memo(({ children, intensity = 10 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      style={{
        perspective: "1000px",
        willChange: "transform"
      }}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? intensity * 0.5 : 0,
          rotateY: isHovered ? intensity * 0.3 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ 
          duration: 0.3,
          type: "tween"
        }}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform"
        }}
        className="relative"
      >
        {children}
        {/* Glow effect on hover - simplified for performance */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-lg -z-10"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              filter: "blur(20px)",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
});

// Text reveal animation - optimized for performance
export const TextReveal = React.memo(({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });
  
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ 
          duration: 0.8, 
          delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }}
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
});

// Morphing background animation - optimized for performance
export const MorphingBackground = React.memo(({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1, opacity: 0.5, rotate: 0 }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.6, 0.5],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl" />
      </motion.div>
      {children}
    </div>
  );
});

// Professional loading skeleton - optimized for performance
export const LoadingSkeleton = React.memo(({ className = "h-4 bg-gray-300 rounded" }) => {
  return (
    <motion.div
      className={`animate-pulse ${className}`}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{ willChange: "opacity" }}
    />
  );
});

// Stagger container for professional reveals - optimized for performance
export const StaggerReveal = React.memo(({ children, staggerDelay = 0.1, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      style={{ willChange: "transform" }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" }
            }
          }}
          style={{ willChange: "transform, opacity" }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
});

// Progress bar animation
export const ProgressBar = ({ percentage, label, color = "blue" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    teal: "bg-teal-500"
  };

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full ${colorClasses[color]}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
};

// Parallax section
export const ParallaxSection = ({ children, speed = 0.5 }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};
