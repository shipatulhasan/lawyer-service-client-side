import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../components/pages/shared/Navbar/Navbar';

export const ServiceContext = createContext()

const Main = () => {

    const services = useLoaderData()
    return (
        <ServiceContext.Provider value={services}>
            <Navbar />
            <Outlet />
        </ServiceContext.Provider>
    );
};

export default Main;