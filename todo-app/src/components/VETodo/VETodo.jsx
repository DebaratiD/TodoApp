import React from 'react'

export default function VETodo({setCreateTodo}) {
  return (
    <div className="h-4 w-4 rounded-md bg-slate-100">
      <button onClick={()=>setCreateTodo(false)}>close</button>
        <form>
            <input type='text' placeholder='What do you want to do?'/>
            <input type='datetime-local' placeholder='When?' />
        </form>
    </div>
  )
}
