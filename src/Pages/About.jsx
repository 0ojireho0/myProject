import React from 'react'
import myPicture from "../assets/Quintano_Pic.jpg"

const About = () => {
  return (
    <div className='w-full h-[150vh]  pt-10' id='about'>
      <h1 className='text-center montserratextrabold text-3xl'>About Me</h1>
      <div className='mt-5 md:flex md:flex-row md:justify-center xl:gap-24'>
        <div className='flex justify-center'>
            <img src={myPicture} alt="Jeremiah Quintano" className='rounded-full w-[12rem] h-[12rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] ' />
        </div>
        <div className='flex justify-center w-[18rem] m-auto mt-3 montserratmedium md:m-0 md:ml-5 md:w-[24rem] md:items-center lg:w-[30rem] lg:items-center '>
            <p>Hello! I'm Jeremiah M. Quintano, a graduating student from Pamantasan ng Lungsod ng Maynila with a Bachelor of Science in Computer Engineering. I enjoy playing computer and console games, watching anime and movies, and studying technology, including programming languages, cloud computing, and networks. I have a keen eye for development and innovation and am dedicated to further developing my skills, which is why I am pursuing this field. Currently, I am a member of the Google Developer Student Club - PLM, where my team is on the Cloud Committee.</p>
        </div>
      </div>
    </div>
  )
}

export default About
