import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-[90vh] justify-center flex items-center '>
      <div className=' h-full flex flex-col pt-[10rem]'>
        <h1 className='montserratsemibold text-2xl md:text-5xl md:mb-3'>Hello, I'm</h1>
        <h1 className='montserratextrabold text-2xl md:text-5xl md:mb-3'>Jeremiah M. Quintano</h1>
        <div className='inline-flex'>
            <div className='montserratsemibold text-2xl md:text-5xl md:mb-3 '>a</div>
            <span className='montserratextrabold text-[#0C359E] text-2xl md:text-5xl ml-1 typing relative'>Full-Stack Developer.</span>
        </div>
        <div className='flex justify-center'>
            <div className='justify-center flex mt-5 border-[7px] border-black w-[7rem] h-[3rem] rounded-full md:w-[11rem] md:h-12 cursor-pointer aboutme '>
              <button className='montserratextrabold text-base md:text-xl'>About me</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
