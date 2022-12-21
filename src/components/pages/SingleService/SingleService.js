import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { ServicesContext } from '../../../components/ServiceProvider/ServiceProvider';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import PageHeader from '../shared/PageHeader';
import ServiceDetails from './ServiceDetails';
import Sidebar from './Sidebar';

const SingleService = () => {

    const service = useLoaderData({})
    const {services} = useContext(ServicesContext)
    
    const {user} = useContext(AuthContext)

    return (

        <section>
             <Helmet>
          <title>{service.title}-Family Law Attorney</title>
          </Helmet>
            <PageHeader headerInfo={service} />

            <div className='grid grid-cols-1 md:grid-cols-4 space-y-5 md:gap-4 py-10'>
                <ServiceDetails service={service} user={user} />
                
                <Sidebar services={services} />
            </div>
        </section>
        
    );
};

export default SingleService;