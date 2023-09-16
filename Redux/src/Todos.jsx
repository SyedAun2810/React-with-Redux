import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import { removeTodo } from "./features/todoSlice"
 export default function Todos(){
    const todos= useSelector(state=> state.todos);
    const dispatch =useDispatch(); 
    console.log(todos);

    return (
        <div>
            <ul style={{color:"white"}}>
            {
            todos.map((item) => {
                return <li key={item.id} className="list-item">
                    <h3>{item.text}</h3>
                    <button onClick={() => dispatch(removeTodo(item.id))}> delete</button>
                </li>
            })
           }
            </ul>
        </div>
    )
}