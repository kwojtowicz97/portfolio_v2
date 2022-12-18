import React from 'react'
import { TFeature, TProject } from '../data'
import { Carousel } from './Carousel'
import IPhoneListItem from './IPhoneListItem'
import IPhoneMockup from './IPhoneMockup'
import MacbookListItem from './MacbookListItem'
import MacbookMockup from './MacbookMockup'

type TMockupsProps = {
  initial: number
  project: TProject
  currentFeature: TFeature
  onFeatureClickHandler: (feature: TFeature) => void
}

export const Mockups = ({
  initial,
  project,
  currentFeature,
  onFeatureClickHandler,
}: TMockupsProps) => {
  return (
    <div className='relative ml-0 h-full w-full -translate-y-3 xl:ml-12'>
      <MacbookMockup left='-75px'>
        <Carousel
          carouselSlideAxis='y'
          initialActiveItem={initial}
          items={project.features}
          itemsPerSlide={1}
          ItemRender={MacbookListItem}
          currentFeature={currentFeature}
          onFeatureClickHandler={onFeatureClickHandler}
        />
      </MacbookMockup>
      <IPhoneMockup left='415px'>
        <Carousel
          carouselSlideAxis='x'
          initialActiveItem={initial}
          items={project.features}
          itemsPerSlide={1}
          ItemRender={IPhoneListItem}
          currentFeature={currentFeature}
          onFeatureClickHandler={onFeatureClickHandler}
        />
      </IPhoneMockup>
    </div>
  )
}
