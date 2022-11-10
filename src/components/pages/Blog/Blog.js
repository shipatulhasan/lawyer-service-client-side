import React from 'react';
import PageHeader from '../shared/PageHeader';
import img from '../../../asset/banner/blog.jpg'
import {blogs} from './blogData'
import BlogCard from './BlogCard';

const Blog = () => {
   const headerInfo = {
        img:img,
        title:'Blog'
    }
    return (
        <div>
            <PageHeader headerInfo={headerInfo} />
            
            <div className='lg:py-10'>
             {
                blogs.map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
            </div>
        </div>
    );
};

export default Blog;