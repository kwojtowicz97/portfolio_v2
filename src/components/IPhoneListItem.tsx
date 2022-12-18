import React from 'react'
import { TListItemProps } from './FeatureListItem'

const IPhoneListItem = ({ feature }: TListItemProps) => {
  return <img src={process.env.PUBLIC_URL + 'assets/ip_sample.jpeg'}></img>
}

export default IPhoneListItem
