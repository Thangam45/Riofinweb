const Input=({p,n,l})=>{
    return(
        <>
       <div className="flex flex-col  min-h-12  ml-auto mr-auto w-80  ">
       <label htmlFor={n} className="text-2xl font-medium">{l}</label>
        <input type="text" name={n} id="" placeholder={p} 
         className=" text-base outline-none border-solid border-1
          border-black font-light pt-3 pl-3 pb-1 "/>
       </div>
        </>
    )
}
export default Input;