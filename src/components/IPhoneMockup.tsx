import React from 'react'

type TIPhoneMockupProps = {
  left: string
  children: React.ReactNode
}

const IPhoneMockup = ({ left, children }: TIPhoneMockupProps) => {
  return (
    <div style={{ left: left }} className='absolute'>
      <div className='absolute top-[36px] left-1/2  h-[333px] w-[154px] -translate-x-1/2 overflow-hidden rounded-md bg-white'>
        {children}
      </div>
      <img
        className='relative top-[6px] w-[279px] max-w-none'
        src={require('../assets/iPhone13_mockup.png')}
      ></img>
    </div>
  )
}

export default IPhoneMockup
