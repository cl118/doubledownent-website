import Image from 'next/image';
import React from 'react';
import { RosterData } from './RosterData';

const sortedRoster = RosterData.sort((a, b) => (a.name > b.name ? 1 : -1));

const Roster = () => {
  return (
    <div className='w-full flex flex-col items-center' id='roster'>
      <div className='py-24 text-center'>
        <h2 className='text-3xl sm:text-5xl font-bold'>Our Roster</h2>
        <p className='text-md lg:text-lg'>Some blurb about the roster</p>
      </div>

      {/* Grid of DJs */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 bg-gray-500 w-full'>
        {sortedRoster.map((dj, index) => (
          <div
            className='w-full  h-[275px] sm:h-[250px] md:h-[225px] lg:h-[300px] relative mx-auto'
            key={index}
          >
            <Image src={dj.img} layout='fill' objectFit='cover' alt='/' />
            <div className='absolute top-0 left-0 h-full w-full hover:bg-black/80 z-10' />
            <div className='z-20 text-white absolute w-[75%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center'>
              <h3>{dj.name}</h3>
              <p>{dj.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;