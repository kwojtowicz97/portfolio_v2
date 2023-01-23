import React, { Children } from 'react'
import { useTransitionCarousel } from 'react-spring-carousel'

type TMacbookMockupProps = {
  children: React.ReactNode
  iPhonePreview: boolean
}

const MacbookMockup = ({ children, iPhonePreview }: TMacbookMockupProps) => {
  return (
    <div
      className={`absolute h-full ${
        iPhonePreview ? `-translate-x-[5%]` : `translate-x-[1%]`
      }`}
    >
      <div className='absolute top-[4.3%] left-1/2 aspect-[16/10] w-[79%] -translate-x-1/2 overflow-hidden'>
        {children}
      </div>
      <img
        className={`h-full`}
        src={require('../assets/macbook_mockup.webp')}
      ></img>
    </div>
  )
}

export default MacbookMockup
