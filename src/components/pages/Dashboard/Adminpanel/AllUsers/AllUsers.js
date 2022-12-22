import React from 'react';
import { Helmet } from 'react-helmet-async';

import Loader from '../../../../pages/shared/Loader';
import {useUserData} from '../../../../../Hooks/useUserData'
import UserInfo from './UserInfo';
import toast from 'react-hot-toast';


const AllUsers = () => {
    const {users,userLoading,setUpdate,update} = useUserData('user');
    

  
    if(userLoading){
      return <Loader />
    }
    const handleDelete = (user)=>{
    
        const proceed = window.confirm(`Would you like to delete this ${user?.name}?`)
    
        if(proceed){
    
          fetch(`${process.env.REACT_APP_api}/user/${user?._id}`,{
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
                    Action
                  </th>
                </tr>
              </thead>
             
              <tbody>

              {
                  users?.map((user,i)=><UserInfo key={user._id} user={user}  index={i} handleDelete={handleDelete} />)
                }
              
                 
             
              </tbody>
            </table>
            </div>
        </div>
              </>

              {
            users?.length===0 && <p className='text-black text-2xl font-bold'>No <span className='text-4xl text-res-600'>user's</span> register yet</p>
          }
            
           
          
      </div>
    );
};

export default AllUsers;