import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ServicesContext } from "../../../layouts/Main";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import PageHeader from "../shared/PageHeader";
import TableRows from "./TableRows";
import img from '../../../asset/banner/reviews.png'
import toast from "react-hot-toast";


const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [update,setUpdate] = useState(false)
  const { user} = useContext(AuthContext);
  const services = useContext(ServicesContext);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data)
       
      });
  }, [user?.email,update]);

  const handleDelete = (id)=>{
    
    const proceed = window.confirm('Would you like to delete this comment?')

    if(proceed){

      fetch(`http://localhost:5000/review/${id}`,{
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

    fetch(`http://localhost:5000/review/${_id}`,{
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
            
            console.log(data)
        })
  }



  const headerInfo = {
      title:'My Reviews',
      img:img
  }

  return (
    <section>
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