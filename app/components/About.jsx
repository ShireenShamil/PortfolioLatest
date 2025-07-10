'use client';
import React, { useState } from 'react';
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', content: {} });

  const handleDialogOpen = (title, content) => {
    setDialogContent({ title, content });
    setOpenDialog(true);
  };

  const handleDialogClose = () => setOpenDialog(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-6 sm:px-[12%] py-10 scroll-mt-20"
    >
      {/* Headings */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-10 sm:gap-20 my-10 sm:my-20"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-48 sm:w-64 md:w-80 rounded-3xl max-w-none"
        >
          <Image src={assets.user_image} alt="User" className="w-full rounded-3xl" />
        </motion.div>

        {/* Description and Info List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-8 sm:mb-10 max-w-2xl font-Ovo text-base sm:text-lg">
            Hi, I'm Shireen Shamil — a passionate and curious individual who loves learning, creating, and growing. I enjoy working on meaningful projects, solving real-world problems, and constantly improving my skills.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, more }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                onClick={() => more && handleDialogOpen(title, more)}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 sm:p-8 cursor-pointer duration-500 hover:-translate-y-1 hover:[box-shadow:6px_6px_0_#000] hover:[background-color:#fcf4ff] dark:border-white dark:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-10 sm:w-12 mt-2" />
                <h3 className="my-4 sm:my-6 font-semibold text-gray-700 dark:text-white text-lg sm:text-xl">
                  {title}
                </h3>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-8 text-gray-700 font-Ovo dark:text-white/80 text-xl"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-4 sm:gap-6 flex-wrap"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileInView={{ scale: 1.15 }}
                key={index}
                className="flex items-center justify-center w-10 sm:w-15 aspect-square border-2 border-gray-400 rounded-lg cursor-pointer duration-500 hover:-translate-y-1"
              >
                <Image src={tool} alt="tool" className="w-6 sm:w-8" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Dialog */}
      {openDialog && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-2 sm:px-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-darkTheme rounded-2xl shadow-2xl max-w-[95vw] sm:max-w-5xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-auto"
          >
            <button
              onClick={handleDialogClose}
              className="absolute top-3 right-5 text-gray-600 dark:text-white text-3xl sm:text-4xl font-bold"
              aria-label="Close dialog"
            >
              ×
            </button>
            <h3
              id="dialog-title"
              className="text-2xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white"
            >
              {dialogContent.title}
            </h3>

            {/* 3 boxes grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {Object.entries(dialogContent.content).map(([section, { icon, items }]) => (
                <div
                  key={section}
                  className="bg-white dark:bg-white/10 rounded-xl p-6 shadow-md border border-white/20 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {icon && <Image src={icon} alt={section} width={30} height={30} />}
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-white">{section}</h4>
                  </div>
                 <ul className="flex flex-col gap-3">
  {items.map(({ name, icon, link }, idx) => (
    <li key={idx} className="flex items-center gap-3">
      {icon && <Image src={icon} alt={name} width={24} height={24} />}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 font-medium text-sm sm:text-base"
        >
          {name}
        </a>
      ) : (
        <span className="text-gray-800 dark:text-white text-sm sm:text-base font-medium">
          {name}
        </span>
      )}
    </li>
  ))}
</ul>

                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default About;
