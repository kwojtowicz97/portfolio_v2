import React, { useEffect, useState } from 'react'
import { technologies } from '../data'
import useInterval from '../hooks/useInterval'
import { TechnologyBagde } from './ProjectTechnologiesSection'

const AboutMeSection = () => {
  const [sectionTranslate, setSectionTranslate] = useState(false)
  useInterval(() => setSectionTranslate(true), 100)

  return (
    <section
      id='about-me'
      className={`space-y group flex flex-col space-y-4 delay-300 duration-[1500ms] md:flex-row md:space-x-4 md:space-y-0 ${
        sectionTranslate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='relative box-border flex flex-col overflow-hidden rounded-3xl border bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 p-10 md:w-2/3'>
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
        <div className='relative mt-10 flex flex-col space-y-4 md:mt-auto md:flex-row md:space-x-3 md:space-y-0'>
          <a
            href='mailto:kamilwojtowicz079@gmail.com'
            className='rounded-full bg-black py-3 px-8 text-white transition-colors hover:bg-gray-800'
          >
            <i className='fa-regular fa-envelope mr-1'></i>Contact me
          </a>
          <div className='mx-12 flex h-12 justify-between md:h-auto md:space-x-3'>
            <a
              href='tel:792704421'
              className='flex aspect-square h-full content-center items-center justify-center rounded-full bg-white align-middle text-xl transition-colors hover:bg-gray-200'
            >
              <i className='fa-solid fa-phone'></i>
            </a>
            <a
              href='https://github.com/kwojtowicz97'
              className='flex aspect-square h-full content-center items-center justify-center rounded-full bg-white text-2xl transition-colors hover:bg-gray-200'
            >
              <i className='fa-brands fa-github'></i>
            </a>
            <a className='flex aspect-square h-full content-center items-center justify-center rounded-full bg-white text-xl transition-colors hover:bg-gray-200'>
              <i className='fa-solid fa-file'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='rounded-3xl border bg-slate-100 object-cover p-5 md:max-h-fit md:w-1/3'>
        <ul className='flex flex-wrap py-2'>
          {Object.values(technologies).map((technology) => (
            <TechnologyBagde technology={technology} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutMeSection
