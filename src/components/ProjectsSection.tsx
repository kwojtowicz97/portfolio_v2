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
  // setTicking: React.Dispatch<React.SetStateAction<boolean>>
  setNextFeature: () => void
  setPrevFeature: () => void
}

const ProjectsSection = ({
  reversed,
  initialFeatureIndex,
  project,
  currentFeature,
  onFeatureClickHandler,
  // setTicking,
  setNextFeature,
  setPrevFeature,
}: TProjectsSectionProps) => {
  const [sectionTranslate, setSectionTranslate] = useState(false)
  useEffect(() => {
    setTimeout(() => setSectionTranslate(true), 100)
  }, [])

  // const mouseEnterHandler = () => {
  //   setTicking(false)
  // }

  // const mouseLeaveHandler = () => {
  //   setTicking(true)
  // }

  return (
    <div
      className={`group relative my-2 flex items-center justify-center transition-transform duration-[1500ms] xl:justify-start xl:space-x-4 ${
        reversed ? 'flex-row-reverse space-x-reverse' : 'flex-row'
      } ${sectionTranslate ? 'opacity-100' : 'opacity-0'}`}
      // onMouseEnter={mouseEnterHandler}
      // onMouseLeave={mouseLeaveHandler}
    >
      <div className='ml-10 hidden aspect-square w-1/3 xl:block'>
        <div
          className={`relative flex h-full flex-col justify-center overflow-hidden`}
        >
          <i
            onClick={setPrevFeature}
            className='fa-solid fa-caret-up absolute top-0 left-1/2 z-50 block -translate-x-1/2 cursor-pointer text-5xl opacity-30 duration-300 hover:opacity-100 group-hover:scale-125'
          ></i>
          <i
            onClick={setNextFeature}
            className='fa-solid fa-caret-down absolute bottom-0 left-1/2 z-50 -translate-x-1/2 cursor-pointer text-5xl opacity-30 duration-300 hover:opacity-100 group-hover:scale-125'
          ></i>
          <ul className='h-full w-full pt-[50%] '>
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
