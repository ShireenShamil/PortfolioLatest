'use client';

import React from 'react';
import Image from 'next/image';
import { achievements } from '@/assets/assets';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <div id="achievements" className="py-12 dark:bg-darkTheme px-4 sm:px-6">
      <h2 className="text-4xl font-bold dark:text-white text-blue-900 mb-10 font-Ovo text-center">
        My Achievements
      </h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I have actively participated in university-level and national competitions that challenged both my technical and creative skills. These include hackathons, UI/UX design contests, and coding challenges that strengthened my problem-solving under pressure. These experiences improved my teamwork, innovation, and adaptability, building both confidence and practical expertise.
      </motion.p>

      <div className="max-w-screen-xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="dark:hover:bg-darkHover hover:bg-gray-300 bg-gray-200 dark:bg-darkTheme dark:border-white dark:border-2 border-2 border-darkTheme rounded-2xl shadow-md p-4 w-[90%] sm:w-[17rem] h-[24rem] cursor-pointer flex flex-col justify-between items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ y: -4 }}
            title={item.title}
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-blue-900 mb-3">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <h3 className="text-blue-900 dark:text-yellow-300 font-semibold text-center text-sm mb-2">
              {item.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-200 text-xs text-center mb-3 break-words">
              {item.description}
            </p>

            {item.certificateLink && (
              <a
                href={item.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-auto bg-white text-black border border-black hover:bg-black hover:text-white px-4 py-1.5 rounded-full text-xs font-semibold transition duration-300"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
