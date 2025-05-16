'use client'

import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import SkipImage from '@/assets/images/skip.png'
import Steps from '@/components/steps'

interface Props {
  handleClick: (wastType: string) => void
}

const Permit: React.FC<Props> = ({handleClick}) => {
  const [wastType, setWasteType] = useState<string>("")
  
  return (
    <div className='pb-10'>
      <div className='container flex items-start'>
        <div className='w-full md:max-w-[446px]'>
          <h1 className='text-center text-3xl/[30px] sm:text-4xl/9 md:text-left'>
            Which type of waste best describes what you are disposing of?
          </h1>
          <div className='border'></div>
          <button
            className='mx-auto mt-10 block h-12 w-[200px] cursor-pointer rounded-full bg-white text-base tracking-[2.4px] text-black md:mx-[unset]'
            onClick={() => handleClick(wastType)}
          >
            Continue
          </button>
        </div>
        <div className='mt-10 ml-auto hidden md:block'>
          <Steps />
          <Image
            src={SkipImage}
            alt=''
            className='mt-16 hidden h-fit w-[480px] translate-x-5 lg:block'
          />
        </div>
      </div>
    </div>
  )
}

export default Permit
