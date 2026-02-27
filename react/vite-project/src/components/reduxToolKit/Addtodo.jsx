import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addTask,decrement,editTask,increment,resetValues,deleteTask } from './todoSlice';
const TodoApp = () => {
    const todos=useSelector((state)=>state.todos.items);
    const dispatch=useDispatch();

    // const [todos,setTodo]=useState([]);
    const [input,setInput]=useState("");
    // const [editinput,setEditInput]=useState("");
    const [editindex,setEditindex]=useState(null);
    const [date,setDate]=useState(new Date());
    
    useEffect(()=>{
        const timer=setInterval(() => {
            setDate(new Date());
        }, 1000);
        return()=>{
            clearInterval(timer);
        }
    },[]);

      const handleEdit = (index) => {
        setEditindex(index);
        setInput(todos[index].text);
      };  

     const handleAdd = () => {
        const trimmed = input.trim();
        if (!trimmed) return alert("Enter Task");
        dispatch(addTask(trimmed));
        setInput("");
      };

      const handleSave = () => {
        const trimmed=input.trim();
        if (!trimmed) 
          {
            return alert("Enter Task");
          }
        dispatch(
          editTask({
            index: editindex,
            newText: trimmed,
          })
        );

        setEditindex(null);
        setInput("");
      };  

  return (
    <>
    <div className=''>
        <label className='p-1 m-2 mr-28 '> Enter Task </label>

        <input 
        onChange={(e)=>{setInput(e.target.value)}}
        required
        value={input}
        className='p-1 border rounded m-2 hover:border-blue-500'
        placeholder='Task Name'
        type="text" />

        <button
          onClick={editindex !== null ? handleSave : handleAdd}
          className='bg-blue-500 p-2 mr-14 m-2 text-white rounded hover:bg-blue-700'
        >
          {editindex !== null ? "Save Task" : "Add Task"}
        </button>

        <button onClick={()=> dispatch(resetValues())} className='bg-red-500 font p-1 ml-8  m-2 rounded text-white text-center  hover:bg-red-700'>Reset Number of Persons</button>
      <input
            className='bg-red-500 mx-0 text-center text-3xl font-bold p-1 ml-20 rounded text-taupe-50 mt-1'
            type="text"
            value={`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
            readOnly
        />

        <section>
            <ul>
                {
                    todos.map((item,i)=>
                    (
                        <li key={i}>
                            <button onClick={()=>dispatch(increment(i))} className='p-1 rounded bg-gray-500 text-white hover:bg-gray-700'>+</button>

                            <button onClick={()=>dispatch(decrement(i))} className='px-2 p-1  mr-3 rounded bg-gray-500 text-white hover:bg-gray-700' >-</button>
                            
                            <span  className={
                              item.value<0 
                              ? "bg-red-500 px-2 rounded  font-bold mr-3"
                             : item.value===0
                             ?
                              "bg-yellow-500 text-white  rounded px-2 mr-3 "
                            : "bg-green-500 px-2 rounded  font-bold mr-3"
                            }>{item.value===0? "person zero":`person : ${item.value}`}</span>
                            <span>{item.text}</span>                                                        <button
                                className='bg-[#138bb7] font-medium p-1 px-2 m-2 rounded text-white hover:bg-[#0f6d8f]'
                                onClick={() => handleEdit(i)}
                            >
                                Edit
                            </button>

                            <button className='bg-red-600 text p-1 px-2 m-2 rounded text-white hover:bg-red-700' onClick={()=>{dispatch(deleteTask(i))}}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </section>

    </div>
    </>
  )
}

export default TodoApp
