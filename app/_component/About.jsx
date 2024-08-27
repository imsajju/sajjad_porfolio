'use client'
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const paragraph = `
 Hi, I'm Md Sajjad, a dedicated Computer Science Engineering graduate with a specialization in Artificial Intelligence and Machine Learning, graduating in 2025. My journey in tech began with a diploma in Computer Engineering from 2019 to 2022, which laid the foundation for my deep interest in software engineering.

Throughout my academic and professional experiences, I've developed a strong proficiency in software engineering principles, web development, and data structures. My internship as a Web Support Engineer at Brand 2 Grand in Gurugram allowed me to apply my skills in managing and maintaining client websites, further fueling my passion for creating efficient, reliable software solutions.

What excites me most about software engineering is the opportunity to solve complex problems and create systems that make a real impact. Whether it's developing robust web applications, optimizing data processes, or exploring the latest in AI and ML, I'm always eager to tackle new challenges and expand my knowledge.

I'm committed to continuous learning and professional growth, always staying updated with the latest industry trends and best practices. My goal is to contribute to innovative projects that push the boundaries of what's possible in technology.
  `;

  const sentences = paragraph.split('\n').filter(Boolean);

  return (
    <div className="mt-12 p-8">
      <h1 className="text-5xl font-serif font-bold mb-4 text-slate-200">About Me</h1>
      <div className="text-lg  font-serif leading-relaxed text-slate-300">
        {sentences.map((sentence, index) => (
          <p key={index} className="mb-2">
            {sentence.split(' ').map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block mr-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: wordIndex * 0.05 }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
