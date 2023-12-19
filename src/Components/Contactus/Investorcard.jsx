import React from 'react'

const Investorcard = () => {
  return (
    <div className="bg-white border-[black] w-[1430px] ml-[40px]">
    <div className="grid  bg-white p-[10px]" >
        <div className="text-black text-center p-[20px] bg-white text-4xl">Not an Investor</div>
        <div className="bg-green-500 ml-[800px] w-[600px] h-[3px] p-[3px] text-right text-black">lemon</div>
        <div className="text-black text-center bg-white text-2xl p-[20px]">Our Teams stand ready to Help!</div>
      </div>
      <div className="flex p-20 ">
        {/* <div className="text-black text-center bg-white text-4xl">Not an Investor</div>
        <div className="bg-white w-[300px] h-[5px] text-right text-black">lemon</div>
        <div className="text-black text-center bg-white text-2xl">Our Teams stand ready to Help!</div> */}
        <div className="text-center text-black bg-white text-3xl  ml-[20px] w-[400px] h-[370px] border-[3px] rounded-[10px] border-solid border-[black] shadow-[10px_10px]">
            <div className=" rounded-[100px] border-[blue] bg-blue-600 w-[100px] h-[100px] ml-[150px] mt-[-50px] border-r-[aqua] shadow-[10px_10px]">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <p className="text-4xl text-black m-5">Become A Seller</p>
            <p className="text-2xl text-black m-5">Interested in our <br></br>investment opportunities?<br></br>Contact us today</p>
            <button className="text-black border rounded-[10px] border-solid border-[black] bg-green-400 p-[5px] mt-[40px]">Join Now</button>
        </div>
        <div className="text-center text-black bg-white text-3xl ml-[20px] w-[400px] h-[370px] border-[3px] rounded-[10px] border-solid border-[black] shadow-[10px_10px]">
            <div className=" rounded-[100px] border-[blue] bg-blue-600 w-[100px] h-[100px] ml-[150px] mt-[-50px] border-r-[aqua] shadow-[10px_10px]">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <p className="text-4xl text-black m-5">Become A Partner</p>
            <p className="text-2xl text-black m-5">Let's explore partnership<br></br>opportunities together</p>
            <button className="text-black border rounded-[10px] border-solid border-[black] bg-green-400 p-[5px] mt-[70px]">Join Now</button>
        </div>
        <div className="text-center text-black bg-white text-3xl ml-[20px] w-[400px] h-[370px] border-[3px] rounded-[10px] border-solid border-[black] shadow-[10px_10px]">
            <div className=" rounded-[100px] border-[blue] bg-blue-600 w-[100px] h-[100px] ml-[150px] mt-[-50px] rounded-br-[red] shadow-[10px_10px]">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              <i className="fa-solid fa-phone w-[100px] h-[100px]"></i>
            </div>
            <p className="text-4xl text-black m-5">Other Queries ?</p>
            <p className="text-2xl text-black m-5">If you are a MSME industry or <br></br>Property developer interested <br></br>in liquidating your property<br></br>Contact us today</p>
            <button className="border rounded-[10px] border-solid border-[black] bg-green-400 p-[5px]">Join Now</button>
        </div>
      </div>
      {/* <Disclaimer /> */}
    </div>
  )
}

export default Investorcard