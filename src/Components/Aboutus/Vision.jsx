import React from 'react'
import { FaPaperclip } from "react-icons/fa";

const Vision = () => {
  return (
    

<div className=' bg-gradient-to-b from-blue-50 to-white'>
          
<h1 className='flex pt-10 justify-center text-4xl font-bold pb-3'>Our Vision</h1>
<div className='grid grid-cols-2'>
  <div className=""></div>
  <div className="">
    <hr className='hro'/>     
  </div>
</div>
<div className="grid grid-cols-3 mx-10 py-10">
  <div className=" px-14">
    <div className="grid grid-cols-2 mb-4">
  <FaPaperclip  className='text-xl font-extralight'/>
  <hr className='hrv  mt-3 -ml-[6rem]'/></div>
  
  <h4 className='font-bold text-2xl'>Vision - 1</h4>
  <p className=' pr-28'>
    It is a long established fact that a reader will be  distracted  by the  readable content of a page when  looking at its layout
  </p>
  </div>
  
  <div className=" px-14">
    <div className="grid grid-cols-2 mb-4">
  <FaPaperclip  className='text-xl font-extralight'/>
  <hr className='hrv mt-3 -ml-[7rem]'/></div>   
  <h4 className='font-bold text-2xl'>Vision - 1</h4>
  <p className=' pr-28'>
    It is a long established fact that a reader will be  distracted  by the  readable content of a page when  looking at its layout
  </p>


  </div>
  
  <div className=" px-14">
    <div className="grid grid-cols-2 mb-4">
  <FaPaperclip  className='text-xl font-extralight'/>
  <hr className='hrv mt-3 -ml-[6rem]'/></div>
  
  <h4 className='font-bold text-2xl'>Vision - 1</h4>
  <p className=' pr-28'>
    It is a long established fact that a reader will be  distracted  by the  readable content of a page when  looking at its layout
  </p>


  </div>
  

</div>

</div>
  )
}

export default Vision