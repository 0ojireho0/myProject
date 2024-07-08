import React from 'react'
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div className='w-full h-[80vh] ' id='contact'>
      <div className='flex justify-center items-center'>
        <h1 className='montserratextrabold text-4xl mt-5'>Contact</h1>
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
        <div className='relative w-[13rem] mt-5 md:w-[15rem] '>
          <textarea name="" id="" className=' resize-none border-b-[3px] h-[5rem] border-black w-[13rem] md:w-[15rem] inputfield outline-none' placeholder='Message' />
          <label className='absolute top-0 text-transparent left-0 opacity-50 text-lg pointer-events-none montserratsemibold transition-all durationg-300 ease-in inputlabel'>Message</label>
          <span className='absolute bottom-1 left-0 h-[3px] w-0 bg-[#0C359E] transition-all duration-300 ease-in inputhighlight '></span>
        </div>
        <button type='submit' className='border-[3px] rounded-full w-[8rem] mt-3 border-black flex justify-center items-center gap-1 montserratextrabold text-[#0C359E]'><span><IoIosSend className='text-xl' /></span>Send</button>
      </form>
    </div>
  )
}

export default Contact
