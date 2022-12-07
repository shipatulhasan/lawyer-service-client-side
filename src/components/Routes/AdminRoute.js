import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import {useRole} from '../../Hooks/useRole'
import Loader from '../pages/shared/Loader';

const AdminRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext)
    const {myRole,roleLoading} = useRole(user?.email)
    let location = useLocation();
    if(isLoading || roleLoading){
        return <Loader />
    }
    if(user && myRole==='admin'){
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default AdminRoute;