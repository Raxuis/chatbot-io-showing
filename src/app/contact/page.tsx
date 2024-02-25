import { Navbar } from '@/components/Navbar'
import { BackgroundGradientCustom } from '@/components/ui/BgGradientCustom'
import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen w-full">
      <div className='w-[80%] mx-auto pt-2'>
        <Navbar />
        <BackgroundGradientCustom />
      </div>
    </div>
  )
}

export default Contact
