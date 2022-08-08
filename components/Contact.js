import React, { useState } from 'react';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: '',
  });

  const [sendingStatus, setSendingStatus] = useState(false);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const onChangeContactForm = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSendingStatus(true);
    // prettier-ignore
    const res = await fetch('/api/contact', {
      body: JSON.stringify(contactFormData),
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      method: 'POST'
    })

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      setSendingStatus(false);
      return;
    }
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
    setShowFailureMessage(false);
    setSendingStatus(false);

    setContactFormData({
      contactName: '',
      contactEmail: '',
      contactSubject: '',
      contactMessage: '',
    });
    console.log(contactFormData);
  };
  return (
    <div className='w-full bg-white' id='contact'>
      <div className='max-w-[1240px] px-6 py-8 sm:py-16 sm:pt-32 sm:pb-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-4 sm:mb-10'>
          <h2 className='text-3xl sm:text-5xl font-bold'>Contact</h2>
          <p className='text-md lg:text-lg'>
            Get in touch with us for more information and bookings.
          </p>
        </div>
        <form
          className='max-w-[800px] px-2 sm:px-6 m-auto bg-gray-50 py-4 sm:py-10 mb-4 shadow-lg relative'
          onSubmit={handleSubmit}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <input
              className='border shadow-lg p-3 mb-2 sm:mr-1 focus:outline-blue-300'
              type='text'
              placeholder='Name'
              name='contactName'
              onChange={onChangeContactForm}
              value={contactFormData.contactName}
              required
            />
            <input
              className='border shadow-lg p-3 mb-2 sm:ml-1 focus:outline-blue-300'
              type='email'
              placeholder='Email'
              name='contactEmail'
              onChange={onChangeContactForm}
              value={contactFormData.contactEmail}
              required
            />
          </div>
          <input
            className='border shadow-lg p-3 w-full mb-2 focus:outline-blue-300'
            type='text'
            placeholder='Subject'
            name='contactSubject'
            onChange={onChangeContactForm}
            value={contactFormData.contactSubject}
            required
          />
          <textarea
            className='border shadow-lg p-3 w-full mb-2 focus:outline-blue-300'
            cols='30'
            rows='5'
            placeholder='Message - Please include any pertinent details and we will get back to you as soon as possible.'
            name='contactMessage'
            onChange={onChangeContactForm}
            value={contactFormData.contactMessage}
            required
          ></textarea>
          {sendingStatus ? (
            <button
              disabled
              type='button'
              className='border bg-blue-600 text-white shadow-lg focus:outline-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-900 focus:border-blue-900 font-medium w-full p-3 inline-flex justify-center items-center text-center'
            >
              <svg
                aria-hidden='true'
                role='status'
                className='inline mr-3 w-4 h-4 text-white animate-spin'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='#E5E7EB'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentColor'
                />
              </svg>
              Sending...
            </button>
          ) : (
            <button
              type='submit'
              className='border bg-blue-600 text-white shadow-lg p-3 focus:outline-blue-300 hover:bg-blue-800  focus:border-green-900 font-medium w-full text-center'
            >
              Send
            </button>
          )}
          <div className='text-left absolute w-full bottom-1'>
            {showSuccessMessage && (
              <p className='text-green-800 font-semibold text-sm my-2'>
                Your message has been sent. We will respond as soon as possible.
              </p>
            )}
            {showFailureMessage && (
              <p className='text-red-600'>
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
        <div className='w-full flex justify-center sm:my-8 gap-8'>
          <a href='https://instagram.com/doubledownent' target='_blank'>
            <AiOutlineInstagram
              size={50}
              className='cursor-pointer hover:text-gray-400'
            />
          </a>
          <a
            href='https://www.facebook.com/DoubleDownEntertainment/'
            target='_blank'
          >
            <AiOutlineFacebook
              size={50}
              className='cursor-pointer hover:text-gray-400'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
