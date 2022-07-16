import React from 'react';
import Slider from './Slider';
import { SliderData } from './SliderData';
import { Link } from 'react-scroll';
import { BsChevronDoubleDown } from 'react-icons/bs';

const Hero = ({ heading, message }) => {
  return (
    <>
      <div className='w-full h-screen relative' id='hero'>
        <Slider slides={SliderData} autoPlay={true} delay={5000}>
          <div className='flex flex-col items-start p-5 text-white'>
            <h2 className='text-4xl sm:text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='px-8 py-2 cursor-pointer border hover:bg-blue-600 hover:border-blue-600'
            >
              Book
            </Link>
          </div>
        </Slider>
        <div className='absolute bottom-4 z-30 left-[50%] translate-x-[-50%]'>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='cursor-pointer hover:text-gray-500 hover:border-b-4 hover:border-b-blue-400'
          >
            <BsChevronDoubleDown size={36} className='text-gray-300/60' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
