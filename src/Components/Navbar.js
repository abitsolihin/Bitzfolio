import React, { useState } from 'react'
import logo from '../img/Logo.svg'
import border from '../img/button-nav.svg'
import menu from '../img/Menu.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="fixed z-10 flex flex-wrap items-center justify-between px-3 md:px-[170px] pt-3 bg-transparent w-full">
                <div className="container px-4 lg:px-0 mx-auto flex flex-wrap md:flex-none items-center justify-between">
                    <div className="w-full relative flex justify-start lg:w-auto lg:static lg:block lg:justify-start">
                        <a className="text-sm font-bold leading-relaxed inline-block py-2 w-[128px] lg:w-[156px] whitespace-nowrap uppercase text-white" href="#pablo">
                            <img src={logo} alt="bitzfolio" />
                        </a>
                        <button
                            className="text-white fixed right-1 top-[20px] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <i className="fas fa-bars"><img src={menu} alt="menu" width={28} /></i>
                        </button>
                    </div>
                    <div className={"lg:flex flex-grow items-center justify-start md:flex-1" +
                        (navbarOpen ? "flex" : " hidden")}
                        id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row list-none  text-white gap-2 lg:gap-8 lg:ml-auto">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "py-2 text-[16px] relative bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold after:content-[' '] after:absolute after:left-0 after:right-0 after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] ease-in-out duration-300" : "py-2 relative after:content-[' '] after:absolute hover:after:left-0 hover:after:right-0 after:right-full after:left-full after:rounded-full after:h-[2px] text-[16px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:ease-in-out after:duration-300"} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "py-2 text-[16px] relative bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold after:content-[' '] after:absolute after:left-0 after:right-0 after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900]" : "py-2 text-[16px] relative after:content-[' '] after:absolute hover:after:left-0 hover:after:right-0 after:right-full after:left-full after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:ease-in-out after:duration-300"} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "py-2 text-[16px] relative bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold after:content-[' '] after:absolute after:left-0 after:right-0 after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900]" : "py-2 text-[16px] relative after:content-[' '] after:absolute hover:after:left-0 hover:after:right-0 after:right-full after:left-full after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:ease-in-out after:duration-300"} to="/projects">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "py-2 text-[16px] relative bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold after:content-[' '] after:absolute after:left-0 after:right-0 after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900]" : "py-2 text-[16px] relative after:content-[' '] after:absolute hover:after:left-0 hover:after:right-0 after:right-full after:left-full after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:ease-in-out after:duration-300"} to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="button hidden md:flex w-[200px] items-center justify-center group">
                        <NavLink className="wrapper relative px-5 py-2 flex items-center justify-center">
                            <img className='absolute group-hover:bg-gradient-to-br group-hover:from-[#FF1E1E] group-hover:to-[#FF9900] rounded-md duration-200' src={border} alt="border" loading='lazy' />
                            <h1 className='bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent group-hover:text-white z-20'>Contact</h1>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar