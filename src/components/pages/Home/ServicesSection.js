import React from 'react';

const ServicesSection = () => {
    return (
        <section className="px-6 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
          <p className='text-khaki tex-sm font-bold tracking-widest mb-3'>Services</p>
          </div>
          <h2 className="max-w-xl mb-6 font-crimson text-3xl font-bold md:leading-tight tracking-tight text-black dark:text-white md:text-6xl md:mx-auto">
            The top most <span className='text-khaki'>popular services</span> in the city 
          </h2>
          <p className="text-base text-black dark:white">
          Mr.Jhon metha is One of the top leagal expert on family law. He handle more than 200 cases and the success rate is 90%. So the services you get from him is top notch.
          </p>
        </div>
        </div>

      {/* service boxex */}
      <div className="grid gap-8 mb-8 lg:grid-cols-3 lg:gap-8">
        <div className='border border-khaki p-5 shadow-xl'>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Galaxies Orion
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        </div>
            
        </section>
    );
};

export default ServicesSection;