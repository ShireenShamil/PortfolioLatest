import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaHackerrank, FaMedium } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Header = ({ isDarkMode }) => {
  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.2 }
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className='relative w-full h-screen flex items-center justify-center px-6 sm:px-10 overflow-hidden'>

      {/* ✅ Foreground Content */}
      <div className='relative z-10 w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-start gap-x-0 lg:mt-20'>

        {/* Text Section */}
        <div className='w-full lg:w-4/6 text-center lg:text-left flex flex-col items-center lg:ml-20 lg:items-start gap-5 px-0 overflow-visible'>
          <motion.h3
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}  
            transition={{ duration: 0.7, delay: 0.2 }}
            className='text-2xl sm:text-5xl lg:text-[45px] font-semibold leading-tight font-Ovo mt-5 lg:mt-0'
          >
            Hai! I'm Shireen Shamil{" "}
            <span className='inline-block relative top-1'>
              <Image src={assets.hand_icon} alt='Hand Icon' className='w-6 lg:w-10' />
            </span>
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}  
            className='max-w-xl text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-300 font-Ovo'
          >
            Currently navigating the world of code, creativity, and innovation as an IT undergraduate at the University of Moratuwa. I’m pursuing a BSc (Hons) in Information Technology with a deep drive to design smarter solutions, cleaner interfaces, and seamless digital experiences that leave a mark.
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
              <Image src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_white} alt='Arrow Icon' className='w-4' />
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

          {/* Social Icons */}
          <motion.div
            className='flex items-center gap-6 mt-4 text-3xl w-full justify-center sm:justify-start'
            variants={socialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.a
              href='https://github.com/ShireenShamil'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-black dark:hover:text-white transition-colors'
              variants={iconVariants}
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/shireen-shamil-3aa53326a'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-600 transition-colors'
              variants={iconVariants}
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href='https://leetcode.com/u/Shireen_Shamil/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-orange-500 transition-colors'
              variants={iconVariants}
              whileHover={{ scale: 1.2 }}
            >
              <SiLeetcode />
            </motion.a>
            <motion.a
              href='https://www.hackerrank.com/profile/shireenshamil11'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-green-500 transition-colors'
              variants={iconVariants}
              whileHover={{ scale: 1.2 }}
            >
              <FaHackerrank />
            </motion.a>
            <motion.a
              href='https://medium.com/@shireenshamil11'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-800 dark:hover:text-gray-300 transition-colors'
              variants={iconVariants}
              whileHover={{ scale: 1.2 }}
            >
              <FaMedium />
            </motion.a>
          </motion.div>

        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}      
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className='w-full lg:w-3/6 flex justify-center'
        >
          <Image
            src={assets.profile_img}
            alt='Profile Image'
            className='lg:mr-15 rounded-full w-44 mt-5 lg:mt-3 sm:w-56 md:w-64 lg:w-90 border-2 sm:border-4 
  border-white 
  shadow-[0_0_8px_2px_rgba(255,182,193,0.7)] sm:shadow-[0_0_15px_4px_rgba(255,182,193,0.7)] dark:border-blue-800
      dark:shadow-[0_0_20px_6px_rgba(59,130,246,0.7)]'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Header
