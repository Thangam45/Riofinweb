import {motion} from "framer-motion"
const Transition=(Comp)=>{
    return()=>(
        <>
        <motion.div
        className="fade-in"
        variants={{
            intial:{
                x:"-100px",
                opacity:0
            },
            final:{
                x:'0px',
                opacity:1,
                transition:{
                    type:"linear",
                    mass:'.4',
                    duration:1,
                    
                }
            }
          }}
        initial='intial'
        animate='final'
        // initial={{x:0}}
        // animate={{x:100}}
        // exit={{x:-100}}
        // transition={{type:'spring' , stiffness:100}}
        />
        <Comp />
        <motion.div/>
        </>
    )
}
export default Transition;