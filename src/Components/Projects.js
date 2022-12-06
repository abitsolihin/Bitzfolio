import React from 'react';
import line from '../img/Line.svg';
import project from '../img/project1.png';
import { NavLink } from 'react-router-dom';
import circle from '../img/circle.svg'
import box from '../img/box.svg'

const Projects = () => {
    return (
        <div className="title relative flex justify-center flex-col w-full items-center">
            <img className='box1 absolute -right-32 bottom-72 blur-sm lg:-right-72 lg:bottom-20' src={box} alt="box" />
            <img className='circle1 absolute w-[128px] blur-sm top-32 -left-32' src={circle} alt="circle" />
            <div className="wrapper flex flex-col items-center gap-2">
                <h1 className="text-[24px] text-center">
                    Projects That I <br /> <span className="bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">Worked On</span> And <span className="bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">Completed</span>
                </h1>
                <img src={line} alt="bitzfolio" loading="lazy" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
                <div className="group items w-[275px] h-[255px] hidden lg:block bg-[#221b1a] after:hover:blur-lg items after:content-[''] after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute after:rounded-lg relative rounded-lg p-4 ">
                    <div className="img flex justify-center w-full h-[60%] after:hover:duration-200">
                        <img className="group-hover:scale-[1.15] group-hover:-translate-x-6 duration-200 group-hover:-translate-y-5 " src={project} alt="bitzfolio" />
                    </div>
                    <div className="title flex items-end h-[40%]">
                        <div className="content w-[60%] group-hover:scale-[1.05] group-hover:-translate-y-3 duration-200 ">
                            <h1 className='text-[24px]'>PortFolio</h1>
                            <h2 className='text-[12px] text-[#c6c6c6]'>UI/UX Design</h2>
                        </div>
                        <div className="button flex justify-center w-[40%]">
                            <NavLink to="/cek">
                                <div className="items after:content-[''] hover:scale-125 duration-200 after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900]  after:absolute after:rounded-lg px-2 py-2 text-sm relative z-20 bg-[#221b1a]  after:-z-10 group-hover:scale-[1.15] group-hover:translate-x-6 ">View Detail</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="group items w-[275px] h-[255px] hidden lg:block bg-[#221b1a] after:hover:blur-lg items after:content-[''] after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute after:rounded-lg relative rounded-lg p-4 ">
                    <div className="img flex justify-center w-full h-[60%] after:hover:duration-200">
                        <img className="group-hover:scale-[1.15] group-hover:-translate-x-6 duration-200 group-hover:-translate-y-5 " src={project} alt="bitzfolio" />
                    </div>
                    <div className="title flex items-end h-[40%]">
                        <div className="content w-[60%] group-hover:scale-[1.05] group-hover:-translate-y-3 duration-200 ">
                            <h1 className='text-[24px]'>PortFolio</h1>
                            <h2 className='text-[12px] text-[#c6c6c6]'>UI/UX Design</h2>
                        </div>
                        <div className="button flex justify-center w-[40%]">
                            <NavLink to="/cek">
                                <div className="items after:content-[''] hover:scale-125 duration-200 after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900]  after:absolute after:rounded-lg px-2 py-2 text-sm relative z-20 bg-[#221b1a]  after:-z-10 group-hover:scale-[1.15] group-hover:translate-x-6 ">View Detail</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="group items w-[275px] h-[255px] bg-[#221b1a] after:hover:blur-lg items after:content-[''] after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute after:rounded-lg relative rounded-lg p-4 ">
                    <div className="img flex justify-center w-full h-[60%] after:hover:duration-200">
                        <img className="group-hover:scale-[1.15] group-hover:-translate-x-6 duration-200 group-hover:-translate-y-5 " src={project} alt="bitzfolio" />
                    </div>
                    <div className="title flex items-end h-[40%]">
                        <div className="content w-[60%] group-hover:scale-[1.05] group-hover:-translate-y-3 duration-200 ">
                            <h1 className='text-[24px]'>PortFolio</h1>
                            <h2 className='text-[12px] text-[#c6c6c6]'>UI/UX Design</h2>
                        </div>
                        <div className="button flex justify-center w-[40%]">
                            <NavLink to="/cek">
                                <div className="items after:content-[''] hover:scale-125 duration-200 after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900]  after:absolute after:rounded-lg px-2 py-2 text-sm relative z-20 bg-[#221b1a]  after:-z-10 group-hover:scale-[1.15] group-hover:translate-x-6 ">View Detail</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="group items w-[275px] h-[255px] bg-[#221b1a] after:hover:blur-lg items after:content-[''] after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute after:rounded-lg relative rounded-lg p-4 ">
                    <div className="img flex justify-center w-full h-[60%] after:hover:duration-200">
                        <img className="group-hover:scale-[1.15] group-hover:-translate-x-6 duration-200 group-hover:-translate-y-5 " src={project} alt="bitzfolio" />
                    </div>
                    <div className="title flex items-end h-[40%]">
                        <div className="content w-[60%] group-hover:scale-[1.05] group-hover:-translate-y-3 duration-200 ">
                            <h1 className='text-[24px]'>PortFolio</h1>
                            <h2 className='text-[12px] text-[#c6c6c6]'>UI/UX Design</h2>
                        </div>
                        <div className="button flex justify-center w-[40%]">
                            <NavLink to="/cek">
                                <div className="items after:content-[''] hover:scale-125 duration-200 after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900]  after:absolute after:rounded-lg px-2 py-2 text-sm relative z-20 bg-[#221b1a]  after:-z-10 group-hover:scale-[1.15] group-hover:translate-x-6 ">View Detail</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="group items w-[275px] h-[255px] bg-[#221b1a] after:hover:blur-lg items after:content-[''] after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute after:rounded-lg relative rounded-lg p-4 ">
                    <div className="img flex justify-center w-full h-[60%] after:hover:duration-200">
                        <img className="group-hover:scale-[1.15] group-hover:-translate-x-6 duration-200 group-hover:-translate-y-5 " src={project} alt="bitzfolio" />
                    </div>
                    <div className="title flex items-end h-[40%]">
                        <div className="content w-[60%] group-hover:scale-[1.05] group-hover:-translate-y-3 duration-200 ">
                            <h1 className='text-[24px]'>PortFolio</h1>
                            <h2 className='text-[12px] text-[#c6c6c6]'>UI/UX Design</h2>
                        </div>
                        <div className="button flex justify-center w-[40%]">
                            <NavLink to="/cek">
                                <div className="items after:content-[''] hover:scale-125 duration-200 after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900]  after:absolute after:rounded-lg px-2 py-2 text-sm relative z-20 bg-[#221b1a]  after:-z-10 group-hover:scale-[1.15] group-hover:translate-x-6 ">View Detail</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="group items w-[275px] h-[255px] hidden lg:block bg-[#221b1a] after:hover:blur-lg items after:content-[''] after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute after:rounded-lg relative rounded-lg p-4 ">
                    <div className="img flex justify-center w-full h-[60%] after:hover:duration-200">
                        <img className="group-hover:scale-[1.15] group-hover:-translate-x-6 duration-200 group-hover:-translate-y-5 " src={project} alt="bitzfolio" />
                    </div>
                    <div className="title flex items-end h-[40%]">
                        <div className="content w-[60%] group-hover:scale-[1.05] group-hover:-translate-y-3 duration-200 ">
                            <h1 className='text-[24px]'>PortFolio</h1>
                            <h2 className='text-[12px] text-[#c6c6c6]'>UI/UX Design</h2>
                        </div>
                        <div className="button flex justify-center w-[40%]">
                            <NavLink to="/cek">
                                <div className="items after:content-[''] hover:scale-125 duration-200 after:-left-[2px] after:-right-[2px] after:-top-[2px] after:-bottom-[2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900]  after:absolute after:rounded-lg px-2 py-2 text-sm relative z-20 bg-[#221b1a]  after:-z-10 group-hover:scale-[1.15] group-hover:translate-x-6 ">View Detail</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex items-center justify-center my-4 see-more w-full">
                <NavLink className="button-gradient" to="/projects">See more...</NavLink>
            </div>
        </div>
    );
};

export default Projects;
