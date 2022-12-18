import React, { useEffect, useState } from 'react'
import { projects, TFeature } from '../data'
import { Carousel } from './Carousel'
import { FeatureListItem } from './FeatureListItem'
import IPhoneListItem from './IPhoneListItem'
import IPhoneMockup from './IPhoneMockup'
import MacbookListItem from './MacbookListItem'
import MacbookMockup from './MacbookMockup'

type TProjectsSectionProps = {
  reversed?: boolean
}

const INITIAL_ITEM_INDEX = 0

const ProjectsSection = ({ reversed }: TProjectsSectionProps) => {
  const [sectionTranslate, setSectionTranslate] = useState(false)
  useEffect(() => {
    setTimeout(() => setSectionTranslate(true), 100)
  }, [])

  const [project] = useState(projects.jobFinder)
  const [currentFeature, setCurrentFeature] = useState(
    project.features[INITIAL_ITEM_INDEX]
  )

  const onFeatureClickHandler = (feature: TFeature) => {
    setCurrentFeature(feature)
  }

  return (
    <section
      id='projects'
      className={`group relative flex space-x-4 duration-[1500ms] ${
        reversed ? 'flex-row-reverse space-x-reverse' : 'flex-row'
      } ${sectionTranslate ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='aspect-square w-1/3 rounded-3xl bg-slate-100'>
        <div className='relative flex h-full flex-col justify-center overflow-hidden'>
          <ul className='h-full w-full pt-[50%]'>
            <Carousel
              carouselSlideAxis='y'
              initialActiveItem={INITIAL_ITEM_INDEX}
              items={project.features}
              itemsPerSlide={4}
              ItemRender={FeatureListItem}
              currentFeature={currentFeature}
              onFeatureClickHandler={onFeatureClickHandler}
            />
          </ul>
        </div>
      </div>
      <div className='flex h-[400px] w-2/3 flex-col rounded-3xl bg-gradient-to-br from-sky-300 to-sky-500 pl-10'>
        <div className='relative w-full'>
          <MacbookMockup left='-49px'>
            <Carousel
              carouselSlideAxis='y'
              initialActiveItem={INITIAL_ITEM_INDEX}
              items={project.features}
              itemsPerSlide={1}
              ItemRender={MacbookListItem}
              currentFeature={currentFeature}
              onFeatureClickHandler={onFeatureClickHandler}
            />
          </MacbookMockup>
          <IPhoneMockup left='453px'>
            <Carousel
              carouselSlideAxis='x'
              initialActiveItem={INITIAL_ITEM_INDEX}
              items={project.features}
              itemsPerSlide={1}
              ItemRender={IPhoneListItem}
              currentFeature={currentFeature}
              onFeatureClickHandler={onFeatureClickHandler}
            />
          </IPhoneMockup>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
