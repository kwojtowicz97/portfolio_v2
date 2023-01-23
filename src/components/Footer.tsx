import React, { useState } from 'react'
import useInterval from '../hooks/useInterval'

const Footer = () => {
  const [sectionTranslate, setSectionTranslate] = useState(false)
  useInterval(() => setSectionTranslate(true), 100)

  return (
    <footer
      id='contact'
      className={`group mt-4 flex space-x-4 delay-1000 duration-[1500ms] ${
        sectionTranslate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='relative box-border flex w-full flex-col overflow-hidden rounded-3xl bg-gradient-to-tr from-amber-100 to-cyan-200 p-10'>
        <h2 className='text-4xl font-semibold'>Want to work together?</h2>
        <p className='mt-4'>
          Thank you for visiting my portfolio site! If you are interested in my
          work and think I could be a good fit for your team, I would love to
          hear from you. Please don't hesitate to reach out to me via email or
          phone to discuss any opportunities you may have.
        </p>
        <div className='mt-auto flex'>
          <a
            href='mailto:kamilwojtowicz079@gmail.com'
            className='mt-10 rounded-full bg-black py-3 px-8 text-white transition-colors hover:bg-gray-800'
          >
            Contact me
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
