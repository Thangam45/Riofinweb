import React from 'react';
import Vector from '../../assests/Vector 714.png';
import Rectangle3 from '../../assests/Rectangle 3.png';
import Rectangle4 from '../../assests/Rectangle 4.png';
import Rectangle8 from '../../assests/Rectangle8.png';
import unique from '../../assests/system-uicons_scale.png'
import User from '../../assests/user 1 (1).png';
const Funded = () => {
  return (
    <>
      {/* Desktop Section */}
      <div className='md:flex md:items-center md:justify-between gap-8 md:px-10 lg:px-20 xl:px-32 hidden'>
        <h1 className='text-5xl font-bold md:ml-96 md:mr-auto md:text-left'>Successfully Funded</h1>
        <div className='md:flex md:items-center gap-3'>
          <p className='hidden text-2xl md:block'>Explore all</p>
          <img src={Vector} alt="Explore All" className='w-6 h-6 md:w-auto md:h-auto' />
        </div>
      </div>

      <hr className='md:ml-96 md:mr-auto mt-3 h-0.5 bg-mygreen hidden md:block' />

      {/* Mobile Section */}
      <div className='md:hidden px-8 lg:px-20 xl:px-32'>
        <h1 className='text-5xl font-bold text-center mt-6'>Successfully Funded</h1>
        <div className='flex items-center justify-center mt-3'>
          <p className='text-2xl'>Explore all</p>
          <img src={Vector} alt="Explore All" className='w-6 h-6 ml-2' />
        </div>
        <hr className='mt-3 h-0.5 bg-mygreen' />
      </div>

      {/* Funding Sections */}
      <div className='flex flex-col md:flex-row md:items-end md:justify-between md:mt-9 md:gap-8 md:px-10 lg:px-20 xl:px-32'>
        {/* Section 1 */}
        <div className='w-full md:w-1/3 h-64 md:mx-5 relative overflow-hidden'>
          <img src={Rectangle3} alt="Section 1" className='w-full h-full object-cover' />
          <button className='absolute bottom-0 left-0 text-1xl font-bold text-black bg-mygreen p-2'>Fully Funded</button>
        </div>

        {/* Section 2 */}
        <div className='w-full md:w-1/3 h-64 md:mx-5 relative overflow-hidden mt-4 md:mt-0'>
          <img src={Rectangle8} alt="Section 2" className='w-full h-full object-cover' />
          <button className='absolute bottom-0 left-0 text-1xl font-bold text-black bg-mygreen p-2'>Fully Funded</button>
        </div>

        {/* Section 3 */}
        <div className='w-full md:w-1/3 h-64 md:mx-5 relative overflow-hidden mt-4 md:mt-0'>
          {/* <img src={Rectangle2} alt="Section 3" className='w-full h-full object-cover' /> */}
          <img src={Rectangle4} alt="Section 3" className='w-full h-full object-cover' />
          <button className='absolute bottom-0 left-0 text-1xl font-bold text-black bg-mygreen p-2'>Fully Funded</button>
        </div>
      </div>

      {/* Additional div with "Rio Global v LLp" content */}
      <div className='bg-black mt-8 md:mt-0'>
        <div className='md:flex md:items-center md:justify-between gap-8 md:px-8 lg:px-20 xl:px-32'>
          {/* Content 1 */}
          <div className='flex flex-col w-full h-full object-cover p-9 bg-white text-black'>
            <h1 className='text-xl font-bold p-2'>Rio Global V LLP</h1>
            <p>Nearby To Green Airport</p>
            <hr className='h-0.5 my-5 md:mr-16 bg-black ' />
            <div className='flex'>
         <img src={unique} />
         <button>4.5 Crores</button>
          </div>
          </div>

          {/* Content 2 */}
          <div className='flex flex-col w-full h-full object-cover p-9 bg-white text-black'>
            <h1 className='text-xl font-bold p-2'>Rio Global V LLP</h1>
            <p>Nearby To Green Airport</p>
            <hr className='h-0.5 my-5 md:mr-16 bg-black' />
            <div className='flex'>
         <img src={unique} />
         <button>2 Crores</button>
          </div>
          </div>

          {/* Content 3 */}
          <div className='flex flex-col w-full h-full object-cover p-9 ml-0.5 bg-white text-black'>
            <h1 className='text-xl font-bold p-2 '>Rio Global V LLP</h1>
            <p>Nearby To Green Airport</p>
            <hr className='h-0.5 my-5 md:mr-16 bg-black' />
            <div className='flex'>
         <img src={unique} />
         <button>3 Crores</button>
          </div>
          </div>
        </div>
        <div className='flex'>
       <div className=' bg-black  text-white  ml-36'>
         <img src={User} className='mb-3' />
        <div className=' ml-24'>
         <h4 className='text-md'>Kalpesh Chauhan</h4>
         <h6 className='text-sm'>Riofin Assets Customer</h6>
         </div>
       </div>
    
      </div>
     <p></p>
      </div>
    </>
  );
};

export default Funded;
