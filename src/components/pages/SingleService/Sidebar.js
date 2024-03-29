import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../../asset/banner/inner_background_01.jpg'

const Sidebar = ({services}) => {


    return (
        <div className=" mx-auto w-11/12 md:w-64  border border-khaki   bg-center bg-no-repeat bg-cover shadow-2xl shadow-slate-200 " style={{ backgroundImage: `url(${img})`,backgroundColor:'rgb(0 0 0 / 35%)',backgroundBlendMode:'overlay' }}>
            <h2 className='text-slate-200 font-Bellefair font-normal p-5 text-3xl '>
                All Services
            </h2>

            {
                services.map((service,i)=> <NavLink key={service._id} to={`/services/${service._id}`}>
                {({ isActive }) => (
                  <li
                    className={`${
                      isActive ? " bg-khaki" : ""
                    } text-white px-3 py-3 list-none font-Bellefair font-normal tracking-wide transition-colors duration-300 transform hover:bg-slate-200 hover:bg-opacity-20 ${i===services.length-1 ? 'border-none':'border-b'}  border-khaki`}
                  >
                    {service.title}
                  </li>
                )}
              </NavLink>)
            }
            
        </div>
    );
};

export default Sidebar;