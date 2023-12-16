
import React from 'react'
import Bck from '../../assests/bck.jpg';
import About from '../../assests/AboutUs.png';
import Vision from './Vision';
import Founderss from './Founderss';
import Achievements from './Achievements';



const Aboutus = () => {
  return (
    <>    <div className='bg-black text-white px-16'>
    <div className='max-w-7xl mx-auto'> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className='flex flex-col'>
          <div className="my-10 md:my-20">
            <hr className='hrd' />
            <h1 className='mt-3 text-4xl md:text-8xl font-bold mb-4'>About Us</h1>
            <p className='text-lg md:text-2xl md:w-full'>Dive into Our Vision, Meet the Team, and <br />
              Discover What Drives Us
            </p>
          </div>
        </div>
        <div className='md:my-5 flex justify-end'>
          <img src={About} alt='no img' />
        </div>
      </div>
    </div>
  </div>
  

              <div className="p-10  text-black ">
          <h1 className='text-5xl px-16 font-bold mb-4 font leading-[55px]'>
            Dedicated Teams <br />
            For your Dedicated Dreams.
          </h1>
          <div className="">
            <img src={Bck}  alt='no image'/>
          </div>
        </div>
        <div className="grid grid-cols-2 ">
        <div className="border-2 pb-8 ml-[86px] mr-auto mb-10 -m-32 border-black bg-white rounded-2xl boxshadow">
          <h1 className='text-3xl font-bold px-5 pt-6 pb-3'>Why we Do this</h1>
          <hr className='hrw' />
          <p className='px-8 text-lg pt-5 pb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo voluptatem culpa odit labore assumenda aliquam quaerat rem adipisci natus suscipit. Soluta id quod, nihil tempora quidem aliquid amet aut quos.</p>
            <a href="" className='text-xs font-bold px-3 py-2 rounded border
             border-lime-700 bg-[#00ff00] ml-96 
            hover:bg-transparent'>Read our Blogs</a>          
          </div>  
          <div className="ml-12">
            <h1 className='text-3xl font-bold -mt-3 pb-3'>Helping you in every stage</h1>
            <hr className='hrh mt-2' />
            <p className='px-8 text-lg pt-2 pb-5'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto provident suscipit numquam dolore nesciunt eos ea iusto, unde quo enim earum eveniet voluptate excepturi beatae tempore dicta veniam corrupti quibusdam?
            </p>
          </div>
        </div>

        {/* our vision */}
        <Vision />
        <Founderss/>
        <Achievements />  
        

        </>

      
      

   
  )
}

export default Aboutus