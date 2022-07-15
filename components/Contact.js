import React from 'react';

const Contact = () => {
  return (
    <div className='w-full bg-white' id='contact'>
      <div className='max-w-[1240px] px-6 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h2 className='text-2xl sm:text-4xl font-bold text-center mb-4'>
            Contact
          </h2>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Contact us blurb
          </p>
        </div>
        <form className='max-w-[700px] m-auto' action='/'>
          <div className='grid grid-cols-2 gap-2'>
            <input
              className='border shadow-lg p-3 rounded-md focus:outline-blue-300'
              type='text'
              placeholder='Name'
            />
            <input
              className='border shadow-lg p-3 rounded-md focus:outline-blue-300'
              type='email'
              placeholder='Email'
            />
          </div>
          <input
            className='border shadow-lg p-3 w-full my-2 rounded-md focus:outline-blue-300'
            type='text'
            placeholder='Subject'
          />
          <textarea
            className='border shadow-lg p-3 w-full rounded-md focus:outline-blue-300'
            cols='30'
            rows='5'
            placeholder='Message'
          ></textarea>
          <button className='border shadow-lg p-3 w-full rounded-md focus:outline-blue-300'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
