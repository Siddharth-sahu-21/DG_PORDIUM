import Link from 'next/link';
import React from 'react';



const Navbar = () => {
  return (
    <div>
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <img src="/logo.JPG" alt=""
            className='py-4' />
      
          </div>

          {/* Menu */}
          <div className="flex space-x-8">
            
            <Link href="/signin" className="hover:text-gray-400 ">sign In</Link>
            <Link href="#services" className="hover:text-gray-400">Services</Link>
            <Link href="/aboutus" className="hover:text-gray-400">About Us</Link>
            <Link href="#pricing" className="hover:text-gray-400">Pricing</Link>
            <Link href="#contact" className="hover:text-gray-400">Contact</Link>
          </div>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar;