import React from 'react'
import {AiOutlinePlus } from 'react-icons/ai'
import { BsCalendarWeek } from 'react-icons/bs'
import { HiOutlineDownload } from 'react-icons/hi'

export default function OptionsBar() {
  return (
    <div className="my-5 mx-2 p-1 text-secondary-color grid align-top h-fit">
        <OptionIcon icon={<AiOutlinePlus size={40}/>} />
        <OptionIcon icon={<BsCalendarWeek size={40}/>} />
        <OptionIcon icon={<HiOutlineDownload size={40}/>} />
    </div>
  )
}

const OptionIcon = ({icon})=>(
  <span className="p-3 m-2 bg-pink-500 w-max h-max rounded-full shadow-lg hover:shadow-card cursor-pointer ease-in-out duration-200">
    {icon} 
  </span>
);