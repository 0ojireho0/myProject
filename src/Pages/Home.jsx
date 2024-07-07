import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <div className='w-full h-[90vh] justify-center flex flex-col items-center  '>
      <div className=' h-full flex flex-col pt-[10rem]'>
        <motion.h1 className='montserratsemibold text-2xl md:text-5xl md:mb-3 my-div' initial={{x: -100, opacity: 0}} animate={{x:0, opacity:1}} transition={{duration: 0.5, delay:0.5}} >Hello, I'm</motion.h1>
        <motion.h1 className='montserratextrabold text-2xl md:text-5xl md:mb-3 my-div' initial={{x: -100, opacity: 0}} animate={{x:0, opacity:1}} transition={{duration: 0.5, delay:0.8}} >Jeremiah M. Quintano</motion.h1>
        <motion.div className='inline-flex my-div' initial={{x: -100, opacity: 0}} animate={{x:0, opacity:1}} transition={{duration: 0.5, delay:1.1}}>
            <div className='montserratsemibold text-2xl md:text-5xl md:mb-3 '>a</div>
            <span className='montserratextrabold text-[#0C359E] text-2xl md:text-5xl ml-1 typing relative'>Full-Stack Developer.</span>
        </motion.div>
        <div className='flex justify-center'>
            <motion.div className='justify-center items-center flex mt-5 border-[7px] border-black w-[7rem] h-[3rem] rounded-full md:w-[11rem] md:h-12 cursor-pointer md:hover:duration-700 md:hover:bg-[#0C359E] md:hover:text-white my-div' initial={{y: 100, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: 0.5, delay:1.4}}>
              <Link to="about" spy={true} smooth={true} offset={-60} duration={500} className='montserratextrabold text-base md:text-xl w-full text-center'>About me</Link>
            </motion.div>
          </div>
      </div>
      <div className='w-[60vw] bg-black h-1'></div>
    </div>
  )
}

export default Home
