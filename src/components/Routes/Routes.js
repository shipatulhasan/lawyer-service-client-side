import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import About from "../pages/About";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
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
        loader:()=>fetch('https://lawyer-server-omega.vercel.app/services'),
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
                path:'/about',
                element:<About />
            },
            {
                path:'/blog',
                element:<Blog />
            },
            {
                path:'/services',
                element:<Services />
            },
            {
                path:'/services/:id',
                loader:({params})=>fetch(`https://lawyer-server-omega.vercel.app/service/${params.id}`),
                element:<SingleService />

            },
            {
                path:'/add-service',
                element:<PrivateRoute><AddService /></PrivateRoute>
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