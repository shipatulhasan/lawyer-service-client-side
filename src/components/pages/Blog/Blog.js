import React from "react";
import {Helmet} from 'react-helmet-async'
import PageHeader from "../shared/PageHeader";
import img from "../../../asset/banner/blog.jpg";
import { blogs } from "./blogFakeData";
import BlogCard from "./BlogCard";
import BlogSidebar from "./BlogSidebar";

const Blog = () => {
  const headerInfo = {
    img: img,
    title: "Blog",
  };
  return (
    <div>
      <Helmet>
          <title>Blog-Family Law Attorney</title>
          </Helmet>
      <PageHeader headerInfo={headerInfo} />

      <div className='grid grid-cols-1 md:grid-cols-4 space-y-5 md:space-y-0 md:gap-4 py-20'>
        <div className="col-span-3">

        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
        </div>

        <BlogSidebar />
      </div>
    </div>
  );
};

export default Blog;
