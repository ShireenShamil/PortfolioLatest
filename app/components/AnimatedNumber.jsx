// 'use client'
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedNumber = ({ end, label, duration = 2.5, prefix = '', suffix = '' , delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,    
  });

  return (
   
    <motion.div
      ref={ref}
      className="
        p-4 rounded-lg shadow-lg min-w-[200px] flex-1 max-w-[280px] box-border
        bg-white dark:bg-darkTheme
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
        text-center
        flex flex-col items-center justify-center
      "
       initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="
          text-6xl font-bold mb-2
          text-darkTheme-600 dark:text-white
          transition-colors duration-300
        "
        // Inline style for very specific cases, though 'text-5xl' handles font size here.
        // For example, if you needed a precise pixel value not covered by Tailwind's scale:
        // style={{ fontSize: '3.125rem' }} // This would be 50px
      >
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={duration}
            separator=","
            decimals={0}
            delay={delay}
            prefix={prefix}
            suffix={suffix}
          />
        ) : (
          `${prefix}0${suffix}`
        )}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="
          text-lg text-gray-600 dark:text-gray-300
          transition-colors duration-300
        "
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default AnimatedNumber;
