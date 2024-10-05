import { createSlice, nanoid } from "@reduxjs/toolkit";

const usertodo=localStorage.getItem("list") !== null ? JSON.parse(localStorage.getItem("list")):[];

console.log(usertodo)
const initialState = {
    todos: usertodo.length===0 ? [
        {
            id: 1,
            text: "Welcome"
        }
    ] : usertodo
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            localStorage.setItem('list',JSON.stringify(state.todos));
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload )
            localStorage.setItem('list',JSON.stringify(state.todos));
        },
        updateTodo:(state,action)=>{
            state.todos.map((todo)=>{
                if(todo.id===action.payload.id){
                    todo.id=action.payload.id;
                    todo.text=action.payload.text;
                }
            })
            localStorage.setItem('list',JSON.stringify(state.todos));
        },
        removeAllTodo:(state,action)=>{
            state.todos=[];
            localStorage.setItem('list',JSON.stringify(state.todos));
        }
    }
})

export const {addTodo,removeTodo,updateTodo,removeAllTodo} = todoSlice.actions;


export default todoSlice.reducer;