import React from 'react';
import { Home, Step1, Step2, Step3 } from '../asserts/images';

const Steps = () => {
  return (
    <div>
      <h1
        style={{ fontFamily: 'Playfair Display' }}
        className='text-center mx-[530px] mt-40 text-3xl font-normal'
      >
        Regain Control & Reach Your Optimal Health In Three Easy Steps
      </h1>
      <div className='flex items-center justify-between mx-[250px] mt-8'>
        <div className='text-center h-80 mt-6 w-80'>
          <div className='flex justify-center'>
            <img src={Step1} alt='G' className='w-32 h-32 rounded-full' />
          </div>
          <h1 className='mt-4'>Step 1</h1>
          <h1 style={{ fontFamily: 'Gilroy-Regular' }} className='mx-10 mt-2'>
            Order your Test Kit or become a member
          </h1>
          <button
            style={{ fontFamily: 'Gilroy-Medium' }}
            className='mt-6 border-2 rounded-xl w-40 hover:scale-110'
          >
            Assessment
          </button>
        </div>
        <div className='text-center h-80 mt-6 w-80'>
          <div className='flex justify-center'>
            <img src={Step2} alt='G' className='w-32 h-32 rounded-full' />
          </div>
          <h1 className='mt-4'>Step 2</h1>
          <h1 style={{ fontFamily: 'Gilroy-Regular' }} className='mx-2 mt-2'>
            Get an Online Consultation with one of our Functional Doctors
          </h1>
          <button
            style={{ fontFamily: 'Gilroy-Medium' }}
            className='border-2 rounded-xl w-40 mt-6 hover:scale-110'
          >
            Order Test Kit Only
          </button>
        </div>
        <div className='text-center h-80 mt-6 w-80'>
          <div className='flex justify-center'>
            <img src={Step3} alt='G' className='w-32 h-32 rounded-full' />
          </div>
          <h1 className='mt-4'>Step 3</h1>
          <h1 style={{ fontFamily: 'Gilroy-Regular' }} className='mx-8 mt-2'>
            Get personalized treatment to your doorstep
          </h1>
          <button
            style={{ fontFamily: 'Gilroy-Medium' }}
            className='border-2 rounded-xl w-40 mt-6 hover:scale-110'
          >
            Book a Consult
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
