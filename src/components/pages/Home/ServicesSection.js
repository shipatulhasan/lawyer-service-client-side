import React, { useEffect, useState } from 'react';
import ServiceCard from '../shared/ServiceCard';

const ServicesSection = () => {

  const [services,setServices] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:5000/services?limit=${3}`)
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])



    return (
        <section className="px-6 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
          <p className='text-khaki  font-bold tracking-widest '>Services</p>
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
        {
          services.map(service=><ServiceCard key={service._id} service={service}/>)
        }
        
        </div>
            
        </section>
    );
};

export default ServicesSection;