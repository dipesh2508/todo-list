import './App.css';
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
import { TodosList } from './MyComponents/TodosList';
import { AddTodo } from "./MyComponents/AddTodo";
import React, {useState} from 'react';

function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title, desc) =>{
    console.log("I am adding a todo");
    let sno = todos[todos.length-1].so +1;
    const myTodo = {
      sno : sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno : 1,
      title : "Brush",
      desc : "Brush your teeth"
    },
    {
      sno : 2,
      title : "Eat",
      desc : "Eat your breakfast"
    },
    {
      sno : 3,
      title : "Walk",
      desc : "Go for a walk"
    }
  ])

  return (
            <>
              <Header title = 'Todo'/>
              <AddTodo addTodo = {addTodo} />
              <TodosList todos={todos} onDelete={onDelete}/>
              <Footer/>
            </>
        );
}
        export default App;
