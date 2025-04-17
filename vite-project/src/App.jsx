import React, { useState } from 'react'
import "./App.css";
import ToDoContainer from './components/ToDoContainer';
import Textbox from './components/Textbox';
import ToDo from './components/ToDoContainer';

function App() {
  const [input, setInput] = useState('')
  const [toDos, setTodo] = useState([])
  function inputTodo(e) {
    console.log(e.target.value)
    setInput(e.target.value)
    // setTodo([...toDos, e.target.value])
  }

  function addTodo () {
    if(input != '') {
      setTodo((x) =>[...x, input])
      setInput('')
    }

  }
  function deleteTodo(todoIndex){
    setTodo((prevTodos)=> prevTodos.filter((prevTodos, prevTodosIndex)=>{
      console.log("prevTodosIndex != todoIndex", prevTodosIndex != todoIndex)
      return prevTodosIndex != todoIndex
    })
  )  
  }

  console.log("Todo", toDos)
  return (
    <main>
      <h1> To-do List</h1>
      <Textbox inputVal = {input}  inputTodo={inputTodo} addTodo={addTodo} />
      <ToDoContainer toDos = {toDos} deleteTodo = {deleteTodo} />


    </main>


  )
}

export default App
