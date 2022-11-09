import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,img,price,title,description} = service
    return (
        <div className='border border-khaki p-5 shadow-xl'>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src={img}
            alt=""
          />
          <p className="mb-2 text-xl font-crimson font-bold leading-none sm:text-2xl dark:text-white">
            {title}
          </p>
          <p className="text-gray-700 dark:text-slate-200">
           {description?.length > 100 ? description.slice(0,100) +'...':description}
          </p>
          <div className='flex items-center justify-between mt-3'>
              <p className='text-khaki text-lg'>Price: ${price}</p>
              <Link to={`/services/${_id}`}>
              <BsArrowRight className='text-xl text-khaki font-normal' />
              </Link>
          </div>
        </div>
    );
};

export default ServiceCard;