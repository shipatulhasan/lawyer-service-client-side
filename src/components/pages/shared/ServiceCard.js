import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { PhotoView,PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,img,price,title,description} = service
    return (
        <div className='border border-khaki p-5 shadow-xl dark:bg-slate-800'>
          <PhotoProvider>
          <PhotoView src={img}>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 hover:cursor-pointer"
            src={img}
            alt=""
          />
          </PhotoView>
          </PhotoProvider>
          
          
          <p className="mb-2 text-xl font-crimson font-bold leading-none sm:text-2xl dark:text-white">
            {title}
          </p>
          <p className="text-gray-700 dark:text-slate-200">
           {description?.length > 100 ? description.slice(0,100) +'...':description}
          </p>
          <div className='flex items-center justify-between mt-3'>
              <p className='text-khaki text-lg'>Price: ${price}</p>
              <Link to={`/services/${_id}`}>
              <FaArrowRight className='text-xl text-khaki font-normal' />
              </Link>
          </div>
        </div>
    );
};

export default ServiceCard;