import React from "react";
import {Helmet} from 'react-helmet-async'
import PageHeader from "../shared/PageHeader";
import img from "../../../asset/banner/blog.jpg";
import { blogs } from "./blogData";
import BlogCard from "./BlogCard";

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

      <div className="lg:py-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
