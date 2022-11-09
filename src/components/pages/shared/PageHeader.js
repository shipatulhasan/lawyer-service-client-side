import React from 'react';

const PageHeader = ({headerInfo}) => {
    const {img, title} = headerInfo  
    return (
        <div>
            <section className='relative min-h-[400px] pt-10 lg:py-32  flex items-center justify-start bg-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${img})`}}>
            <div className='w-full h-full top-0 absolute bg-gradient-to-r from-black to-transparent opacity-80' />
             <div className="px-6 md:px-16 lg:px-0 w-full max-w-2xl xl:pl-16 xl:mb-0 xl:w-3/4 z-10">
                <h2 className="max-w-2xl mb-4 md:mb-6 text-5xl leading-tight font-bold font-crimson tracking-wide text-white md:text-6xl md:leading-tight capitalize">
                    {title}
                </h2>
           
               
            </div>

        </section>
            
        </div>
    );
};

export default PageHeader;