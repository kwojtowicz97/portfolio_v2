import React from 'react'
import { TProject } from '../data'

type TProjectDescriptionProps = {
  project: TProject
}

const ProjectDescription = ({ project }: TProjectDescriptionProps) => {
  return (
    <div className='px-10'>
      <div className='mt-7 flex items-center space-x-2'>
        <h1 className='mr-2 text-4xl font-semibold'>{project.name}</h1>
        <button className='text-md h-9 w-9 rounded-full bg-black text-white transition-colors hover:bg-gray-800 sm:w-auto sm:px-4'>
          <span className='hidden sm:inline'>Live</span>
          <i className='fa-solid fa-arrow-up-right-from-square'></i>
        </button>
        <button className='text-md aspect-square h-9 w-9 rounded-full bg-black text-white transition-colors hover:bg-gray-800'>
          <i className='fa-brands fa-github text-lg'></i>
        </button>
      </div>
      <p className='py-2 text-slate-600'>{project.description}</p>
    </div>
  )
}

export default ProjectDescription
