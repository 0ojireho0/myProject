import React, { useState } from 'react'
import { GoDownload } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import myResume from "../assets/myResume.png"
import MyDocument from './pdfviewer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { motion } from 'framer-motion';



const Resume = () => {
  const [showView, setShowView] = useState(false)

  const toggleView = () =>{
    setShowView(() => !showView)
    
  }

  return (
    <>
      <div className='w-full pb-5 mt-10' id='resume'>
        <div className='flex flex-col justify-center items-center'>
          <motion.h1 className='montserratextrabold text-4xl' whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}}>Resume</motion.h1>
        </div>
        <div className='flex flex-col justify-center items-center mt-5 md:flex-row   '>
          <motion.div className='border-[3px] border-black w-[12rem] rounded-full h-12 items-center flex justify-between' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>
            <GoDownload className=' ml-5 text-2xl text-[#0C359E] ' /><span className='text-[#0C359E] montserratextrabold text-xl mr-auto ml-5'>
              <PDFDownloadLink document={<MyDocument />} fileName='Quintano-Resume'>
                {({loading}) => (loading ? <button>Loading...</button> : <button>Download</button>) }
              </PDFDownloadLink>
            </span>
          </motion.div>
          <motion.div className='border-[3px] border-black w-[12rem] rounded-full h-12 items-center flex justify-between mt-3 md:mt-0 md:ml-4 cursor-pointer' onClick={toggleView} whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}}>
            <FaMagnifyingGlass className='ml-5 text-2xl text-[#0C359E] ' /><span className='text-[#0C359E] montserratextrabold text-xl mr-auto ml-5'>View</span>
          </motion.div>
        </div>
        <div className='w-[60vw] bg-black h-1 mt-20 m-auto'></div>
      </div>

      {showView && (
        <motion.div className='fixed top-0 w-full h-full bg-white z-50 pb-3' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>
          <div className='flex justify-end mr-5 ' >
            <h1 className='text-2xl md:cursor-pointer' onClick={toggleView}>x</h1>
          </div>
          <img src={myResume} alt="" className='object-contain w-full h-full' />

        </motion.div>
      )}



    </>
  )
}

export default Resume
