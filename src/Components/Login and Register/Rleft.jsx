import { Link, Route, Routes } from "react-router-dom";
import Signin2 from "../login/Signin2";
import Log from "../login/Log";
import Signin from "../login/Signin";

const Rleft = () => {
     return(
                        <>
                        <div className="card flex flex-row rounded-xl 
                         border-solid border-2 border-black 
                         overflow-hidden h-625 ">
            <div className="img w-96  bg-red-600 ">
                <image src="./assets/Rectangle 4466.png"/>
            </div>
            <div className="form pl-12  py-4  flex flex-col pr-5"> 
            <div className="nav flex w-40 flex-row justify-center 
            ml-auto bg bg-black rounded-2xl">

<Link to="/Login">
 <button className=" w-20 p-2 
  font-bold font-zinc-50
  bg-blue-500 text-white rounded-2xl" id="getlog">
     Log In
     </button>
 </Link>
 <Link to="/">
 <button className=" w-20 p-2  
 font-bold font-zinc-50
 bg-black text-white rounded-2xl" id="getsign">
      Sign Up
     </button>
 </Link>
 </div>
 <div className=" w-full h-625 flex flex-col gap-20 justify-center">
            <Routes>
            <Route   path="/"   element={<Signin/>}/>
            <Route   path="/2"   element={<Signin2/>}/>
            <Route   path="/Login"   element={<Log/>}/>
            </Routes>
            </div>
            </div>
            </div>
                        </>
 )
 
 
}
export default Rleft;
