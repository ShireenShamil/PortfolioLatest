import { workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDialog from './ProjectDialog';

const VISIBLE_CARDS = 5;

const Work = ({ isDarkMode }) => {
  const total = workData.length;
  const [centerIndex, setCenterIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // Calculate indexes to show around the center
  const getVisibleIndexes = () => {
    let indexes = [];
    for (let i = -Math.floor(VISIBLE_CARDS / 2); i <= Math.floor(VISIBLE_CARDS / 2); i++) {
      indexes.push((centerIndex + i + total) % total);
    }
    return indexes;
  };

  const visibleIndexes = getVisibleIndexes();

  // Handlers for navigation
  const prev = () => setCenterIndex((c) => (c - 1 + total) % total);
  const next = () => setCenterIndex((c) => (c + 1) % total);

  // Keyboard navigation support
  const containerRef = useRef(null);
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Calculate style for each card based on position relative to center
  const getCardStyle = (pos) => {
    const absPos = Math.abs(pos);
    const scale = pos === 0 ? 1 : 1 - absPos * 0.15;
    const rotateY = pos * 25;
    const translateX = pos * 180; // spacing for desktop
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
      className="max-w-7xl mx-auto py-24 px-8 select-none dark:text-white"
      aria-label="Cover flow portfolio carousel"
      ref={containerRef}
    >
      <header className="text-center mb-12">
        <motion.h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</motion.h4>
        <motion.h2 className="text-center text-5xl font-Ovo">My Latest Works</motion.h2>
        <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          I offer full-stack web development services including responsive frontend design using React
          and Tailwind CSS, seamless UI/UX design with tools like Figma, and robust backend development
          using Node.js and Express.
        </motion.p>
      </header>

      <div className="relative h-80 md:h-96 flex justify-center items-center perspective-[1200px]">
        {/* Prev button on left side desktop */}
        <button
          onClick={prev}
          aria-label="Previous project"
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full px-2 py-3 shadow-lg
            hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-rose-100 transition-transform duration-200 ease-in-out active:scale-95
            z-20 font-semibold text-lg select-none w-24 h-12 rounded-full border hover:bg-gray-200 dark:hover:bg-darkHover flex items-center justify-center"
        >
          Prev
        </button>

        {visibleIndexes.map((idx, i) => {
          const pos = i - Math.floor(VISIBLE_CARDS / 2);
          const project = workData[idx];
          const style = getCardStyle(pos);

          return (
            <motion.div
              key={project.title}
              role={pos === 0 ? 'button' : undefined}
              tabIndex={pos === 0 ? 0 : -1}
              aria-label={pos === 0 ? `Open project ${project.title}` : undefined}
              onClick={() => pos === 0 && setSelectedProject(project)}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && pos === 0) setSelectedProject(project);
              }}
              animate={{
                scale: style.scale,
                rotateY: style.rotateY,
                x: style.x,
                opacity: style.opacity,
                zIndex: style.zIndex,
              }}
              transition={style.transition}
              className={`absolute top-0 w-48 md:w-64 h-64 md:h-80 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-xl ring-2
                ${pos === 0 ? 'ring-black dark:ring-white' : 'ring-transparent'} focus:outline-none focus:ring-4`}
              style={{ transformOrigin: style.transformOrigin, cursor: style.cursor }}
            >
              <div className="relative w-full h-full">
                <Image src={project.bgImage} alt={project.title} fill style={{ objectFit: 'cover' }} priority />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
                  style={{ pointerEvents: 'none' }}
                >
                  <h3 className="text-white text-lg md:text-xl font-semibold truncate">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Next button on right side desktop */}
        <button
          onClick={next}
          aria-label="Next project"
          className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full px-2 py-3 shadow-lg
            hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-rose-100 transition-transform duration-200 ease-in-out active:scale-95
            z-20 font-semibold text-lg select-none w-24 h-12 rounded-full border hover:bg-gray-200 dark:hover:bg-darkHover flex items-center justify-center"
        >
          Next
        </button>
      </div>

      {/* Mobile prev/next buttons below carousel */}
      <div className="flex justify-center gap-8 mt-10 md:hidden">
        <button
          onClick={prev}
          aria-label="Previous project"
          className='w-24 h-12 rounded-full border hover:bg-gray-200 dark:hover:bg-darkHover flex items-center justify-center'
        >
          Prev
        </button>
        <button
          onClick={next}
          aria-label="Next project"
           className='w-24 h-12 rounded-full border hover:bg-gray-200 dark:hover:bg-darkHover flex items-center justify-center'
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
