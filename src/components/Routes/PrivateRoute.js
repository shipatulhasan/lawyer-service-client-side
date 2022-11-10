import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loader from '../pages/shared/Loader';

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext)
    let location = useLocation();
    if(isLoading){
        return <Loader />
    }
    if(user){
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;