import React, {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceForm from './ServiceForm';
import PageHeader from '../shared/PageHeader'
import Preview from './Preview'

import img from '../../../asset/banner/service_banner.jpg'

const AddService = () => {
    const [service, setService] = useState({})
    const serviceInfo = {service,setService}

    const headerInfo = {
        img:img,
        title:"Add Service"
    }
    return (
        <div>
            <Helmet>
          <title>Add Service-Family Law Attorney</title>
          </Helmet>

          <PageHeader headerInfo={headerInfo} />

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-2">
          <Preview service={service} />
        <ServiceForm serviceInfo ={serviceInfo}  />
      </div>
        </div>
        </div>
    );
};

export default AddService;