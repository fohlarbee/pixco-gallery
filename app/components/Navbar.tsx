import Link from 'next/link'
import React from 'react'
import Search from './Search'
import { ModeToggle } from './MoodToogle'

export default function Navbar() {

  return (
        <nav className='px-3 pt-2 bg-black z-10 top-0  h-32 flex flex-col gap-4 sm:flex-row sm:justify-around items-center text-[#fff] font-bold mx-auto sticky'>
            <h1 className='text-3xl md:text-5xl text-center whitespace-nowrap text-primary'>
                <Link href='/'>Pixco Gallery  </Link>
                <span className='sm:hidden '><ModeToggle/></span>

            </h1>
            <Search/>
            <div className='hidden sm:block'>
            <ModeToggle />


            </div>
            
        </nav>

  )
}
