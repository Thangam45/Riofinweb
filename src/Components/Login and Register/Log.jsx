import Input from "./Input";
import Btn from "./btn";
import Transition from "./Transition";
// import Transition from './Transition';
import {motion} from 'framer-motion'
const Log =({animation})=>{
   
        
        
    return(
        <>
        <motion.div
        variants={animation}
        initial='intial'
        animate='final'
        exit='exit'
       >
        <div className="b relative pr-8 mt-auto mb-auto">
        <Input p="Enter Mobile Number" n='Mobile Number' l="Mobile Number"/>
        <Input p="Enter your OTP" n='OTP' l="OTP"/>
        <Btn text="Log In" ></Btn>
        </div>
        </motion.div>
        </>
    )
}
export default Log;