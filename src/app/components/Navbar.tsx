import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed flex items-center z-50 backdrop-blur-md justify-between w-[97vw] mx-5 my-3 p-2 rounded-lg bg-white/3 border-2 border-white/5 min-h-8'>
      <Image className='' src='/logo.svg' alt="Logo" width={128} height={128} />
      
      <div className='text-sm gap-6 flex items-center'>
        <a className="nav-link" href="#">Products</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link" href="#">Creator Program</a>
        <a className="nav-link" href="#">Blog</a>
      </div>

      <div className='flex justify-center items-center gap-2'>
        <button className='btn-animated bg-gradient-to-b text-sm cursor-pointer font-medium from-[#B05EFA] to-[#9333EA] py-2 px-4 rounded-lg'>Sign Up</button>
        <button className='btn-animated bg-gradient-to-b text-sm cursor-pointer font-medium from-[#32343E] to-[#1F2129] py-2 px-4 rounded-lg'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
