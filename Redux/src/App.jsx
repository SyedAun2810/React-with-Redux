import { useState } from "react"
import './index.css'
import {useDispatch} from 'react-redux'
import { addTodo } from "./features/todoSlice"
import Todos from "./Todos"


export default function App(){
  const [input, setInput]=useState('')
  const dispatch =useDispatch();


  const addTodoHandler =(e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  }


  return (
    <div className="main-container">
      
      <div className="container"> 
        <div>
        <h1>ToDo List</h1>
        <input type="text" onChange={(e) => setInput(e.target.value)}  className="inputbox"/>
        <button onClick={addTodoHandler}>Add</button>
        <Todos/>
        </div>
        
      </div>

    </div>
  )
}