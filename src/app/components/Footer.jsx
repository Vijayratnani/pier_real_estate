'use client';

import React, { useEffect, useRef, useState } from 'react';
import logo from '../assests/pierLogo.png';
import Image from 'next/image';

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`py-6 text-center bg-pinkCustom2 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
    >
      <Image src={logo} alt="Company Logo" className="w-[120px] h-[60px] mx-auto" />

      <hr className="h-px w-[70%] mt-6 mx-auto bg-opacity-30 bg-black border-0 dark:bg-white" />

      <nav className="mt-6">
        <ul className="flex justify-center flex-wrap">
          <li className="mx-4 cursor-pointer hover:text-gray-700 transition duration-300 transform hover:scale-105">Schedule a Call</li>
          <li className="mx-4 cursor-pointer hover:text-gray-700 transition duration-300 transform hover:scale-105">Contact Us</li>
        </ul>
      </nav>

      <div className="mt-6 text-xl font-bold flex justify-center flex-wrap">
        <span className="mx-2 cursor-pointer hover:text-gray-700 transition duration-300 transform hover:scale-105" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </span>
        <span className="mx-2 cursor-pointer hover:text-gray-700 transition duration-300 transform hover:scale-105" aria-label="Twitter">
          <i className="fa-brands fa-twitter"></i>
        </span>
        <span className="mx-2 cursor-pointer hover:text-gray-700 transition duration-300 transform hover:scale-105" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </span>
      </div>

      <div className="font-poppins mt-6 text-opacity-5">
        <div className="font-poppins opacity-[40%]">Terms & Conditions | Privacy Policy</div>

        <hr className="mt-1 w-[40%] md:w-[30%] h-px mx-auto bg-opacity-30 bg-black border-0 dark:bg-black" />
        <div className="opacity-[40%]">© 2024 Company Name. All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
