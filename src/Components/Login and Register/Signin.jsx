import { Link } from "react-router-dom";
import Input from "./Input"
import Btn from "./btn";
import Transition from "./Transition";
import {motion} from 'framer-motion'

const Signin=({animation})=>{
  

    return(
        <>
        <motion.div
        variants={animation}
        initial='intial'
        animate='final'
        exit='exit'
       >
         {/* <div className=" w-full h-625 flex flex-col ">
       <div className="nav flex w-40 flex-row justify-center ml-auto bg bg-black rounded-2xl">
         <Link to='/Login'>
        <button className=" w-20 p-2 
         font-bold font-zinc-50
         bg-black text-white rounded-2xl">Log In</button>

        </Link>
        <Link to='/'>
        <button className="w-20 p-2  
        font-bold font-zinc-50
        bg-blue-500 text-white rounded-2xl">Sign Un</button>
        </Link>
        </div> */}
        <div className="pr-8  ">
        <Input l='Name' p='Enter Your Name'/>
        <Input l='Email' p='Enter Your Email'/>
        <Input l='Referal code (Optional)' p='Enter Your Referal Code '/>
        <Input l='Mobile Number' p='Enter Your Mobile Number'/>
        <Input l='OTP' p='Enter Your OTP'/>
         <Link to="/2">
         <Btn text="Next"></Btn>
         </Link>
        </div>
        </motion.div>
       {/* </div> */}
        </>
    )
}
export default Signin;