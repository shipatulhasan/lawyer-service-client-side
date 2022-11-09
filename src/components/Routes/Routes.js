import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Error from "../pages/Error";
import Loign from "../pages/Forms/Loign";
import ResetPass from "../pages/Forms/ResetPass";
import SignUp from "../pages/Forms/SignUp";
import Home from "../pages/Home/Home";
import SingleService from "../pages/SingleService/SingleService";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<Error />,
        loader:()=>fetch('http://localhost:5000/services'),
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/home',
                element:<Home />
            },
            {
                path:'/services/:id',
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
                element:<SingleService />

            },
            {
                path:'/signup',
                element:<SignUp />
            },
            {
                path:'/login',
                element:<Loign />
            },
            {
                path:'/reset-password',
                element:<ResetPass />
            },
        ]
    }
])