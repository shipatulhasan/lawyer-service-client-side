import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Loign from "../pages/Forms/Loign";
import ResetPass from "../pages/Forms/ResetPass";
import SignUp from "../pages/Forms/SignUp";
import Home from "../pages/Home/Home";
import MyReviews from "../pages/MyReviews/MyReviews";
import Services from "../pages/Services";
import SingleService from "../pages/SingleService/SingleService";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<ErrorPage />,
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
                path:'/services',
                element:<Services />
            },
            {
                path:'/service-details/:id',
                loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`),
                element:<SingleService />

            },
            {
                path:'/my-reviews',
                element:<PrivateRoute><MyReviews /></PrivateRoute>

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