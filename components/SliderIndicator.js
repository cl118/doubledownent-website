import React from 'react';

const SliderIndicator = ({ currentSlide, amountSlides }) => {
  return (
    <div className='flex flex-nowrap absolute bottom-4 right-4 z-40'>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          // Dot
          <div
            className={
              currentSlide === i
                ? 'w-3 h-3 m-1 rounded-full bg-white cursor-pointer opacity-100 transition-all duration-700 ease-in-out'
                : 'w-3 h-3 m-1 rounded-full bg-white cursor-pointer opacity-40 transition-all duration-700 ease-in-out'
            }
            onClick={() => nextSlide(i)}
            key={i}
          />
        ))}
    </div>
  );
};

export default SliderIndicator;
