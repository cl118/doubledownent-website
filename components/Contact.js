import React from 'react';

const Contact = () => {
  return (
    <div className='w-full bg-gray-300' id='contact'>
      <h2 className='text-2xl font-bold text-center p-4'>contact</h2>
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
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='border shadow-lg p-3 w-full rounded-md focus:outline-blue-300'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
