import React, { useEffect, useState } from 'react'

export const Navbar = () => {
  const [navbarTranslate, setNavbarTranslate] = useState(false)

  useEffect(() => {
    setNavbarTranslate(true)
  })

  return (
    <header
      className={`relative flex w-full justify-between p-4 font-semibold transition-transform duration-700 ${
        navbarTranslate ? '' : '-translate-y-full'
      }`}
    >
      <a href='/'>Kamil Wójtowicz</a>

      <nav className='flex space-x-7'>
        <a className='active: text-gray-500' href='#home' id='home'>
          Home
        </a>
        <a href='#projects' id='projects'>
          Projects
        </a>
        <a href='#contact' id='contact'>
          Contact
        </a>
      </nav>
    </header>
  )
}
