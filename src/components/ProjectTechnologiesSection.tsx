import React from 'react'
import { TTechnology } from '../data'

type TechnologyBagdeProps = {
  technology: TTechnology
}

type ProjectTechnologiesSectionProps = {
  technologies: TTechnology[]
}

export const TechnologyBagde = ({ technology }: TechnologyBagdeProps) => {
  return (
    <a
      href={technology.url}
      target='_blank'
      className='m-1 flex rounded-md border bg-white px-3 py-2'
    >
      <div className='font-semibold'>{technology.name}</div>
    </a>
  )
}

const ProjectTechnologiesSection = ({
  technologies,
}: ProjectTechnologiesSectionProps) => {
  return (
    <div className='mx-8 my-2 flex flex-wrap '>
      {technologies.map((technology) => (
        <TechnologyBagde technology={technology} />
      ))}
    </div>
  )
}

export default ProjectTechnologiesSection
