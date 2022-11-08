import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Error from "../pages/Error";
import Loign from "../pages/Forms/Loign";
import SignUp from "../pages/Forms/SignUp";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<Error />,
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
                path:'/signup',
                element:<SignUp />
            },
            {
                path:'/login',
                element:<Loign />
            },
        ]
    }
])