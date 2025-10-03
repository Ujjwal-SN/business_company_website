import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

// Floating particles background animation
export const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/10 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Advanced reveal animation with scroll trigger
export const ScrollReveal = ({ children, direction = "up", delay = 0, duration = 0.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
      scale: 0.9,
      rotateX: direction === "up" ? 10 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Magnetic hover effect
export const MagneticHover = ({ children, strength = 0.3 }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * strength;
    const y = (clientY - top - height / 2) * strength;
    
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.1s ease-out' }}
      className="inline-block"
    >
      {children}
    </div>
  );
};

// Parallax scroll effect
export const ParallaxElement = ({ children, speed = 0.5 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

// Text animation with typewriter effect
export const TypewriterText = ({ text, delay = 0, speed = 0.05 }) => {
  const [displayText, setDisplayText] = React.useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed * 1000);
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  );
};

// 3D Card hover effect (CSS-based)
export const Card3D = ({ children, intensity = 15 }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    
    const rotateX = -y * intensity;
    const rotateY = x * intensity;
    
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transition: 'transform 0.2s ease-out',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
};

// Morphing shapes animation
export const MorphingBlob = ({ size = 200, colors = ['#667eea', '#764ba2'] }) => {
  return (
    <div 
      className="relative animate-morphing"
      style={{ width: size, height: size }}
    >
      <div 
        className="absolute inset-0 rounded-full opacity-70 animate-pulse"
        style={{
          background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
          filter: 'blur(1px)',
        }}
      />
      <div 
        className="absolute inset-2 rounded-full opacity-50 animate-bounce"
        style={{
          background: `radial-gradient(circle, ${colors[1]}, transparent)`,
          animationDelay: '0.5s',
        }}
      />
    </div>
  );
};

// Infinite scroll text
export const InfiniteScrollText = ({ text, speed = 50 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -100] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="inline-block"
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="px-8">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// Glitch text effect
export const GlitchText = ({ children, intensity = 1 }) => {
  return (
    <div className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 text-red-500"
        animate={{
          x: [0, -2 * intensity, 2 * intensity, 0],
          opacity: [0, 0.7, 0.7, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-blue-500"
        animate={{
          x: [0, 2 * intensity, -2 * intensity, 0],
          opacity: [0, 0.7, 0.7, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.1,
        }}
      >
        {children}
      </motion.span>
    </div>
  );
};

// FadeInPro animation component
export const FadeInPro = ({ children, direction = "up", delay = 0, duration = 0.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// StaggerReveal animation component
export const StaggerReveal = ({ children, className = "", staggerDelay = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
