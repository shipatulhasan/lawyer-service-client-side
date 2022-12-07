import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../components/pages/shared/Footer';
import Navbar from '../components/pages/shared/Navbar/Navbar';



const Main = () => {
    
    return (
        <>
         <Navbar />
            <Outlet />
            <Footer />
            </>
           
       
    );
};

export default Main;