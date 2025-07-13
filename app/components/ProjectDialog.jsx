import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '@/assets/assets';

const ProjectDialog = ({ project, onClose, isDarkMode }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4'
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`relative bg-white dark:bg-gray-900 border 
              ${isDarkMode ? 'border-white/20' : 'border-gray-200'} 
              rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg p-4 sm:p-5`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className='absolute top-2.5 right-3 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl font-bold transition'
              aria-label='Close dialog'
            >
              &times;
            </button>

            {/* Project Image */}
            {project.bgImage && (
              <div className='mb-3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700'>
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  width={600}
                  height={300}
                  layout='responsive'
                  objectFit='cover'
                  className='rounded-md'
                  onError={(e) => {
                    console.error('Error loading image:', project.bgImage, e);
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
            )}

            {/* Project Title */}
            <h3 className='text-xl sm:text-2xl font-semibold text-center mb-2 text-gray-800 dark:text-white'>
              {project.title}
            </h3>

            {/* Full Description */}
            <p className='text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed mb-4 font-Ovo'>
              {project.fullDescription}
            </p>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-lime-500 hover:bg-lime-600 transition rounded-full shadow'
                >
                  <Image src={assets.link_icon_white} alt='Live' className='w-4 h-4' />
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold transition rounded-full shadow
                    ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  <Image
                    src={isDarkMode ? assets.github_icon_white : assets.github_icon}
                    alt='GitHub'
                    className='w-4 h-4'
                  />
                  GitHub Repo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDialog;
