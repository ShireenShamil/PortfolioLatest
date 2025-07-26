import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
    const onScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50
          ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme" : ""}
          px-5 lg:px-8 xl:px-[8%] py-4
          flex items-center justify-between`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            alt="Logo"
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-20 sm:w-28 cursor-pointer mr-6 sm:mr-14"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
            ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:bg-darkTheme dark:shadow-white/20"}`}
        >
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About Me</a></li>
          <li><a className="font-Ovo" href="#achievements">Achievements</a></li>
          <li><a className="font-Ovo" href="#work">My Work</a></li>
          <li><a className="font-Ovo" href="#blog">My Blogs</a></li>
          <li><a className="font-Ovo" href="#contact">Contact Me</a></li>
        </ul>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)} aria-label="Toggle Dark Mode">
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Dark Mode"
              className="w-6"
            />
            </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              alt=""
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
            />
          </a>

          {/* Mobile menu button */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />
            </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-0 bottom-0 right-0 w-64 h-screen bg-rose-50 dark:bg-darkHover flex flex-col gap-4 py-20 px-10 z-50
          transform transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div onClick={closeMenu} className="absolute right-6 top-6 cursor-pointer">
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="Close menu"
            className="w-5"
          />
            </div>

        <li><a onClick={closeMenu} className="font-Ovo" href="#top">Home</a></li>
        <li><a onClick={closeMenu} className="font-Ovo" href="#about">About Me</a></li>
        <li><a onClick={closeMenu} className="font-Ovo" href="#achievements">Achievements</a></li>
        <li><a onClick={closeMenu} className="font-Ovo" href="#work">My Work</a></li>
        <li><a onClick={closeMenu} className="font-Ovo" href="#blog">My Blogs</a></li>
        <li><a onClick={closeMenu} className="font-Ovo" href="#contact">Contact Me</a></li>
        </ul>
    </>
  );
};

export default Navbar;
