import React from 'react'
import line from '../img/Line.svg';
import lines from '../img/3lines.svg'
import fiverr from '../img/Fiverr.svg'
import linkedin from '../img/Linkedin icon.svg'
import upwork from '../img/upwok.svg'
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='flex justify-center flex-col w-full items-center h-full py-24'>
            <div className="wrapper w-[70%] flex flex-col items-center gap-2">
                <h1 className="text-[24px] lg:text-[32px] text-center">
                    Let's <span className="bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">Connects</span> And <br /><span className="bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">Work</span> Together :)
                </h1>
                <img src={line} alt="bitzfolio" loading="lazy" />
            </div>
            <div className="wrapper relative w-full h-[164px] lg:h-[400px] bg-no-repeat bg-contain bg-center">
                <img className='absolute -top-10 -left-2 rotate-[45deg] lg:w-[64px]' src={lines} alt="bitzfolio" />
                <img className='absolute -bottom-8 -left-2 rotate-0 lg:w-[64px]' src={lines} alt="bitzfolio" />
                <img className='absolute -bottom-10 -right-2 rotate-[45deg] lg:w-[64px]' src={lines} alt="bitzfolio" />
                <img className='absolute -top-10 -right-2 rotate-[0] lg:w-[64px]' src={lines} alt="bitzfolio" />
                <div className="content flex items-center justify-center gap-4 lg:gap-12 w-full h-full relative">
                    <div className="items flex justify-end flex-col lg:h-[84px]">
                        <div className="img flex justify-center">
                            <img className='w-[64px] lg:w-[148px]' src={fiverr} alt="fiverr" />
                        </div>
                        <div className="button group hover:bg-white border-2 border-white border-solid rounded-full mt-3">
                            <NavLink className="wrapper relative px-3 py-1 flex items-center justify-center">
                                <h1 className="text-white group-hover:text-black text-[10px]">Go To Fiverr</h1>
                            </NavLink>
                        </div>
                    </div>
                    <div className="items flex justify-end flex-col lg:h-[84px]">
                        <div className="img flex justify-center">
                            <img className='w-[64px] lg:w-[148px]' src={linkedin} alt="fiverr" />
                        </div>
                        <div className="button group border-2 hover:bg-white border-white border-solid rounded-full mt-3">
                            <NavLink className="wrapper relative px-3 py-1 flex items-center justify-center">
                                <h1 className="text-white group-hover:text-black text-[10px]">Go To Linkedin</h1>
                            </NavLink>
                        </div>
                    </div>
                    <div className="items flex justify-end flex-col lg:h-[84px]">
                        <div className="img flex justify-center">
                            <img className='w-[64px] lg:w-[148px]' src={upwork} alt="fiverr" />
                        </div>
                        <div className="button group border-2 hover:bg-white border-white border-solid rounded-full mt-3">
                            <NavLink className="wrapper relative px-3 py-1 flex items-center justify-center">
                                <h1 className="text-white group-hover:text-black text-[10px]">Go To Upwork</h1>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact