import React from 'react';
import image1 from '../../assests/Money Bag.png';
import image2 from '../../assests/Handshake.png';
import image3 from '../../assests/Help.png';
import BackgroundImage1 from '../../assests/Rectangle 4442.jpg';

function Investor() {
  const cardStyle1 = {
    backgroundImage: `url(${BackgroundImage1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='bg-white pt-10 pb-0 align-middle ' style={cardStyle1}>
      <h1 className='text-black font-bold text-center text-4xl '>
        Not an Investor?
      </h1>
      <div className='flex justify-end'>
        <div className='border-b-4 border-green-400 pb-4 mb-6 pl-[650px] overflow-hidden'></div>
      </div>

      <p className='text-black text-center px-4 md:px-32 text-2xl mt-2 md:mt-5 font-sans'>
        Our Teams stand ready to Help!
      </p>

      <div className='flex justify-around mt-0 ml-10 mr-2 p-10 gap-8'>
        {/* First Image Box */}
        <div className=' pt-4 rounded-[18px]  shadow-lg  lg:m-12 border-r-4 border-b-4 border-t-2 border-l-2 lg:border-r-8 lg:border-b-8 border-black'>
          <div className='flex items-center justify-center'>
            <img
              src={image1}
              alt='Your Alt Text'
              className='w-20 h-20 object-cover p-2 rounded-full bg-[#fff]  border-r-4  border-l-[1px] border-t-[1px] border-b-4   border-blue border-black shadow-lg pb-2 lg:pb-4 absolute inset-50 flex '
            />
          </div>
          <div className='px-3 lg:px-6 py-2 lg:py-4 text-center'>
            <h2 className='font-bold text-2xl mt-16'>Become A Seller</h2>
            <p className='text-black text-center  text-1xl mt-2 md:mt-5 '>
              Interested in our investment opportunities? Contact us today.
              Interested in our investment
            </p>
            <button className='bg-[#00ff00] text-black py-2 px-4  rounded-md mt-4 mb-10 border-black border-b-[3px] border-r-[3px] border-l-[1px] border-t-[1px] ease-linear transform hover:scale-125 transition duration-500'>
              Join now
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className=' pt-4 rounded-[18px]  shadow-lg  lg:m-12 border-r-4 border-b-4 border-t-2 border-l-2 lg:border-r-8 lg:border-b-8 border-black'>
          <div className='flex items-center justify-center'>
            <img
              src={image2}
              alt='Your Alt Text'
              className='w-20 h-20 object-cover p-2 rounded-full bg-[#fff]  border-r-4  border-l-[1px] border-t-[1px] border-b-4   border-blue border-black shadow-lg pb-2 lg:pb-4 absolute inset-50 flex '
            />
          </div>
          <div className='px-3 lg:px-6 py-2 lg:py-4 text-center'>
            <h2 className='font-bold text-2xl mt-16'>Become A Partner</h2>
            <p className='text-black text-center  text-1xl mt-2 md:mt-5 '>
              Interested in our investment opportunities? Let's explore
              partnership opportunities together.
            </p>
            <button className='bg-[#00ff00] text-black py-2 px-4  rounded-md mt-4 mb-10 border-black border-b-[3px] border-r-[3px] border-l-[1px] border-t-[1px] ease-linear transform hover:scale-125 transition duration-500'>
              Join now
            </button>
          </div>
        </div>
        {/* Third Card */}
        <div className=' pt-4 rounded-[18px]  shadow-lg  lg:m-12 border-r-4 border-b-4 border-t-2 border-l-2 lg:border-r-8 lg:border-b-8 border-black'>
          <div className='flex items-center justify-center'>
            <img
              src={image3}
              alt='Your Alt Text'
              className='w-20 h-20 object-cover p-2 rounded-full bg-[#fff]  border-r-4  border-l-[1px] border-t-[1px] border-b-4   border-blue border-black shadow-lg pb-2 lg:pb-4 absolute inset-50 flex '
            />
          </div>
          <div className='px-3 lg:px-6 py-2 lg:py-4 text-center'>
            <h2 className='font-bold text-2xl mt-16'>Other Queries?</h2>
            <p className='text-black text-center  text-1xl mt-2 md:mt-5 '>
              If you are a MSME Industry or Property developer interested in
              liquidating your property.
            </p>
            <button className='bg-[#00ff00] text-black py-2 px-4  rounded-md mt-4 mb-10 border-black border-b-[3px] border-r-[3px] border-l-[1px] border-t-[1px] ease-linear transform hover:scale-125 transition duration-500'>
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investor;
