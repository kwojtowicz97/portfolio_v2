import React from 'react'
import { TListItemProps } from './FeatureListItem'

const MacbookListItem = ({ feature }: TListItemProps) => {
  return <img src={process.env.PUBLIC_URL + feature.mbPhoto}></img>
}

export default MacbookListItem
