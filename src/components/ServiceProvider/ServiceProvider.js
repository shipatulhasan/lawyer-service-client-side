import React, { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
export const ServicesContext = createContext()

const ServiceProvider = ({children}) => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('https://lawyer-server-omega.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <ServicesContext.Provider value = {{services}}>
            {children}
        </ServicesContext.Provider>
    );
};

export default ServiceProvider;