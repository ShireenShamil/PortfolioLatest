'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaCertificate,
  FaUsers,
  FaLanguage,
  FaLaptopCode,
} from 'react-icons/fa';

const sections = [
  { id: 'skills', label: 'Skills & Technologies', icon: <FaLaptopCode /> },
  { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
  { id: 'certifications', label: 'Certifications', icon: <FaCertificate /> },
  { id: 'volunteering', label: 'Volunteering', icon: <FaUsers /> },
  { id: 'languages', label: 'Languages', icon: <FaLanguage /> },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const intro = `Hi! I'm Shireen Shamil from Panadura, currently an undergraduate at the University of Moratuwa. I'm passionate about technology, design, and building useful digital products.`;

  const skills = {
    Languages: ['C', 'CSS3', 'JavaScript', 'Java', 'HTML5', 'PHP', 'Python', 'TypeScript'],
    Frameworks: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Express', 'Redux', 'Socket.io', 'MUI'],
    Databases: ['Postgres', 'MongoDB', 'MySQL', 'MicrosoftSQLServer'],
    Cloud: ['AWS', 'Docker', 'Vercel', 'Cisco'],
    Design: ['Adobe Acrobat Reader', 'Adobe XD', 'Figma', 'Gimp', 'Blender', 'Adobe Photoshop', 'Canva', 'Sketch'],
    ML: ['TensorFlow', 'scikit-learn', 'PyTorch', 'Matplotlib', 'NumPy', 'Pandas'],
    Tools: ['Git', 'GitHub', 'Jira', 'Postman', 'NPM', 'JWT', 'Anaconda'],
  };

  const education = [
    {
      degree: 'BSc in Information Technology',
      school: 'University of Moratuwa',
      year: '2021 - Present',
      result: "Current GPA: 3.7 / 4.00 | L1S1 - 3.22 | L1S2 - 3.83 (Dean's List)| L2S1 - 3.8 (Dean's List)",
    },
    {
      degree: 'Higher Diploma in English Language and Literature',
      school: 'Aquinas College Of Higher Studies',
      year: '2023 - 2025',
      result: 'Result: Merit Pass',
    },
    {
      degree: 'GCE A/L - Biological Science Stream',
      school: 'Jeelan Navodya National Central College',
      year: '2019 - 2021',
      result: 'Z-Score: 1.75 | Result: 2AB',
    },
  ];

  const certifications = [
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Coursera',
      year: 2025,
    },
    {
      title: 'Neural Networks and Deep Learning',
      issuer: 'Coursera',
      year: 2025,
    },
    {
      title: 'Deloitte Australia - Data Analytics Job Simulation',
      issuer: 'Deloitte',
      year: 2025,
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services',
      year: 2025,
    },
    {
      title: 'React.js AI chatbot with OpenAI',
      issuer: 'Udemy',
      year: 2025,
    },
  ];

  const volunteering = [
    {
      role: 'ICSC Ambassador - Sri Lanka',
      org: 'International Computer Science Convention',
      year: '2025 - Present',
    },
    {
      role: 'Designer',
      org: 'Rotaract Club of University of Moratuwa',
      year: '2023',
    },
    {
      role: 'Web Master',
      org: 'Panadura Undergraduates Association',
      year: '2023',
    },
    {
      role: 'Blogger',
      org: 'Medium',
      year: '2024 - Present',
    },
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Sinhala', level: 'Fluent' },
    { name: 'Tamil', level: 'Fluent' },
    { name: 'Korean', level: 'Basic' },
    { name: 'French', level: 'Basic' },
  ];

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-10 rounded-3xl shadow-xl dark:bg-gray-900/70 backdrop-blur-lg"
    >
      <h2 className="text-4xl sm:text-5xl mb-10 font-extrabold text-blue-900 dark:text-white dark-text-bold text-center tracking-wide drop-shadow-md">
        About Me
      </h2>
      <p className="text-center text-black dark:text-white text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed tracking-wide">
        {intro}
      </p>

      {/* Tabs Navigation */}
      <nav className="flex flex-wrap gap-3 border-b border-blue-300 dark:border-blue-600 mb-10 sm:flex-nowrap sm:space-x-6 justify-center">
        {sections.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 py-3 px-5 rounded-t-xl transition-all duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto ${
              activeTab === id
                ? 'text-blue-900 dark:text-blue-300 border-b-4 border-blue-800 dark:border-blue-400 shadow-[0_4px_10px_rgb(219_39_119_/_0.3)]'
                : 'text-blue-800 dark:text-gray-300 hover:text-blue-800 border-b-4 border-transparent hover:border-blue-800 dark:hover:border-blue-400'
            }`}
          >
            <span className="text-xl sm:text-2xl">{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Tabs Content */}
      <section>
        {activeTab === 'skills' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {Object.entries(skills).map(([category, techs]) => (
              <div key={category} className="flex items-center flex-wrap gap-3 mb-6">
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 whitespace-nowrap">{category}:</h3>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech, index) => (
                    <motion.span
                      key={`${tech}-${index}`}
                      whileHover={{ scale: 1.1 }}
                      className="cursor-pointer bg-white/30 dark:bg-gray-800/50 text-black dark:text-white rounded-full px-4 py-2 text-sm sm:text-base font-medium shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      title={tech}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'education' && (
          <motion.div className="flex flex-wrap justify-center gap-6 py-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {education.map(({ degree, school, year, result }) => (
              <article key={`${degree}-${school}`} className="min-w-[250px] max-w-xs bg-white/30 dark:bg-gray-800/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-black dark:text-white">
                <h4 className="font-bold text-2xl lg:text-xl lg:mb-2">{degree}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-lg">{school}</p>
                <p className="italic">{year}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{result}</p>
              </article>
            ))}
          </motion.div>
        )}

        {activeTab === 'certifications' && (
          <motion.ul className="list-disc list-inside space-y-5 text-black dark:text-white px-4 sm:px-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {certifications.map(({ title, issuer, year }) => (
              <li key={`${title}-${issuer}`} className="text-lg font-semibold hover:text-blue-900 dark:hover:text-blue-400 cursor-default transition-colors">
                {title} <span className="font-normal text-gray-600 dark:text-gray-400">— {issuer} ({year})</span>
              </li>
            ))}
          </motion.ul>
        )}

        {activeTab === 'volunteering' && (
          <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {volunteering.map(({ role, org, year }) => (
              <li key={`${role}-${org}`} className="bg-white/30 dark:bg-gray-800/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-black dark:text-white">
                <p className="font-semibold text-xl">{role}</p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">{org}</p>
                <p className="italic">{year}</p>
              </li>
            ))}
          </motion.ul>
        )}

        {activeTab === 'languages' && (
          <motion.div className="flex flex-col sm:flex-row sm:flex-nowrap gap-4 sm:gap-6 py-4 px-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {languages.map(({ name, level }) => (
              <div key={name} className="flex justify-between items-center bg-white/30 dark:bg-gray-800/50 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow text-black dark:text-white font-semibold text-lg sm:min-w-[140px] flex-shrink-0">
                <span>{name}</span>
                <span className="ml-4 font-medium text-base">{level}</span>
              </div>
            ))}
          </motion.div>
        )}
      </section>
    </motion.div>
  );
};

export default About;
