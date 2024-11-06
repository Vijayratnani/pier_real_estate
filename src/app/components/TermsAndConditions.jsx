import React from 'react'
import logo from '../assests/pierLogo.png';
import Image from 'next/image';
import "../styles/styles2.css";
import Link from 'next/link';

import { topics } from '../constants/index2';

import ContentSection from './ContentSection';
import { sections } from '../constants/index2';


const TermsAndConditions = () => {

  return (
    <section className="bg-white animate-fadeIn">
      <div className="flex flex-col md:flex-row">
        <div className="   animate-slideInLeft">
          <div className="h-auto box-border pb-10 bg-transparent animate-bounce">
            <div className='fade-in'>
              <Image src={logo} alt="Logo" className="w-32 md:mx-12 h-auto mt-8 animate-bounce" />
            </div>
            <div className=' box-border mb-10 bg-blue-400 px-4 pp'>
              <p className='text-center mt-5 pt-10'>
                <span className={`fade-in font-bold text-[24px] md:text-[36px] text-transparent bg-clip-text
                bg-gradient-to-r from-grayCustom to-voiletCustom `}>
                  Terms And Conditions
                  {/* ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} */}
                </span>
              </p>
              <p className='text-center pb-10 w-full md:w-[40%] mx-auto text-blackCustom font-poppins'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.
              </p>
              <div className='-mb-1 pb-20 shadow-md rounded-lg bg-gradient-to-b from-white to-pinkCustom2'>
              <div className='flex '>
                <aside className="w-1/4 p-6 pt-20 mb-5 pb-20 box-border bg-gradient-to-b from-white to-pinkCustom2">
                  <ul className="space-y-4 text-voiletCustom font-medium">
                  {topics.map((topic, index) => (
                    <li key={index} className="hover:text-voiletCustom2 font-bold py-5 cursor-pointer">
                      <Link href={topic.link} >{topic.title}</Link>
                    </li>
                  ))}
                  </ul>
                </aside>
                <main className="w-3/4 p-8">
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
              <div className='h-5 w-5'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsAndConditions