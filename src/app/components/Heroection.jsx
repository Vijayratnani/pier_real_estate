import React from 'react';
import img from '../assests/image2.png';
import logo from '../assests/pierLogo.png';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-white animate-fadeIn">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 px-4 md:px-12 animate-slideInLeft">
          <div className="h-auto w-32 bg-transparent animate-bounce">
            <div className='fade-in'>
              <Image src={logo} alt="Logo" className="w-32 h-auto mt-8 animate-bounce" />
            </div>
          </div>
          <div className="mt-10">
            <span className="rounded-[4px] text-xs font-medium p-2 text-white bg-gradient-to-r from-voiletCustom to-pinkCustom animate-fadeIn delay-100">
              FIND THE BEST PROPERTY ADVISOR
            </span>
            <h1 className="text-[32px] md:text-[40px] leading-[36px] md:leading-[48px] text-grayCustom mt-5 animate-slideUp delay-200">
              Empowering Your Real Estate Investments with{" "}
              <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-voiletCustom to-white">
                AI-Driven
              </span>
              <br />
              <span className="text-voiletCustom font-extrabold">Insights.</span>
            </h1>
            <p className="text-grayCustom2 mt-5 md:mt-10 text-base leading-[20px] md:leading-[24px] font-normal font-poppins opacity-[80%] animate-fadeIn delay-300">
              Office ipsum you must be muted. Winning keywords weeks beforehand move don't staircase hit reality stop. Another will marketing emails other the. Minimize note out wider board air heads-up.
            </p>
          </div>
          <div className="bg-transparent animate-bounce">
            <button className="mt-8 p-[12px_19px] rounded-[8.63px] font-medium bg-voiletCustom2
           text-white shadow-[0px_2.88px_2.88px_0px_rgba(0,0,0,0.25)] hover:scale-105
           transition-transform duration-200">
              Schedule A Demo
            </button>
          </div>
          <div className="flex flex-wrap text-center mt-10">
            <div className="w-1/3 md:w-auto animate-scaleUp delay-500">
              <h4 className="text-2xl font-extrabold text-voiletCustom2">50k+</h4>
              <p className="text-grayCustom2 text-[13.66px] font-normal">Happy Customers</p>
            </div>
            <div className="w-1/3 md:w-auto ml-5 animate-scaleUp delay-600">
              <h4 className="text-2xl font-extrabold text-voiletCustom2">10+</h4>
              <p className="text-grayCustom2 text-[13.66px] font-normal">Years Of Expertise</p>
            </div>
            <div className="w-1/3 md:w-auto animate-scaleUp delay-700">
              <h4 className="text-2xl font-extrabold text-voiletCustom2">98%</h4>
              <p className="text-grayCustom2 text-[14px] font-light">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
        <Image
          src={img}
          alt="Real Estate"
          className="rounded-bl-[50px] w-full md:w-1/2 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]
          animate-slideInRight"
        />
      </div>
    </section>
  );
}

export default HeroSection;
