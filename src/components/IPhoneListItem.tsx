import React from 'react'
import { TListItemProps } from './FeatureListItem'

const IPhoneListItem = ({ feature }: TListItemProps) => {
  return (
    <img
      src={process.env.PUBLIC_URL + (feature.ipPhoto ? feature.ipPhoto : '')}
    ></img>
  )
}

export default IPhoneListItem
