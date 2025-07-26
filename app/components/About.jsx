'use client';
import React, { useState, useEffect } from 'react';
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const About = ({ isDarkMode }) => {
  const [openCardTitle, setOpenCardTitle] = useState(null);
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardToggle = (title, index) => {
    if (openCardTitle === title) {
      setOpenCardTitle(null);
      setOpenCardIndex(null);
    } else {
      setOpenCardTitle(title);
      setOpenCardIndex(index);
    }
  };

  const renderDetailsContent = (item) => (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="details-content text-left mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 w-full box-border overflow-hidden"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(item.more).map(([section, { icon, items }]) => (
          <div
            key={section}
            className="bg-white dark:bg-white/10 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
              {icon && <Image src={icon} alt={section} width={24} height={24} />}
              <h4 className="text-base font-semibold text-gray-700 dark:text-white">{section}</h4>
            </div>
            <ul className="flex flex-col gap-1">
              {items.map(({ name, icon: itemIcon, link }, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200">
                  {itemIcon && <Image src={itemIcon} alt={name} width={20} height={20} className="flex-shrink-0" />}
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
                    >
                      {name}
                    </a>
                  ) : (
                    <span className="font-medium">{name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const getCols = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const [cols, setCols] = useState(getCols());

  useEffect(() => {
    const handleResize = () => setCols(getCols());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-4 sm:px-[8%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mb-2 text-base sm:text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-10 sm:gap-20 my-10 sm:my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-40 sm:w-56 md:w-72 rounded-3xl max-w-none"
        >
          <Image src={assets.user_image} alt="User" className="w-full rounded-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-8 sm:mb-10 font-Ovo text-sm sm:text-base max-w-2xl">
            Hi, I'm Shireen Shamil — a passionate and curious individual who loves learning, creating, and growing. I enjoy working on meaningful projects, solving real-world problems, and constantly improving my skills.
          </p>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-full">
              {infoList.map((item, index) => {
                const isOpen = openCardTitle === item.title;
                return (
                  <React.Fragment key={item.title}>
                    <motion.li
                      className={`border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer duration-500
                        hover:-translate-y-1 hover:[box-shadow:6px_6px_0_#000]
                        dark:border-white dark:shadow-white dark:hover:bg-darkHover/50
                        ${isOpen ? 'border-blue-500 shadow-lg' : ''}
                      `}
                      onClick={() => handleCardToggle(item.title, index)}
                    >
                      <div className="flex flex-col items-center">
                        <Image
                          src={isDarkMode ? item.iconDark : item.icon}
                          alt={item.title}
                          className="w-8 sm:w-10 mt-1"
                        />
                        <h3 className="my-2 sm:my-3 font-semibold text-gray-700 dark:text-white text-base sm:text-lg text-center">
                          {item.title}
                        </h3>
                        <button className="px-6 py-2 sm:px-10 sm:py-3 border rounded-full border-gray-500 text-sm sm:text-base dark:bg-white dark:text-black">
                          {isOpen ? 'Hide Details' : 'View Details'}
                        </button>
                      </div>
                    </motion.li>

                    {(isOpen && ((index + 1) % cols === 0 || index === infoList.length - 1)) && (
                      <div className="col-span-full">
                        <AnimatePresence mode="wait">
                          {openCardTitle === item.title && item.more && renderDetailsContent(item)}
                        </AnimatePresence>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
              {openCardIndex !== null &&
                !((openCardIndex + 1) % cols === 0 || openCardIndex === infoList.length - 1) && (
                  <div className="col-span-full">
                    <AnimatePresence mode="wait">
                      {openCardTitle === infoList[openCardIndex].title &&
                        infoList[openCardIndex].more &&
                        renderDetailsContent(infoList[openCardIndex])}
                    </AnimatePresence>
                  </div>
                )}
                
            </div>
          </div>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-8 text-gray-700 font-Ovo dark:text-white/80 text-lg sm:text-xl"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-4 flex-wrap"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileInView={{ scale: 1.15 }}
                key={index}
                className="flex items-center justify-center w-10 sm:w-12 aspect-square border-2 border-gray-400 rounded-lg cursor-pointer duration-500 hover:-translate-y-1"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
