import React from 'react';
import MixcloudPlayer from './MixcloudPlayer';

const DDRadio = () => {
  return (
    <div className='py-24 text-center' id='radio'>
      <div>
        <h2 className='text-3xl sm:text-5xl font-bold'>Double Down Radio</h2>
        <p className='p-4 text-sm sm:text-md lg:text-lg leading-tight sm:leading-normal'>
          Listen every Friday at 11AM EST on SiriusXM Radio or catch up on past
          episdoes below!
        </p>
      </div>
      {/* <MixcloudPlayer
        mixcloudUrl={
          'https://www.mixcloud.com/DoubleDownEnt/doubledown-radio-episode-001-dj-jason-weiss-dj-exodus/'
        }
      /> */}
    </div>
  );
};

export default DDRadio;
