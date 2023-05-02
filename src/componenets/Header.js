import React from 'react';
import { Logo } from '../asserts/images';

const Header = () => {
  return (
    <div className='flex items-center justify-between mx-64 mt-6 mb-5'>
      <div className='w-32'>
        <img src={Logo} alt='Logo' />
      </div>
      <div>
        <div className='flex gap-20'>
          <h2 style={{ fontFamily: 'Gilroy-Medium' }}>
            Call : <span>1 800 996 0610</span>
          </h2>
          <button
            style={{ fontFamily: 'Gilroy-Medium' }}
            className='bg-green-700 flex items-center justify-center w-20 h-5 rounded-lg text-sm text-white mt-1 hover:scale-110'
          >
            Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
