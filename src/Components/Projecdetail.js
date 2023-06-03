import React, { useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'

const Projecdetail = () => {
    const [projects, setProject] = useState([]);
    const params = useParams();

  useEffect(() => {
    axios.get(`https://bitzfolio-api-express-js.vercel.app/projects/${params.id}`).then((res) => {
      setProject(res.data)
    })
      .catch((err) => {
        console.log(err)
      })
  }, [params.id]);
  return (
    <main className='w-full h-screen flex items-center justify-center px-[20px] md:px-[170px] pt-20 relative'>
      <div className='absolute h-[300px] w-[150px] bg-red-500 z-[-1] -top-[100px] rounded-full bg-gradient-to-br from-[#FF1E1E] to-[#FF9900]  blur-md left-0'/>
      <div className='absolute h-[300px] w-[300px] bg-red-500 z-[-1]  rounded-full bg-gradient-to-br from-[#FF1E1E] to-[#FF9900]  blur-3xl right-10 bottom-0'/>
      <div className="container w-full  h-[90%] flex flex-col gap-4">
        <div className="content__project border-2 rounded-2xl px-10 h-full bg-[#221b1a] overflow-hidden flex flex-col-reverse lg:flex-row flex-1">
            <div className="left__content w-full h-full flex flex-col justify-center">
                <article>
                    <h1 className='text-white text-3xl lg:text-4xl font-bold'>{projects.title}</h1>
                    <h2 className='text-white text-sm mt-1'>{projects.kategori}</h2>
                    <p className='text-gray-400 text-xs lg:text-base mt-1'>{projects.deskripsi}</p>
                    <h3 className='text-white text-base mt-3'>Note: {projects.database}</h3>
                </article>
                <div className="button__link w-[220px] flex justify-center rounded bg-gradient-to-br from-[#FF1E1E] to-[#FF9900] mt-4">
                    <a className='w-full text-center px-4 py-2 text-white font-base' href={projects.urlweb}>Go To {projects.kategori}</a>
                </div>
                    
            </div>
            <div className="right__content w-full flex justify-center items-center h-full">
                <img className='w-full' src={`https://bitzfolio-api-express-js.vercel.app/${projects.image}`} alt="" />
            </div>
        </div>
      </div>
    </main>
  )
}

export default Projecdetail