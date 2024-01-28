import React from "react";
import { Link } from "react-router-dom";

function HeadContent() {
  return (
    <div
      className=" mt-0 bg-yellow-50 w-full h-full"
     
    >
      <div className=" sm:flex sm:flex-row flex flex-col w-full">
        <div className="header-left mt-3 sm:w-2/4 w-full">
          <div className="w-11/12 h-4/6   sm:border-2 sm:border-black sm:rounded-2xl bg-none relative"></div>
          <div className="">
            <img
              className="sm:absolute sm:top-[15%]  sm:left-1 sm:w-5/12 relative sm:p-2  md:p-0 p-2 rounded-3xl  sm:rounded-r-3xl"
              src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pic-promote"
            />
          </div>
        </div>
        <div className="header-right w-ful sm:w-2/4 sm:top-0 mx-2 p-2 top-64 flex justify-center ">
          <div className="relative flex justify-center">
            <img
              src="src\img\smoke.png"
              className="md:w-[100%] w-[70%] "
              alt=""
            />
            <div className="text text-center  lg:top-20 top-0 sm:px-2  absolute  mx-auto my-auto w-full  ">
              <div className="font-Creepster  mt-2 md:mt-5 text-3xl md:text-4xl lg:text-6xl ">
                Style-List <span className="text-red-700">Store</span>
              </div>
              <div>
                <p className="  text-xs font-light  md:text-sm lg:text-lg ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Explicabo facilis doloribus nemo porro eos, aliquam ea magni.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  fugit
                  <span className="hidden md:block">
                    Fugit iste accusamus soluta nisi quis quos rerum ad voluptas
                    blanditiis minima corporis placeat, vel doloremque, numquam
                    sapiente adipisci iure tempora. Recusandae commodi
                    reprehenderit quo cumque enim vel quam impedit culpa
                    incidunt fugiat!
                  </span>
                </p>
                <Link to={"/store"}>
                  <button className="text-white text-xs md:text-xs lg:text-lg my-3    bg-red-950 rounded-3xl px-5 py-1 font-bold hover:bg-red-900">
                    SHOP NOW
                    <span className="ml-2 text-yellow-500">&#10095;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadContent;
