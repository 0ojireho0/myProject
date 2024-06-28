import React from 'react'
import myPicture from "../assets/Quintano_Pic.jpg"

const About = () => {

  

  return (
    <div className='w-full h-[350vh] md:h-[230vh] pt-10' id='about'>
      <h1 className='text-center montserratextrabold text-3xl'>About Me</h1>
      <div className='mt-5 md:flex md:flex-row md:justify-center xl:gap-24'>
        <div className='flex justify-center'>
            <img src={myPicture} alt="Jeremiah Quintano" className='rounded-full w-[12rem] h-[12rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] ' />
        </div>
        <div className='flex justify-center md:text-justify w-[18rem] m-auto mt-3 montserratmedium md:m-0 md:ml-5 md:w-[24rem] md:items-center lg:w-[30rem] lg:items-center '>
            <p>Hello! I'm Jeremiah M. Quintano, a graduating student from Pamantasan ng Lungsod ng Maynila with a Bachelor of Science in Computer Engineering. I enjoy playing computer and console games, watching anime and movies, and studying technology, including programming languages, cloud computing, and networks. I have a keen eye for development and innovation and am dedicated to further developing my skills, which is why I am pursuing this field. Currently, I am a member of the Google Developer Student Club - PLM, where my team is on the Cloud Committee.</p>
        </div>
      </div>

      <div className='mt-10'>
        <h1 className='text-center montserratbold text-2xl'>My Skils & Tools</h1>
        <div className='md:flex md:justify-center'>
          <div className='flex flex-col justify-center items-center mt-5 md:grid md:grid-cols-2 md:gap-x-10 '>
            <div className='w-[17rem] h-[13rem] border-4 border-black'>
              <div className='w-full h-10 bg-[#0C359E] border-b-4 border-black flex justify-center items-center '>
                <h1 className='montserratbold text-white'>FRONT-END</h1>
              </div>
            </div>
            <div className='w-[17rem] h-[13rem] border-4 border-black mt-5 md:mt-0'>
              <div className='w-full h-10 bg-[#0C359E] border-b-4 border-black flex justify-center items-center '>
                <h1 className='montserratbold text-white'>BACK-END</h1>
              </div>
            </div>
            <div className='w-[17rem] h-[13rem] border-4 border-black mt-5'>
              <div className='w-full h-10 bg-[#0C359E] border-b-4 border-black flex justify-center items-center '>
                <h1 className='montserratbold text-white'>DEVOPS</h1>
              </div>
            </div>
            <div className='w-[17rem] h-[13rem] border-4 border-black mt-5'>
              <div className='w-full h-10 bg-[#0C359E] border-b-4 border-black flex justify-center items-center '>
                <h1 className='montserratbold text-white'>LANGUAGES</h1>
              </div>
            </div>
            <div className='w-[17rem] h-[13rem] border-4 border-black mt-5'>
              <div className='w-full h-10 bg-[#0C359E] border-b-4 border-black flex justify-center items-center '>
                <h1 className='montserratbold text-white'>TOOL</h1>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About
