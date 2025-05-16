'use client'

import React from 'react'
import { useState } from 'react'
import Steps from '@/components/steps'
import Image from 'next/image'
import SkipImage from "@/assets/images/skip.png"

interface Props {
    handleClick:(locaton:string) => void
}

const Location: React.FC<Props> = ({handleClick}) => {
    const [location, setLocation] = useState<string>("")

  return <div className='pb-10'>
      <div className='container flex items-start'>
        <div className='w-full md:max-w-[446px]'>
          <h1 className='text-center text-3xl/[30px] sm:text-4xl/9 md:text-left'>
            Which type of waste best describes what you are disposing of?
          </h1>
          <div className='border'></div>
          <button
            className='mx-auto mt-10 block h-12 w-[200px] cursor-pointer rounded-full bg-white text-base tracking-[2.4px] text-black md:mx-[unset]'
            onClick={() => handleClick(location)}
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
}

export default Location
