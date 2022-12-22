import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <div className=" container px-[170px] pt-[80px] flex text-white w-full h-[95vh]">
            <aside className='w-[20%]  h-full border-r-2'>
                <div className="logo my-6 text-2xl font-semibold">Admin Panel</div>
                <div className="nav-list w-full h-[80%]">
                    <ul className='w-full'>
                        <li className='w-full'><NavLink className="w-full py-2 flex hover:bg-white/10 px-2" to="/admin">All Project</NavLink></li>
                        <li className='w-full'><NavLink className="w-full py-2 flex hover:bg-white/10 px-2" to="/admin/addproject">Add Project</NavLink></li>
                    </ul>
                </div>
                <div className="button-exit h-[20%]">
                    <button className='exit  mt-3'><NavLink className="px-10 py-2 border-2 hover:bg-white hover:text-slate-900 rounded-md" to='/'>Exit</NavLink></button>
                </div>
            </aside>
            <main className='w-[80%]'>
                <Outlet/>
            </main>
        </div>
    )
}

export default Admin