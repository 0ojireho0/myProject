import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div className=' h-[5rem] flex flex-col justify-center items-center' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>
        <h1 className='text-3xl montserratextrabold text-center'>Reach out to me</h1>
        <div className='flex flex-row gap-5 justify-center'>
          <a href="mailto:jeremiahquintano20@gmail.com" target='_blank' className=' hover:opacity-50'><MdEmail className='text-4xl' /></a>
          <a href="https://github.com/0ojireho0" target='_blank' className=' hover:opacity-50'><FaGithub className='text-4xl'/></a>
          <a href="https://www.linkedin.com/in/jeremiah-quintano-a80407231/" target='_blank' className=' hover:opacity-50'><FaLinkedin className='text-4xl'/></a>
        </div>
        <h1>&copy; 2024 Jeremiah Quintano. All rights served.</h1>
    </motion.div>
  )
}

export default Footer
