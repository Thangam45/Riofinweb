import React from 'react';
import building from '../../assests/building.png';
import Testimonial from '../../assests/Testimonial circles.png';

const Banner = () => {
  return (
    <>
      <div className='bg-black pt-10 md:pt-20'>
        <section className="flex flex-col-reverse md:flex-row">
          <div className='flex-1 text-center md:text-left px-4 md:px-24'>
            <p className='text-mygreen font-bold text-lg md:text-2xl py-1 mt-6 md:mt-12'>
              Welcome! The Future Awaits You
            </p>
            <h1 className='text-white text-3xl md:text-5xl font-bold mt-1'>
              Invest Beyond
            </h1>
            <div className="wrapper">
                        <div className="words">
                            <span>STOCKS</span>
                            <span>BONDS</span>
                            <span>FIXED DEPOSIT</span>
                            <span>MUTUAL FUNDS</span>
                            <span>STOCKS</span>
                        </div>
                    </div>
            <p className='text-white text-lg md:text-2xl mt-2 md:mt-5'>
              Embark On A Journey Into Alternative Investments
            </p>
            <p className='text-white text-lg md:text-2xl mt-2 md:mt-5'>
              With Returns Starting From 18%.
            </p>
            <button className='bg-mygreen py-3 px-7 mx-4 md:mx-24 mt-2 md:mt-5 rounded-half'>
              Explore Opportunities
            </button>
            <img
              src={Testimonial}
              className='py-3 px-5 md:mx-16 mt-2 md:mt-5'
              alt='Testimonial'
            />
          </div>
          <div className='flex-2'>
            <img
              src={building}
              className='md:h-96 w-full object-cover md:w-120 md:h-513 mt-6 md:mt-20'
              alt='Building'
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
