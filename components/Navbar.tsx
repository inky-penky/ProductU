import React from 'react'
import Image from 'next/image'
import Logo from '../public/vectors/images/Frame 241productULogo.png'





const Navbar = () => {
  return (
    <div className='flex justify-between w-full'>
        <div className=''>
            <Image src={Logo} alt='productU_logo' />
        </div>
        <div className='flex gap-10'>
            <a href='#' className=''>Course Details</a>
            <a href='#' className=''>Why Us?</a>
            <a href='#' className=''>Contact</a>
            <a href='#' className=''>Pricing</a>
        </div>
    </div>
  )
}

export default Navbar