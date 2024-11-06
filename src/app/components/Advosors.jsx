'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

import advisor1 from "../assests/advisor1.png";
import advisor2 from "../assests/advisor2.png";
import advisor3 from "../assests/advisor3.png";

const Advosors = () => {
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
        threshold: 0.1, 
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
    <section ref={sectionRef} className="bg-gray-50 pt-5 pb-24 px-4 md:px-14">
      {/* will impliment map function later */}
      <p className='text-center mt-5'>
        <span className={`fade-in text-base font-bold text-[12px] text-transparent bg-clip-text 
        bg-gradient-to-r from-voiletCustom to-pinkCustom 
        ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          OUR ADVISORS
        </span>
      </p>
      <p className='text-center mt-5'>
        <span className={`fade-in font-bold text-[24px] md:text-[36px] text-transparent bg-clip-text
        bg-gradient-to-r from-grayCustom to-voiletCustom 
        ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          Meet Our Advisors
        </span>
      </p>
      <p className='text-center w-full md:w-[35%] mx-auto text-voiletCustom2'>
        Lorem ipsum dolor sit amet,libero consectetur elit. Integer nec odio. Praesent libero. Sed
        cursus dapibus diam.
      </p>
      <div className=' mb-5 flex '>
        <div className='block lg:flex overflow-x-auto'>
          <div className='block lg:flex'>
            <div className={`relative w-[218px] h-[392px] mt-[150px] mr-4
            ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} 
            style={{ animationDelay: `400ms` }}>
              <Image src={advisor1} className='w-auto h-full rounded-[12px]'/>
              <div className="text-white absolute bottom-[44px] left-[5px]">
                <h2 className='font-bold text-[16px] md:text-[18px] leading-[22px]'>Taylor Morgan
                </h2>                
                <span className='font-medium text-[14px] md:text-[16px] leading-[19px]'>
                  Senior Real Estate Investment Advisor
                </span>
              </div>
            </div>
            <div className={`relative mt-[120px] w-[218px] h-[392px] mr-4
            ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} 
            style={{ animationDelay: `300ms` }}>
              <Image src={advisor2} className='w-auto h-full rounded-[12px]'/>
              <div className="text-white absolute bottom-[44px] left-[5px]">
                <h2 className='font-bold text-[16px] md:text-[18px] leading-[22px]'>Taylor Morgan</h2>                  
                <span className='font-medium text-[14px] md:text-[16px] leading-[19px]'>Senior Real Estate Investment Advisor</span>
              </div>
            </div>
            <div className={`relative mt-[72px] w-[218px] h-[392px] mr-4
            ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} 
            style={{ animationDelay: `200ms` }}>
              <Image src={advisor3} className='w-auto h-full rounded-[12px]'/>
              <div className="text-white absolute bottom-[44px] left-[5px]">
                <h2 className='font-bold text-[16px] md:text-[18px] leading-[22px]'>Taylor Morgan</h2>                  
                <span className='font-medium text-[14px] md:text-[16px] leading-[19px]'>Senior Real Estate Investment Advisor</span>
              </div>
            </div>
          </div>
        
        <div className=' my-auto ml-10 pb-8 '>
          <h3 className={`text-[24px] md:text-[30px] font-bold w-fit text-transparent bg-clip-text bg-gradient-to-r
          from-voiletCustom to-pinkCustom mt-[42px] ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            Why Our Advisors Stand Out  
          </h3>
        <p className='mt-4 font-poppins font-normal text-[12px] md:text-[14px] leading-[30px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at lectus eu lacus varius                dapibus vel eget odio. Cras ut lorem vitae ligula commodo efficitur.
        </p>
        <p className='mt-3 font-poppins font-normal text-[12px] md:text-[14px] leading-[30px]'>            Curabitur ac tortor at ipsum facilisis aliquam. Donec vel felis a eros feugiat consequat
            in at libero. Praesent ac turpis a sapien ullamcorper malesuada
        </p>
        <button className='mt-10 p-3
        rounded-[8.63px] font-medium
        bg-voiletCustom2 text-white shadow-[0px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] hover:scale-105
        transition-transform duration-200'>
          Read More
        </button>
      </div>
    </div>
    </div>
  </section>
  )
}

export default Advosors