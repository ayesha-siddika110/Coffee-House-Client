import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../componants/Mainliyout/MainLayout';
import Home from '../componants/Home/Home';
import AddProduct from '../componants/AddProduct/AddProduct';
import UpdateProducts from '../componants/UpdateProducts/UpdateProducts';
import SignUp from '../componants/SignUp/SignUp';
import Users from '../componants/Users/Users';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5000/coffess')
            },
            {
                path: "/addProducts",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateProducts></UpdateProducts>,
                loader: ({params})=>fetch(`http://localhost:5000/coffess/${params.id}`)
            },
            {
                path:"/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/signupusers",
                element: <Users></Users>,
                loader: ()=> fetch('http://localhost:5000/users')
            }
        ]
    }
])

export default Router;