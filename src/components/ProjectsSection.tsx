import React, { useEffect, useState } from 'react'
import { TFeature, TProject } from '../data'
import { Carousel } from './Carousel'
import { FeatureListItem } from './FeatureListItem'
import { Mockups } from './Mockups'

type TProjectsSectionProps = {
  reversed?: boolean
  initialFeatureIndex?: number
  project: TProject
}

const ProjectsSection = ({
  reversed,
  initialFeatureIndex,
  project,
}: TProjectsSectionProps) => {
  const [sectionTranslate, setSectionTranslate] = useState(false)
  useEffect(() => {
    setTimeout(() => setSectionTranslate(true), 100)
  }, [])

  const [currentFeature, setCurrentFeature] = useState(
    project.features[initialFeatureIndex || 0]
  )

  const onFeatureClickHandler = (feature: TFeature) => {
    setCurrentFeature(feature)
  }

  return (
    <section
      className={`group relative flex space-x-4 duration-[1500ms] ${
        reversed ? 'flex-row-reverse space-x-reverse' : 'flex-row'
      } ${sectionTranslate ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='aspect-square w-1/3 rounded-3xl bg-white'>
        <div className='relative flex h-full flex-col justify-center overflow-hidden'>
          <ul className='h-full w-full pt-[50%]'>
            <Carousel
              carouselSlideAxis='y'
              initialActiveItem={initialFeatureIndex || 0}
              items={project.features}
              itemsPerSlide={4}
              ItemRender={FeatureListItem}
              currentFeature={currentFeature}
              onFeatureClickHandler={onFeatureClickHandler}
            />
          </ul>
        </div>
      </div>
      <div className='flex h-[400px] w-2/3 flex-col rounded-3xl pl-10'>
        <Mockups
          currentFeature={currentFeature}
          initial={initialFeatureIndex || 0}
          onFeatureClickHandler={onFeatureClickHandler}
          project={project}
        />
      </div>
    </section>
  )
}

export default ProjectsSection
