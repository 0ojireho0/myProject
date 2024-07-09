import React from 'react'
import tripleoGlass1 from "../assets/TripleOGlass-1.png"
import bantaybaby1 from "../assets/BantayBaby-1.png"
import fittology1 from "../assets/Fittology-1.png"
import { motion } from 'framer-motion'



const Projects = () => {

  const myPortfolio = [
    {
      id: 1,
      title: "Online Quotation Management for Triple O Glass Company",
      description: "Web Based Software solution that would address the handling of the volume of customer queries in terms  of product prices and service prices.",
      technologies: ["ReactJS", "EmailJS"],
      image: tripleoGlass1,
    },
    {
      id: 2,
      title: "Baby Monitoring System using ESP8266 and Python",
      description: "Creating a baby monitoring system that will be able to detect the room temperature and humidity, color of the diaper, environmental sound and motion in the room",
      technologies: ["Arduino", "ESP8266", "Python", "C++", "Kodular"],
      image: bantaybaby1,
    },
    {
      id: 3,
      title: "FITTOLOGY: A Web Based AI Pose Correction Workout Tool for Beginners with Audio-Visual Feedback using Raspberry PI 4",
      description: "Develop a website with real time posture correction that will  help the beginners to start their gym era",
      technologies: ["Python", "ReactJS", "Tailwind CSS", "REST API", "MediaPipe", "Axios"],
      image: fittology1,
    }
  ]


  return (
    <div className='w-full  bg-white' id='projects'>
      <div className='mt-10'>
        <motion.h1 className='text-center montserratextrabold text-4xl' whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}}>Projects</motion.h1>
        <div className='mt-5'>
          {myPortfolio.map((items,i)=>{
            return(
              <div className='mt-10 md:flex ' key={i}>
                <div className='flex justify-center items-center '>
                  <motion.h1 className='text-xs text-center w-[65vw] montserratbold mb-3 md:hidden' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>{items.title}</motion.h1>
                </div>
                <div className='w-full h-[30vh] md:flex justify-center m-auto lg:w-[70vw] xl:w-[60rem] '>
                  <motion.img src={items.image} alt="" className='object-contain h-full w-full md:w-[20rem] lg:w-full' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}/>
                </div>
                <motion.div className='w-[90vw] flex flex-col justify-center items-start m-auto md:w-[50rem] xl:ml-[-10rem]' whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: 100}} transition={{duration: 1}}>
                  <h1 className='text-xs w-[50vw] montserratbold hidden md:block lg:w-[40vw] xl:w-[27vw] '>{items.title}</h1>
                  <p className=' text-center text-xs md:text-justify md:mr-5 lg:w-[25rem] montserratmedium '>{items.description}</p>
                  <div className='grid grid-cols-3 md:grid-cols-4 md:w-[23rem] w-[17rem] mt-2 gap-2 '>
                    {items.technologies.map((items, i)=>{
                      return(
                        <div className=' flex gap-2 shadow-[2px_3px] border-4 border-black rounded-full   ' key={i}>
                          <span className='w-full rounded-full text-center  text-[0.6rem] montserratextrabold text-[#0C359E] md:hover:text-white md:hover:bg-[#0C359E] md:cursor-pointer md:duration-300  '>{items}</span>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='w-[60vw] bg-black h-1 mt-20 m-auto'></div>
    </div>
  )
}

export default Projects
