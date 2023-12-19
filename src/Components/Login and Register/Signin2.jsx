import { Link } from "react-router-dom";
import Input from "./Input"
import Btn from "./btn"
import Transition from "./Transition";
import {motion} from 'framer-motion'

const Signin2=({animation})=>{
    return(
        <>
        <motion.div
        variants={animation}
        initial='intial'
        animate='final'
        exit='exit'
       >
        {/* <div className=" w-full h-625 flex flex-col "> */}
       {/* <div className="nav flex w-40 flex-row justify-center ml-auto bg bg-black rounded-2xl">
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
        <div className="b pr-8 relative" >
        <Input l='Country' p='Enter Your Country'/>
        <Input l='State' p='Enter Your State'/>
        <Input l='City' p='Enter Your City '/>
        <Input l='Address   ' p='Enter Your Address'/>
        <Input l='Pincode' p='Enter Your Pincode'/>

        <div className="flex flex-row justify-end gap-1 transition-all">
            <Link to="/"><Btn text="Go Back"/></Link>
            <Btn text="Sign Up"/>
            
        </div>
        </div>
        {/* </div> */}
        </motion.div>
    </>
    )
}
export default Signin2;