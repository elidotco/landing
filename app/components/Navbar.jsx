"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <header className="w-full px-6 md:px-10 flex justify-between items-center h-20  text-white relative z-20">
      {/* Logo */}
      <div className="w-32 h-12 flex-shrink-0">
        <img alt="logo" src="./logo.png" className="w-full h-full" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Overlay and Navigation */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex  md:hidden z-10"
          onClick={closeMenu} // Close menu when clicking outside
        >
          <nav
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside nav
            className="bg-[#282c34] w-2/3 h-full  p-8 rounded-lg text-center flex flex-col items-center gap-8"
          >
             <div className="w-32 h-12 flex-shrink-0">
        <img alt="logo" src="./logo.png" className="w-full h-full" />
      </div>
            <ul className="flex flex-col gap-8 text-white text-lg">
              <li>
                <Link href="#contact" onClick={closeMenu}>For business</Link>
              </li>
              <li>
                <Link href="#pricing" onClick={closeMenu}>Pricing Plans</Link>
              </li>
              <li>
                <Link href="#faq" onClick={closeMenu}>FAQ</Link>
              </li>
              <li>
                <Link href="#contact" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 mt-8">
              <Link href="#request-demo" onClick={closeMenu}>
                <span className="py-2 px-4 bg-white text-black text-sm rounded-sm transition-transform transform hover:scale-105">
                  Request Demo
                </span>
              </Link>
              <Link href="#login" onClick={closeMenu}>
                <span className="py-2 px-6 bg-[#F68900] text-white text-sm rounded-sm transition-transform transform hover:scale-105">
                  Login
                </span>
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex text-sm text-white">
        <ul className="flex gap-8">
          <li>
            <Link href="#contact">For business</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing Plans</Link>
          </li>
          <li>
            <Link href="#faq">FAQ</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-4 ml-10">
          <Link href="#request-demo">
            <span className="py-2 px-4 bg-white text-black text-sm rounded-sm transition-transform transform hover:scale-105">
              Request Demo
            </span>
          </Link>
          <Link href="#login">
            <span className="py-2 px-6 bg-[#F68900] text-white text-sm rounded-sm transition-transform transform hover:scale-105">
              Login
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
