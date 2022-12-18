import React, { useEffect } from 'react'
import { useTransitionCarousel } from 'react-spring-carousel'
import { TFeature } from '../data'
import { TListItemProps } from './FeatureListItem'

type TPhotosCarouselProps = {
  carouselSlideAxis: 'x' | 'y'
  items: TFeature[]
  currentFeature: TFeature
  onFeatureClickHandler: (feature: TFeature) => void
  ItemRender: ({
    liClickHandler,
    feature,
    currentFeature,
  }: TListItemProps) => JSX.Element
}

export const PhotosCarousel = ({
  carouselSlideAxis,
  items,
  ItemRender,
  currentFeature,
  onFeatureClickHandler,
}: TPhotosCarouselProps) => {
  const { carouselFragment, slideToItem } = useTransitionCarousel({
    carouselSlideAxis,
    withLoop: true,

    items: items.map((feature) => {
      return {
        id: feature.id,
        renderItem: (
          <ItemRender
            currentFeature={currentFeature}
            feature={feature}
            liClickHandler={onFeatureClickHandler}
          />
        ),
      }
    }),
  })

  useEffect(() => {
    slideToItem(currentFeature.id)
  }, [currentFeature])

  return <>{carouselFragment}</>
}
