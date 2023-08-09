import React from 'react'
import { GrFormClose } from 'react-icons/gr'

export default function TodoList() {

  return (
    <div className="bg-primary-color text-secondary-color m-5 px-8 py-5 w-11/12 rounded-md">
        <ItemT text={"Todo 1"}/>
        <ItemT text={"Todo 1"}/>
        <ItemT text={"Todo 1"}/>
        <ItemT text={"Todo 1"}/>
        <ItemT text={"Todo 1"}/>
        <ItemT text={"Todo 1"}/>
    </div>
  )
}

const ItemT = ({text}) => (
  <ul className="py-2 my-2 px-2 shadow-md flex justify-between bg-primary-color-2 rounded-md">
    {text} <GrFormClose className="text-secondary-color"/>
    </ul>
)