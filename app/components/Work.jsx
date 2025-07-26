'use client';

import { workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDialog from './ProjectDialog';

const Work = ({ isDarkMode }) => {
  const total = workData.length;
  const [centerIndex, setCenterIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getVisibleIndexes = () => {
    const visibleCards = isMobile ? 3 : 5;
    let indexes = [];
    for (let i = -Math.floor(visibleCards / 2); i <= Math.floor(visibleCards / 2); i++) {
      indexes.push((centerIndex + i + total) % total);
    }
    return indexes;
  };

  const visibleIndexes = getVisibleIndexes();

  const prev = () => setCenterIndex((c) => (c - 1 + total) % total);
  const next = () => setCenterIndex((c) => (c + 1) % total);

  const containerRef = useRef(null);
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const getCardStyle = (pos) => {
    const absPos = Math.abs(pos);

    // Mobile styling
    if (isMobile) {
      const scale = pos === 0 ? 1 : 0.85;
      const x = pos * 140;
      const opacity = pos === 0 ? 1 : 0.6;
      const zIndex = 5 - absPos;

      return {
        scale,
        rotateY: 0,
        x,
        opacity,
        zIndex,
        transition: { type: 'spring', stiffness: 300, damping: 30 },
        transformOrigin: 'center',
        cursor: pos === 0 ? 'pointer' : 'default',
      };
    }

    // Desktop styling
    const scale = pos === 0 ? 1 : 1 - absPos * 0.15;
    const rotateY = pos * 25;
    const translateX = pos * 180;
    const opacity = pos === 0 ? 1 : 0.5;
    const zIndex = 10 - absPos;

    return {
      scale,
      rotateY,
      x: translateX,
      opacity,
      zIndex,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
      transformOrigin: pos < 0 ? 'right center' : 'left center',
      cursor: pos === 0 ? 'pointer' : 'default',
    };
  };

  return (
    <section
      id="work"
      className="max-w-7xl mx-auto py-24 px-6 select-none dark:text-white"
      ref={containerRef}
    >
      <header className="text-center mb-12">
        <motion.h4 className="text-lg font-Ovo mb-2">My Portfolio</motion.h4>
        <motion.h2 className="text-4xl sm:text-5xl font-Ovo">My Latest Works</motion.h2>
        <motion.p className="max-w-2xl mx-auto mt-4 mb-12 font-Ovo text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          I offer full-stack web development including responsive frontend design using React and Tailwind CSS, UI/UX with Figma, and backend with Node.js and Express.
        </motion.p>
      </header>

      <div className="relative h-72 sm:h-80 md:h-96 flex justify-center items-center perspective-[1200px]">
        {/* Desktop Prev */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-24 h-12 rounded-full border
            hover:bg-gray-200 dark:hover:bg-darkHover items-center justify-center font-semibold z-20"
        >
          Prev
        </button>

        {/* Cards */}
        {visibleIndexes.map((idx, i) => {
          const pos = i - Math.floor(visibleIndexes.length / 2);
          const project = workData[idx];
          const style = getCardStyle(pos);

          return (
            <motion.div
              key={project.title}
              onClick={() => pos === 0 && setSelectedProject(project)}
              onKeyDown={(e) => (['Enter', ' '].includes(e.key) && pos === 0 && setSelectedProject(project))}
              tabIndex={pos === 0 ? 0 : -1}
              role={pos === 0 ? 'button' : undefined}
              animate={{
                scale: style.scale,
                rotateY: style.rotateY,
                x: style.x,
                opacity: style.opacity,
                zIndex: style.zIndex,
              }}
              transition={style.transition}
              className={`absolute top-0 w-48 sm:w-56 md:w-72 h-60 sm:h-72 md:h-80 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-xl ring-2
                ${pos === 0 ? 'ring-black dark:ring-white' : 'ring-transparent'} focus:outline-none focus:ring-4`}
              style={{ transformOrigin: style.transformOrigin, cursor: style.cursor }}
            >
              <div className="relative w-full h-full">
                <Image src={project.bgImage} alt={project.title} fill style={{ objectFit: 'cover' }} priority />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white text-sm sm:text-base font-semibold truncate">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Desktop Next */}
        <button
          onClick={next}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-24 h-12 rounded-full border
            hover:bg-gray-200 dark:hover:bg-darkHover items-center justify-center font-semibold z-20"
        >
          Next
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className="flex justify-center gap-8 mt-10 md:hidden">
        <button
          onClick={prev}
          className="w-24 h-12 rounded-full border hover:bg-gray-200 dark:hover:bg-darkHover flex items-center justify-center"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="w-24 h-12 rounded-full border hover:bg-gray-200 dark:hover:bg-darkHover flex items-center justify-center"
        >
          Next
        </button>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDialog
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
