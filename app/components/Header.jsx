import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { motion } from "framer-motion"

const Header = ({ isDarkMode }) => {
  return (
    <div className='relative w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-4 overflow-hidden'>

      {/* ✅ Blurred Background Image */}
     

      {/* ✅ Foreground Content */}
      <div className='relative z-10 w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-6'>

        {/* Text Section - 2/3 */}
        <div className='w-full lg:w-2/3 text-center lg:text-left flex flex-col items-center lg:ml-18 lg:items-start gap-4'>
          <motion.h3
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}  
            transition={{ duration: 0.7, delay: 0.2 }}
            className='text-4xl sm:text-5xl lg:text-[50px] font-semibold leading-tight font-Ovo'
          >
            Hai! I'm Shireen Shamil{" "}
            <span className='inline-block relative top-1'>
              <Image src={assets.hand_icon} alt='Hand Icon' className='w-10' />
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}  
            className='max-w-xl text-base sm:text-lg lg:text-xl text-gray-800 dark:text-gray-300 font-Ovo'
          >
            I'm an Undergraduate at University Of Moratuwa studying BSc (Hons) in IT.
          </motion.p>

          <div className='flex flex-col sm:flex-row items-center gap-3 mt-3'>
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              href='#contact'
              className='px-7 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-md'
            >
              Contact Me
              <Image src={assets.right_arrow_white} alt='Arrow Icon' className='w-4' />
            </motion.a>

            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              href='/Shireen.pdf'
              download
              className='px-7 py-3 rounded-full border border-gray-400 hover:scale-105 transition-transform duration-300 flex items-center gap-2 dark:bg-white dark:text-black shadow-sm'
            >
              My Resume
              <Image src={assets.download_icon} alt='Download Icon' className='w-4' />
            </motion.a>
          </div>
        </div>

        {/* Image Section - 1/3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
           whileHover={{ scale: 1.1 }}      
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className='w-full lg:w-1/3 flex justify-center'
        >
          <Image
            src={assets.profile_img}
            alt='Profile Image'
            className='rounded-full w-36 sm:w-48 md:w-56 lg:w-80 shadow-lg'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Header
