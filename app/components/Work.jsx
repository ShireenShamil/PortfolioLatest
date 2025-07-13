import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectDialog from './ProjectDialog';

const ITEMS_SHOWN = 4;

const Work = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseDialog = () => setSelectedProject(null);

  const totalProjects = workData.length;

  const nextItem = () => {
    setDirection(1);
    // Circular increment: wrap back to 0 if exceeds length
    setStartIndex((prev) => (prev + 1) % totalProjects);
  };

  const prevItem = () => {
    setDirection(-1);
    // Circular decrement: if prev is 0, wrap to last possible start index
    setStartIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // To handle the slicing properly with circular logic:
  // When the slice exceeds the array end, concatenate from start
  let displayedProjects = [];
  if (startIndex + ITEMS_SHOWN <= totalProjects) {
    displayedProjects = workData.slice(startIndex, startIndex + ITEMS_SHOWN);
  } else {
    const firstPart = workData.slice(startIndex, totalProjects);
    const secondPart = workData.slice(0, ITEMS_SHOWN - firstPart.length);
    displayedProjects = firstPart.concat(secondPart);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>
      <motion.h2 className='text-center text-5xl font-Ovo'>My Latest Works</motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I offer full-stack web development services including responsive frontend design using React and Tailwind CSS,
        seamless UI/UX design with tools like Figma, and robust backend development using Node.js and Express.
      </motion.p>

      {/* Animation wrapper */}
      <div className='overflow-hidden relative'>
        <motion.div
          key={startIndex}
          initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
          transition={{ type: 'tween', duration: 0.5 }}
          className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 my-10 dark:text-black'
        >
          <AnimatePresence mode='wait'>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`relative cursor-pointer group border-2 rounded-xl overflow-hidden
                  border-blue-450 dark:border-white/60`}
                onClick={() => handleProjectClick(project)}
                layout
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-full h-full aspect-square bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                >
                  {/* Content */}
                  <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                      <h2 className='font-semibold'>{project.title}</h2>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Slide Controls */}
      <div className='flex justify-center gap-4 my-8'>
      {/* Slide Controls */}
<div className='flex justify-center gap-4 my-8'>
  <button
    onClick={prevItem}
    className='w-24 h-12 rounded-full border hover:bg-gray-200 dark:hover:bg-darkHover flex items-center justify-center'
  >
    Previous
  </button>
  <button
    onClick={nextItem}
    className='w-24 h-12 rounded-full border hover:bg-gray-200 dark:hover:bg-darkHover flex items-center justify-center'
  >
    Next
  </button>
</div>

      </div>

      {/* Dialog */}
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={handleCloseDialog}
          isDarkMode={isDarkMode}
        />
      )}
    </motion.div>
  );
};

export default Work;
