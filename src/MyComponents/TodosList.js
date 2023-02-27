import React from 'react'
import {TodoComp} from './TodoComp';

export const TodosList = (prop) => {
  return (
    <div className='container'>
      <h3 className='text-center'>My todo list</h3>

      {prop.todos.map((todos) => {
        return <TodoComp todos = {todos} key = {todos.sno} onDelete ={prop.onDelete} /> 
      })}
      
    </div>
  )
}
