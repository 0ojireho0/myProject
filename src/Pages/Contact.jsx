import { motion } from 'framer-motion';
import React, { useRef } from 'react'
import { IoIosSend } from "react-icons/io";
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uylzgxe', 'template_fuofbfn', form.current, {
        publicKey: 'KV2TQbAkoWukplLLE',
      })
      .then(
        () => {
          //console.log('SUCCESS!');
          alert("Message Sent")
          window.location.reload()
        },
        (error) => {
          //console.log('FAILED...', error.text);
          alert("Error")
        },
      );
  };

  return (
    <div className='w-full h-[80vh] ' id='contact'>
      <div className='flex justify-center items-center'>
        <motion.h1 className='montserratextrabold text-4xl mt-5' whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}}>Contact</motion.h1>
      </div>
      <form className='flex flex-col justify-center items-center' ref={form} onSubmit={sendEmail}>
        <motion.div className='relative m-10 w-[13rem] md:w-[15rem]' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}>
          <input type="text" className='outline-none border-b-[3px] border-black w-[13rem] md:w-[15rem] inputfield' name='user_name' placeholder='Name' required/>
          <label className=' absolute top-0 text-transparent left-0 opacity-50 text-lg pointer-events-none montserratsemibold transition-all duration-300 ease-in inputlabel'>Name</label>
          <span className='absolute bottom-0 left-0 h-[3px] w-0 bg-[#0C359E] transition-all duration-300 ease-in inputhighlight '></span>
        </motion.div>
        <motion.div className='relative w-[13rem] md:w-[15rem] ' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1, delay: 0.5}}>
          <input type="email" className='outline-none border-b-[3px] border-black w-[13rem] md:w-[15rem] inputfield' placeholder='Email' name='user_email' required/>
          <label className=' absolute top-0 text-transparent left-0 opacity-50 text-lg pointer-events-none montserratsemibold transition-all duration-300 ease-in inputlabel'>Email</label>
          <span className='absolute bottom-0 left-0 h-[3px] w-0 bg-[#0C359E] transition-all duration-300 ease-in inputhighlight '></span>
        </motion.div>
        <motion.div className='relative w-[13rem] mt-5 md:w-[15rem] ' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1, delay: 0.8}}>
          <textarea name="message"  className=' resize-none border-b-[3px] h-[5rem] border-black w-[13rem] md:w-[15rem] inputfield outline-none' placeholder='Message' />
          <label className='absolute top-0 text-transparent left-0 opacity-50 text-lg pointer-events-none montserratsemibold transition-all durationg-300 ease-in inputlabel'>Message</label>
          <span className='absolute bottom-1 left-0 h-[3px] w-0 bg-[#0C359E] transition-all duration-300 ease-in inputhighlight '></span>
        </motion.div>
        <motion.button type='submit' className='border-[3px] rounded-full w-[8rem] mt-3 border-black flex justify-center items-center gap-1 montserratextrabold text-[#0C359E]' whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1, delay: 1.1}}><span><IoIosSend className='text-xl' /></span>Send</motion.button>
      </form>
    </div>
  )
}

export default Contact
