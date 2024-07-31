"use client"
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import NavLink from './navLink'

const links = [
    {url:"/projeler", title:"Projeler"}
]

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const nightModeVariants = {
    closed:{
      opacity:1,
    },
    opened:{
      opacity:0,
    }
  }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* LOGO */}
      <div className='mt-5 flex justify-start'>
        <Link href="/" className='text-sm max-w-72 bg-gray-500 rounded-md p-1 font-semibold flex items-center justify-center'>
            <Image src="/fhiLogo.png" width="100" height="100"></Image>
            <h1 className='text-white ml-3 flex-wrap'>
                <span>
                    FURKAN HARFİYAT İNŞAAT MAKİNE HAYV. PAZ. SANAYİ VE TİCARET LTD. ŞTİ.
                </span>
            </h1>
        </Link>
      </div>
      {/* PROJELER */}
      {/* <div className='mt-5 bg-gray-500 rounded-3xl font-semibold font-sans text-white'>
        <h1>PROJELER</h1>
      </div> */}
      <div className='hidden md:flex justify-center'>
            {links.map(link=> (
                <NavLink link={link} key={link.title}/>
            ))}
      </div>
      {/* NIGHT MODE */}
      {/* <div className='mt-5 w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center cursor-pointer' onClick={(() => setOpen(prev => !prev))}>
        <svg className="object-contain w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="nightModeIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> 
          <motion.path variants={nightModeVariants} animate={open ? "closed" : "opened"} d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/> 
          <motion.path variants={nightModeVariants} animate={open ? "opened" : "closed"} d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z"/> 
          <motion.path variants={nightModeVariants} animate={open ? "closed" : "opened"} d="M12 5V3M12 21v-2"/> 
          <motion.path variants={nightModeVariants} animate={open ? "closed" : "opened"} d="M5 12H2h3zM22 12h-3 3zM16.95 7.05L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929L7.05 7.05 4.93 4.93z"/> 
        </svg>
      </div> */}
    </div>
  )
}

export default Navbar