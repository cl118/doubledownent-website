import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';

const Services = () => {
  return (
    <div className='w-full flex flex-col md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] mx-auto md:grid md:grid-cols-3'>
      {/* Corporate Events */}
      <div className='relative w-full h-[300px] md:h-full'>
        <Image
          src={'/assets/corporate-event.jpg'}
          layout='fill'
          objectFit='cover'
          alt='/'
        />
        <div className='absolute top-0 left-0 h-full w-full bg-black/80 z-10' />
        <div className='z-20 text-white absolute w-[75%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center'>
          <h2 className='text-3xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl font-bold'>
            Corporate Events
          </h2>
          <div className='h-2 md:h-1 lg:h-2 w-10 bg-blue-400 my-4 md:my-2 lg:my-4' />
          <p className='text-center text-base sm:text-xs lg:text-base'>
            No event is too small or too large for us. Contact us to get a
            detailed consultation and start the planning process.
          </p>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='md:text-sm lg:text-base mt-4 lg:mt-8 px-4 py-1 lg:px-8 lg:py-2 cursor-pointer bg-blue-600 hover:bg-blue-800 active:scale-95'
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Nightlife */}
      <div className='relative w-full h-[300px] md:h-full'>
        <Image
          src={'/assets/nightlife-event.jpg'}
          layout='fill'
          objectFit='cover'
          alt='/'
        />
        <div className='absolute top-0 left-0 h-full w-full bg-black/80 z-10' />
        <div className='z-20 text-white absolute w-[75%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center'>
          <h2 className='text-3xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl font-bold'>
            Nightlife Events
          </h2>
          <div className='h-2 md:h-1 lg:h-2 w-10 bg-blue-400 my-4 md:my-2 lg:my-4' />
          <p className='text-center text-base sm:text-xs lg:text-base'>
            Our DJs play some of the top venues around the country. Need top
            notch entertainment for your venue? Don't hesitate and book now.
          </p>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='md:text-sm lg:text-base mt-4 lg:mt-8 px-4 py-1 lg:px-8 lg:py-2 cursor-pointer bg-blue-600 hover:bg-blue-800 active:scale-95'
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Private Events */}
      <div className='relative w-full h-[300px] md:h-full'>
        <Image
          src={'/assets/private-event.jpg'}
          layout='fill'
          objectFit='cover'
          alt='/'
        />
        <div className='absolute top-0 left-0 h-full w-full bg-black/90 z-10' />
        <div className='z-20 text-white absolute w-[75%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center'>
          <h2 className='text-3xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl font-bold'>
            Private Events
          </h2>
          <div className='h-2 md:h-1 lg:h-2 w-10 bg-blue-400 my-4 md:my-2 lg:my-4' />
          <p className='text-center text-base sm:text-xs lg:text-base'>
            Let us help create the perfect event for everlasting memories. We
            are masters of our craft and can cater to any crowd.
          </p>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='md:text-sm lg:text-base mt-4 lg:mt-8 px-4 py-1 lg:px-8 lg:py-2 cursor-pointer bg-blue-600 hover:bg-blue-800 active:scale-95'
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
