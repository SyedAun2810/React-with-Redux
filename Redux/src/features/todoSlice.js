import {createSlice,nanoid } from "@reduxjs/toolkit"
const initialState={
    todos:[{
        id:1,
        text:"Hello from the Redux"
    }],

}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{ 
        addTodo: (state, action) => {
            const todo={
                id:nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action) => {
            state.todos= state.todos.filter((todo) =>
            (todo.id !== action.payload ) ) 
        }
    },

})

export const {addTodo,removeTodo,reducers} = todoSlice.actions;


export default todoSlice.reducer;

