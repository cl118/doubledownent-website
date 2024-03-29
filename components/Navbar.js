import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setBgColor('#000');
      } else {
        setBgColor('transparent');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className='fixed left-0 top-0 w-full z-50 ease-in duration-300'
    >
      <div className='max-w-[1240px] mx-auto flex justify-between items-center px-4 py-1 text-white'>
        <div className='flex items-center'>
          <Link to='hero' spy={true} smooth={true} offset={0} duration={500}>
            <Image
              src='/assets/dd-logo-white-small.png'
              height={40}
              width={50}
              layout='fixed'
              objectFit='contain'
            />
          </Link>
        </div>
        <ul className='hidden sm:flex'>
          <li className='p-4'>
            <Link
              to='hero'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='cursor-pointer hover:text-gray-400 hover:border-b-4 hover:border-b-blue-400'
            >
              Home
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='about'
              activeClass='text-gray-400 border-b-4 border-b-blue-500'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className='cursor-pointer hover:text-gray-500 hover:border-b-4 hover:border-b-blue-400'
            >
              About
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='roster'
              activeClass='text-gray-400 border-b-4 border-b-blue-500'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className='cursor-pointer hover:text-gray-500 hover:border-b-4 hover:border-b-blue-400'
            >
              Roster
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='radio'
              activeClass='text-gray-400 border-b-4 border-b-blue-500'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className='cursor-pointer hover:text-gray-400 hover:border-b-4 hover:border-b-blue-400'
            >
              Radio
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='venues'
              activeClass='text-gray-400 border-b-4 border-b-blue-500'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className='cursor-pointer hover:text-gray-400 hover:border-b-4 hover:border-b-blue-400'
            >
              Venues/Partners
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='contact'
              activeClass='text-gray-400 border-b-4 border-b-blue-500'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className='cursor-pointer hover:text-gray-400 hover:border-b-4 hover:border-b-blue-400'
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div
          onClick={handleNav}
          className='block sm:hidden cursor-pointer z-50'
        >
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} className='text-white' />
          )}
        </div>

        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link
                to='hero'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleNav}
              >
                Home
              </Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleNav}
              >
                About
              </Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link
                to='roster'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleNav}
              >
                Roster
              </Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link
                to='radio'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleNav}
              >
                Radio
              </Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link
                to='venues'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleNav}
              >
                Venues/Partners
              </Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleNav}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
