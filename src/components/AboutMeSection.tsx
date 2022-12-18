import React, { useEffect, useState } from 'react'
import useInterval from '../hooks/useInterval'

const AboutMeSection = () => {
  const [sectionTranslate, setSectionTranslate] = useState(false)
  useInterval(() => setSectionTranslate(true), 100)

  return (
    <section
      className={`group flex space-x-4 duration-[1500ms] ${
        sectionTranslate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='relative box-border flex w-2/3 flex-col overflow-hidden rounded-3xl p-10'>
        <div className='absolute top-[-50%] left-[-50%] -z-10 h-[200%] w-[200%] bg-gradient-to-r from-sky-500 to-sky-700 group-hover:animate-[spin_3s_linear_infinite]'></div>
        <h1 className='text-5xl font-semibold'>
          Hello, I'm Kamil <br />
          Frontend Developer
        </h1>
        <p className='mt-10'>
          With skills in HTML, CSS, JavaScript and React, I have a passion for
          creating visually appealing and user-friendly websites. I enjoy
          building interactive features and bring web designs to life. I am
          always striving to improve my skills and stay up-to-date on the latest
          technologies.
        </p>
        <div className='relative mt-auto flex space-x-3'>
          <button className='rounded-full bg-black py-3 px-8 text-white transition-colors hover:bg-gray-800'>
            <i className='fa-regular fa-envelope mr-1'></i>Contact me
          </button>
          <button className='aspect-square h-full rounded-full bg-white text-xl transition-colors hover:bg-gray-200'>
            <i className='fa-solid fa-phone'></i>
          </button>
          <button className='aspect-square h-full rounded-full bg-white text-2xl transition-colors hover:bg-gray-200'>
            <i className='fa-brands fa-github'></i>
          </button>
          <button className='aspect-square h-full rounded-full bg-white text-xl transition-colors hover:bg-gray-200'>
            <i className='fa-solid fa-file'></i>
          </button>
        </div>
      </div>
      <img
        className='h-[500px] w-1/3 rounded-3xl object-cover'
        src={require('../assets/photo.jpeg')}
      ></img>
    </section>
  )
}

export default AboutMeSection
