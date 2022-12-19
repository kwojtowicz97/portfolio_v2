import React from 'react'

type TIPhoneMockupProps = {
  left: string
  children: React.ReactNode
}

const IPhoneMockup = ({ left, children }: TIPhoneMockupProps) => {
  return (
    <div className='absolute h-full translate-x-[144%]'>
      <div className='absolute top-[2.3%] left-1/2  aspect-[18/39] w-[90%] -translate-x-1/2 overflow-hidden rounded-lg bg-white'>
        {children}
      </div>
      <img
        className='relative h-full'
        src={require('../assets/iPhone13_mockup.webp')}
      ></img>
    </div>
  )
}

export default IPhoneMockup
