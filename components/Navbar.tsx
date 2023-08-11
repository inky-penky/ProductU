import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import MobileMenu from '../public/vectors/svg/menu.svg'
import CancelMenu from '../public/vectors/svg/x.svg'
import Logo from '../public/vectors/images/Frame 241productULogo.png'





const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(prevToggle => !prevToggle)
  }

  return (
    <div className='z-30 flex justify-between bg-white items-center w-full py-[1.5rem] lg:px-[5.3rem] fixed'>
        <div className='lg:w-[13rem] w-[8rem]'>
            <Image src={Logo} alt='productU_logo' />
        </div>

        <div className='flex flex-col justify-between lg:hidden'>
          <div className='flex justify-end'>
            <div className={`${toggle? 'hidden':'block'}`} onClick={handleClick}>
              <Image src={MobileMenu} alt="hamburger" />
            </div>
            <div className={`${toggle? 'block mr-5':'hidden'}`} onClick={handleClick}>
              <Image src={CancelMenu} alt="hamburger" />
            </div>
          </div>

          <div className={`flex flex-col text-center gap-5 w-screen bg-white text-blue-500 ${toggle? 'block': 'hidden'}`}>
            <a href='#' className=''>Course Details</a>
            <a href='#' className=''>Why Us?</a>
            <a href='#' className=''>Contact</a>
            <a href='#' className=''>Pricing</a>
          </div>
        </div>
 
        <div className='lg:flex gap-10 text-xs lg:text-[1.15rem] text-blue-500 hidden '>
            <a href='#' className=''>Course Details</a>
            <a href='#' className=''>Why Us?</a>
            <a href='#' className=''>Contact</a>
            <a href='#' className=''>Pricing</a>
        </div>
    </div>
  )
}

export default Navbar
