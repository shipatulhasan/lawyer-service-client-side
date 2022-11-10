import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ServicesContext } from "../../../layouts/Main";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import PageHeader from "../shared/PageHeader";
import TableRows from "./TableRows";
import img from '../../../asset/banner/reviews.png'
import toast from "react-hot-toast";
import {Helmet} from 'react-helmet-async'


const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [update,setUpdate] = useState(false)
  const { user, logOut} = useContext(AuthContext);
  const services = useContext(ServicesContext);


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
       
      });
  }, [user?.email,update,logOut]);

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
        setUpdate(!update)
      })

    }

  
  }

  const handleUpdate = (event,_id)=>{

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

            }
            
            
        })
  }



  const headerInfo = {
      title:'My Reviews',
      img:img
  }

  return (
    <section>
       <Helmet>
          <title>My Review-Family Law Attorney</title>
          </Helmet>
        <PageHeader headerInfo={headerInfo} />
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
        </div>
      </div>
    </section>
  );
};

export default MyReviews;
