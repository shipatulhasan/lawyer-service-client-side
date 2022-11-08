import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Error from "../pages/Error";
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
        ]
    }
])