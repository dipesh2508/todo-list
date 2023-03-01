import React from 'react'
import {TodoComp} from './TodoComp';

export const TodosList = (prop) => {
  return (
    <div className='container'>
      <h3 >My todo list</h3>
      {prop.todos.length ===0?"No todos to display":
      prop.todos.map((todos) => {
        return <TodoComp todos = {todos} key = {todos.sno} onDelete ={prop.onDelete} /> 
      })}
      
    </div>
  )
}
