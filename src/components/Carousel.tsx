import React, { useEffect } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import { TFeature } from '../data'
import { TListItemProps } from './FeatureListItem'

type TCarouselProps = {
  carouselSlideAxis: 'x' | 'y'
  itemsPerSlide: number
  initialActiveItem: number
  items: TFeature[]
  currentFeature: TFeature
  onFeatureClickHandler: (feature: TFeature) => void
  ItemRender: ({
    liClickHandler,
    feature,
    currentFeature,
  }: TListItemProps) => JSX.Element
}

export const Carousel = ({
  carouselSlideAxis,
  itemsPerSlide,
  initialActiveItem,
  items,
  ItemRender,
  currentFeature,
  onFeatureClickHandler,
}: TCarouselProps) => {
  const { carouselFragment, slideToItem } = useSpringCarousel({
    carouselSlideAxis,
    itemsPerSlide,
    disableGestures: true,
    initialActiveItem,
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
