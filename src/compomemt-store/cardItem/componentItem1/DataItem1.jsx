import React, { useState } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { FaStar } from "react-icons/fa";

function DataItem1({dataItem1}) {
     
    const [num,setNum] = useState(1)
    let price =  39.44

   
   
    
  return (
    <div className="sm:flex sm:justify-center p-5 ">
      <div className="sm:flex sm:flex-row flex flex-col    ">
        <div className="left-side  sm:w-1/2  ">
          <Carousel
            autoPlay
            showArrows={false}
            className="sm:w-1/2 right-10 m-auto p-5"
            infiniteLoop={true}
            transitionTime={500}
          >
            {dataItem1.map((x, i) => {
              return (
                <img
                  className="rounded-xl shadow-lg w-full"
                  src={x.img}
                  alt=""
                  key={i}
                />
              );
            })}
          </Carousel>
        </div>
        <div className="">
          <div className="mt-5 sm:w-4/5  ">
            <p className="sm:text-4xl text-2xl">ZEROYAA</p>
            <p className="lg:text-lg text-xs mt-3 sm:w-fit">
              Men's Long Sleeve Dress Shirt Solid Slim Fit Casual Business
              Formal Button Up Shirts with Pocket
            </p>

            <div className=" font-mali mt-2 ">
              4.5
              <span className="mx-1 " width={100}>
                <span className="text-yellow-300 cursor-pointer">&#9733;</span>
                <span className="text-yellow-300 cursor-pointer">&#9733;</span>
                <span className="text-yellow-300 cursor-pointer">&#9733;</span>
                <span className="text-yellow-300 cursor-pointer">&#9733;</span>
                <span className="cursor-pointer">&#9734;</span>
                <span className="mx-3">&#10072;</span>
                <span className="font-mali text-xs">Sold 80 pieces</span>
              </span>
            </div>
            <div className=" font-mali text-3xl sm:text-5xl mt-4">
              <p>${price * num}</p>
            </div>
            <div className="flex flex-col space-y-6 ">
              <div className=" flex mt-5">
                <div className="mx-5">color</div>
                <div className="flex flex-col md:flex md:flex-row gap-4 mx-5 text-center cursor-pointer">
                  <div className="border-2 border-black rounded-lg px-3 hover:bg-slate-100">
                    White
                  </div>
                  <div className="border-2 border-black rounded-lg px-3  hover:bg-black hover:text-white">
                    Black
                  </div>
                  <div className="border-2 border-black rounded-lg px-3  hover:bg-gray-500  ">
                    Gray
                  </div>
                </div>
              </div>
              <div className="text-ms mx-5 flex">
                <div>Quantity</div>
                <div className="flex mx-5 space-x-3 border border-black cursor-pointer">
                  <div
                    className="bg-black px-3 text-white"
                    onClick={() => {
                      if (num > 1) {
                        setNum(num - 1);
                      }
                    }}
                  >
                    -
                  </div>
                  <div className=" font-sans  ">{num}</div>
                  <div
                    className="bg-black px-3 text-white "
                    onClick={() => setNum(num + 1)}
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="flex justify-center  space-x-4 pt-5 cursor-pointer ">
                <a
                  className="border border-black px-6 bg-gray-200 hover:bg-slate-200"
                  href="https://www.amazon.com/ZEROYAA-Sleeve-Business-ZSSCL01-XX-Large/dp/B07LG81TMC/ref=sr_1_4_sspa?keywords=4+of+5+ZEROYAA&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
                >
                  Add
                </a>
                <a
                  className="border border-black px-6 bg-gray-200 hover:bg-slate-200 "
                  href="https://www.amazon.com/ZEROYAA-Sleeve-Business-ZSSCL01-XX-Large/dp/B07LG81TMC/ref=sr_1_4_sspa?keywords=4+of+5+ZEROYAA&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataItem1