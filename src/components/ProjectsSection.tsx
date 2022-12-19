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
    <section
      className={`group relative my-2 flex h-[150px] items-center justify-center space-x-4 transition-transform duration-[1500ms] sm:h-[280px] md:h-[360px] xl:h-auto xl:justify-start ${
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
      <div className='mx-auto flex h-[400px] w-[680px] shrink-0 origin-center scale-[0.45]  flex-col rounded-3xl sm:scale-[0.8] md:scale-[1] xl:w-2/3'>
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
