import React from 'react'

export const TodoComp = ({todos, onDelete}) => {
  return (
    <div>
      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      <button className='btn btn-danger' onClick = {()=>{onDelete(todos)}}>Delete</button>
    </div>
  )
}
