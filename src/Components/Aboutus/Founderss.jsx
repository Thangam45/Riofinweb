import React from 'react'
import { BiSolidQuoteRight } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import founderImage from '../../assests/founder.PNG';
import Mask from '../../assests/Mask group.png';
import Mask1 from '../../assests/Mask group (1).png';
import Mask2 from '../../assests/Mask group (2).png';
const Founders = () => {
  return (
   
    <div className="relative">
    <div>
    <img src={founderImage} className="w-full h-full object-cover object-center" />
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
    <h1 className='text-5xl font-bold'>Our Founders</h1>
    <hr className='hrf'/>
    <div className="grid grid-cols-3 mt-8 mx-10">
    <div className="bg-white rounded-xl mr-10 ">
    <BiSolidQuoteRight   className='mx-2 my-2 text-xl text-gray-800'/>
    <p className='text-sm px-16 pt-2 text-center'>
      It is a long established fact that a reader will be  distracted by the readable content of a page when looking at its layout.
    </p>
    <img src={Mask} alt="" className='w-[5rem] h-[5rem] mx-auto my-2 border border-black rounded-full'/>
    <p className='text-xl font-semibold text-center justify-center'>VENKATESAN</p>
    <p className='text-lg flex justify-center'>COO</p>
    <div className='flex justify-center pb-3'>
    <FaFacebookF className='mt-4 text-base text-gray-800 ml-6 mr-2 hover:text-[#00ff00]' />
    <FaTwitter  className='mt-4 text-base text-gray-800 ml-6 mr-2 hover:text-[#00ff00]'/>

    <p className='mt-2 text-xl text-gray-800 font-bold ml-6 hover:text-[#00ff00]'>in</p>
    </div>
    </div>


    <div className="bg-white rounded-xl mr-10 ">
    <BiSolidQuoteRight   className='mx-2 my-2 text-xl text-gray-800'/>
    <p className='text-sm px-16 pt-2 text-center'>
      It is a long established fact that a reader will be  distracted by the readable content of a page when looking at its layout.
    </p>
    <img src={Mask1} alt="" className='w-[5rem] h-[5rem] mx-auto my-2 border border-black rounded-full'/>
    <p className='text-xl font-semibold text-center justify-center'>DHANASEKARAN</p>
    <p className='text-lg flex justify-center'>CFO</p>
    <div className='flex justify-center pb-3'>
    <FaFacebookF className='mt-4 text-base text-gray-800  ml-6 mr-2 hover:text-[#00ff00]' />
    <FaTwitter  className='mt-4 text-base text-gray-800 ml-6 mr-2 hover:text-[#00ff00]'/>

    <p className='mt-2 text-xl font-bold ml-6 hover:text-[#00ff00]'>in</p>
    </div>
    </div>


    <div className="bg-white rounded-xl ">
    <BiSolidQuoteRight   className='mx-2 my-2 text-xl text-gray-800'/>
    <p className='text-sm px-16 pt-2 text-center'>
      It is a long established fact that a reader will be  distracted by the readable content of a page when looking at its layout.
    </p>
    <img src={Mask2} alt="" className='w-[5rem] h-[5rem] mx-auto my-2 border border-black rounded-full'/>
    <p className='text-xl font-semibold text-center justify-center'>BASKARAN</p>
    <p className='text-sm flex justify-center text-gray-800 '>CEO</p>
    <div className='flex justify-center pb-3'>
    <FaFacebookF className='mt-4 text-base ml-6 mr-2 text-gray-800 hover:text-[#00ff00]' />
    <FaTwitter  className='mt-4 text-base ml-6 mr-2 text-gray-800 hover:text-[#00ff00]'/>

    <p className='mt-2 text-xl text-gray-800 font-bold ml-6 hover:text-[#00ff00]'>in</p>
    </div>
    </div>  





    </div>

  </div>

  

  </div>




   </div>

  )
}

export default Founders