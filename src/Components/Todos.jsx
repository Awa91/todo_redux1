import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo,updateTodo } from "../Features/todo/todoslice"
import Addtodo from './Addtodo';

function Todos() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [editform,setEditform]=useState(false);
  const [updatetodo,setupdateTodo]=useState({})

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("");
  }

  const handleEdit=(todo)=>{
    setEditform(!editform);
    setInput(todo.text);
    setupdateTodo(todo);
  }

  const updateTodoHandler=(e)=>{
    e.preventDefault()
    let editObject={
      id: updatetodo.id,
      text:input
    }
    dispatch(updateTodo(editObject));
    setEditform(false);
    setInput("");
  }

  useEffect(()=>{

  },[updatetodo])
  return (
    <>
    <div className='font-bold text-2xl'>Made by akash</div>
     { editform ? <form onSubmit={updateTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-3 w-[50%]"
        >
          Update Todo
        </button>
      </form>  
      
      :  <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg mt-3 w-[50%]"
        >
          Add Todo
        </button>
      </form>}
      <Addtodo 
      handleEdit={handleEdit}
      />
    </>

  )
}

export default Todos