import React from 'react'
import {TodoComp} from './TodoComp';

export const TodosList = (prop) => {
  let myStyle = {
    minheight : "70vh",
    margin : "10px auto"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 >My todo list</h3>
      {prop.todos.length ===0?"No todos to display":
      prop.todos.map((todos) => {
        return (
          <>
          <TodoComp todos = {todos} key = {todos.sno} onDelete ={prop.onDelete}/> <hr /> 
          </> 
        )
      })}
      
    </div>
  )
}
