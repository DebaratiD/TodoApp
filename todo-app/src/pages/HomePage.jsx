import React, {useState} from 'react'
import VETodo from '../components/VETodo/VETodo'
import TodoList from '../components/TodoList/TodoList';
import OptionsBar from '../components/OptionsBar';
import HeaderBar from '../components/HeaderBar';

export default function HomePage() {
    const [createTodo, setCreateTodo] = useState(false)
    const name = "John Doe";
    const isCreateNew = () => {
        setCreateTodo(true);
    }
  return (
    <>
      <HeaderBar/>
      <div className='username'>Welcome, {name}!</div>
      <div className="h-11/12 w-screen flex justify-between">
        <TodoList/>
        <OptionsBar />
      </div>
        
        <button onClick={isCreateNew}>Create new todo!</button>
        {createTodo && <VETodo setCreateTodo = {setCreateTodo}/>}
    </>
    
  )
}
