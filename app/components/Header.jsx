import Image from 'next/image';
import React from 'react';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const Header = ({ isDarkMode }) => {
  return (
    // Outer container: Removed mt-16 and added pt-16 for gap from navbar.
    // The py-12 remains for overall vertical padding, pt-16 adds specifically to the top.
    <div className='w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100 transition-colors duration-300 pt-16'> {/* CHANGED HERE: Removed mt-16, Added pt-16 */}

      {/* Inner content container */}
      <div className='w-full max-w-7xl mx-auto flex flex-col lg:mt-7 lg:flex-row items-center gap-6 lg:gap-8'>

        {/* --- Image Section (First in JSX for mobile-first order) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
          className="flex-shrink-0 flex justify-center items-center p-4 lg:w-1/2 lg:pr-10"
        >
          <Image
            src={assets.profile_img}
            alt='Shireen Shamil Profile'
            width={400}
            height={400}
            className='rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover
                       border-4 border-white dark:border-gray-700
                       shadow-xl dark:shadow-2xl transition-all duration-300 ease-in-out
                       hover:scale-105 transform'
          />
        </motion.div>

        {/* --- Text Details Section (Second in JSX) --- */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4
                     lg:w-1/2 lg:pl-4 lg:pr-10 lg:mt-2">
          {/* Note: Removed the inline comment from className to fix the previous error */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-3xl sm:text-4xl lg:text-[50px] font-bold font-Outfit leading-tight text-gray-900 dark:text-white'
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

          {/* Buttons: Original styles restored */}
          <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              href='#contact'
              className={`px-10 py-3 rounded-full flex items-center justify-center gap-3 text-lg font-semibold whitespace-nowrap
                         ${isDarkMode
                           ? 'bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-lg hover:from-purple-800 hover:to-indigo-900' // Dark mode gradient
                           : 'bg-black text-white hover:bg-gray-800 border-2 border-black'}
                         transition-all duration-300 ease-in-out w-full sm:w-auto`}
            >
              Contact Me <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_white} alt='Arrow icon' className='w-4' />
            </motion.a>

            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href='/Shireen.pdf'
              download
              className={`px-10 py-3 rounded-full flex items-center justify-center gap-3 text-lg font-semibold whitespace-nowrap
                         ${isDarkMode
                           ? 'border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white' // Dark mode subtle border
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