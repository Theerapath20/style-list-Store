import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


const navigation = [
  { id: 0, name: "HOME", href: "/", current: true },
  { id: 1, name: "SHOP", href: "/store", current: false },
  { id: 2, name: "HELP", href: "#", current: false },
  { id: 3, name: "INSTRUCTION", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

   const [value,setValue] = useState(0)
   
  return (
    <Disclosure as="nav" className="bg-yellow-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="sm:flex sm:flex-shrink-0 sm:items-center">
                  <Link to={"/"}>
                    <img
                      className="h-8 w-auto cursor-pointer"
                      src="src\img\logo.png"
                      alt=""
                      style={{ width: "80px" }}
                    />
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 justify-center">
                    {navigation.map((item, i) => (
                      <a
                        key={item.id}
                        href={item.href}
                        className={`hover:underline decoration-teal-400 hover:underline-offset-4 mt-2 ${
                          i === value &&
                          `underline decoration-teal-400 underline-offset-4  `
                        } `}
                        // className={classNames(
                        //   item.current
                        //     ? "bg-orange-800 text-white"
                        //     : "text-black  hover:text-black hover:underline decoration-2 underline-offset-8  decoration-sky-500",
                        //       "rounded-md px-3 py-2 text-sm font-medium"
                        // )}
                        aria-current={item.current ? "page " : undefined}
                        onClick={() => setValue(i)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <from className="flex justify-center sm:w-full w-3/6">
                  <input
                    className="rounded-2xl p-1 sm:w-3/5 w-full mx-2 px-3 focus:outline-none  "
                    type="text"
                    placeholder="Search"
                  />
                  <div>
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 28 23"
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
                </from>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 border-red-500">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon
                    className="h-6 w-6 hidden sm:block "
                    aria-hidden="true"
                  />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium  border-b-2 border-black "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
