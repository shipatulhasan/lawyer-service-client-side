import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/pages/shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;