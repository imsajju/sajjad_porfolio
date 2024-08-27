'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data';
// import { skills } from '@/data';

const Skills = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(true); // Initialize with true to initially show cards

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrollingDown(currentScrollY > (window.scrollY || 0));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the element is in view
    triggerOnce: true // Only trigger once
  });

  return (
    <div className="section" id="skill">
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h1 className="text-[60px] font-serif mb-4 text-slate-200">My Skills</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className={`group bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center m-4 ${isScrollingDown ? 'animate-fadeIn' : 'animate-fadeOut'}`}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              whileHover={{ scale: 1.3, boxShadow: '0px 10px 20px rgba(139,6,187, 0.98)' }} // Light blue shadow on hover
              whileTap={{ scale: 0.95 }} // Scale down on tap
            >
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
              />
              <motion.p
                className="text-center text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
