import React, { useEffect, useState, useContext } from 'react';
import PageHeader from './shared/PageHeader'
import img from '../../asset/banner/services.jpg'
import {Helmet} from 'react-helmet-async'
import ServiceCard from './shared/ServiceCard'
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loader from './shared/Loader';
import { ServicesContext } from '../../layouts/Main';

const Services = () => {

    const [services,setServices] = useState([])
    const {isLoading,setLoading} = useContext(AuthContext)
   

    
    useEffect(()=>{
        fetch(`https://lawyer-server-omega.vercel.app/services`)
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
            setLoading(false)
        })

    },[setLoading])
 


    const headerInfo = {
        img,
        title:'Services'
    }
    return (
        <div>
            <Helmet>
          <title>Services-Family Law Attorney</title>
          </Helmet>
            <PageHeader headerInfo={headerInfo} />
            <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">

                {
                    isLoading && <Loader />
                }

            <div className="grid  mb-8 lg:grid-cols-3 gap-8">
        {
          services.map(service=><ServiceCard key={service._id} service={service}/>)
        }
        
        </div>

            </div>
            
        </div>
    );
};

export default Services;