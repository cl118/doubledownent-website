import React from 'react';

const Contact = () => {
  return (
    <div className='w-full bg-white' id='contact'>
      <div className='max-w-[1240px] px-6 py-16 sm:py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-8 sm:mb-12'>
          <h2 className='text-3xl sm:text-5xl font-bold text-center'>
            Contact
          </h2>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Contact us blurb
          </p>
        </div>
        <form className='max-w-[800px] px-2 sm:px-4 m-auto' action='/'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            <input
              className='border shadow-lg p-3 focus:outline-blue-300'
              type='text'
              placeholder='Name'
            />
            <input
              className='border shadow-lg p-3 focus:outline-blue-300'
              type='email'
              placeholder='Email'
            />
          </div>
          <input
            className='border shadow-lg p-3 w-full my-2 focus:outline-blue-300'
            type='text'
            placeholder='Subject'
          />
          <textarea
            className='border shadow-lg p-3 w-full focus:outline-blue-300'
            cols='30'
            rows='5'
            placeholder='Message'
          ></textarea>
          <button className='border bg-blue-600 text-white shadow-lg p-3 w-full focus:outline-blue-300'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
