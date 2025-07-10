'use client'
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
      className="w-full px-[12%] py-10 scroll-mt-20"
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
        className="text-center text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
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
          <p className="mb-10 max-w-2xl font-Ovo">
            Hi, I'm Shireen Shamil — a passionate and curious individual who loves learning, creating, and growing. I enjoy working on meaningful projects, solving real-world problems, and constantly improving my skills.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description, more }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                onClick={() => more && handleDialogOpen(title, more)}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer duration-500 hover:-translate-y-1 hover:[box-shadow:4px_4px_0_#000] hover:[background-color:#fcf4ff] dark:border-white dark:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileInView={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer duration-500 hover:-translate-y-1"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Dialog */}
      {openDialog && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-darkTheme rounded-xl shadow-xl max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={handleDialogClose}
              className="absolute top-2 right-3 text-gray-600 dark:text-white text-2xl font-bold"
              aria-label="Close dialog"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{dialogContent.title}</h3>

            <div className="space-y-6">
              {Object.entries(dialogContent.content).map(([section, { icon, items }], idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-2">
                    {icon && <Image src={icon} alt={section} width={28} height={28} />}
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-white">{section}</h4>
                  </div>
                  <ul className="list-disc ml-6 text-gray-700 dark:text-white/80 text-sm grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4">
                    {items.map(({ name, icon }, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {icon && <Image src={icon} alt={name} width={22} height={22} />}
                        <span>{name}</span>
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
