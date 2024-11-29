import React from 'react';

import logo from '../../../images/more/logo1.png'
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className='text-white bg-[#331A15] py-2 space-x-2 flex justify-between items-center'>
            <div className='w-[80%] m-auto flex items-center justify-between'>
                <div className='flex justify-center items-center'>
                    <img src={logo} className='w-8' alt="" />
                    <div className='  text-center text-lg'>Coffee House</div>

                </div>
                <div className='space-x-6 text-sm'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/addProducts">Add products</NavLink>
                </div>

            </div>

        </div>
    );
};

export default Header;