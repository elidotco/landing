import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full px-10   flex justify-between items-center h-20'>

        {/* Logo */}
        <div className='w-32 mr-10 h-12'>
            <img alt='logo' src='./logo.png' className=' w-full h-full'/>
        </div>
        {/* Logo */}

        {/* Navigation */}
        <nav className="flex text-sm text-white justify-between">
            <ul className='flex flex-row gap-8'>
                <li>
                    <Link href='#contact'>For business</Link>
                </li>
                <li>
                    <Link href='#contact'>Pricing Plans</Link>
                </li>
                <li>
                    <Link href='#contact'>FAQ</Link>
                </li>
                <li>
                    <Link href='#contact'>Contact</Link>
                </li>
            </ul>

            {/* BUTTONS */}
        
            {/* BUTTONS */}
        </nav>
        <div className=" flex gap-10">
          <Link href="http://" className='py-2 px-3 bg-white text-black text-sm rounded-sm'><span>Request Demo</span></Link>
          <Link href="http://" className='py-1 px-10 text-white bg-[#F68900] rounded-sm'><span>Login</span></Link>
          </div>
        {/* Navigation */}
    </header>
  )
}

export default Navbar