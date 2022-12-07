import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ServicesContext } from '../../../../ServiceProvider/ServiceProvider';
import Loader from '../../../shared/Loader';
import ReviewInfo from './ReviewInfo';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading,setIsloading] = useState(true)
    
    const {services} = useContext(ServicesContext);
  
  
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
  
    if(isLoading){
      return <Loader />
    }
    return (
        <div className='container mx-auto px-4 sm:px-8 py-8'>
           <Helmet>
        <title>All Users - Family Law Attorney</title>
      </Helmet>
         
        
            
            <>
              <div className='p-2 overflow-x-auto'>
          <div className='min-w-full shadow rounded-lg'>
               <table className='min-w-full leading-normal'>
              <thead className='bg-khaki text-white'>
                <tr>
                <th className='px-5 py-3 border-b border-gray-200 text-left'>No</th>
                
                  <th
                    scope='col'
                    className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-bold'
                  >
                    Name
                  </th>
                  
                  <th
                    scope='col'
                    className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-bold'
                  >
                    Email
                  </th>
                
                
                
                  <th
                    scope='col'
                    className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-bold'
                  >
                    Service
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-bold'
                  >
                    Review
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-bold'
                  >
                    Date & Time
                  </th>
                  {/* <th
                    scope='col'
                    className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-bold'
                  >
                    Action
                  </th> */}
                </tr>
              </thead>
             
              <tbody>

              {
                  reviews.map((review,i)=><ReviewInfo key={review._id} review={review} services={services} index={i} />)
                }
              
                 
             
              </tbody>
            </table>
            </div>
        </div>
              </>

              {
            services?.length===0 && <p className='text-black text-2xl font-bold'>No <span className='text-4xl text-res-600'>Reviews</span> yet</p>
          }
            
           
          
      </div>
    );
};

export default AllReviews;