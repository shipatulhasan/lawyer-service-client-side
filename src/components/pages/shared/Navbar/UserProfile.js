import React, { useState } from "react";

import { FaRegUser, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserProfile = () => {
  
  const [isClicked, setIsClicked] = useState(false);


  return (
    <div className="relative ">
      {/* <!-- Dropdown toggle button --> */}
      <button 
      onClick={() => setIsClicked(!isClicked)}
      className="flex items-center focus:outline-none"
      >
         <div className="w-12 h-12 overflow-hidden border-2 ring-khaki ring-2 m-1 rounded-full flex items-center justify-center">
           
            <img src='' className="grayscale object-cover w-full h-full" alt="avatar" />
                  :
                  <FaUser className="text-white text-xl"/>

           
          </div>
      </button>

      {/* <!-- Dropdown menu --> */}
      {isClicked && (
        <div
        
          className="absolute left-0 lg:left-auto lg:right-0 z-20 w-60 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800"
        >
          <a
            href="/"
            className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <img
              className="flex-shrink-0 ring-2 border-2 ring-fuchsia-900 object-cover mx-1 rounded-full w-9 h-9"
              src='{user?.photoURL}'
              alt="img"
            />
            <div className="ml-2">
              <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
               Shakib
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-none">
                shakib@gmail.com
              </p>
            </div>
          </a>

          <hr className="border-gray-200 dark:border-gray-700 " />

          <a
            href="/"
            className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
           <FaRegUser />

            <span className="mx-1">view profile</span>
          </a>


          <hr className="border-gray-200 dark:border-gray-700 " />

          <Link
            className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 hover:cursor-pointer transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="mx-1">Sign Out</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
