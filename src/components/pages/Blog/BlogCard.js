import React from "react";
import { GoComment } from "react-icons/go";
import {FaFacebookF,FaTwitter,FaLinkedinIn} from 'react-icons/fa'

const BlogCard = ({ blog }) => {
  const { img, title, category, date, comments, details } = blog;
  return (
    <div className="px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
      <div className="flex flex-col max-w-screen-lg overflow-hidden ">
        <div className="bg-white lg:pl-10 space-y-5 ">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <div className="relative z-10">
              <p className="text-lg font-Bellefair mb-2">{category}</p>
              <h5 className=" font-Bellefair font-normal text-2xl leading-tight sm:text-4xl">
                {title}
              </h5>
              <div className=" bg-khaki bg-opacity-50 absolute top-0 -left-10 w-24 h-16 md:h-20 -z-10" />
            </div>
            <div className="py-3">
              <p className="flex items-center gap-4">
                <span className="capitalize">{date}</span> ||{" "}
                <span className="flex items-center gap-1">
                  <GoComment />
                  <sup>{comments}</sup>
                </span>
              </p>
            </div>
            <p className="mb-5 text-gray-800">{details}</p>
          </div>
          <div className="flex items-center gap-4 pt-2">
           <div className="h-9 w-9 rounded-full bg-khaki bg-opacity-50 grid place-content-center "><FaFacebookF /></div> 
           <div className="h-9 w-9 rounded-full bg-khaki bg-opacity-50 grid place-content-center "><FaTwitter /></div> 
           <div className="h-9 w-9 rounded-full bg-khaki bg-opacity-50 grid place-content-center "><FaLinkedinIn /></div> 
          </div>
        </div>
        <div className="my-10 lg:ml-10 w-full h-[1px] bg-khaki" />
      </div>
    </div>
  );
};

export default BlogCard;
