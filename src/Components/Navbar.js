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
            <nav className={(navbarOpen ? "fixed z-10 flex flex-wrap items-center justify-between px-3 md:px-[120px] py-2 bg-[#221B1A] w-full top-0 rounded-b-2xl transition-all duration-500" : "fixed z-10 flex flex-wrap items-center justify-between px-3 md:px-[120px] py-2 bg-transparent w-full h-0 transition-all duration-500")} >
                <div className="container px-4 lg:px-0 mx-auto flex flex-wrap md:flex-none items-center justify-between gap-4">
                    <div className="w-full relative flex justify-start lg:w-auto lg:static lg:flex lg:items-center lg:justify-start">
                        <NavLink className="text-sm font-bold leading-relaxed inline-block py-2 w-[128px] lg:w-[156px] whitespace-nowrap uppercase text-white" to="/">
                            <img data-aos="fade-in" data-aos-delay="50" src={logo} alt="bitzfolio" />
                        </NavLink>
                        <button
                            className="text-white absolute right-1 h-full cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent flex flex-col justify-evenly items-center lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <div className={navbarOpen ? `absolute w-6 h-[2px] bg-white transition-all rotate-90 ` : `absolute w-6 h-[2px] bg-white transition-all`}></div>
                            <div className={navbarOpen ? `absolute w-8 h-[4px] bg-white mt-0 transition-all -rotate-45 scale-50 translate-x-[5px] translate-y-2` : `absolute w-6 h-[2px] bg-white mt-4 transition-all`}></div>
                            <div className={navbarOpen ? `absolute w-8 h-[4px] bg-white mb-0 transition-all rotate-45 scale-50 -translate-x-[5px] translate-y-2` : `absolute w-6 h-[2px] bg-white mb-4 transition-all`}></div>
                        </button>
                    </div>
                    <div className={(navbarOpen ? "lg:flex flex-grow items-center justify-start md:flex-1 transition-all h-[160px] mb-4 " :
                        "lg:flex flex-grow items-center justify-start md:flex-1 lg:opacity-100 lg:h-full h-0 transition-all")}
                        id="example-navbar-danger">
                        <ul className={navbarOpen ? `flex flex-col lg:flex-row list-none text-white gap-2 lg:gap-8 lg:ml-auto py-3 lg:mr-5 transition-all duration-300 ` : `flex flex-col lg:flex-row list-none text-white gap-2 lg:gap-8 lg:ml-auto py-3 lg:mr-5 transition-all lg:opacity-100 lg:h-full opacity-0 h-0`}>
                            <li id='list' data-aos="fade-left" data-aos-delay="100" className="nav-item flex items-center">
                                <NavLink className={({ isActive }) => isActive ? "py-2 text-[16px] relative bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold after:content-[' '] after:absolute after:left-0 after:right-0 after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] ease-in-out duration-300" : "py-2 relative after:content-[' '] after:absolute hover:after:left-0 hover:after:right-0 after:right-full after:left-full after:rounded-full after:h-[2px] text-[16px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:ease-in-out after:duration-300"} to="/">Home</NavLink>
                            </li>
                            <li  data-aos="fade-left" data-aos-delay="200" className="nav-item flex items-center">
                                <NavLink className={className} id='list2' to="/project/all">Projects</NavLink>
                            </li>
                            <div data-aos="fade-in" data-aos-delay="450" className="button py-4 group">
                            <NavLink className="wrapper relative px-2 py-1 flex items-center justify-center">
                                <img className="absolute scale-75 lg:scale-100 bg-transparent group-hover:bg-gradient-to-br group-hover:from-[#FF1E1E] group-hover:to-[#FF9900] rounded-md duration-200" src={border} alt="border" loading="lazy" />
                                <h1 className="bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent group-hover:text-white z-20 text-sm mx-2">Download CV</h1>
                            </NavLink>
                        </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar