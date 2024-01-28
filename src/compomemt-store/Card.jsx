import React from 'react'
import { Link } from 'react-router-dom';

function Card({menu}) {

     
  return (
    <div className="flex justify-center bg-yellow-50 pt-5">
      <div className="  grid grid-cols-1 sm:grid sm:grid-cols-2  md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 p-3 gap-4    ">
        {menu.map((item, i) => {
          return (
            <div className="flex  flex-col border rounded-2xl shadow-lg text-center bg-white m-3  " key={i}>
              <div className="flex justify-center">
                <Link to= {item.to} >
                  <img
                    className="rounded-3xl p-2 cursor-pointer"
                    src={item.img}
                    style={{ maxHeight: "200px" }}
                    
        />
                </Link>
              </div>
              <p className=" text-md  px-1">{item.title}</p>

              <div className="flex justify-between">
                <div className="left-side flex p-3 ">
                  <div className="mr-3">
                    <svg
                      width="45"
                      height="45"
                      viewBox="-5 0 35 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="bg-white border rounded-full cursor-pointer  "
                    >
                      <path
                        d="M0 0.90625C0 0.474778 0.37776 0.125 0.84375 0.125H3.375C3.76217 0.125 4.09966 0.368982 4.19356 0.716769L4.87753 3.25H24.4688C24.7286 3.25 24.9739 3.36084 25.1338 3.55046C25.2937 3.74008 25.3503 3.98734 25.2873 4.22073L22.7561 13.5957C22.6622 13.9435 22.3247 14.1875 21.9375 14.1875H6.75C6.36283 14.1875 6.02534 13.9435 5.93144 13.5957L2.71622 1.6875H0.84375C0.37776 1.6875 0 1.33772 0 0.90625ZM5.2994 4.8125L6.14315 7.9375H8.4375V4.8125H5.2994ZM10.125 4.8125V7.9375H13.5V4.8125H10.125ZM15.1875 4.8125V7.9375H18.5625V4.8125H15.1875ZM20.25 4.8125V7.9375H22.5443L23.3881 4.8125H20.25ZM22.1225 9.5H20.25V12.625H21.2787L22.1225 9.5ZM18.5625 9.5H15.1875V12.625H18.5625V9.5ZM13.5 9.5H10.125V12.625H13.5V9.5ZM8.4375 9.5H6.56503L7.40878 12.625H8.4375V9.5ZM8.4375 17.3125C7.50552 17.3125 6.75 18.0121 6.75 18.875C6.75 19.7379 7.50552 20.4375 8.4375 20.4375C9.36948 20.4375 10.125 19.7379 10.125 18.875C10.125 18.0121 9.36948 17.3125 8.4375 17.3125ZM5.0625 18.875C5.0625 17.1491 6.57354 15.75 8.4375 15.75C10.3015 15.75 11.8125 17.1491 11.8125 18.875C11.8125 20.6009 10.3015 22 8.4375 22C6.57354 22 5.0625 20.6009 5.0625 18.875ZM20.25 17.3125C19.318 17.3125 18.5625 18.0121 18.5625 18.875C18.5625 19.7379 19.318 20.4375 20.25 20.4375C21.182 20.4375 21.9375 19.7379 21.9375 18.875C21.9375 18.0121 21.182 17.3125 20.25 17.3125ZM16.875 18.875C16.875 17.1491 18.386 15.75 20.25 15.75C22.114 15.75 23.625 17.1491 23.625 18.875C23.625 20.6009 22.114 22 20.25 22C18.386 22 16.875 20.6009 16.875 18.875Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-end">
                    <div>
                      <img src="src\img\star.png" alt="star" />
                    </div>
                    <p className="text-xs font-mali">Sold 50 pieces</p>
                  </div>
                </div>
                <div className="right-side flex flex-col justify-end ">
                  <button className=" font-mali text-md mb-3 mr-2 border-1 px-3 rounded-lg drop-shadow-lg border-black bg-green-300 hover:bg-green-500">
                    {item.detial}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card


//Shopping  from amazon