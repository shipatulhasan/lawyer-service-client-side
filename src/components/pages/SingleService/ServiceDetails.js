import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReviewForm from '../shared/Reviews/ReviewForm'
import Reviews from '../shared/Reviews/Reviews';

const ServiceDetails = ({service,user}) => {

    const {_id,title,description ,headline ,details} = service
    
    const [update,setUpdate] = useState(false)
    const [reviews,setReviews] = useState([])

    const location = useLocation()


    useEffect(()=>{
        fetch(`https://lawyer-server-omega.vercel.app/review/${_id}`)
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
            setUpdate(!update)
        })

    }, [update,_id])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const comment = form.comment.value
        const date = new Date()
        const commentTime = date.toLocaleString()

        const review = {
            comment,
            service_id:_id,
            user:user?.displayName,
            email:user?.email,
            img:user?.photoURL,
            date:commentTime
        }
        
        // review post

        fetch('https://lawyer-server-omega.vercel.app/review',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            form.reset()
        })
    }

    
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
                {headline}
            </h2>
            <p className='text-lg dark:text-white'>
                {details}
            </p>
            </div>


            {/* Review */}


            <div className='py-5'>
                {
                    user ? 
                    <ReviewForm handleSubmit={handleSubmit} /> 
                    :
                    <div className='flex items-center justify-between p-4 dark:text-white  bg-slate-200 bg-opacity-25 border-t-2 border-khaki'>
                        <p>Please sign in to write a review</p>
                        <Link to="/login" state={{ from: location }} replace 
                         className='border-2 border-khaki px-8 py-2 text-white font-bold tracking-widest uppercase text-xs  bg-black  hover:bg-khaki '>
                    Sign in
                </Link>
                    </div>

                }
                
                

            </div>

            <div className='max-w-xl'>
                {
                    reviews.map((review,i)=><Reviews key={review._id} review={review} index={i===reviews.length-1} />)
                }
                
            </div>


        </div>
    );
};

export default ServiceDetails;