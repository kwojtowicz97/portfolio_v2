import React, { useEffect, useState } from 'react'
import { TFeature, TProject } from '../data'
import { Carousel } from './Carousel'
import { FeatureListItem } from './FeatureListItem'
import { Mockups } from './Mockups'

type TProjectsSectionProps = {
  reversed?: boolean
  initialFeatureIndex?: number
  project: TProject
  currentFeature: TFeature
  onFeatureClickHandler: (feature: TFeature) => void
}

const ProjectsSection = ({
  reversed,
  initialFeatureIndex,
  project,
  currentFeature,
  onFeatureClickHandler,
}: TProjectsSectionProps) => {
  const [sectionTranslate, setSectionTranslate] = useState(false)
  useEffect(() => {
    setTimeout(() => setSectionTranslate(true), 100)
  }, [])

  return (
    <div
      className={`group relative my-2 flex items-center justify-center transition-transform duration-[1500ms] xl:justify-start xl:space-x-4 ${
        reversed ? 'flex-row-reverse space-x-reverse' : 'flex-row'
      } ${sectionTranslate ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='ml-10 hidden aspect-square w-1/3 xl:block'>
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
      <div className='relative flex w-full shrink-0 origin-center flex-col rounded-3xl p-5 xl:w-2/3 xl:p-12'>
        <Mockups
          currentFeature={currentFeature}
          initial={initialFeatureIndex || 0}
          onFeatureClickHandler={onFeatureClickHandler}
          project={project}
        />
      </div>
    </div>
  )
}

export default ProjectsSection
