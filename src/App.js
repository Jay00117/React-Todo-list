import './App.css';
import { Header } from "./My Components/Header";
import { Todos } from './My Components/Todos';
import { Footer } from './My Components/Footer';
import { Addtodo } from './My Components/Addtodo';
import React, { useState, useEffect } from 'react';
import { About } from './My Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todoitem) => {
    console.log("I am onDelete of todoitem", todoitem);

    setTodos(todos.filter((e) => {
      return e !== todoitem;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));


  }, [todos])
  return (
    <>
      <Router>


        <Header tittle="My TODOS list" searchBar={true} />


        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />

              </>)
          }} >
          </Route>


          <Route exact path="/about">
            <About />
          </Route>
        </Switch>



        <Footer />
      </Router>
    </>
  );
}

export default App;
