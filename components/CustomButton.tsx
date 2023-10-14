import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ title, colorStyles, handleClick } : CustomButtonProps) => {
  return (
    <button className={
      `rounded-full font-medium 
      ${colorStyles} p-2 mt-5 text-slate-200 
      w-[150px] hover:bg-[#4884B9] hover:text-gray-100`
      }
      onClick={handleClick}
      >
        {title}
    </button>
  )
}

export default CustomButton