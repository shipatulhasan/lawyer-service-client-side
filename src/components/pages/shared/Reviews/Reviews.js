import React from 'react';
import { FaStar, FaUserAlt } from 'react-icons/fa';

const Reviews = ({review, index}) => {

    const {user,img,date,comment} = review

    return (
        <div className={`${index ? 'border-none' : 'border-b'} border-khaki pt-10 pb-0 mx-5 dark:text-white`}>
        

        <div className='flex justify-between items-center'>
        <div className="flex">
          <img
            className="object-cover w-14 h-14 mr-4 rounded-full shadow  border-2 border-transparent ring-khaki ring-2"
            src={img ? img : <FaUserAlt />}
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">{review?.user ? user :'Anonymos'}</p>
            <p className="text-sm text-gray-800">{date}</p>
          </div>
        </div>
        <div>
        </div>
     
        </div>

        <div className='px-4 pt-5'>
        <p className="text-sm tracking-wide text-gray-800">
              {comment}
            </p>
            <p className='py-5 flex text-khakis'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
        </div>
      </div>
    );
};

export default Reviews;