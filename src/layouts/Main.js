import React from 'react';

import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/pages/shared/Footer';
import Navbar from '../components/pages/shared/Navbar/Navbar';



const Main = () => {
    
    return (
        <>
         <Navbar />
         <ScrollRestoration
          getKey={(location, matches) => {
            const paths = ["/home", "/about","/blog","/services"];
            return paths.includes(location.pathname)
            ?// everything else by location like the browser
            location.key
          
            : 
               // home and notifications restore by pathname
               location.pathname
          }} />
            <Outlet />
            <Footer />
            </>
           
       
    );
};

export default Main;