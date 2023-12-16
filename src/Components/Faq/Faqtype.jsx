import '../style/faqtype.css'
import { BiSolidPlusCircle } from "react-icons/bi";

export default function Faqtype(){
    return(
        <>
        <div className='faqqus'>
          <div>
            <div className="qus">
            

              <p><BiSolidPlusCircle className='icon' />What is the investment idea?</p>  

            </div>
            {/* <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis vitae velit vel odio laboriosam voluptatum voluptas libero similique nam maxime.</p></div> */}
          </div>
            
            <div className="qus">
              <p><BiSolidPlusCircle className='icon' />What is the investment idea?</p>  
            </div>
            <div className="qus">
              <p><BiSolidPlusCircle className='icon' />What is the investment idea?</p>  
            </div>
            <div className="qus">
              <p><BiSolidPlusCircle className='icon' />What is the investment idea?</p>  
            </div>
            
        </div>
       
        </>
    )
}