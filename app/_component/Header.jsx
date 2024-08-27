'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="flex justify-center">
      <div className={`w-full sm:w-auto ${isHidden ? '-mt-24' : 'mt-9'} fixed top-0 left-0 right-0 m-auto border border-gray-200 z-50 rounded-full transition-all duration-500`}>
        <header>
          <nav>
            <ul className="p-2 lg:p-4 xl:p-[18px] mb-0 list-none flex flex-wrap justify-center">
              <li className="m-1 lg:m-2 xl:m-2.5">
                <Link href="#home" className="uppercase tracking-wide text-slate-200 text-xs lg:text-sm xl:text-base font-bold hover:text-primary focus:text-gray-200">
                  Home
                </Link>
              </li>
              <li className="m-1 lg:m-2 xl:m-2.5">
                <Link href="#skill" className="uppercase tracking-wide text-slate-200 text-xs lg:text-sm xl:text-base font-bold hover:text-primary focus:text-gray-400">
                  Skill
                </Link>
              </li>
              <li className="m-1 lg:m-2 xl:m-2.5">
                <Link href="#projects" className="uppercase tracking-wide text-slate-200 text-xs lg:text-sm xl:text-base font-bold hover:text-primary focus:text-gray-200">
                  Projects
                </Link>
              </li>
              <li className="m-1 lg:m-2 xl:m-2.5">
                <Link href="#education" className="uppercase tracking-wide text-slate-200 text-xs lg:text-sm xl:text-base font-bold hover:text-primary focus:text-gray-200">
                  Education
                </Link>
              </li>
              <li className="m-1 lg:m-2 xl:m-2.5">
                <Link href="#contact" className="uppercase tracking-wide text-slate-200 text-xs lg:text-sm xl:text-base font-bold hover:text-primary focus:text-gray-700">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
