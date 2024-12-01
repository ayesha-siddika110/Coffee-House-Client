import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../index.css'
import Header from '../Home/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className='rancho-font'>
            <ToastContainer />
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;