import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageHeader from '../shared/PageHeader';

const SingleService = () => {

    const service = useLoaderData()
   

    
    return (

        <section>
            <PageHeader headerInfo={service} />
            <div>
                
            </div>
        </section>
        
    );
};

export default SingleService;