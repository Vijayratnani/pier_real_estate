'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import platformWorking from '../assests/platformWork.png';

const PlatformWorking = () => {
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
    <section ref={sectionRef} className="pt-5 pb-24 px-14">
      <p className='text-center mt-5'>
        <span className={`text-base font-bold text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-voiletCustom to-pinkCustom ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          OUR SERVICES
        </span>
      </p>
      <p className='text-center mt-5'>
        <span className={`font-bold text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-grayCustom to-voiletCustom ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          How Our Platform Works
        </span>
      </p>
      <p className={`text-center w-11/12 md:w-[35%] mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        Lorem ipsum dolor sit amet, libero consectetur elit. Integer nec odio. Praesent libero. Sed cursus dapibus diam.
      </p>
      <div className="grid gap-y-8 mt-[80px]">
        <div className="flex flex-col md:flex-row">
          <div className={`w-full md:w-1/2 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <Image src={platformWorking} alt="AI Integration" className="-ml-14 w-full md:w-11/12 h-screen rounded-br-3xl"/>
          </div>
          <div className={`w-full md:w-1/2 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <h3 className={`text-[32px] font-bold w-fit text-transparent bg-clip-text bg-gradient-to-r from-voiletCustom to-pinkCustom mt-[42px] ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
              Best Services For You.
            </h3>
            <p className='mt-5 font-poppins text-voiletCustom2 font-normal text-[16px] leading-[30px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna nec nulla volutpat facilisis. Fusce egestas nulla non elit posuere, ac efficitur elit faucibus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud.
            </p>
            <div>
              <ul className='list-disc mt-3 ml-4 font-semibold'>
                <li className={`mt-4 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}><span className='text-voiletCustom'>Predictive Analytics</span></li>
                <li className={`mt-4 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}><span className='text-voiletCustom'>Future Value Insights</span></li>
                <li className={`mt-4 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}><span className='text-voiletCustom'>Investment Opportunities</span></li>
              </ul>
            </div>
            <button className='mt-20 p-[12px_19px] rounded-[8.63px] font-medium bg-voiletCustom2
            text-white shadow-[0px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] hover:scale-105
            transition-transform duration-200'>
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformWorking;
