import React from 'react'
import myPicture from "../assets/Quintano_Pic.jpg"
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { motion } from 'framer-motion';






const About = () => {

  

  return (
    <div className='w-full h-full  pt-10 about-height pb-10' id='about'>
      <motion.h1 className='text-center montserratextrabold text-3xl' whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}}>About Me</motion.h1>
      <div className='mt-5 md:flex md:flex-row md:justify-center xl:gap-24'>
        <div className='flex justify-center'>
            <motion.img src={myPicture} alt="Jeremiah Quintano" className='rounded-full w-[12rem] h-[12rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] ' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} />
        </div>
        <div className='flex justify-center md:text-justify w-[18rem] m-auto mt-3 montserratmedium md:m-0 md:ml-5 md:w-[24rem] md:items-center lg:w-[30rem] lg:items-center '>
            <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>Hello! I'm Jeremiah M. Quintano, a graduating student from Pamantasan ng Lungsod ng Maynila with a Bachelor of Science in Computer Engineering. I enjoy playing computer and console games, watching anime and movies, and studying technology, including programming languages, cloud computing, and networks. I have an eye for development and innovation and am dedicated to further developing my skills, which is why I am pursuing this field. Currently, I am a member of the Google Developer Student Club - PLM, where my team is part of the Cloud Committee.</motion.p>
        </div>
      </div>

      <div className='mt-10'>
        <motion.h1 className='text-center montserratbold text-2xl' whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}}>My Skills & Tools</motion.h1>
        <div className='md:flex md:justify-center'>
          <div className='flex flex-col justify-center items-center mt-5 md:grid md:grid-cols-2 md:gap-x-10 md:w-[40rem] lg:grid-cols-3 lg:w-[55rem] '>
            <motion.div className='w-[17rem] h-[13rem] border-4 border-black' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>
              <div className='w-full h-10 bg-[#0C359E] border-b-4 border-black flex justify-center items-center '>
                <h1 className='montserratbold text-white'>FRONT-END</h1>
              </div>
              <div className='w-full h-[10rem]  '>
                <div className='w-full bg-white h-[5rem] flex items-center justify-center gap-x-2 pt-5 '>
                  <FaHtml5 className='text-[#E44F26] text-5xl ' />
                  <FaCss3Alt className='text-[#33A9DC] text-5xl ' />
                  <RiTailwindCssFill className='text-[#38BDF8] text-5xl ' />
                  <FaReact className='text-[#00D8FF] text-5xl ' />
                </div>
                <div className='w-full bg-white h-[5rem] flex items-center justify-center'>
                  <FaBootstrap className='text-[#6B11F4] text-5xl ' />
                </div>
              </div>
            </motion.div>
            <motion.div className='w-[17rem] h-[13rem] border-4 border-black mt-5 md:mt-0' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>
              <div className='w-full h-10 bg-[#0C359E] border-b-4 border-black flex justify-center items-center '>
                <h1 className='montserratbold text-white'>BACK-END</h1>
              </div>
              <div className='w-full h-[10rem]  '>
                <div className='w-full bg-white h-[5rem] flex items-center justify-center gap-x-2 pt-5 '>
                  <FaNodeJs className='text-[#531B8A] text-5xl ' />
                  <SiExpress className='text-[#000000] text-5xl ' />
                  <SiMysql className='text-[#00758F] text-5xl ' />
                  <SiMongodb className='text-[#01EC64] text-5xl ' />
                </div>
                <div className='w-full bg-white h-[5rem] flex items-center justify-center'>
                  <SiFlask className='text-[#000000] text-5xl ' />
                  <IoLogoFirebase className='text-[#FCCA3F] text-5xl ' />
                </div>
              </div>
            </motion.div>
            <motion.div className='w-[17rem] h-[13rem] border-4 border-black mt-5 lg:mt-0' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>
              <div className='w-full h-10 bg-[#0C359E] border-b-4 border-black flex justify-center items-center '>
                <h1 className='montserratbold text-white'>DEVOPS</h1>
              </div>
              <div className='w-full bg-white h-[10rem] flex items-center justify-center gap-x-5'>
                <FaGitAlt className='text-[#F34F29] text-5xl ' />
                <FaGithub className='text-[#531B8A] text-5xl ' />
                <FaGitlab className='text-[#531B8A] text-5xl ' />
              </div>
            </motion.div>
            <motion.div className='lg:flex lg:justify-center lg:items-center lg:w-[40rem]' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>
              <div className='w-[17rem] h-[13rem] border-4 border-black mt-5'>
                <div className='w-full h-10 bg-[#0C359E] border-b-4 border-black flex justify-center items-center '>
                  <h1 className='montserratbold text-white'>LANGUAGES</h1>
                </div>
                <div className='w-full h-[10rem]  '>
                  <div className='w-full bg-white h-[5rem] flex items-center justify-center gap-x-2 pt-5 '>
                    <IoLogoJavascript className='text-[#F5DE19] text-5xl ' />
                    <SiCplusplus className='text-[#659AD2] text-5xl ' />
                    <FaPython className='text-[#387EB8] text-5xl ' />
                    <FaPhp className='text-[#777BB3] text-5xl ' />
                  </div>
                  <div className='w-full bg-white h-[5rem] flex items-center justify-center'>
                    <FaJava className='text-[#5382A1] text-5xl ' />
                  </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='md:flex md:justify-center md:items-center md:w-[40rem]' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>
              <div className='w-[17rem] h-[13rem] border-4 border-black mt-5'>
                <div className='w-full h-10 bg-[#0C359E] border-b-4 border-black flex justify-center items-center '>
                  <h1 className='montserratbold text-white'>TOOL</h1>
                </div>
                <div className='w-full bg-white h-[10rem] flex items-center justify-center gap-x-5'>
                  <VscVscode className='text-[#1F9CF0] text-5xl ' />
                  <SiPostman className='text-[#F37036] text-5xl ' />
                  <IoLogoFigma className='text-[#000000] text-5xl ' />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='w-[60vw] bg-black h-1 mt-20 m-auto'></div>

    </div>
  )
}

export default About
