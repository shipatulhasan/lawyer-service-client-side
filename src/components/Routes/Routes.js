import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import Main from "../../layouts/Main";
import About from "../pages/About";
import AddService from "../pages/Dashboard/Adminpanel/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import AllReviews from "../pages/Dashboard/Adminpanel/AllReviews/AllReviews";
import AllUsers from "../pages/Dashboard/Adminpanel/AllUsers/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Loign from "../pages/Forms/Loign";
import ResetPass from "../pages/Forms/ResetPass";
import SignUp from "../pages/Forms/SignUp";
import Home from "../pages/Home/Home";
import MyReviews from "../pages/Dashboard/UserPanel/MyReviews/MyReviews";
import Services from "../pages/Services";
import SingleService from "../pages/SingleService/SingleService";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<ErrorPage />,
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
                loader:({params})=>fetch(`${process.env.REACT_APP_api}/service/${params.id}`),
                element:<SingleService />

            },
            {
                path:'/add-service',
                element:<PrivateRoute><AddService /></PrivateRoute>
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
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout /></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard />

            },
            {
                path:'/dashboard/my-reviews',
                element:<MyReviews />

            },
            {
                path:'/dashboard/add-service',
                element:<AdminRoute><AddService /></AdminRoute>

            },
            {
                path:'/dashboard/all-reviews',
                element:<AdminRoute><AllReviews /></AdminRoute>

            },
            {
                path:'/dashboard/all-users',
                element:<AdminRoute><AllUsers /></AdminRoute>

            },
        ]
    }
])