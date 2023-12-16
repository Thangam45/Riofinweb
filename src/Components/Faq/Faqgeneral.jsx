import React, { useState } from 'react';
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { HiOutlineMinusSmall } from "react-icons/hi2";



export default function FaqGeneral() {
  const data = [
    {
      qus: "What is the investment idea?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit soluta a alias possimus accusantium libero debitis hic corrupti rem."
    },
    {
      qus: "What is the investment idea?",
      ans: "jhsadjhasjhas ipsum, dolor sit amet consectetur adipisicing elit. Natus odit soluta a alias possimus accusantium libero debitis hic corrupti rem."
    },
    {
      qus: "What is the investment idea?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit soluta a alias possimus accusantium libero debitis hic corrupti rem."
    },
    {
      qus: "What is the investment idea?",
      ans: "jhsadjhasjhas ipsum, dolor sit amet consectetur adipisicing elit. Natus odit soluta a alias possimus accusantium libero debitis hic corrupti rem."
    }
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div>
      {data.map(({ qus, ans }, index) => (
        <div key={index}>
          <p className='bg-sky-300 mt mt-14 question ' onClick={() => toggleAnswer(index)} style={{ cursor: 'pointer'}}>
         <p>{(activeQuestion === index ? < HiOutlineMinusSmall  className='icon transition-transform duration-3000'/> : <HiOutlinePlusSmall   className='icon transition-transform duration-3000'/>)}</p>   {qus} 
          </p >
          {activeQuestion === index && <p className='answer transition-opacity duration-5000 '>{ans}</p>}
        </div>
      ))}
    </div>
  );
}
