import { useState } from "react";
import React from 'react'
import { FaArrowCircleLeft , FaArrowCircleRight } from "react-icons/fa";


const BestSeller =({slides}) => {

    const [current , setCurrent] = useState(1)
     
     const previousSlide = () =>{
      if(current === 0) setCurrent(slides.length - 1)
      else setCurrent (current - 1 ) 
     }
     const nextSlide = () =>{
      if (current === slides.length - 1 ) setCurrent(0);
      else setCurrent(current + 1); 
     }
     


   return (
     <div
       className=" flex flex-col bg-yellow-50"
      
     >
       <img
         className="relative right-0 left-0"
         src="src\img\smoke.png"
         alt=""
       />
       <div className=" font-Creepster  absolute text-center text-3xl sm:text-7xl p-4 mt-3 w-full">
         Best <span className="text-red-700">Seller</span>
       </div>
       <div className=" absolute  flex justify-center mt-2 sm:mt-10 ">
         <div className="relative  overflow-hidden  sm:mx-20 mt-20 rounded-r-3xl rounded-l-3xl sm:w-[75%] w-[60%]   border ">
           <div
             className={`flex  translation ease-out duration-3000 m-auto    `}
             style={{ transform: `translateX(-${current * 100}%)` }}
           >
             {slides.map((item, i) => {
               return <img src={item} key={i} />;
             })}
           </div>

           <div className="absolute top-0   w-full items-center text-white px-3 py-3 text-3xl ">
             <button className="hover:opacity-60" onClick={previousSlide}>
               <FaArrowCircleLeft />
             </button>
             <button className="mx-3 hover:opacity-60" onClick={nextSlide}>
               <FaArrowCircleRight />
             </button>
           </div>

           <div className="absolute bottom-0 py-4 sm:flex justify-center gap-5 sm:gap-10 w-full hidden  ">
             {slides.map((item, i) => {
               return (
                 <div
                   onClick={() => {
                     setCurrent(i);
                   }}
                   key={"circle" + i}
                   className={`rounded-full h-5 w-5 ${
                     i == current ? "bg-white" : "bg-gray-500"
                   } hover:opacity-40`}
                 ></div>
               );
             })}
           </div>
         </div>
       </div>
     </div>
   );
  
}


export default BestSeller