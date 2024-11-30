import React from 'react';

import logo from '../../../images/more/logo1.png'
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    const links = <div className='text-2xl lg:space-x-5 flex lg:flex-row flex-col '>
        <NavLink to="/">Home</NavLink>
                        <NavLink to="/addProducts">Add products</NavLink>
        </div>
    
    const logos = <>
    <div className='flex justify-center items-center '>
                        <img src={logo} className='w-12' alt="" />
                        <div className='  text-center text-3xl'>Coffee House</div>

                    </div>
    </>
    
    return (
        <div className='bg-[#331A15]'>
            <div className="navbar justify-between w-[80%] m-auto  py-5 text-white">
                <div className="flex justify-between ">
                    <div className="dropdown bg-[#331A15]">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden bg-[#331A15]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content  rounded-lg z-[1] mt-3 w-52 p-2 shadow bg-[#331A15] space-y-2 border">
                            {links}
                        </ul>
                    </div>
                    {logos}
                </div>
                <div className=" hidden md:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6">
                       {
                        links
                       }
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>

            {/* <div className='text-white bg-[#331A15] py-2 space-x-2 flex justify-between items-center'>
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

            </div> */}
        </div>
    );
};

export default Header;