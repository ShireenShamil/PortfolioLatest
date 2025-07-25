import Image from 'next/image';
import React from 'react';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const Header = ({ isDarkMode }) => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100 transition-colors duration-300'>

      {/* Inner content container */}
      {/* We'll use 'order' classes to control layout for lg:flex-row */}
      <div className='w-full max-w-7xl mx-auto flex flex-col lg:mt-7 lg:ml-45 lg:flex-row items-center gap-6 lg:gap-8'> {/* Keep minimal gap as previously refined */}

        {/* Left Column for Text Details (will appear on the RIGHT on large screens) */}
        {/* Use lg:order-last to place it after the image on large screens */}
        <div
          // Adjusted padding/margin for spacing relative to the image
          // lg:pr-10: More padding on the right side of the text block itself
          // lg:pl-4: Slight padding on the left side of the text block
          // lg:mt-4: Slight downward shift of the text block relative to the top of its row
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4
                     lg:order-last lg:pl-4 lg:pr-10 lg:mt-2" // MODIFIED CLASSES
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-3xl sm:text-4xl lg:text-[45px] font-bold font-Outfit leading-tight text-gray-900 dark:text-white'
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

         <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
         initial={{y:30 , opacity: 0}}
        whileInView={{y:0 , opacity:1}}
        transition={{duration: 0.6 , delay: 1}}
         href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
         Contact Me <Image src={assets.right_arrow_white} alt='' className=' w-4'/>
        </motion.a>

        <motion.a 
         initial={{y:30 , opacity: 0}}
        whileInView={{y:0 , opacity:1}}
        transition={{duration: 0.6 , delay: 1.2}}
        href='/Shireen.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black'>
         My Resume <Image src={ assets.download_icon} alt='' className=' w-4'/>
        </motion.a>
      </div>
        </div>

        {/* Right Column for Image (will appear on the LEFT on large screens) */}
        {/* No lg:order-first needed because it's first in JSX order */}
        {/* Adjusted padding/margin to control its position and spacing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
          className="flex-shrink-0 flex justify-center items-center p-4 lg:pr-10" // MODIFIED CLASSES
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

      </div>
    </div>
  );
};

export default Header;