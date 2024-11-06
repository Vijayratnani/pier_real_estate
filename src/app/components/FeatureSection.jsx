'use client';

import React, { useEffect, useRef, useState } from 'react';
import feature1 from '../assests/feature.png';
import feature2 from '../assests/feature2.png';
import feature3 from '../assests/feature3.png';
import Image from 'next/image';

const FeatureSection = () => {
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
        threshold: 0.3, 
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
    <section ref={sectionRef} className="bg-gray-50 pt-[150px] pb-24 px-14">
      <p className='text-center'>
        <span className={`text-base font-bold text-[12px] text-transparent bg-clip-text bg-gradient-to-r
           from-voiletCustom to-pinkCustom ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          CORE FEATURES
        </span>
      </p>
      <p className='text-center mt-5'>
        <span className={`font-bold text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-grayCustom to-voiletCustom ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          Main Features Of Our Platform
        </span>
      </p>
      <div className="grid gap-y-8 mt-[80px]">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row">
          <div className={`w-full md:w-1/2 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <Image src={feature1} alt="AI Integration" className="w-11/12 h-72 md:h-[380px] rounded-xl"/>
          </div>
          <div className='w-full md:w-1/2'>
            <div className={`w-11/12 ml-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
              <h3 className={`text-[32px] font-bold w-fit text-transparent bg-clip-text bg-gradient-to-r
                from-voiletCustom to-pinkCustom mt-[42px] ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
                AI Integration
              </h3>
              <p className="text-grayCustom mt-2">Advanced AI For Market Trend Analysis.</p>
              <p className='mt-3 font-poppins font-normal text-[14px] leading-[30px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at lectus eu lacus varius
                dapibus vel eget odio. Cras ut lorem vitae ligula commodo.
              </p>
              <p className='mt-4 font-poppins font-normal text-[14px] leading-[30px]'>
                Curabitur ac tortor at ipsum facilisis aliquam. Donec vel felis a eros feugiat consequat 
                in at libero. Praesent ac turpis a sapien ullamcorper malesuada.
              </p>
            </div>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row">
          <div className={`w-full md:w-1/2 md:order-2 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <Image src={feature2} alt="Analytics Tools" className="w-11/12 h-72 md:h-[380px] rounded-xl ml-auto"/>
          </div>
          <div className='w-full md:w-1/2 md:order-1'>
            <div className={`w-11/12 mr-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
              <h3 className={`text-[32px] font-bold w-fit text-transparent bg-clip-text bg-gradient-to-r from-voiletCustom to-pinkCustom mt-[42px] ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
                Analytics Tools
              </h3>
              <p className="text-grayCustom mt-2">Comprehensive Analytics Tools</p>
              <p className='mt-3 font-poppins font-normal text-[14px] leading-[30px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at lectus eu lacus varius
                dapibus vel eget odio. Cras ut lorem vitae ligula commodo.
              </p>
              <p className='mt-4 font-poppins font-normal text-[14px] leading-[30px]'>
                Curabitur ac tortor at ipsum facilisis aliquam. Donec vel felis a eros feugiat consequat 
                in at libero. Praesent ac turpis a sapien ullamcorper malesuada.
              </p>
            </div>
          </div>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row">
          <div className={`w-full md:w-1/2 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <Image src={feature3} alt="Real Estate Insights" className="w-11/12 h-72 md:h-[380px] rounded-xl"/>
          </div>
          <div className='w-full md:w-1/2'>
            <div className={`w-11/12 ml-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
              <h3 className={`text-[32px] font-bold w-fit text-transparent bg-clip-text bg-gradient-to-r from-voiletCustom to-pinkCustom mt-[42px] ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
                Real Estate Insights
              </h3>
              <p className="text-grayCustom mt-2">Actionable Real Estate Insights</p>
              <p className='mt-3 font-poppins font-normal text-[14px] leading-[30px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at lectus eu lacus varius
                dapibus vel eget odio. Cras ut lorem vitae ligula commodo.
              </p>
              <p className='mt-4 font-poppins font-normal text-[14px] leading-[30px]'>
                Curabitur ac tortor at ipsum facilisis aliquam. Donec vel felis a eros feugiat consequat 
                in at libero. Praesent ac turpis a sapien ullamcorper malesuada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
