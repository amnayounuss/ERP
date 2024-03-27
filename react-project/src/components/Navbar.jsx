import React, { useState } from 'react';
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";
// import logo from "../assets/desktop-logo.png"

const Navbar = () => {
    const [isMenuOpen, setISMenuOpen] = useState(false);
    const toggleMenu = () => {
        setISMenuOpen(!isMenuOpen)

    }
    const navItems = [
        { link: "Home", path: "home" },
        { link: "About Us", path: "about" },

        { link: "Services", path: "services" },

        { link: "Contact Us", path: "contact" },

    ];
    return (
        <>

            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto  flex justify-between items-center font-medium'>
                    <div className='flex space-x-14 items-center'>
                        <a href="/" className='text-2xl font-semibold flex items-center text-primary cursor-pointer hover:-translate-y-1 transition-all duration-300'>
                            {/* <img src={logo} alt=""  className='mr-20'/> */}
                            Ecube
                        </a>
                        <ul className='md:flex space-x-6 hidden'>
                            {
                                navItems.map(({ link, path }) => <a key={link} href={path} className='block hover:text-gray-500 link link-underline link-underline-black text-black cursor-pointer hover:-translate-y-1 transition-all duration-300'>{link}</a>)
                            }
                        </ul>
                    </div>
                    <div className='space-x-12 hidden md:flex items-center '>
                        <a href="/" className='hidden lg:flex items-center hover:text-secondary cursor-pointer hover:-translate-y-1 transition-all duration-300'> <GrLanguage className='mr-2' /><span>Languages</span></a>

                        <button className='bg-secondary py-2 px-6 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600 cursor-pointer hover:-translate-y-1 transition-all duration-300'>Sign Up</button>


                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {
                                isMenuOpen ? (<FaXmark className='text-primary' />) : (<FaBars className='text-primary' />)
                            }
                        </button>

                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"} text-xl `}>
                {
                    navItems.map(({ link, path }) => <a key={link} href={path} className='block hover:text-gray-400 mobile-link-underline-black mobile-link-underline:hover mobile-link-underline text-black'>{link}</a>)
                }
            </div>
        </>

    );
};

export default Navbar;