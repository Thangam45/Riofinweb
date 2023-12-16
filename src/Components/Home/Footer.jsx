import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaInfinity, FaGripHorizontal } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className='flex flex-col md:flex-row bg-(rgb(235,248,255))-800 text-white mt-10'>
        <div className='mx-4 md:mx-6 lg:mx-20 mb-8 md:mb-0'>
          <h1 className='font-bold text-lg md:text-xl'>Riofin Assests</h1>
          <p className='mt-2 md:mt-3 lg:mt-5'>Pioneers in alternative Investments</p>
          <div className='flex mt-3 md:mt-5 lg:mt-5'>
            <FaFacebook className='mr-2' />
            <FaInstagram className='mr-2' />
            <FaTwitter className='mr-2' />
            <FaInfinity className='mr-2' />
          </div>
        </div>
        <div className='mx-4 md:mx-6 lg:mx-20 mb-8 md:mb-0'>
          <h1 className='font-bold text-lg md:text-xl'>Company</h1>
          <ul className='my-2 md:my-3 lg:my-5'>
            <li>About us</li>
            <li className='mt-2 md:mt-3 lg:mt-5'>Opportunities</li>
            <li className='mt-2 md:mt-3 lg:mt-5'>Team</li>
            <li className='mt-2 md:mt-3 lg:mt-5'>Learn</li>
          </ul>
        </div>
        <div className='mx-4 md:mx-6 lg:mx-20 mb-8 md:mb-0'>
          <h1 className='font-bold text-lg md:text-xl'>Resources</h1>
          <ul className='my-2 md:my-3 lg:my-5'>
            <li>Blog</li>
            <li className='mt-2 md:mt-3 lg:mt-5'>Videos</li>
            <li className='mt-2 md:mt-3 lg:mt-5'>Guides</li>
            <li className='mt-2 md:mt-3 lg:mt-5'>Sample docus</li>
          </ul>
        </div>
        <div className='mx-4 md:mx-6 lg:mx-15'>
          <h1 className='font-bold text-lg md:text-xl'>Join Our Newsletter</h1>
          <div className='mt-2 md:mt-3 lg:mt-5'>
            <input type="email" placeholder='Email address' className='px-4 py-2 mt-2 md:mt-3 lg:mt-5'></input>
            <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600 md:ml-2 md:mt-3 lg:mt-5">
              Subscribe
            </button>
            <p className='mt-2 md:mt-3 lg:mt-5 text-sm'>
              *Will send you weekly updates for your better finance management
            </p>
          </div>
        </div>
      </div>
      <hr className='my-4'></hr>
      <div className='flex justify-center'>
        <p className='text-xs'>CopyRight@riofin Assests 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
