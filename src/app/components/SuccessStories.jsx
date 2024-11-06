'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { successStories } from '../constants/index.jsx';

const SuccessStories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-green-50 pt-5 pb-24 px-4 sm:px-14">
      <p className='text-center mt-5'>
        <span className={`text-base font-bold text-[12px] text-transparent bg-clip-text bg-gradient-to-r
          from-voiletCustom to-pinkCustom ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          12k+ Happy Clients
        </span>
      </p>
      <p className='text-center mt-5'>
        <span className={`font-bold text-[24px] sm:text-[36px] text-transparent bg-clip-text
          bg-gradient-to-r from-grayCustom to-voiletCustom 
          ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          Testimonials And Success Stories
        </span>
      </p>
      <div className='mt-[40px] mb-5 flex overflow-x-auto scrollbar-hidden space-x-2'>
        {successStories.map((info, index) => (
          <div 
            key={index} 
            className={`w-[300px] sm:w-[400px] mb-5 rounded-[15px] border-x-2 font-poppins
              ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} 
            style={{ animationDelay: `${(index+2) * 100}ms` }} 
          >
            <div className='flex items-center mt-[18px] ml-[18.2px]'>
              <Image src={info.icon} className='w-[50px] rounded-full' />
              <div className='text-voiletCustom leading-[30px] text-[16px] font-normal'>
                <h2>{info.clientName}</h2>
                <p className='text-[12px] leading-[24px]'>{info.designation}</p>
              </div>
            </div>
            <div className='text-[14px] ml-[18.2px] mt-[21px] text-blackCustom'>
              <span className='text-yellowCustom pr-1'>{info.rating}</span>
              <span>{info.ratingno}</span>
            </div>
            <p className='w-[280px] sm:w-[300px] mx-[18.2px] mt-[22px] text-blackCustom pb-5 text-[14px]'>
              {info.story}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
