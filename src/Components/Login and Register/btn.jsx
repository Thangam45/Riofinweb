const Btn=({clas,text})=>{
    return(
        <>
        <div className={`${clas} flex justify-end w-auto`}>
        <button className="w-36 p-2 mt-4 font-bold font-zinc-50 bg-black text-white rounded-2xl">{text}</button>
        </div>
        </>
    )
}
export default Btn;