import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../index.css'
import Header from '../Home/Header/Header';

const MainLayout = () => {
    return (
        <div className='rancho-font'>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;