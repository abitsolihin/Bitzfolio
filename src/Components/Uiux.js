import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Uiux = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    axios.get('https://bitzfolio-api-express-js.vercel.app/projects/category/uiux').then((res) => {
      setProject(res.data)
    })
      .catch((err) => {
        console.log(err)
      })
  }, []);
  return (
    <div className='w-full h-full p-2'>
      <div className="container w-full h-full grid grid-cols-4 grid-rows-2 gap-4">
        {projects.map((values) => {
          const { title, kategori, image, id } = values
          return (
            <div key={id} className="card group w-full h-full text-white hover:scale-105 hover:shadow-md hover:shadow-orange-600" >
              <div className="image p-3 h-[65%]">
                <img className="group-hover:scale-110 group-hover:-translate-y-5 group-hover:-translate-x-3 duration-200 delay-75" src={`https://bitzfolio-api-express-js.vercel.app/${image}`} alt="bitzfolio" />
              </div>
              <div className="content h-[35%] w-full p-2 flex items-center">
                <div className="title w-3/6">
                  <h1 className='text-xl font-semibold group-hover:scale-125 group-hover:-translate-y-4 group-hover:translate-x-4 duration-200 delay-100'>{title}</h1>
                  <p className='text-sm text-gray-300 group-hover:scale-125 group-hover:-translate-y-4 group-hover:translate-x-4 duration-200 delay-150'>{kategori}</p>
                </div>
                <div className="button w-[50%] flex justify-center">
                  <NavLink to={`/project/detail/${id}`}>
                  <button className='button--detail bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] text-xs px-4 py-2 rounded-md  group-hover:scale-110 group-hover:translate-x-4 duration-200 delay-200'>View Detail</button>
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

export default Uiux