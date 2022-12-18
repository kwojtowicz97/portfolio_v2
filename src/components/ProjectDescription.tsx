import React from 'react'

const ProjectDescription = () => {
  return (
    <div>
      <div className='mt-10 flex items-center space-x-2'>
        <h1 className='mr-2 text-4xl font-semibold'>Job Finder</h1>
        <button className='text-md aspect-square h-9 w-9 rounded-full bg-black text-white transition-colors hover:bg-gray-800'>
          <i className='fa-solid fa-arrow-up-right-from-square'></i>
        </button>
        <button className='text-md aspect-square h-9 w-9 rounded-full bg-black text-white transition-colors hover:bg-gray-800'>
          <i className='fa-brands fa-github text-lg'></i>
        </button>
      </div>
      <p className='my-2 text-slate-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        adipisci nemo. Tempore et quidem dignissimos incidunt architecto
        adipisci voluptatibus enim perferendis hic officia totam, consectetur
        animi accusantium quod qui iusto. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Similique velit vel quia minima possimus quibusdam
        perspiciatis, minus, dolore in voluptates soluta illum ab labore ipsum
        doloremque obcaecati placeat tenetur adipisci?
      </p>
    </div>
  )
}

export default ProjectDescription
