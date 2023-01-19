import React from 'react'
import { TTechnology } from '../data'

type TechnologyBagdeProps = {
  technology: TTechnology
}

type ProjectTechnologiesSectionProps = {
  technologies: TTechnology[]
}

const TechnologyBagde = ({ technology }: TechnologyBagdeProps) => {
  return (
    <a
      href={technology.url}
      target='_blank'
      className='flex rounded-md bg-white px-3 py-2'
    >
      <div className='font-semibold'>{technology.name}</div>
    </a>
  )
}

const ProjectTechnologiesSection = ({
  technologies,
}: ProjectTechnologiesSectionProps) => {
  return (
    <div className='flex flex-wrap space-x-2 p-10 py-5'>
      {technologies.map((technology) => (
        <TechnologyBagde technology={technology} />
      ))}
    </div>
  )
}

export default ProjectTechnologiesSection
