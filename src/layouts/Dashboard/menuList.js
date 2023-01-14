import { NavLink } from "react-router-dom";
import { BsFillCloudPlusFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineReviews } from "react-icons/md";

export const userMenu = 

     <NavLink to="/dashboard/my-reviews">
        {({ isActive }) => (
          <li
          className={`${
            isActive ? "bg-khaki" : " "
          } w-full text-white px-3 py-1 mt-3 list-none font-Bellefair font-normal tracking-wide transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20`}
          >
                  <div className="flex gap-2 items-center">
                  <MdOutlineReviews className="" />
                            <span className='' >My Review</span>
                        </div>
            
          </li>
        )}
      </NavLink>


export const adminMenu = <>
    <NavLink to="/dashboard/all-users">
        {({ isActive }) => (
          <li
          className={`${
            isActive ? "bg-khaki" : " "
          } w-full text-white px-3 py-1 mt-3 list-none font-Bellefair font-normal tracking-wide transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20`}
          >
                  <div className="flex gap-2 items-center">
                  <HiUserGroup className="" />
                            <span className=''>All Users</span>
                        </div>
            
          </li>
        )}
      </NavLink>
      <NavLink to="/dashboard/add-service">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-khaki" : " "
            } w-full text-white px-3 py-1 mt-3 list-none font-Bellefair font-normal tracking-wide transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20`}
          >
                  <div className="flex gap-2 items-center">
                  <BsFillCloudPlusFill className="" />
                            <span className='' >Add Service</span>
                        </div>
            
          </li>
        )}
      </NavLink>
    <NavLink to="/dashboard/all-reviews">
        {({ isActive }) => (
          <li
          className={`${
            isActive ? "bg-khaki" : " "
          } w-full text-white px-3 py-1 mt-3 list-none font-Bellefair font-normal tracking-wide transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20`}
          >
                  <div className="flex gap-2 items-center">
                  <MdOutlineReviews className="" />
                            <span className='' >All Reviews</span>
                        </div>
            
          </li>
        )}
      </NavLink>

</>