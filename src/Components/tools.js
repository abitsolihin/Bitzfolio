import React from 'react';
import line from '../img/Line.svg';
import nextjs from '../img/nextjs.svg';
import css from '../img/css3.svg';
import html from '../img/html5 1.svg';
import tailwind from '../img/tailwind-css 1.svg';
import react from '../img/react 1.svg';
import figma from '../img/figma 1.svg';
import javascript from '../img/javascript 1.svg';
import mysql from '../img/Group 18.svg';
import vscode from '../img/vscode.svg';
import nodejs from '../img/Vector.svg';
import circle from '../img/circle.svg'
import box from '../img/box.svg'

const Tools = () => {
  return (
    <div className="title relative flex justify-center flex-col w-full items-center lg:px-[170px]">
      <img className='box2 absolute -bottom-48 right-[200px] blur-xs w-[100px] lg:hidden' src={box} alt="box" />
      <img className='circle1 absolute w-[128px] blur-sm -right-20 -bottom-8' src={circle} alt="circle" />
      <div className="wrapper w-[70%] flex flex-col items-center gap-2">
        <h1 className="text-[24px] text-center">
          The <span className="bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">Language</span> And <br /> <span className="bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">Tools</span> I use
        </h1>
        <img src={line} alt="bitzfolio" loading="lazy" />
      </div>
      <div className="items-grid w-full mt-10 grid grid-cols-2 lg:grid-cols-5 gap-5">
        <div className="after:hover:scale-105 after:hover:duration-150  after:hover:blur-sm items after:content-[' '] after:left-[-2px] after:right-[-2px] after:top-[-2px] after:bottom-[-2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute relative after:rounded-full px-4 py-2 rounded-full flex gap-2 bg-[#221b1a] hover:bg-[#221b1a] ">
          <img className="w-[40px]" src={react} loading="lazy" alt="" />
          <h1 className="text-center text-[18px] group-hover:text-white group-hover:bg-transparent w-full flex items-center bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">React JS</h1>
        </div>
        <div className="after:hover:scale-105 after:hover:duration-150  after:hover:blur-sm items after:content-[''] after:left-[-2px] after:right-[-2px] after:top-[-2px] after:bottom-[-2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute relative after:rounded-full px-4 py-2 rounded-full flex gap-2 bg-[#221b1a] hover:bg-[#221b1a]">
          <img className="w-[40px]" src={html} loading="lazy" alt="" />
          <h1 className="text-center text-[18px] group-hover:text-white w-full flex items-center bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">HTML</h1>
        </div>
        <div className="after:hover:scale-105 after:hover:duration-150  after:hover:blur-sm  items after:content-[''] after:left-[-2px] after:right-[-2px] after:top-[-2px] after:bottom-[-2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute relative after:rounded-full px-4 py-2 rounded-full flex gap-2 bg-[#221b1a] hover:bg-[#221b1a]">
          <img className="w-[40px]" src={vscode} loading="lazy" alt="" />
          <h1 className="text-center text-[18px] group-hover:text-white w-full flex items-center bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">VS Code</h1>
        </div>
        <div className="after:hover:scale-105 after:hover:duration-150  after:hover:blur-sm items after:content-[''] after:left-[-2px] after:right-[-2px] after:top-[-2px] after:bottom-[-2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute relative after:rounded-full px-4 py-2 rounded-full flex gap-2 bg-[#221b1a] hover:bg-[#221b1a]">
          <img className="w-[40px]" src={tailwind} loading="lazy" alt="" />
          <h1 className="text-center text-[18px] group-hover:text-white w-full flex items-center bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">Tailwind</h1>
        </div>
        <div className="after:hover:scale-105 after:hover:duration-150  after:hover:blur-sm items after:content-[''] after:left-[-2px] after:right-[-2px] after:top-[-2px] after:bottom-[-2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute relative after:rounded-full px-4 py-2 rounded-full flex gap-2 bg-[#221b1a] hover:bg-[#221b1a]">
          <img className="w-[40px]" src={mysql} loading="lazy" alt="" />
          <h1 className="text-center text-[18px] group-hover:text-white w-full flex items-center bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">My SQL</h1>
        </div>
        <div className="after:hover:scale-105 after:hover:duration-150  after:hover:blur-sm  items after:content-[''] after:left-[-2px] after:right-[-2px] after:top-[-2px] after:bottom-[-2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute relative after:rounded-full px-4 py-2 rounded-full flex gap-2 bg-[#221b1a] hover:bg-[#221b1a]">
          <img className="w-[40px]" src={nodejs} loading="lazy" alt="" />
          <h1 className="text-center text-[18px] group-hover:text-white w-full flex items-center bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">Node JS</h1>
        </div>
        <div className="after:hover:scale-105 after:hover:duration-150  after:hover:blur-sm  items after:content-[''] after:left-[-2px] after:right-[-2px] after:top-[-2px] after:bottom-[-2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute relative after:rounded-full px-4 py-2 rounded-full flex gap-2 bg-[#221b1a] hover:bg-[#221b1a]">
          <img className="w-[40px]" src={css} loading="lazy" alt="" />
          <h1 className="text-center text-[18px] group-hover:text-white w-full flex items-center bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">CSS</h1>
        </div>
        <div className="after:hover:scale-105 after:hover:duration-150  after:hover:blur-sm  items after:content-[''] after:left-[-2px] after:right-[-2px] after:top-[-2px] after:bottom-[-2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute relative after:rounded-full px-4 py-2 rounded-full flex gap-2 bg-[#221b1a] hover:bg-[#221b1a]">
          <img className="w-[40px]" src={figma} loading="lazy" alt="" />
          <h1 className="text-center text-[18px] group-hover:text-white w-full flex items-center bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">Figma</h1>
        </div>
        <div className="after:hover:scale-105 after:hover:duration-150  after:hover:blur-sm  items after:content-[''] after:left-[-2px] after:right-[-2px] after:top-[-2px] after:bottom-[-2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute relative after:rounded-full px-4 py-2 rounded-full flex gap-2 bg-[#221b1a] hover:bg-[#221b1a]">
          <img className="w-[40px]" src={javascript} loading="lazy" alt="" />
          <h1 className="text-center text-[16px] group-hover:text-white w-full flex items-center bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">Javascript</h1>
        </div>
        <div className="after:hover:scale-105 after:hover:duration-150  after:hover:blur-sm  items after:content-[''] after:left-[-2px] after:right-[-2px] after:top-[-2px] after:bottom-[-2px] after:bg-gradient-to-br after:from-[#FF1E1E] after:to-[#FF9900] after:-z-10 after:absolute relative after:rounded-full px-4 py-2 rounded-full flex gap-2 bg-[#221b1a] hover:bg-[#221b1a]">
          <img className="w-[40px]" src={nextjs} loading="lazy" alt="" />
          <h1 className="text-center text-[16px] group-hover:text-white w-full flex items-center bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent">Next JS</h1>
        </div>
      </div>
    </div>
  );
};

export default Tools;
