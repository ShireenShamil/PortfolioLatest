import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = ({isDarkMode}) => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

         <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Latest Works</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I offer full-stack web development services including responsive frontend design using React and Tailwind CSS, seamless UI/UX design with tools like Figma, and robust backend development using Node.js and Express. From crafting intuitive user experiences to building scalable APIs, I ensure clean, efficient, and performance-driven solutions. My goal is to deliver modern, user-focused web applications that meet both aesthetic and functional needs.</p>
      

      <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 my-10 dark:text-black'>
              {workData.map((project, index) => (
                  <div className='aspect-square bg-no-repeat bg-cover bg-center bg-lg relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}} key={index}>
                      
                      <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                      
                      <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-gray-700 text-sm'>{project.description}</p>
                        </div>

                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                            <Image src={assets.send_icon} alt='sendicon' className='w-5' />
                            </div>

                            </div>

                  </div>

                   ))}

      </div>

      <a href='' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10  mx-auto my-20 hover:[background-color:#fcf4ff] duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show More <Image src={isDarkMode? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right-arrow' className='w-4' />

      </a>

    </div>
  )
}

export default Work
