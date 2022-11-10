import React, { useState } from "react";
import { FaRegUser, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const UserProfile = ({ user, handlelogOut }) => {
  const [isClicked, setIsClicked] = useState(false);



  return (
    <div className="relative ">
      {/* <!-- Dropdown toggle button --> */}
      <button
        onClick={() => setIsClicked(!isClicked)}
        className="flex items-center focus:outline-none"
      >
        <div className="w-12 h-12 overflow-hidden border-2 border-transparent ring-khaki ring-2 m-1 rounded-full flex items-center justify-center">
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              className=" object-cover w-full h-full"
              alt="avatar"
            />
          ) : (
            <FaUser className="text-white text-xl" />
          )}
        </div>
      </button>

      {/* <!-- Dropdown menu --> */}

      {isClicked && (
        <div className="absolute left-0 lg:left-auto lg:right-0 z-20 w-60 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
          <Link
            to="/"
            className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <img
              className="flex-shrink-0 ring-2 border-2 ring-fuchsia-900 object-cover mx-1 rounded-full w-9 h-9"
              src={user?.photoURL}
              alt="img"
            />
            <div className="ml-2">
              <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {user?.displayName}
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-none">
                {user?.email}
              </p>
            </div>
          </Link>

          <hr className="border-gray-200 dark:border-gray-700 " />

          <Link
            to="/"
            className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <FaRegUser />

            <span className="mx-1">view profile</span>
          </Link>

          <hr className="border-gray-200 dark:border-gray-700 " />

          <Link
            onClick={handlelogOut}
            className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 hover:cursor-pointer transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <FaSignOutAlt />
            <span className="mx-1">Sign Out</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
