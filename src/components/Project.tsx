import React, { useEffect, useState } from 'react'
import { TFeature, TProject } from '../data'
import useInterval from '../hooks/useInterval'
import ProjectDescription from './ProjectDescription'
import ProjectsSection from './ProjectsSection'
import ProjectTechnologiesSection from './ProjectTechnologiesSection'

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

  const setNextFeature = () => {
    setCurrentFeature((current) => {
      const currentFeatureIndex = project.features.indexOf(current)
      const nextFeatureIndex = currentFeatureIndex + 1
      if (nextFeatureIndex > project.features.length - 1)
        return project.features[0]
      return project.features[nextFeatureIndex]
    })
  }

  const setPrevFeature = () => {
    setCurrentFeature((current) => {
      const currentFeatureIndex = project.features.indexOf(current)
      const prevFeatureIndex = currentFeatureIndex - 1
      if (prevFeatureIndex < 0)
        return project.features[project.features.length - 1]
      return project.features[prevFeatureIndex]
    })
  }

  // const [ticking, setTicking] = useState(false)

  // useEffect(() => {
  //   const timer = setTimeout(() => ticking && setNextFeature(), 2000)
  //   return () => clearTimeout(timer)
  // }, [currentFeature, ticking])

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
      <ProjectTechnologiesSection technologies={project.technologies || []} />
      <ProjectsSection
        // setTicking={setTicking}
        currentFeature={currentFeature}
        onFeatureClickHandler={onFeatureClickHandler}
        project={project}
        initialFeatureIndex={initialFeatureIndex}
        reversed={reversed}
        setNextFeature={setNextFeature}
        setPrevFeature={setPrevFeature}
      />
    </div>
  )
}

export default Project
