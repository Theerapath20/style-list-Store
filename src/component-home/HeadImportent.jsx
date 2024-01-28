import React from 'react'

function HeadImportent() {
  return (
    <div className="">
      <div className="flex flex-col sm:flex sm:flex-row  w-full bg-amber-100 ">
        <div className="flex flex-col sm:w-1/3  sm:border-r-2 sm:border-black my-3 p-10">
          <div className="w-full flex justify-center">
            <img
              className="mt-3"
              src="src\img\glasses.png"
              alt="glasses"
              width={100}
            />
          </div>
          <p className="text-center mt-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis...
          </p>
        </div>
        <div className="flex flex-col sm:w-1/3 sm:border-r-2 sm:border-black my-3 p-10">
          <div className="w-full flex justify-center">
            <img
              className=""
              src="src\img\emoji-heart-eyes.png"
              alt="emoji"
              width={50}
            />
          </div>
          <p className="text-center mt-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis...
          </p>
        </div>
        <div className="flex flex-col sm:w-1/3  p-10">
          <div className="w-full flex justify-center">
            <img
              className="mt-1"
              src="src\img\truck.png"
              alt="truck"
              width={50}
            />
          </div>
          <p className="text-center mt-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis...
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeadImportent