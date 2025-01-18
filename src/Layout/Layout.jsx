import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaTachometerAlt, FaChartLine, FaUniversity, FaFileAlt, FaUser, FaBox, FaShoppingCart, FaFileInvoice, FaBlog, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/image/logo.png';
import Navbar from '../Components/navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col min-h-screen">
                    <div className='flex items-start flex-col '>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        =
                    </label>
                    </div>
                    <Navbar/>
                    <Outlet />
                </div>
                <div className="drawer-side overscroll-none border-r-[1px]">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                   <div className=' px-3 py-1'>
                   <img src={logo} alt="logo" className="max-w-[100px] max-h-[50px] object-contain" />
                   </div>
                    <div className="menu text-left  w-[260px] p-4 border-0 lg:bg-none bg-white">
                        {/* Sidebar content here */}
                        <ul>
                        <p className='font-semibold px-4 py-1'>Overviews</p>
                            <li className='bg-purple-300 rounded text-white'><a><FaTachometerAlt /> Dashboard</a></li>
                            <li><a><FaChartLine /> Analytics</a></li>
                            <li><a><FaUniversity /> Banking</a></li>
                            <li><a><FaFileAlt /> File Management</a></li>
                        </ul>
                        <ul className='my-6'>
                            <p className='font-semibold px-4 py-1'>Management</p>
                            <li><a><FaUser /> User</a></li>
                            <li><a><FaBox /> Products</a></li>
                            <li><a><FaShoppingCart /> Orders</a></li>
                            <li><a><FaFileInvoice /> Invoices</a></li>
                            <li><a><FaBlog /> Blog</a></li>
                            <li><a><FaBriefcase /> Jobs</a></li>
                            <li><a><FaEnvelope /> Mail</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;