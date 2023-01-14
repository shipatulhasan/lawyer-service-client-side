import React from 'react';
import { PhotoView,PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,img,price,title,description} = service
    return (
        <div className='dark:bg-slate-800 text-white bg-[#353535]'>
         <PhotoProvider>
          <PhotoView src={img}>
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-72 hover:cursor-pointer -z-10"
            src={img}
            alt=""
          />
          </PhotoView>
          </PhotoProvider>
       
          <div className='-mt-11 bg-[#353535] relative z-20 ml-5 flex items-center gap-2'>
            <div className='bg-khaki p-2'>
            <p className='text-white text-lg'>${price.split('.')[0]}</p>
            </div>
          <p className=" text-base font-Bellefair font-normal leading-none sm:text-2xl dark:text-white" title={title}>
            {title.length>20?title.slice(0,20)+'...':title}
          </p>
          </div>
          <div className="p-5">
          <p className=" dark:text-slate-200">
           {description?.length > 100 ? description.slice(0,100) +'...':description}
          </p>
          <div className='inline-block mt-3 '>
              <Link to={`/services/${_id}`}>
              <p className='viewCard-button text-sm text-khaki font-semibold uppercase'>view more</p>
              </Link>
          </div>
          </div>
        </div>
    );
};

export default ServiceCard;