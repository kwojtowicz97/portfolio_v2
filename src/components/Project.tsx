import React from 'react'
import { TProject } from '../data'
import ProjectDescription from './ProjectDescription'
import ProjectsSection from './ProjectsSection'

type TProjectProps = {
  project: TProject
  initialFeatureIndex?: number
  reversed?: boolean
}

const Project = ({ project, initialFeatureIndex, reversed }: TProjectProps) => {
  return (
    <div className='rounded-3xl bg-gray-200'>
      <ProjectDescription project={project} />
      <ProjectsSection
        project={project}
        initialFeatureIndex={initialFeatureIndex}
        reversed={reversed}
      />
    </div>
  )
}

export default Project