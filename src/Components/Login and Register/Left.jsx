import { Link, Route, Routes, useLocation } from "react-router-dom";
import Signin from "./Signin";
import Log from "./Log";
import Signin2 from "./Signin2";
import { useEffect, useState } from "react";
import './assets/act.css'
import { AnimatePresence } from "framer-motion";
import React from 'react'

function Left() {
    const animate={
        intial:{
            opacity:0,
            position:"absolute",
            top:'-100%',
            transition:{
                type:"spring",
                mass:0.4,
                duration:1,
                delay:.5
            }
        },
        final:{
            top:'auto',
            opacity:1,
            transition:{
                type:"spring",
                mass:0.4,
                duration:1,
            }

        },
        exit:{
            // display:'none'
            opacity:0
          }
      }
      const loc=useLocation()
    

    const [postion , setPosition]=useState()
    const location=useLocation()
    const activeLink=()=>{
        let f=location.pathname;
        f=="/Login"?setPosition("0%"):setPosition("50%")
    }
    useEffect(()=>{
        const active=document.getElementById('activeElement')
        active.style=`left:${postion}` 
    },[postion])

    useEffect(()=>{
        activeLink()
    },[location.pathname])
  return (
    <>
     <div className="form 
            pl-12 w-96 
            py-4  flex flex-col 
            pr-5 gap-2 bg-white">
            {/*navigation inside form*/}
            <div className="nav 
            relative flex w-40 
            flex-row justify-center 
            ml-auto bg bg-black rounded-2xl">
            

{/* login nav*/}
<Link to="/Login">
 <button className="
 w-20 p-2 font-bold font-zinc-50
 text-white rounded-2xl" 
  id="getlog" >
     Log In
     </button>
 </Link>
 {/* sign-in Nav */}
 <Link to="/">

 <button className="
 w-20 p-2 font-bold font-zinc-50
 text-white rounded-2xl"
  id="getsign" >
      Sign Up
     </button>
 </Link>
{/* active div element*/}
    <div className="act rounded-2xl bg-blue-500" id="activeElement"></div>
 </div>
 {/* form with routes*/}
 <div className=" 
   min-h-510 flex 
   justify-center
 flex-col">
           <AnimatePresence >
           <Routes location={location} key={location.key} >
            <Route   path="/"   element={<Signin animation={animate}  />}/>
            <Route   path="/2"   element={<Signin2 animation={animate}/>}/>
            <Route   path="/Login"   element={<Log animation={animate}/>}/>
            </Routes>
           </AnimatePresence>
            </div>
            </div>
    </>
  )
}

export default Left