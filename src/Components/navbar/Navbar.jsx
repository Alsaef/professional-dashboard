import React from 'react';
import { FaSearch } from 'react-icons/fa';
import flagImage from '../../assets/image/flag.jpg';
import Avatar from '../../assets/image/image-avater.jpg';
import { FaCog } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='px-3'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className=" text-xm"><FaSearch /></a>
                </div>
                <div className="navbar-end gap-4">
                    <a className=""><img src={flagImage} className='h-[20px] w-[20px]' alt='' /></a>
                    <a className=""><FaCog /></a>
                    <div className="avatar">
                        <div className="w-[30px] rounded-full">
                            <img src={Avatar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;