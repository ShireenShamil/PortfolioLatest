// components/ProjectDialog.jsx
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
          className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4'
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // EVEN MORE REDUCED PADDING and MAX-WIDTH for a more compact dialog
            className='relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full p-4 sm:p-5 dark:text-white transform'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className='absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl font-bold transition-colors' // Smaller button
              aria-label='Close dialog'
            >
              &times;
            </button>

            {/* Project Image */}
            {project.bgImage && (
              <div className='mb-3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700'> {/* Reduced bottom margin */}
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  width={600} // Slightly reduced width for tighter aspect ratio
                  height={180} // SIGNIFICANTLY REDUCED IMAGE HEIGHT
                  layout='responsive'
                  objectFit='cover'
                  className='rounded-md'
                  onError={(e) => {
                    console.error('Error loading project background image:', project.bgImage, e);
                    e.target.src = '/images/placeholder.jpg'; // Fallback image (ensure this path is valid)
                  }}
                />
              </div>
            )}

            {/* Project Title */}
            <h3 className='text-2xl sm:text-3xl font-Ovo mb-2 text-center text-gray-900 dark:text-white'> {/* Smaller font, reduced bottom margin */}
              {project.title}
            </h3>

            {/* Full Description */}
            <p className='text-gray-700 dark:text-gray-300 mb-3 leading-relaxed font-Ovo text-xs sm:text-sm text-center sm:text-left'> {/* Smaller font, reduced bottom margin */}
              {project.fullDescription}
            </p>

            {/* Project Links */}
            <div className='flex flex-col sm:flex-row justify-center gap-2 mt-3'> {/* Reduced top margin and gap */}
              {project.liveLink && assets.link_icon_white && (
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-lime-500 text-white font-semibold text-xs hover:bg-lime-600 transition-colors duration-300 shadow-md flex-grow sm:flex-grow-0' // Smaller padding and font
                >
                  <Image src={assets.link_icon_white} alt='Live Demo Icon' className='w-3.5 h-3.5' /> {/* Smaller icon */}
                  Live Demo
                </a>
              )}
              {project.githubLink && (isDarkMode ? assets.github_icon_white : assets.github_icon) && (
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full font-semibold text-xs transition-colors duration-300 shadow-md flex-grow sm:flex-grow-0
                    ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                  `}
                >
                  <Image
                    src={isDarkMode ? assets.github_icon_white : assets.github_icon}
                    alt='GitHub Icon'
                    className='w-3.5 h-3.5' // Smaller icon
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