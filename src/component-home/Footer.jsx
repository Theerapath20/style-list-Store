import React from 'react'
import {
  TiSocialFacebookCircular,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center text-center  p-5 w-full border bg-amber-100 ">
        <div className=" text-2xl sm:text-4xl font-Creepster">
          Style-List <span className="text-red-700">Store</span>
        </div>
        <p className="text-xs mt-3 text-gray-400">
          Copyright <span>&#169;</span> 2022 Style-list, lnc
        </p>
        <div className="flex justify-center w-full text-md mt-3  ">
          <div className="flex text-xs sm:text-md">
            <div className=" p-2  cursor-pointer hover:underline">
              Legal Stuff <span className="sm:ml-3 ">|</span>
            </div>
            <div className=" p-2  cursor-pointer hover:underline">
              Privacy Policy<span className="ml-3">|</span>
            </div>
            <div className=" p-2  cursor-pointer hover:underline">Security</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3  bg-black">
        <div className="text-white flex">
          <img
            className="mt-2 cursor-pointer  "
            style={{ width: "50px" }}
            src="src\img\logo2.png"
            alt=""
          />
          <span className="border-r-2 my-2"></span>
        </div>
        <TiSocialFacebookCircular className="text-3xl cursor-pointer mt-1 text-white hover:text-blue-500" />
        <SlSocialInstagram className="text-2xl mt-2 cursor-pointer text-white hover:text-pink-500" />
        <TiSocialTwitter className="text-2xl mt-2 cursor-pointer text-white hover:text-cyan-300" />
        <TiSocialYoutube className="text-2xl mt-2 cursor-pointer text-white hover:text-red-600" />
      </div>
    </>
  );
}

export default Footer