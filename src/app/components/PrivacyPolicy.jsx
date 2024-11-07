import React from 'react';
import logo from '../assests/pierLogo.png';
import Image from 'next/image';
import "../styles/styles2.css";
import Link from 'next/link';

import { topics } from '../constants/index2';
import ContentSection from './ContentSection';
import { sections } from '../constants/index2';

const PrivacyPolicy = () => {
  return (
    <section className="bg-white animate-fadeIn px-4 md:px-8">
      <div className="flex flex-col md:flex-row">
        <div className=" animate-slideInLeft">
          <div className="h-auto pb-10 bg-transparent animate-bounce">
            <div className='fade-in'>
              <Image src={logo} alt="Logo" className="w-24 md:w-32 mx-auto md:mx-12 h-auto mt-8 animate-bounce" />
            </div>
            <div className='mb-10 bg-blue-400 px-4 pp'>
              <p className='text-center mt-5 pt-10'>
                <span className="fade-in font-bold text-[24px] md:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-grayCustom to-voiletCustom">
                  Privacy Policy
                </span>
              </p>
              <p className='text-center pb-10 w-full md:w-[80%] lg:w-[60%] mx-auto text-blackCustom font-poppins'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className='pb-10 shadow-md rounded-lg bg-gradient-to-b from-white to-pinkCustom2'>
                <div className="flex flex-col md:flex-row">
                  <aside className="w-full md:w-1/4 p-6 pt-10 box-border bg-gradient-to-b from-white to-pinkCustom2">
                    <ul className="space-y-4 text-voiletCustom font-medium">
                      {topics.map((topic, index) => (
                        <li key={index} className="hover:text-voiletCustom2 font-bold py-3 cursor-pointer text-center md:text-left">
                          <Link href={topic.link}>{topic.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </aside>
                  <main className="w-full md:w-3/4 p-4 md:p-8">
                    {sections.map((section, index) => (
                      <ContentSection 
                        key={index} 
                        title={section.title} 
                        id={section.id}
                        paragraphs={section.paragraphs} 
                        listItems={section.listItems} 
                      />
                    ))}
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
