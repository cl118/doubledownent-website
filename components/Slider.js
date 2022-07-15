import React, { useEffect, useState } from 'react';

const Slider = ({ slides, autoPlay, delay, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (slideIndex = currentSlide + 1) => {
    const newSlideIndex = slideIndex >= slides.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        nextSlide();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  return (
    <div className='relative h-full flex flex-nowrap overflow-x-hidden'>
      {slides.map((slide, index) => (
        <div
          className='h-full w-full flex-shrink-0 bg-center bg-cover transition-all duration-700 ease-in-out'
          key={index}
          style={{
            backgroundImage: `url(${slide.image})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        />
      ))}
      {/* Gradient */}
      <div className='absolute top-0 left-0 h-full w-full bg-black/70 z-30' />

      <div className='flex flex-nowrap absolute bottom-4 right-4 z-40'>
        {Array(slides.length)
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

      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40'>
        {children}
      </div>
    </div>
  );
};

export default Slider;
