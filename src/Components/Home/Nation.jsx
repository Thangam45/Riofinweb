import React from 'react';
import NationImg from '../../assests/nation.png';

const Nation = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-gradient-to-b pl-4 md:pl-20 from-indigo-700 via-purple-500 to-indigo-700">
      {/* Left Side */}
      <div className="md:w-1/2 pl-4 md:pl-10 pt-8 md:pt-20  ">
        <h1 className='text-lg md:text-2xl font-bold mb-2 md:mb-4 text-[#00ff00]'>Hi,</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">We have investors {<br className='md:block hidden' />}across the</h2>
        <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[#00ff00]'>Nation</h1>
        <p className="text-justify text-white mb-2 md:mb-4 ">
        An extensive network of investors spread throughout {<br className='md:block hidden' />} the country, encompassing diverse regions {<br className='md:block hidden'/>}and markets.
        </p>
        <h1 className='text-5xl md:text-7xl font-bold mb-2 md:mb-4 text-white'>3000 +</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-[#00ff00]">Smart Investors</h2>
        
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 p-4 md:p-6">
        <img
          src={NationImg} // Replace with your image URL
          alt="Map"
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default Nation;

