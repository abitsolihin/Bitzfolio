import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Project = () => {
  
  return (
    <main className='w-full h-screen flex items-center justify-center px-[20px] md:px-[170px] pt-20 relative'>
      <div className='absolute h-[300px] w-[150px] bg-red-500 z-[-1] -top-[100px] rounded-full bg-gradient-to-br from-[#FF1E1E] to-[#FF9900]  blur-md left-0'/>
      <div className='absolute h-[300px] w-[300px] bg-red-500 z-[-1]  rounded-full bg-gradient-to-br from-[#FF1E1E] to-[#FF9900]  blur-3xl right-10 bottom-0'/>
      <div className="container  h-[90%] flex flex-col gap-4">
        <div className="links">
          <ul className='flex gap-4 text-white'>
            <li data-aos="fade-left" data-aos-delay="100" className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "py-2 text-[16px] relative bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold after:content-[' '] after:absolute after:left-0 after:right-0 after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] ease-in-out duration-300" : "py-2 relative after:content-[' '] after:absolute hover:after:left-0 hover:after:right-0 after:right-full after:left-full after:rounded-full after:h-[2px] text-[16px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:ease-in-out after:duration-300"} to="/project/all">All</NavLink>
            </li>
            <li data-aos="fade-left" data-aos-delay="100" className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "py-2 text-[16px] relative bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold after:content-[' '] after:absolute after:left-0 after:right-0 after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] ease-in-out duration-300" : "py-2 relative after:content-[' '] after:absolute hover:after:left-0 hover:after:right-0 after:right-full after:left-full after:rounded-full after:h-[2px] text-[16px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:ease-in-out after:duration-300"} to="/project/website">Website</NavLink>
            </li>
            <li data-aos="fade-left" data-aos-delay="100" className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "py-2 text-[16px] relative bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold after:content-[' '] after:absolute after:left-0 after:right-0 after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] ease-in-out duration-300" : "py-2 relative after:content-[' '] after:absolute hover:after:left-0 hover:after:right-0 after:right-full after:left-full after:rounded-full after:h-[2px] text-[16px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:ease-in-out after:duration-300"} to="/project/landingpage">Landing Page</NavLink>
            </li>
            <li data-aos="fade-left" data-aos-delay="100" className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "py-2 text-[16px] relative bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold after:content-[' '] after:absolute after:left-0 after:right-0 after:rounded-full after:h-[2px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] ease-in-out duration-300" : "py-2 relative after:content-[' '] after:absolute hover:after:left-0 hover:after:right-0 after:right-full after:left-full after:rounded-full after:h-[2px] text-[16px] after:bottom-0 after:z-10 after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:ease-in-out after:duration-300"} to="/project/uiux">UI/UX</NavLink>
            </li>
          </ul>
        </div>
        <div className="content__project border-2 rounded-2xl p-2 h-full bg-[#221b1a] overflow-scroll">
            <Outlet/>
        </div>
      </div>
    </main>
  )
}

export default Project