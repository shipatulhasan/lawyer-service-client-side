import React from 'react';

const ServiceDetails = ({service}) => {

    const {_id,title,description ,topics ,breffing} = service
    return (
        <div className='col-span-3  sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-16'>

           <div className='pb-5'>
           <h2 className='font-crimson max-w-2xl mb-2 md:mb-3 text-5xl leading-tight font-bold tracking-wide text-black md:text-6xl md:leading-tight capitalize dark:text-white'>
                {title}
            </h2>
            <p className='text-lg dark:text-white'>
                {description}
            </p>
           </div>
            
            <div className='py-5 '>
            <h2 className='  mb-4 md:mb-3 text-2xl leading-tight font-bold tracking-wide text-black dark:text-white'>
                {topics}
            </h2>
            <p className='text-lg dark:text-white'>
                {breffing}
            </p>
            </div>
            
        </div>
    );
};

export default ServiceDetails;