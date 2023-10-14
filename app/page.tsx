'use client'

import { Content, CustomButton, Example, Hero } from '@/components'
import Rebalance from '@/components/Rebalance'
import { UserInputs } from '@/components/UserInputs'
import Image from 'next/image'
import { createContext } from 'vm'




export default function Home() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  const handleScroll = () => scrolltoHash('rebalance');

  return (
    <main className='overflow-hidden'>
      <div className="relative w-full h-screen ">
            <div className="absolute inset-0 mx-auto">
                <Image
                    src="/hero.jpg"
                    alt="background image"
                    fill

                />
            </div>
            <div className="relative z-10 flex flex-col items-center text-center justify-center h-full">
                <h1 className='text-[40px] md:text-[75px] leading-none tracking-tighter font-bold text-gray-200 mb-1'>Supercharge Your <span className='text__color '>Models</span> </h1>
                <p className='font-semibold tracking-tighter sm:text-[16px] md:text-[35px] text-gray-300'>Balancing Data for Peak Performance</p>
                <CustomButton
                  title='Get Started'
                  colorStyles='bg-[#6AB5D3]'
                  handleClick={handleScroll}
                />
            </div>
      </div>
      <Rebalance />
    </main>
  )
}
