import React from 'react';
import instagram from '../img/instagram.svg';
import linkedin from '../img/linkedin.svg';
import tiktok from '../img/tiktok.svg';
import facebook from '../img/facebook.svg';
import border from '../img/button-nav.svg';
import { NavLink } from 'react-router-dom';
import arrow from '../img/arrow1.svg';
import arrow2 from '../img/arrow2.svg';
import bgblur from '../img/Vector 1.svg';
import bgblur2 from '../img/Vector 2.svg';
import profile from '../img/profile.png';
import Tools from '../Components/tools';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div className=" relative w-screen pt-[70px] text-white overflow-hidden">
      <section className="flex relative flex-col lg:flex-row-reverse h-screen lg:h-[80vh] px-5 lg:px-[170px]">
        <img className="absolute -top-10 -right-12 -z-10 lg:hidden" src={bgblur} alt="bitzfolio" />
        <img className="absolute -bottom-12 -left-32 -z-10 blur-2xl lg:hidden" src={bgblur2} alt="bitzfolio" />
        <div className="left h-[40%] lg:h-full lg:w-3/6 lg:flex lg:justify-center">
          <div className="image relative flex items-center justify-center">
            <img className="w-[200px] lg:w-[70%]" src={profile} alt="bitzfolio" />
            <img className="w-[64px] absolute bottom-0 right-6 lg:-right-2 lg:w-[128px]" src={arrow} alt="arrow" />
            <img className="w-[86px] absolute top-10 -left-4 lg:top-32 lg:-left-8 lg:w-[100px]" src={arrow2} alt="arrow" />
            <img className="absolute -top-20 -rotate-12 -right-12 -z-10 hidden lg:flex" src={bgblur} alt="bitzfolio" />
            <img className="absolute -bottom-12 -left-32 -z-10 blur-2xl hidden lg:-bottom-48 lg:-left-32 lg:w-[400px] lg:flex" src={bgblur2} alt="bitzfolio" />
          </div>
        </div>
        <div className="right py-4 h-[60%] lg:w-3/6 lg:h-full flex flex-col items-center lg:items-start text-center lg:text-left lg:flex lg:justify-center">
          <h2 className="text-[24px] lg:text-[28px]">
            Hi I'm <span className="bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent"> Abit Solihin</span>
          </h2>
          <h1 className="text-[32px] lg:text-[42px] bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent font-semibold">Front-End Developer</h1>
          <p className="text-[14px] lg:text-[16px] text-[#c8c8c8]">I Design delightful Products & Code Web. I can help everyone build their business. It's such a happiness for me. So, let me help you !</p>
          <div className="icon flex items-center gap-4 list-none py-1">
            <li>
              <a href="/">
                <img src={facebook} alt="facebook" width={32} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={instagram} alt="instagram" width={32} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={linkedin} alt="linkedin" width={32} />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={tiktok} alt="tiktok" width={32} />
              </a>
            </li>
          </div>
          <div className="button py-4 group">
            <NavLink className="wrapper relative px-7 py-1 flex items-center justify-center">
              <img className="absolute bg-transparent group-hover:bg-gradient-to-br group-hover:from-[#FF1E1E] group-hover:to-[#FF9900] rounded-md duration-200" src={border} alt="border" loading="lazy" />
              <h1 className="bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] bg-clip-text text-transparent group-hover:text-white z-20 ">Contact</h1>
            </NavLink>
          </div>
        </div>
      </section>
      <section className="flex px-5 flex-col lg:flex-row h-screen w-full">
        <Tools />
      </section>
      <section className="flex px-5 flex-col lg:flex-row w-full">
        <Projects />
      </section>
      <section className='w-full'>
        <Contact />
      </section>
      <section className='w-full'>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
