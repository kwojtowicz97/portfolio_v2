import React from 'react'
import { TFeature, TProject } from '../data'
import { Carousel } from './Carousel'
import IPhoneListItem from './IPhoneListItem'
import IPhoneMockup from './IPhoneMockup'
import MacbookListItem from './MacbookListItem'
import MacbookMockup from './MacbookMockup'
import { PhotosCarousel } from './PhotosCarousel'

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
    <div className='relative flex aspect-[768/400] w-full justify-center'>
      <MacbookMockup>
        <PhotosCarousel
          carouselSlideAxis='y'
          items={project.features}
          ItemRender={MacbookListItem}
          currentFeature={currentFeature}
          onFeatureClickHandler={onFeatureClickHandler}
        />
      </MacbookMockup>
      <IPhoneMockup left='415px'>
        <PhotosCarousel
          carouselSlideAxis='x'
          items={project.features}
          ItemRender={IPhoneListItem}
          currentFeature={currentFeature}
          onFeatureClickHandler={onFeatureClickHandler}
        />
      </IPhoneMockup>
    </div>
  )
}
