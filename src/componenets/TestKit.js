import React from 'react';
import { Arrow1, Arrow2, Home, Line, TestKit } from '../asserts/images';

const Testkit = () => {
  const [text, setText] = React.useState('Sexual Health Male & Female');
  const [img, setImg] = React.useState(false);

  const handleClick = () => {
    if (!img) {
      setImg(true);
      setText('Male & Female');
    } else {
      setText('Female');
      setImg(false);
    }
  };
  return (
    <>
      <h1
        style={{ fontFamily: 'Playfair Display' }}
        className='mt-4 mb-6 ml-[260px] text-3xl'
      >
        Choose Your Personalized Test Kit
      </h1>
      <div className='flex'>
        <div className='absolute ml-[260px]'>
          <img
            src={!img ? TestKit : Home}
            alt='g'
            className='h-[550px] w-[700px]'
          />
        </div>

        <div className='absolute text-center w-[650px] h-[400px] mt-20 ml-[882px]  bg-[#FFF3E9]'>
          <h1
            style={{ fontFamily: 'Playfair Display' }}
            className='mt-24 mx-60 text-2xl'
          >
            {text}
          </h1>
          <h1 style={{ fontFamily: 'Gilroy-Regular' }} className='mt-4 mx-32'>
            The Hormone Trio provides a baseline assessment of estradiol,
            progesterone and testosterone.
          </h1>
          <button
            style={{ fontFamily: 'Gilroy-Medium' }}
            className='mt-20 hover:scale-110'
          >
            Get Started!
          </button>
          <div className='flex justify-center'>
            <img src={Line} alt='' />
          </div>
        </div>
        <div className='flex ml-[1050px] mt-[510px] gap-20'>
          <img
            src={Arrow2}
            alt='g'
            onClick={handleClick}
            className='hover:scale-110'
          />
          <img
            src={Arrow1}
            alt='g'
            onClick={handleClick}
            className='hover:scale-110'
          />
        </div>
      </div>
    </>
  );
};

export default Testkit;
