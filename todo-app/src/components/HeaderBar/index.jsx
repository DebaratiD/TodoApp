import React from 'react'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'
import { BiSearchAlt } from 'react-icons/bi'

export default function HeaderBar() {
  return (
    <div className="flex justify-between m-3">
        <div className="flex text-lg">TodoExpress <PiPaperPlaneTiltBold size={25}/></div>
        <div className="flex"><BiSearchAlt size={30}/><input className="outline-1 border-primary-color border-2"/></div>
    </div>
  )
}
