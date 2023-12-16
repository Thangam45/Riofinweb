// Tab.js

import React from 'react';
import TabsComponent from './TabComponent';
import yourImage from '../../assests/tabImage.png';
import { ArrowRight } from 'react-feather';

const Tab = () => {
  return (
    <div className=''>
      {/* Tabs Component */}
      <TabsComponent items={items} />
    </div>
  );
};

export default Tab;

const items = [
  {
    title: 'Fixed Deposit',
    content: (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 '>
        {/* Left Column (Image) */}
        <div className='md:flex md:items-center'>
          <img src={yourImage} alt='Your Image' className='w-full h-auto md:max-h-96 object-cover' />
        </div>

        {/* Right Column (Text) */}
        <div className='md:pl-6 mt-5'>
          <h1 className='text-2xl font-bold text-black mb-4'>Fixed Deposits</h1>

          <p className='text-justify'>
            Alternative investments offer higher returns, diversification, inflation protection, tax advantages, and access to unique opportunities compared to fixed deposits.
          </p>
          <div className='flex items-center mb-2 mt-3'>
            <ArrowRight size={20} className='mr-2' />
            <p>Ranks high in providing safer returns</p>
          </div>
          <div className='flex items-center mb-2 mt-2'>
            <ArrowRight size={20} className='mr-2' />
            <p>Offers one of the lowest returns</p>
          </div>

          <button className='bg-[#00ff00] text-black py-2 px-4 rounded-md mt-4 border-black border-b-[3px] border-r-[3px] border-l-[1px] border-t-[1px] ease-linear transform hover:scale-125 transition duration-500'>
            Get Started with Riofin
          </button>
        </div>
      </div>
    ),
  },
  {
    title: 'Stock Market',
    content: (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 '>
        {/* Left Column (Image) */}
        <div>
          <img src={yourImage} alt='Your Image' className='w-full h-auto' />
        </div>

        {/* Right Column (Text) */}
        <div className='pl-0 md:pl-6 mt-5'>
          <h1 className='text-2xl font-bold text-black mb-4'>Stock Market</h1>

          <p className='text-justify'>
            Alternative investments offer higher returns, diversification, inflation protection, tax advantages, and access to unique opportunities compared to fixed deposits.
          </p>
          <div className='flex items-center mb-2 mt-3'>
            <ArrowRight size={20} className='mr-2' />
            <p>Ranks high in providing safer returns</p>
          </div>
          <div className='flex items-center mb-2 mt-2'>
            <ArrowRight size={20} className='mr-2' />
            <p>Offers one of the lowest returns</p>
          </div>

          <button className='bg-[#00ff00] text-black py-2 px-4 rounded-md mt-4 border-black border-b-[3px] border-r-[3px] border-l-[1px] border-t-[1px] ease-linear transform hover:scale-125 transition duration-500'>
            Get Started with Riofin
          </button>
        </div>
      </div>
    ),
  },
  {
    title: 'Gold',
    content: (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 '>
        {/* Left Column (Image) */}
        <div>
          <img src={yourImage} alt='Your Image' className='w-full h-auto' />
        </div>

        {/* Right Column (Text) */}
        <div className='pl-0 md:pl-6 mt-5'>
          <h1 className='text-2xl font-bold text-black mb-4'>Gold</h1>

          <p className='text-justify'>
            Alternative investments offer higher returns, diversification, inflation protection, tax advantages, and access to unique opportunities compared to fixed deposits.
          </p>
          <div className='flex items-center mb-2 mt-3'>
            <ArrowRight size={20} className='mr-2' />
            <p>Ranks high in providing safer returns</p>
          </div>
          <div className='flex items-center mb-2 mt-2'>
            <ArrowRight size={20} className='mr-2' />
            <p>Offers one of the lowest returns</p>
          </div>

          <button className='bg-[#00ff00] text-black py-2 px-4 rounded-md mt-4 border-black border-b-[3px] border-r-[3px] border-l-[1px] border-t-[1px] ease-linear transform hover:scale-125 transition duration-500'>
            Get Started with Riofin
          </button>
        </div>
      </div>
    ),
  },
  {
    title: 'Bond',
    content: (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 '>
        {/* Left Column (Image) */}
        <div>
          <img src={yourImage} alt='Your Image' className='w-full h-auto' />
        </div>

        {/* Right Column (Text) */}
        <div className='pl-0 md:pl-6 mt-5'>
          <h1 className='text-2xl font-bold text-black mb-4'>Bond</h1>

          <p className='text-justify'>
            Alternative investments offer higher returns, diversification, inflation protection, tax advantages, and access to unique opportunities compared to fixed deposits.
          </p>
          <div className='flex items-center mb-2 mt-3'>
            <ArrowRight size={20} className='mr-2' />
            <p>Ranks high in providing safer returns</p>
          </div>
          <div className='flex items-center mb-2 mt-2'>
            <ArrowRight size={20} className='mr-2' />
            <p>Offers one of the lowest returns</p>
          </div>

          <button className='bg-[#00ff00] text-black py-2 px-4 rounded-md mt-4 border-black border-b-[3px] border-r-[3px] border-l-[1px] border-t-[1px] ease-linear transform hover:scale-125 transition duration-500'>
            Get Started with Riofin
          </button>
        </div>
      </div>
    ),
  },
];
