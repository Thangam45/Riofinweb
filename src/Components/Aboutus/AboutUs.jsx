import React from 'react';

import About from '../../assests/AboutUs.png';


const Aboutus = () => {
  return (
    <>
      <div className='bg-black text-white px-6 md:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className='flex flex-col'>
              <div className="my-5 md:my-20">
                <hr className='hrd' />
                <h1 className='mt-3 text-4xl md:text-8xl font-bold mb-4'>About Us</h1>
                <p className='text-lg md:text-2xl md:w-full'>Dive into Our Vision, Meet the Team, and <br />
                  Discover What Drives Us
                </p>
              </div>
            </div>
            <div className='md:my-5 flex justify-center md:justify-end'>
              <img src={About} alt='no img' className='max-w-full md:max-w-none' />
            </div>
          </div>
        </div>
      </div>
      {/* other components */}
      

    </>
  );
};

export default Aboutus;
