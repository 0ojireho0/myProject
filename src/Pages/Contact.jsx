import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[95vh]' id='contact'>
      <div className='flex justify-center items-center'>
        <h1 className='montserratextrabold text-4xl'>Contact</h1>
      </div>
      <form className='flex flex-col justify-center items-center'>
        <div className='relative m-10 w-[13rem] md:w-[15rem] '> {/*flex flex-col items-center justify-center */}
          <input type="text" className='outline-none border-b-[3px] border-black w-[13rem] md:w-[15rem] inputfield' placeholder='Name' required/>
          <label className=' absolute top-0 text-transparent left-0 opacity-50 text-lg pointer-events-none montserratsemibold transition-all duration-300 ease-in inputlabel'>Name</label>
          <span className='absolute bottom-0 left-0 h-[3px] w-0 bg-[#0C359E] transition-all duration-300 ease-in inputhighlight '></span>
        </div>
        <div className='relative w-[13rem] md:w-[15rem] '> {/*flex flex-col items-center justify-center */}
          <input type="email" className='outline-none border-b-[3px] border-black w-[13rem] md:w-[15rem] inputfield' placeholder='Email' required/>
          <label className=' absolute top-0 text-transparent left-0 opacity-50 text-lg pointer-events-none montserratsemibold transition-all duration-300 ease-in inputlabel'>Email</label>
          <span className='absolute bottom-0 left-0 h-[3px] w-0 bg-[#0C359E] transition-all duration-300 ease-in inputhighlight '></span>
        </div>
        {/* <input type="submit" /> */}
      </form>
    </div>
  )
}

export default Contact
