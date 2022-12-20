import React, { useState } from 'react'
import { TFeature, TProject } from '../data'
import useInterval from '../hooks/useInterval'
import ProjectDescription from './ProjectDescription'
import ProjectsSection from './ProjectsSection'

type TProjectProps = {
  project: TProject
  initialFeatureIndex?: number
  reversed?: boolean
}

const Project = ({ project, initialFeatureIndex, reversed }: TProjectProps) => {
  const [sectionTranslate, setSectionTranslate] = useState(false)
  useInterval(() => setSectionTranslate(true), 100)
  const [currentFeature, setCurrentFeature] = useState(
    project.features[initialFeatureIndex || 0]
  )

  const onFeatureClickHandler = (feature: TFeature) => {
    setCurrentFeature(feature)
  }
  return (
    <div
      id='projects'
      className={`rounded-3xl bg-gray-200 delay-700 duration-[1500ms] ${
        sectionTranslate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <ProjectDescription project={project} />
      <ProjectsSection
        currentFeature={currentFeature}
        onFeatureClickHandler={onFeatureClickHandler}
        project={project}
        initialFeatureIndex={initialFeatureIndex}
        reversed={reversed}
      />
    </div>
  )
}

export default Project
