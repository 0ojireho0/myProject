import React, { useState } from 'react'
import { GoDownload } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import myResume from "../assets/myResume.png"


const Resume = () => {
  const [showView, setShowView] = useState(false)

  const toggleView = () =>{
    setShowView(() => !showView)
    
  }

  return (
    <>
      <div className='w-full pb-5 mt-10' id='resume'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='montserratextrabold text-2xl'>Resume</h1>
        </div>
        <div className='flex flex-col justify-center items-center mt-5 md:flex-row   '>
          <div className='border-[3px] border-black w-[12rem] rounded-full h-12 items-center flex justify-between '>
            <GoDownload className=' ml-5 text-2xl text-[#0C359E] ' /><span className='text-[#0C359E] montserratextrabold text-xl mr-auto ml-5'>Download</span>
          </div>
          <div className='border-[3px] border-black w-[12rem] rounded-full h-12 items-center flex justify-between mt-3 md:mt-0 md:ml-4 cursor-pointer' onClick={toggleView}>
            <FaMagnifyingGlass className='ml-5 text-2xl text-[#0C359E] ' /><span className='text-[#0C359E] montserratextrabold text-xl mr-auto ml-5'>View</span>
          </div>
        </div>
      </div>

      {showView && (
        <div className='fixed top-0 w-full h-full bg-white z-50 pb-3'>
          <div className='flex justify-end mr-5 ' >
            <h1 className='text-2xl md:cursor-pointer' onClick={toggleView}>x</h1>
          </div>
          <img src={myResume} alt="" className='object-contain w-full h-full' />

        </div>
      )}



    </>
  )
}

export default Resume
