import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../components/pages/shared/Navbar/Navbar';

export const ServicesContext = createContext()

const Main = () => {

    const services = useLoaderData()

    
    return (
        <ServicesContext.Provider value={services}>
            <Navbar />
            <Outlet />
        </ServicesContext.Provider>
    );
};

export default Main;