import React from 'react';
import HeroSlider from './HeroSlider';
import { SliderData } from './SliderData';

const Hero = ({ heading, message }) => {
  return (
    <>
      <div className='w-full h-screen' id='hero'>
        <HeroSlider slides={SliderData} autoPlay={true} delay={5000}>
          <div className='flex flex-col items-start p-5 text-white'>
            <h2 className='text-4xl sm:text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <button className='px-8 py-2 border'>Book</button>
          </div>
        </HeroSlider>
      </div>
    </>
  );
};

export default Hero;
