import React, { useState } from "react";
import { Link } from "gatsby";
import { Icon } from "@iconify/react";
import koFi from "@iconify/icons-simple-icons/ko-fi";

const Navbar = () => {
  const [isOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              {/* <!-- Icon when menu is closed. -->
          <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg
                className="block w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!-- Icon when menu is open. -->
          <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className="hidden w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block w-auto h-8 bg-white rounded-full lg:hidden"
                alt=""
              />
              <img
                className="hidden w-auto h-8 bg-white rounded-full lg:block"
                alt=""
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex"></div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
           

        
            <div className="relative ml-3">
              
              <a href="https://ko-fi.com/jseanpatel">
              <Icon height="30px" icon={koFi} />
            </a>
            
             
              <div
                className={
                  (isOpen ? "block" : "hidden") +
                  " origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                }
              >
                <div className="py-1 bg-white rounded-md shadow-xs">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3">
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Dashboard
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Team
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Projects
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Calendar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
