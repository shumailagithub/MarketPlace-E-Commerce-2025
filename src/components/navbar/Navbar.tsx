'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Heart, ShoppingCart, UserCircle } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white z-50">
      {/* Main container for Navbar */}
      <div className="max-w-[1286px] mx-auto px-4 lg:ml-[60px] 
         sm:px-0 ml-[51px] sm:ml-0 flex items-center justify-between h-[41px] mt-[29px]  ">
        
        {/* Logo Section */}
        <div className="flex items-left  gap-1 exsm:mr-0   xsm:ml-[100px] ">
          
          <h1 className="  exsm:ml-5  xsm:text-[30px]  
            
          sm:ml-0   
          md:ml-[-80px]  md:p-0
          font-bold font-montserrat text-[25px] ml-20  text-black flex items-center gap-4">
           
            <div className=' '>
              <Image src={'/logo.png'} alt={'Logo'} height={32} width={50} 
            className='md:w-[40px] md:h-[25px]'></Image></div>
            Furniro
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 ">
          <Link href="/" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Home</Link>
          <Link href="/shop" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Shop</Link>
          <Link href="/blog" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Blog</Link>
          <Link href="/contact" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors">Contact</Link>
        </div>

        {/* Icons Section */}
        <div className="hidden sm:flex md:items-center gap-6 sm:pr-10">
          <button aria-label="Account" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <UserCircle className="w-6 h-6" />
          </button>
          <button aria-label="Search" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button aria-label="Wishlist" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Heart className="w-6 h-6" />
          </button>
          <Link href="/cart">
          <button aria-label="Shopping Cart" className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <ShoppingCart className="w-6 h-6" />
          </button>
          </Link>
        </div>
      </div>

      {/* Mobile View - Hamburger Menu */}
      <div className="sm:hidden  flex items-center justify-between px-4 py-0 ">
        <button
          aria-label="Menu"
          className="p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-1 bg-black mb-1 transition-transform duration-300" />
          <span className="block w-6 h-1 bg-black mb-1 transition-transform duration-300" />
          <span className="block w-6 h-1 bg-black transition-transform duration-300" />
        </button>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white shadow-lg z-10 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 bg-[#fff3e3]">
          <Link href="/" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/shop" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/blog" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}