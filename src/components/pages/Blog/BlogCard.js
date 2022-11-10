import React from 'react';

const BlogCard = ({blog}) => {

    const{id,question,ans} = blog
    return (
        <div>
             <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 ">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border-[1px] border-khaki shadow-lg shadow-slate-300 lg:flex-row sm:mx-auto">
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 ">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-base text-white  rounded-full bg-khaki font-bold">
            Blog: #{id}
          </p>
        </div>
        <h5 className="mb-5 font-crimson text-2xl font-bold leading-tight sm:text-4xl">
          {question}
        </h5>
        <p className="mb-5 text-gray-800">
          <span className="font-bold">Answer:</span> {ans}
        </p>
        
      </div>
      </div>
      </div>
        </div>
    );
};

export default BlogCard;