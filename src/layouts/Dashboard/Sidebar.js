import React, { useContext, useState } from 'react';
import brand from '../../asset/brand/logo.png'
import { FaFacebookF, FaLinkedinIn, FaUser, FaWhatsapp } from "react-icons/fa";
import { adminMenu, userMenu } from './menuList';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import {useRole} from '../../Hooks/useRole';
import Loader from '../../components/pages/shared/Loader';
import { Link } from 'react-router-dom';
import img from '../../asset/banner/inner_background_01.jpg'

const Sidebar = () => {
    const [show, setShow] = useState(false);
    const {user,logOut,isLoading} = useContext(AuthContext)
    const {myRole, roleLoading} = useRole(user?.email)

    if(isLoading || roleLoading){
        return <Loader />
    }

    let menuList
    if(myRole==='user'){
        menuList = userMenu
    }
    else{
        menuList = adminMenu

    }

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{ 
          toast.success('Successfully logout')
        })
        .catch(err=>console.error(err.message))
      }
    
    return (
        <div>
              <div className="w-64 hidden shadow h-full md:flex  flex-col justify-between fixed  bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img})`,backgroundColor:'rgb(0 0 0 / 35%)',backgroundBlendMode:'overlay' }}>
                <div className="px-8 my-5">
                    <Link to='/' className="w-2/3 mx-auto hover:cursor-pointer">
                       <img src={brand} alt="" />
                    </Link>
                    <Link to='/dashboard' className='flex items-center gap-0 mt-2'>

                    <div className="w-11 h-11 overflow-hidden border-2 ring-khaki ring-2 m-1 rounded-full flex items-center justify-center flex-shrink-0">
           {
             !user?.photoURL ? <FaUser className="text-white text-xl"/>:<img src={user?.photoURL} className="object-cover w-full h-full" alt="avatar" />
           }
           
          </div>
          <div className="ml-2">
              <div className='flex items-center'>
              <h1 className="text-base font-semibold text-white dark:text-gray-200">
                {user?.displayName}
              </h1>
              </div>
              <p className="text-xs text-white dark:text-gray-400 leading-none">
               {user?.email}
              </p>
              
            </div>
                    </Link>
                    <ul className="mt-12 space-y-10">
                     {menuList}
                    </ul>
                  
                </div>
              
                <div>
                <div className='my-3'>
                <ul className="px-8 mt-10 w-full flex items-center justify-start gap-10">
                        <li className="cursor-pointer text-khaki pt-5 pb-3">
                            <FaFacebookF />
                        </li>
                        <li className="cursor-pointer text-khaki pt-5 pb-3">
                            <FaWhatsapp />
                        </li>
                        <li className="cursor-pointer text-khaki pt-5 pb-3">
                            <FaLinkedinIn />
                        </li>
                   
                    </ul>
                </div>
                   
                    <p onClick={handleLogOut}
            className="flex items-center p-3 text-sm text-white capitalize transition-colors duration-300 hover:cursor-pointer transform bg-khaki"
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
          </p>
                </div>
            </div>
         
            <div className={`${show ? "-translate-x-full" : "-translate-x-0"} w-64 fixed flex bg-white z-10 shadow h-full flex-col justify-between md:hidden transition duration-150 ease-in-out transform bg-center bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${img})`,backgroundColor:'rgb(0 0 0 / 35%)',backgroundBlendMode:'overlay' }} id="mobile-nav">
                <div className="h-10 w-10 bg-khaki absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer" id="mobile-toggler" onClick={() => setShow(!show)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={6} cy={10} r={2} />
                        <line x1={6} y1={4} x2={6} y2={8} />
                        <line x1={6} y1={12} x2={6} y2={20} />
                        <circle cx={12} cy={16} r={2} />
                        <line x1={12} y1={4} x2={12} y2={14} />
                        <line x1={12} y1={18} x2={12} y2={20} />
                        <circle cx={18} cy={7} r={2} />
                        <line x1={18} y1={4} x2={18} y2={5} />
                        <line x1={18} y1={9} x2={18} y2={20} />
                    </svg>
                </div>
                <div className="px-8 my-5">
                    <Link to='/' className="w-2/3 mx-auto">
                       <img src={brand} alt="" />
                    </Link>
                    <div className='flex items-center gap-0 mt-2'>

                    <div className="w-12 h-12 overflow-hidden border-2 ring-khaki ring-2 m-1 rounded-full flex items-center justify-center">
           {
             isLoading ? <FaUser className="text-white text-xl"/>:<img src={user?.photoURL} className="object-cover w-full h-full" alt="avatar" />
           }
           
          </div>
          <div className="ml-2">
              <h1 className="text-base font-semibold text-white dark:text-gray-200">
                {user?.displayName}
              </h1>
              <p className="text-xs text-white dark:text-gray-400 leading-none">
               {user?.email}
              </p>
            </div>
                    </div>
                    <ul className="mt-12 space-y-8">
                     {menuList}
                    </ul>
                  
                </div>
              
                <div>
                <div className='my-3'>
                <ul className="px-8 mt-10 w-full flex items-center justify-start gap-10">
                        <li className="cursor-pointer text-khaki pt-5 pb-3">
                            <FaFacebookF />
                        </li>
                        <li className="cursor-pointer text-khaki pt-5 pb-3">
                            <FaWhatsapp />
                        </li>
                        <li className="cursor-pointer text-khaki pt-5 pb-3">
                            <FaLinkedinIn />
                        </li>
                   
                    </ul>
                </div>
                   
                    <p onClick={handleLogOut}
            className="flex items-center p-3 text-sm text-white capitalize transition-colors duration-300 hover:cursor-pointer transform bg-khaki"
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
          </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;