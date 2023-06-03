import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Landingpage = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    axios.get('https://bitzfolio-api-express-js.vercel.app/projects/category/Landing%20Page').then((res) => {
      setProject(res.data)
    })
      .catch((err) => {
        console.log(err)
      })
  }, []);
  return (
    <div className='w-full h-full p-2'>
    <div className="container w-full h-full grid lg:grid-cols-3 grid-cols-2 xl:grid-cols-4 gap-4 auto-rows-max">
      {projects.map((values) => {
        const { title, kategori, image, id } = values
        return (
          <div key={id} className="card group w-full h-full text-white hover:scale-105 hover:shadow-md hover:shadow-orange-600 flex flex-col" >
            <div className="image p-3 flex-1 flex items-center">
              <img className="sm:group-hover:scale-110 sm:group-hover:-translate-y-5 sm:group-hover:-translate-x-3 duration-200 delay-75" src={`https://bitzfolio-api-express-js.vercel.app/${image}`} alt="bitzfolio" />
            </div>
            <div className="content flex-1 w-full p-2 flex sm:flex-row flex-col items-center">
              <div className="title w-3/6 text-center">
                <h1 className='text-sm md:text-base lg:text-xl font-semibold md:group-hover:scale-110 lg:group-hover:scale-125 sm:group-hover:-translate-y-4 sm:group-hover:translate-x-4 duration-200 delay-100'>{title}</h1>
                <p className='text-xs md:text-sm lg:text-sm text-gray-300 md:group-hover:scale-110 lg:group-hover:scale-125 sm:group-hover:-translate-y-4 sm:group-hover:translate-x-4 duration-200 delay-150'>{kategori}</p>
              </div>
              <div className="button w-full sm:w-[50%] flex justify-center items-center">
                <NavLink to={`/project/detail/${id}`}>
                <button className='button--detail bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] text-[10px] sm:text-xs px-3 py-1 sm:px-4 sm:py-2 rounded-md  sm:group-hover:scale-110 sm:group-hover:translate-x-4 duration-200 delay-200'>View Detail</button>
                </NavLink>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  </div>
  )
}

export default Landingpage