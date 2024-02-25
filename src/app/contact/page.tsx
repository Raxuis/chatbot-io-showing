import { Navbar } from '@/components/Navbar'
import { BackgroundGradientDemo } from '@/components/ui/BgGradientCustom'
import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen w-full">
      <div className='w-[80%] mx-auto pt-2'>
        <Navbar />
        <div className='flex pt-24 gap-4 justify-center flex-wrap'>
          <BackgroundGradientDemo imageSrc={'/participants/benoit.jpeg'} />
          <BackgroundGradientDemo imageSrc={'/participants/edited-raph.jpg'} />
        </div>
      </div>
    </div>
  )
}

export default Contact
