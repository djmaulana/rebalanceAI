import React from 'react'
import Image from 'next/image'
import logoNav from '../public/logo-nav.png';

const Navbar = () => {
  return (
    <div className='mt-10 mx-[50px] z-50 absolute'>
      <Image 
        src={logoNav}
        alt="RebalanceAI Logo"
        width={116}
        height={30}
      />
    </div>
  )
}

export default Navbar