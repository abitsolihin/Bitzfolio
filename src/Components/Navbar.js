import React, { useState, useEffect  } from 'react'
import logo from '../img/Logo.svg'
import menu from '../img/Menu.svg'
import { NavLink, useLocation } from 'react-router-dom'
import border from '../img/button-nav.svg';
import Aos from 'aos'
import "aos/dist/aos.css"

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [colorChange, setColorChange] = useState(false);

    const location = useLocation();
    
    const className = location.pathname.startsWith('/project') ? "py-2 text-[16px] relative bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold after:content-[' '] after:absolute after:left-0 after:right-0 after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] ease-in-out duration-300" : "py-2 relative after:content-[' '] after:absolute hover:after:left-0 hover:after:right-0 after:right-full after:left-full after:rounded-full after:h-[2px] text-[16px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:ease-in-out after:duration-300";


    const changeNavbarcolor = () => {
        if (window.scrollY > 20) {
            setColorChange(true)
        } else {
            setColorChange(false)
        }
    }
    window.addEventListener('scroll', changeNavbarcolor)

    useEffect(() => {
        Aos.init({})
    }, [])
    return (
        <header>
            <nav className={(navbarOpen ? "fixed z-10 flex flex-wrap items-center justify-between px-3 md:px-[170px] pt-3 bg-[#221B1A] left-0 right-0 top-0 bottom-0" : "fixed z-10 flex flex-wrap items-center justify-between px-3 md:px-[170px] pt-3 bg-transparent w-full ") + (colorChange ? "bg-[#221b1a]" : "bg-[#221b1a]/0")} >
                <div className="container px-4 lg:px-0 mx-auto flex flex-wrap md:flex-none items-center justify-between">
                    <div className="w-full relative flex justify-start lg:w-auto lg:static lg:flex lg:items-center lg:justify-start">
                        <NavLink className="text-sm font-bold leading-relaxed inline-block py-2 w-[128px] lg:w-[156px] whitespace-nowrap uppercase text-white" to="/">
                            <img data-aos="fade-in" data-aos-delay="50" src={logo} alt="bitzfolio" />
                        </NavLink>
                        <button
                            className="text-white fixed right-1 top-[20px] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <i className="fas fa-bars"><img src={menu} alt="menu" width={28} /></i>
                        </button>
                    </div>
                    <div className={(navbarOpen ? "lg:flex flex-grow items-center justify-start md:flex-1 duration-200 opacity-100 h-[160px]" :
                        "lg:flex flex-grow items-center justify-start md:flex-1 opacity-0 md:opacity-100 h-0")}
                        id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row list-none  text-white gap-2 lg:gap-8 lg:ml-auto py-3">
                            <li id='list' data-aos="fade-left" data-aos-delay="100" className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "py-2 text-[16px] relative bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold after:content-[' '] after:absolute after:left-0 after:right-0 after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] ease-in-out duration-300" : "py-2 relative after:content-[' '] after:absolute hover:after:left-0 hover:after:right-0 after:right-full after:left-full after:rounded-full after:h-[2px] text-[16px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:ease-in-out after:duration-300"} to="/">Home</NavLink>
                            </li>
                            <li  data-aos="fade-left" data-aos-delay="200" className="nav-item">
                                <NavLink className={className} id='list2' to="/project/all">Projects</NavLink>
                            </li>
                        </ul>
                        <div data-aos="fade-in" data-aos-delay="450" className="button py-4 ml-12 group">
                            <NavLink className="wrapper relative px-2 py-1 flex items-center justify-center">
                                <img className="absolute bg-transparent group-hover:bg-gradient-to-br group-hover:from-[#FF1E1E] group-hover:to-[#FF9900] rounded-md duration-200" src={border} alt="border" loading="lazy" />
                                <h1 className="bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent group-hover:text-white z-20 text-sm mx-2">Download CV</h1>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar