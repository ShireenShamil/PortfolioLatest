import Image from 'next/image';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '@/assets/assets';

const ProjectDialog = ({ project, onClose, isDarkMode }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`relative w-full max-w-md bg-white dark:bg-gray-900 border border-white/20 dark:border-white/10 shadow-xl rounded-2xl p-4 sm:p-5 max-h-[90vh] overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-2.5 right-3 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl font-bold transition"
          >
            &times;
          </button>

          {/* Title */}
          <h2 className="text-xl font-semibold text-center mb-3 text-gray-800 dark:text-white">
            {project.title}
          </h2>

          {/* Image */}
          {project.bgImage && (
            <div className="rounded-lg overflow-hidden mb-3 border border-gray-200 dark:border-gray-700">
              <Image
                src={project.bgImage}
                alt={project.title}
                width={600}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-4 font-Ovo">
            {project.fullDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-900 transition rounded-full shadow"
              >
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 text-xs font-semibold rounded-full shadow transition
                  ${isDarkMode
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                GitHub Repo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDialog;
