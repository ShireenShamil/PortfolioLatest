'use client' // Keep this line as you're using client-side hooks like useState and useEffect

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
//import Services from "./components/Services";
import Work from "./components/Work";
// Import the new AnimatedNumber component
import AnimatedNumber from "./components/AnimatedNumber"; // Adjust the path if your components folder is structured differently
import Blog from "./components/Blog";
import Achievements from "./components/Achievements";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to set initial dark mode state based on localStorage or system preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []); // Run once on mount

  // Effect to apply/remove dark mode class and update localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = ''; // Or 'light' if you prefer
    }
  }, [isDarkMode]); // Rerun when isDarkMode changes

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      {/* Portfolio Stats Section */}
      <section className="portfolio-stats py-8 dark:bg-darkTheme text-gray-900 dark:text-gray-100 transition-colors duration-300">
       
        <div className="stats-grid flex flex-wrap justify-center gap-10 px-4">
          {/* Using the AnimatedNumber component */}
          <AnimatedNumber end={2} label="Years of experience" delay={0.6} />
          <AnimatedNumber end={10} label="Projects completed" delay={0.8} />
          <AnimatedNumber end={5} label="Technologies mastered" delay={0.9} />
          <AnimatedNumber end={200} label="Code commits" delay={0.5} />
        </div>
      </section>
      {/* End Portfolio Stats Section */}
      <About isDarkMode={isDarkMode} />
      {/* <Services isDarkMode={isDarkMode} /> */}
      <Achievements isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Blog isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}