import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ServiceContext } from '../../../layouts/Main';
import PageHeader from '../shared/PageHeader';
import ServiceDetails from './ServiceDetails';
import Sidebar from './Sidebar';

const SingleService = () => {

    const service = useLoaderData()
    const services = useContext(ServiceContext)
 
    return (

        <section>
            <PageHeader headerInfo={service} />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-10'>
                <ServiceDetails service={service} />
                <Sidebar services={services} />
            </div>
        </section>
        
    );
};

export default SingleService;