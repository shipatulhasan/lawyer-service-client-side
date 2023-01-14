import React from 'react';
import { blogs } from "./blogFakeData";

const BlogSidebar = () => {
    return (
        <div className="mx-auto w-11/12 md:w-64 ">
        <h2 className='text-black font-Bellefair font-normal text-3xl pb-3'>
            All Blogs
        </h2>

        {
            blogs.map((blog,i)=> <div key={i} className='flex items-center gap-5 py-3 border-b border-b-slate-300'>
            <img src={blog.img} className='w-20 h-16' alt="" />
            <div>
            <p className="text-sm font-Bellefair mb-2">{blog.category}</p>
              <h5 className=" font-Bellefair font-normal leading-tight ">
                {blog.title}
              </h5>
            </div>
          </div>)
        }
        
    </div>
    );
};

export default BlogSidebar;