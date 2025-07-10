import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = ({isDarkMode}) => {
  return (
    <motion.div
     initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
     id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

         <motion.h4 
          initial={{opacity:0 , y:-20}}
    whileInView={{opacity:1 , y:0}}
    transition={{duration:0.5 , delay:0.3}}
         className='text-center mb-2 text-lg font-Ovo'>What I Offer</motion.h4>
      <motion.h2 
       initial={{opacity:0 , y:-20}}
    whileInView={{opacity:1 , y:0}}
    transition={{duration:0.5 , delay:0.5}}
      className='text-center text-5xl font-Ovo'>My Services</motion.h2>

      <motion.p
       initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5 , delay:0.7}}
       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I offer full-stack web development services including responsive frontend design using React and Tailwind CSS, seamless UI/UX design with tools like Figma, and robust backend development using Node.js and Express. From crafting intuitive user experiences to building scalable APIs, I ensure clean, efficient, and performance-driven solutions. My goal is to deliver modern, user-focused web applications that meet both aesthetic and functional needs.</motion.p>
      
      <motion.div
       initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.6 , delay:0.9}}
       className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10'>
        {serviceData.map(({icon , title, description, link}, index) => (
            <motion.div
            whileHover={{scale:1.05}}
             className='border border-gray-400 rounded-lg px-8 py-12 hover:[box-shadow:4px_4px_0_#000]  hover:[background-color:#fcf4ff] cursor-pointer hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white ' key={index}>
                <Image src={icon} alt='icon' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>

                <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read More <Image alt='' src={assets.right_arrow} className='w-4'/></a>
            </motion.div>
        ))}

      </motion.div>
    </motion.div>
  )
}

export default Services
