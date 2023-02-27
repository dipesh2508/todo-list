import './App.css';
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
import { TodosList } from './MyComponents/TodosList';
import React, {useState} from 'react';

function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
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
              <TodosList todos={todos} onDelete={onDelete}/>
              <Footer/>
            </>
        );
}
        export default App;
