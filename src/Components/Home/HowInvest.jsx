import React from 'react';

import yourImage from '../../assests/Video.png'
import yourImg1 from '../../assests/num1.png'
import yourImg2 from '../../assests/num2.png'
import yourImg3 from '../../assests/num3.png'

const HowInvest = () => {
  return (
    <div className='bg-gradient-to-b from-blue-600 to-indigo-800 p-8 md:p-16 align-middle '>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 md:p-5 ' >

      {/* Left Column (Image) */}
      <div className=''>
        
      <div className='md:mb-10'>
      <h1 className='text-white font-bold text-left text-5xl relative'>
      How to Invest in {<br className="md:block hidden" />} Riofin Assets
        <div className='border-b-4 border-green-500 pb-4 mb-6 md:absolute right-0 md:right-52 bottom-0 top-24 w-full font-sans'></div>
      </h1>
      </div>
      
      
      {/*points one */}
        
        <div className="flex items-center mb-4">
         <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={yourImg1} alt="Your Alt Text" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4 mb-5">
             <h2 className="text-xl font-bold text-white">Create Account</h2>
               <p className="text-white">Create an account by clicking the sign up. {<br className='md:block hidden' />}Enter your KYC details and verify.</p>
        </div>
      </div>

      {/*points two */}
      <div className="flex items-center mb-4">
         <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={yourImg2} alt="Your Alt Text" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4 mb-5">
             <h2 className="text-xl font-bold text-white">Choose The Project</h2>
               <p className="text-white">Select your preferred project in the {<br className='md:block hidden' />}opportunity section and click invest now.</p>
        </div>
      </div>

         {/*points three */}
      <div className="flex items-center mb-4">
         <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={yourImg3} alt="Your Alt Text" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
             <h2 className="text-xl font-bold text-white">Successfully Invested</h2>
               <p className="text-white">Now, pay through your preferred mode and that's {<br className='md:block hidden' />}it now you are successfully invested in Riofin.</p>
        </div>
      </div>

       
      </div>

      {/* Right Column (Text and Button) */}
      <div className='text-right'>
          
          <button className='bg-[#00ff00] text-black py-2 px-4  rounded-md mt-4 mb-10 border-black border-b-[3px] border-r-[3px] border-l-[1px] border-t-[1px] ease-linear transform hover:scale-125 transition duration-500'>Get Started with Riofin</button>
          
        
      <div>
        <img src={yourImage} alt='Your Image' className='w-full h-full border-b-[8px] border-r-[8px] border-green-500 rounded-[18px]' />
      </div>
      </div>
    </div>
    </div>
  );
};

export default HowInvest;
