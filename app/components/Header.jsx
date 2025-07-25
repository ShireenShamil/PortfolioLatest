import Image from 'next/image';
import React from 'react';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const Header = ({ isDarkMode }) => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100 transition-colors duration-300'>

      {/* Inner content container */}
      {/* flex-col: Stacks vertically by default (mobile) */}
      {/* lg:flex-row: Arranges horizontally on large screens */}
      {/* lg:mt-7: Main container shift down */}
      {/* gap-6 lg:gap-8: Gap between items */}
      <div className='w-full max-w-7xl mx-auto flex flex-col lg:mt-7 lg:flex-row items-center gap-6 lg:gap-8'>

        {/* --- Image Section (NOW FIRST IN JSX for mobile-first ordering) --- */}
        {/* On small screens, this will naturally appear first (top) */}
        {/* On large screens, no 'order' class is needed as it's the first flex item */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
          className="flex-shrink-0 flex justify-center items-center p-4 lg:w-1/2 lg:pr-10" // lg:w-1/2 ensures it takes up half space
        >
          <Image
            src={assets.profile_img}
            alt='Shireen Shamil Profile'
            width={400}
            height={400}
            className='rounded-full w-64 h-64 sm:w-80 sm:mt-5 sm:h-80 lg:w-96 lg:h-96 object-cover
                       border-4 border-white dark:border-gray-700
                       shadow-xl dark:shadow-2xl transition-all duration-300 ease-in-out
                       hover:scale-105 transform'
          />
        </motion.div>

        {/* --- Text Details Section (NOW SECOND IN JSX for mobile-first ordering) --- */}
        {/* On small screens, this will naturally appear second (below image) */}
        {/* On large screens, lg:w-1/2 takes up remaining space. */}
        {/* lg:items-start and lg:text-left aligns content to the left when on desktop */}
        {/* lg:mt-2: This subtle downward shift from its row-top position */}
        {/* lg:pl-4 lg:pr-10: Internal padding for text block */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4
                     lg:w-1/2 lg:pl-4 lg:pr-10 lg:mt-2">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex items-end gap-2 text-2xl md:text-3xl font-Ovo font-light text-gray-700 dark:text-gray-300'
          >
            Hai! , I'm Shireen Shamil <Image src={assets.hand_icon} alt='Waving hand' className='w-7 animate-wave' />
          </motion.h3>

          {/* <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className='text-3xl sm:text-4xl lg:text-[50px] font-bold font-Outfit leading-tight text-gray-900 dark:text-white'
          >
            Software Engineer <br className="hidden sm:inline" /> based in Sri Lanka.
          </motion.h1> */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='max-w-xl mx-auto lg:mx-0 text-lg md:text-xl font-Ovo text-gray-600 dark:text-gray-400 leading-relaxed'
          >
            I'm an Undergraduate at University Of Moratuwa studying Bsc(Hons)in IT, passionate about building impactful software solutions.
          </motion.p>

          {/* Buttons - adjusted gap-4 to gap-5 for consistency, mt-4 to mt-8 for separation */}
          <div className='flex flex-col sm:flex-row items-center gap-5 mt-8 w-full sm:w-auto'>
            <motion.a
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              href='#contact'
              className={`px-8 py-3 rounded-full flex items-center justify-center gap-3 text-lg font-semibold whitespace-nowrap
                         ${isDarkMode
                           ? 'bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-lg hover:from-purple-800 hover:to-indigo-900'
                           : 'bg-black text-white hover:bg-gray-800 border-2 border-black'}
                         transition-all duration-300 ease-in-out w-full sm:w-auto`}
            >
              Contact Me <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_white} alt='Arrow icon' className='w-4' />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              href='/Shireen.pdf'
              download
              className={`px-8 py-3 rounded-full flex items-center justify-center gap-3 text-lg font-semibold whitespace-nowrap
                         ${isDarkMode
                           ? 'border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                           : 'border-2 border-gray-400 text-gray-700 hover:border-gray-600 hover:text-gray-900'}
                         transition-all duration-300 ease-in-out w-full sm:w-auto`}
            >
              My Resume <Image src={isDarkMode ? assets.download_icon_dark : assets.download_icon} alt='Download icon' className='w-4' />
            </motion.a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;