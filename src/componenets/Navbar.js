import React from 'react';
import { Home, Victor } from '../asserts/images';
import { useState } from 'react';
import { Video } from '../asserts/video';

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);

  return (
    <div className='h-[100%]'>
      <div>
        <video
          autoPlay
          loop
          muted
          poster={Home}
          className='w-[100%] absolute -z-10'
        >
          <source src={Video} type='video/mp4' />
        </video>
      </div>
      <div
        style={{ fontFamily: 'Gilroy-Medium' }}
        className='flex justify-between items-center mx-64 text-white text-sm pt-7'
      >
        <h1 className='cursor-pointer'>How its Work</h1>
        <h1 className='cursor-pointer'>Natural Supplements</h1>
        <div className='relative flex items-center'>
          <h1 className='cursor-pointer'>Harmonal Optimization</h1>
          <img
            src={Victor}
            alt='g'
            className='mt-2'
            onMouseOver={() => setDropDown(!dropDown)}
          />
        </div>
        {dropDown && (
          <h1 className='bg-slate-300 absolute ml-[305px] mt-14 w-20 h-10 text-black rounded-sm'>
            Link
          </h1>
        )}
        <div className='flex items-center'>
          <h1 className='cursor-pointer'>Men Sexual Health</h1>
          <img
            src={Victor}
            alt='g'
            className='mt-2'
            onMouseOver={() => setDropDown1(!dropDown1)}
          />
        </div>
        {dropDown1 && (
          <h1 className='bg-slate-300 absolute ml-[455px] mt-14 w-20 h-10 text-black rounded-sm'>
            Link
          </h1>
        )}
        <div className='flex items-center'>
          <h1 className='cursor-pointer'>Women Sexual Health</h1>
          <img
            src={Victor}
            alt='g'
            className='mt-2'
            onMouseOver={() => setDropDown2(!dropDown2)}
          />
        </div>
        {dropDown2 && (
          <h1 className='bg-slate-300 absolute ml-[620px] mt-14 w-20 h-10 text-black rounded-sm'>
            Link
          </h1>
        )}
        <div className='flex items-center'>
          <h1 className='cursor-pointer'>Memberships Programs</h1>
          <img
            src={Victor}
            alt='g'
            className='mt-2'
            onMouseOver={() => setDropDown3(!dropDown3)}
          />
        </div>
        {dropDown3 && (
          <h1 className='bg-slate-300 absolute ml-[795px] mt-14 w-20 h-10 text-black rounded-sm'>
            Link
          </h1>
        )}

        <h1 className='cursor-pointer'>Blogs</h1>
        <h1 className='cursor-pointer'>Faqs</h1>
        <h1 className='cursor-pointer'>ConTact Us</h1>
      </div>
      <div className='mt-52'>
        <h1
          style={{ fontFamily: 'Playfair Display' }}
          className='text-4xl text-center mx-[500px] text-white font-normal'
        >
          Personalized Hormonal & Wellness Treatment Designed For You!
        </h1>
        <h1
          style={{ fontFamily: 'Gilroy-Regular' }}
          className='text-center mx-[560px] mt-7 text-white text-sm'
        >
          Your body and mind have always been connected, but sometimes you may
          not feel like that is true. That is why AlfaGenix was created. You are
          unique and therefore we will give you a unique personalized treatment.
        </h1>
        <div className='text-center'>
          <button
            style={{ fontFamily: 'Gilroy-Medium' }}
            className='mt-28 mb-60 bg-orange-500 text-white w-36 rounded-xl h-8 hover:scale-110'
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
