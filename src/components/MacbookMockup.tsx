import React, { Children } from 'react'
import { useTransitionCarousel } from 'react-spring-carousel'

type TMacbookMockupProps = {
  left: string
  children: React.ReactNode
}

const MacbookMockup = ({ left, children }: TMacbookMockupProps) => {
  return (
    <div style={{ left: left }} className='absolute left-[-49px]'>
      <div className='absolute top-[43px] left-1/2 h-[298px] w-[477px] -translate-x-1/2 overflow-hidden'>
        {children}
      </div>
      <img
        className={`relative w-[700px]  max-w-none`}
        src={require('../assets/macbook_mockup.png')}
      ></img>
    </div>
  )
}

export default MacbookMockup
