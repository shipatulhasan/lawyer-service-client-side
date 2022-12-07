import React from 'react';
import preview from '../../../../../asset/banner/service_banner.jpg'

const Preview = ({service}) => {
    const {img,title,description,headline,details} = service
    return (
        <div>
            <h1 className="text-4xl font-bold text-black uppercase mb-4">
            Preview
          </h1>
            <img src={img?img:preview} alt="" />
            <div className='py-5'>
           <h2 className='font-crimson max-w-2xl mb-2 md:mb-3 text-5xl leading-tight font-bold tracking-wide text-black md:text-6xl md:leading-tight capitalize dark:text-white'>
                {title ? title : 'Service title'}
            </h2>
            <p className='text-lg dark:text-white'>
                {description ? description : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,`}
            </p>
           </div>
            
            <div className='py-5 '>
            <h2 className='  mb-4 md:mb-3 text-2xl leading-tight font-bold tracking-wide text-black dark:text-white'>
                {headline ? headline : 'Service Headline'}
            </h2>
            <p className='text-lg dark:text-white'>
                {details? details : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,`}
            </p>
            </div>
        </div>
    );
};

export default Preview;