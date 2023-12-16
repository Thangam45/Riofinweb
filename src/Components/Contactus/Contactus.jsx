import React from 'react'
import MapSection from '../Contactus/MapSection'
import Contact from '../../assests/Contact.png';

const Contactus = () => {
  return (
    <>    <div className='bg-black text-white px-16'>
    <div className='max-w-7xl mx-auto'> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className='flex flex-col'>
          <div className="my-10 md:my-20">
            <hr className='hrd' />
            <h1 className='mt-3 text-4xl md:text-8xl font-bold mb-4'>Conact Us</h1>
            <p className='text-lg md:text-2xl md:w-full'>Do You want to Collabrate With Us?<br />
              Make contact!
            </p>
          </div>
        </div>
        <div className='md:my-5 flex justify-end'>
          <img src={Contact} alt='no img' />
        </div>
      </div>
    </div>
  </div>
    <MapSection />
        </>
  )
}

export default Contactus