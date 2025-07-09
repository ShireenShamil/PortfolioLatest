import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

         <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I offer full-stack web development services including responsive frontend design using React and Tailwind CSS, seamless UI/UX design with tools like Figma, and robust backend development using Node.js and Express. From crafting intuitive user experiences to building scalable APIs, I ensure clean, efficient, and performance-driven solutions. My goal is to deliver modern, user-focused web applications that meet both aesthetic and functional needs.</p>
      
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10'>
        {serviceData.map(({icon , title, description, link}, index) => (
            <div className='border border-gray-400 rounded-lg px-8 py-12 hover:[box-shadow:4px_4px_0_#000]  hover:[background-color:#fcf4ff] cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                <Image src={icon} alt='icon' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>{description}</p>

                <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read More <Image alt='' src={assets.right_arrow} className='w-4'/></a>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Services
