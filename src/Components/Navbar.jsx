import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [showSideBar, setShowSideBar] = useState(false)
    const closeSidebar = () =>{
        setShowSideBar(false)
    }
    const navItems = [
        {
          id: 1,
          name: "ABOUT",
          path: "about"
        },
        {
          id: 2,
          name: "PROJECTS",
          path: "projects"
        },
        {
          id: 3,
          name: "CONTACT",
          path: "contact"
        },
        {
          id: 4,
          name: "RESUME",
          path: "resume"
        }
      ]
    
  return (
    <>
    <div className='w-full h-[10vh] bg-white sticky top-0 z-10'>
    {showSideBar ? (
        <>
        <div className='top-0 left-0 fixed w-full h-full md:hidden' onClick={() => setShowSideBar(!showSideBar)}></div>
        <div className='w-2/3 h-screen top-0 bg-white fixed z-10 md:hidden'>
                <div className='w-full h-[10vh] items-center flex bg-white justify-between'>
                    <div className='w-12 rounded-full h-12 items-center flex justify-center border-2 border-black ml-5'>
                        <a href="/" className='montserratextrabold w-full h-full flex items-center justify-center'><h1>J</h1></a>
                    </div>
                    <FontAwesomeIcon icon={faX} onClick={() => setShowSideBar(!showSideBar)} size='xl' className='mr-2' />
                </div>
                <div className='fixed  bg-white w-2/3 h-full justify-center flex top-20 sidecolumn'>
                    <ul className=' text-justify flex flex-col space-y-24 mt-8'>
                        {navItems.map((navs, i)=>{
                            return(
                                <li className='text-xl montserratsemibold' key={i}><Link to={navs.path} spy={true} smooth={true} offset={-60} duration={500}  onClick={closeSidebar}>{navs.name}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>  
    

        </>
        ) : (
        <div className='flex items-center h-[10vh] w-full md:hidden'>
            <FontAwesomeIcon icon={faBars} onClick={() => setShowSideBar(!showSideBar)} size='xl' className='ml-5' />
        </div>
    )}

    <div className='hidden md:flex md:justify-between md:items-center md:h-[10vh]'>
        <div className='hidden md:flex md:rounded-full md:w-14 md:h-14 md:items-center md:justify-center md:border-2 md:border-black md:ml-5 md:hover:bg-[#0C359E] md:hover:text-white md:cursor-pointer logo'>
            <a href="/" className='flex justify-center items-center w-full h-full'><h1 className='montserratextrabold md:text-xl'>J</h1></a>
        </div>
        <div className='md:mr-5'>
            <ul className={` md:flex md:gap-3`}>
                {navItems.map((navs, i)=>{
                    return(
                        <li className='text-md montserratsemibold lg:text-xl xl:text-xl md:cursor-pointer nav-item' key={i}><Link to={navs.path} spy={true} smooth={true} offset={-70} duration={500}>{navs.name}</Link></li>
                    )
                })}
            </ul>
        </div>
    </div>

    </div>
    </>
  )
}

export default Navbar
