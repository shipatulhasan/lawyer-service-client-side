import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ServicesContext } from "../../../../ServiceProvider/ServiceProvider";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Loader from '../../../shared/Loader'

import TableRows from "./TableRows";
import toast from "react-hot-toast";
import {Helmet} from 'react-helmet-async'


const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading,setIsloading] = useState(true)
  const [update,setUpdate] = useState(false)
  const { user, logOut} = useContext(AuthContext);
  const {services} = useContext(ServicesContext);


  useEffect(() => {
    fetch(`https://lawyer-server-omega.vercel.app/review?email=${user?.email}`,{
      headers:{
        authorization:`Bearar ${localStorage.getItem('my_token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          return logOut()
            .then(() => { })
            .catch((err) => console.error(err));
        }
        return res.json()
      })
      .then((data) => {
        setReviews(data)
        setIsloading(false)
       
      });
  }, [user?.email,update,logOut]);

  if(isLoading){
    return <Loader />
  }

  const handleDelete = (id)=>{
    
    const proceed = window.confirm('Would you like to delete this comment?')

    if(proceed){

      fetch(`https://lawyer-server-omega.vercel.app/review/${id}`,{
        method:'delete',
        headers:{
          'content-type':'application/json'
      }
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        toast.success('Deleted successfully')
        setUpdate(!update)
      })

    }

  
  }

  const handleUpdate = (event,_id,setIsopen)=>{

    event.preventDefault()
   const comment = (event.target.review.value)

    fetch(`https://lawyer-server-omega.vercel.app/review/${_id}`,{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({comment})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){

                toast.success('updated successfully')
                setUpdate(!update)
                setIsopen(false)

            }
            
            
        })
  }

  return (
    <section>
       <Helmet>
          <title>My Review-Family Law Attorney</title>
          </Helmet>
      <div className="container py-10 mx-auto dark:text-gray-100">
        <div className="overflow-x-auto">
        
          <table className="min-w-full border">
            <thead className="dark:bg-gray-700 bg-khaki text-white">
              <tr className="text-left">
                <th className="p-3">Service Name</th>
                <th className="p-3">Review</th>
                <th className="p-3">Date & Time</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
           
            <tbody>
             
              {reviews.map((review) => (
                <TableRows
                  key={review._id}
                  review={review}
                  services={services}
                  handleDelete={handleDelete}
                  handleUpdate = {handleUpdate}
                 
                />
              ))}
            </tbody>
          </table>
          {
            reviews.length===0 && <h2 className="text-khaki text-center py-10 text-2xl font-bold">No reviews were added</h2>
          }
        </div>
      </div>
    </section>
  );
};

export default MyReviews;
