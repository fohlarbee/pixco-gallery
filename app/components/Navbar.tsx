import Link from 'next/link'
import React from 'react'
import Search from './Search'

export default function Navbar() {

  return (
    <header className='bg-black z-10 top-0 h-14'>
        <nav className='flex flex-col gap-4 sm:flex-row sm:justify-between items-center text-[#fff] font-bold max-w-6xl mx-auto'>
            <h1 className='text-2xl sm:text-3xl text-center whitespace-nowrap'>
                <Link href='/'>Pixco Gallery</Link>
            </h1>
            <Search/>
        </nav>

    </header>
  )
}
