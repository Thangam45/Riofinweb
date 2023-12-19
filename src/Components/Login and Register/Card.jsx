import { Link, Route, Routes, useLocation } from "react-router-dom";
import Signin from "./Signin";
import Log from "./Log";
import Signin2 from "./Signin2";
import { useEffect, useState } from "react";
import './assets/act.css'
import { AnimatePresence } from "framer-motion";
import re from'./Rectangle.png'
import Right from "./Right";
import Left from "./Left";


const Card= () =>{
    
    
    // const log=document.getElementById('getlog')
    // const sign=document.getElementById('getsign')
    // const animation=()=>{
    //     location.pathname='/'? log.classList.add("active"):0
    // }
    return(
            <>
            <div className=" 
            card shadow-[13px_11px_42px_-25px_rgba(0,0,0,0.75)]
            flex flex-row rounded-xl 
            border-solid border-2 border-black 
            overflow-hidden h-625 ">
            {/* <div className="img w-96  bg-red-600">
                <img src={re} className="object-fill h-625" alt="not found"/>
            </div> */}
            <Right image={re} />
            {/* form on the right */}
           <Left/>
            
            </div>
            </>
    )
};
export default Card;