import './App.css';
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
import { TodosList } from './MyComponents/TodosList';
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos");
  }

  const addTodo = (title, desc) => {
    console.log("I am adding a todo");
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].so + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }





  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // {
  //   sno : 1,
  //   title : "Brush",
  //   desc : "Brush your teeth"
  // },
  // {
  //   sno : 2,
  //   title : "Eat",
  //   desc : "Eat your breakfast"
  // },
  // {
  //   sno : 3,
  //   title : "Walk",
  //   desc : "Go for a walk"
  // }

  return (
    <>
      <Router>
        <Header title='Todo' />

        <Routes>

          <Route exact path="/" element={ <AddTodo addTodo={addTodo} />}>
          </Route>

          <Route exact path='/' element={<TodosList todos={todos} onDelete={onDelete} />}>

          </Route>

          <Route exact path="/about" element={<About/>}>
            
          </Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
export default App;
