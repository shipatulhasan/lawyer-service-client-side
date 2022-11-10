import React, { useState } from "react";
import { useContext } from "react";
import { BiLogIn } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import brand from "../../../../asset/brand/logo.png";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import UserProfile from "./UserProfile";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);


  const handlelogOut = () => {
    logOut()
      .then(() => {
        toast.success("logged out");
      })
      .catch((err) => console.error(err));
  };

  const menuList = (
    <>
      <NavLink to="/home">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-slate-200 bg-opacity-20 border-opacity-100" : 'border-opacity-0'
            } text-white px-3 py-1  list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20 border  hover:border-opacity-100 border-khaki lg:mt-0`}
          >
            Home
          </li>
        )}
      </NavLink>
      <NavLink to="/about">
        {({ isActive }) => (
          <li
          className={`${
            isActive ? " bg-slate-200 bg-opacity-20 border border-khaki" : ""
          } text-white px-3 py-1  list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20 border border-opacity-0 hover:border-opacity-100 border-khaki lg:mt-0`}
          >
            About
          </li>
        )}
      </NavLink>
      <NavLink to="/services">
        {({ isActive }) => (
          <li
          className={`${
            isActive ? " bg-slate-200 bg-opacity-20 border border-khaki" : ""
          } text-white px-3 py-1  list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20 border border-opacity-0 hover:border-opacity-100 border-khaki lg:mt-0`}
          >
            Services
          </li>
        )}
      </NavLink>
      <NavLink to="/blog">
        {({ isActive }) => (
          <li
          className={`${
            isActive ? " bg-slate-200 bg-opacity-20 border border-khaki" : ""
          } text-white px-3 py-1  list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20 border border-opacity-0 hover:border-opacity-100 border-khaki lg:mt-0`}
          >
            Blog
          </li>
        )}
      </NavLink>

      {
        user && 
        <>
        <NavLink to="/my-reviews" className=''>
        {({ isActive }) => (
          <li
          className={`${
            isActive ? " bg-slate-200 bg-opacity-20 border border-khaki" : ""
          } text-white px-3 py-1 list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20 border border-opacity-0 hover:border-opacity-100 border-khaki lg:mt-0`}
          >
         My Reviews
          </li>
        )}
      </NavLink>
        <NavLink to="/add-service" className=''>
        {({ isActive }) => (
          <li
          className={`${
            isActive ? " bg-slate-200 bg-opacity-20 border border-khaki" : ""
          } text-white px-3 py-1 list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20 border border-opacity-0 hover:border-opacity-100 border-khaki lg:mt-0`}
          >
         Add Services
          </li>
        )}
      </NavLink>
        <li onClick={handlelogOut} className='text-white px-3 py-1 list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20 border border-opacity-0 hover:border-opacity-100 border-khaki lg:mt-0'>
      
        Logut
        
      </li>
        
      </>
      }
    </>
  );

  return (
    <nav className="lg:absolute top-0 z-50 w-full bg-black lg:bg-transparent dark:bg-gray-800">
      <div className="container px-6 lg:px-0 mx-auto rounded">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700 ">
              <Link
                className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                to="/"
              >
                <img className="w-2/5" src={brand} alt="" />
              </Link>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="flex z-30 lg:hidden">
              <button
                onClick={() => setOpen(!isOpen)}
                type="button"
                className="text-white text-lg dark:text-gray-200 hover:text-slate-200 dark:hover:text-gray-400 focus:outline-none focus:text-slate-100 dark:focus:text-slate-200"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black dark:bg-black lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col - md:mx-0  lg:flex-row lg:items-center  lg:w-full">
              {menuList}
            </div>

            <div className="flex items-center mt-4 px-0  lg:mt-0">
              {user?.uid ? (
                <div className="flex items-center -ml-1 lg:ml-0">
                  <UserProfile user={user} handlelogOut ={handlelogOut}  />
                  <h3 className="mx-2 text-white dark:text-gray-200 lg:hidden">
                    {user?.displayName}
                  </h3>
                </div>
              ) : (
                <NavLink to="/login">
                  {({ isActive }) => (
                    <li
                      className={`${
                        isActive ? "text-khaki" : "text-white"
                      } px-3 py-2 list-none lg:mr-2 mt-2 font-bold transition-colors duration-300 transform hover:text-khaki lg:mt-0 inline-flex items-center gap-3`}
                    >
                      <BiLogIn />
                      Login
                    </li>
                  )}
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
