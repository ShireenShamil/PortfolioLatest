'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { achievements } from '@/assets/assets';

const Achievements = () => {
  return (
    <div id="achievements" className="py-16 px-4 sm:px-6 md:px-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center font-Ovo text-blue-900 dark:text-white mb-14">
        My Achievements
      </h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I have actively participated in university-level and national competitions that challenged
        both my technical and creative skills. These include hackathons, UI/UX design contests, and
        coding challenges that strengthened my problem-solving under pressure. These experiences
        improved my teamwork, innovation, and adaptability, building both confidence and practical
        expertise.
      </motion.p>

      <div className="relative max-w-7xl mx-auto">
        {/* Center vertical line (only on md+) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black dark:bg-white rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-28 gap-x-12 md:gap-x-40 relative z-10">
          {achievements.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? 'md:justify-end' : 'md:justify-start'
                } items-start ${!isLeft ? 'md:mt-16' : ''}`}
              >
                {/* Dot badge */}
                <div
                  className={`absolute top-[-2rem] md:top-5 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 overflow-hidden bg-white/30 dark:bg-darkCard z-20 shadow-xl
                    ${isLeft ? 'md:right-[-2.5rem]' : 'md:left-[-2.5rem]'} border-blue-900 dark:border-white`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>

                {/* Timeline Card */}
                <div className="mt-10 md:mt-0 w-full sm:w-[90vw] max-w-sm sm:max-w-md md:w-[90%] bg-white/30 dark:bg-darkTheme backdrop-blur-lg p-4 sm:p-6 rounded-3xl shadow-2xl border dark:border-white border-blue-200">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>

                  {item.certificateLink && (
                    <a
                      href={item.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs font-semibold bg-blue-900 text-white dark:bg-white dark:text-black px-4 py-1.5 rounded-full hover:scale-105 transition-transform"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
