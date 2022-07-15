import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div
      className='max-w-[1240px] lg:h-[500px] mx-auto flex flex-col sm:flex-row'
      id='about'
    >
      {/* mobile top/tablet+ left */}
      <div className='w-full pt-6 sm:w-[50%] flex justify-end items-end sm:pl-2 md:pl-4 lg:pl-6'>
        <Image
          src={'/assets/group.png'}
          height={400}
          width={600}
          objectFit='contain'
          alt='/'
          className='mr-6'
        />
      </div>

      {/* mobile bottom/tablet+ right */}
      <div className='sm:w-[50%] flex flex-col items-start px-2 sm:ml-2 md:ml-3 lg:ml-4 md:pr-6 leading-tight md:leading-normal'>
        <h2 className='text-2xl md:text-2xl lg:text-4xl font-bold sm:mt-8 md:mt-[20%]'>
          Double Down Entertainment
        </h2>
        <p className='text-md sm:text-sm lg:text-lg py-2'>
          DJ / Talent booking agency, boasting a roster of DJ’s who specialize
          in spinning everything from Pop to Hip-Hop, Top 40, EDM, Crossover and
          more.
        </p>
        <p className='text-md sm:text-sm lg:text-lg pb-4'>
          Contact us for more information on DD Entertainment Artist or for
          DJ/Artists wanting to be considered for our roster.
        </p>
        <Link
          to='roster'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className='text-md md:text-sm lg:text-lg cursor-pointer text-white bg-blue-600 hover:bg-blue-400 py-2 px-4 mb-4 sm:mb-8 md:mb-12'
        >
          Full Roster
        </Link>
      </div>
    </div>
  );
};

export default About;
