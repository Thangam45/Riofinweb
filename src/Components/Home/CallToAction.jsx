import React from 'react';

const CallToAction = () => {
  return (
    <div className="py-8 md:py-16 bg-black text-center text-white px-4">
      <div className='md:pt-16 md:pr-8 md:pl-8 md:mx-auto max-w-2xl rounded-[18px] overflow-hidden border-b-[12px] border-r-[12px] border-white bg-gradient-to-b from-blue-500 to-indigo-800 p-8'>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Let’s build a stronger Portfolio</h2>
        <button className='bg-[#00ff00] text-black py-2 px-4 rounded-md mt-4 border-black border-b-[3px] border-r-[3px] border-l-[1px] border-t-[1px] ease-linear transform hover:scale-125 transition duration-500'>
          Talk To Our Investment Specialist
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
