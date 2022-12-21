import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewSlider from './ReviewSlider';

const ServicesSection = () => {

    const [reviews, setReviews] = useState([]);
    const [isLoading,setIsloading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_api}/all-reviews`,{
      headers:{
        authorization:`Bearar ${localStorage.getItem('my_token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data)
        setIsloading(false)
       
      });
  },[]);



    return (
        <section className="px-6 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
          <p className='text-khaki  font-bold tracking-widest '>Review</p>
          </div>
          <h2 className="max-w-xl mb-6 font-crimson text-3xl font-bold md:leading-tight tracking-tight text-black dark:text-white md:text-6xl md:mx-auto">
            Our client's <span className='text-khaki'>review</span> 
          </h2>
        
        </div>
        </div>

      {/* service boxex */}
      <div>
      <ReviewSlider reviews={reviews} />
        
        </div>
      <div className='text-center '>
        <button className='mt-10'>
        <Link to='/reviews'
                 className='border border-khaki px-8 py-2 text-white font-bold tracking-widest uppercase text-xs bg-black  hover:bg-khaki '>
                    view all reviews
                </Link>
        </button>
     
      </div>
            
        </section>
    );
};

export default ServicesSection;