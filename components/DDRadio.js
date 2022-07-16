import React from 'react';

const DDRadio = () => {
  return (
    <div className='py-24 text-center flex flex-col items-center' id='radio'>
      <div>
        <h2 className='text-3xl sm:text-5xl font-bold'>Double Down Radio</h2>
        <p className='p-4 text-sm sm:text-md lg:text-lg leading-tight sm:leading-normal'>
          Listen every Friday at 11AM EST on SiriusXM Radio or subscribe and
          catch up on past episdoes below!
        </p>
      </div>
      <iframe
        src='https://embed.podcasts.apple.com/us/podcast/doubledown-radio/id1517102497?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=light'
        height='500px'
        frameBorder='0'
        sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation'
        allow='autoplay *; encrypted-media *; clipboard-write'
        className='w-full max-w-[700px] overflow-hidden bg-transparent rounded-[10px] pt-8 px-2'
      />
    </div>
  );
};

export default DDRadio;
