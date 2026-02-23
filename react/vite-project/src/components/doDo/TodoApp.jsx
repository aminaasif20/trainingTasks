import React, { useEffect, useState } from 'react'

const TodoApp = () => {
    const [todos,setTodo]=useState([]);
    const [input,setInput]=useState("");
    const [editinput,setEditInput]=useState("");
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



    const handleInputChange=(value)=>{
        setInput(value);
    }

    const handleTask=()=>{
        const trimInput=input.trim();
        if(!trimInput){
            alert("Enter Task");
            return;
        }
        if(editindex!==null){
            const newtodos=[...todos];
            newtodos[editindex].text=trimInput;
            setTodo(newtodos);
            setEditindex(null);
            
        }
        else{
            setTodo((pre)=>[...pre,{text:trimInput,value:0}]);
            
         }
       setInput("");
    }

    const handleDelete=(index)=>{
        if(editindex===index){
            setEditindex(null);
        
        }
        const newToDo=todos.filter((_,i)=>i!==index);
        setTodo(newToDo);
    }
    
    const handleEdit=(index)=>{
        setEditindex(index);
        setEditInput(todos[index].text);
        // handleTask();

    }

    const handleIncrement=(index)=>{
        setTodo(
            todos.map((item,i)=>
            i===index ?
            {...item,value:item.value+1} : item
           
            )

        )
    }
    const handleDecrement=(index)=>{
        setTodo(
            todos.map((item,i)=>

                i===index 
                ? {...item,value:item.value-1} : item
        )
        )
    }
    const resetPerson=()=>{
        
    }
    const handleReset=()=>{
        setTodo(
            todos.map(item=>({
            ...item,value:0
            }))
        )
    }
    const handleSave = () => {
        const trimmedText = editinput.trim();
        if (!trimmedText) {
            alert("Task cannot be empty");
            return;
        }
        const newTodos = [...todos];
        newTodos[editindex].text = trimmedText; // update text of specific item
        setTodo(newTodos); // update state
        setEditindex(null); // exit edit mode
        setEditInput(""); // clear edit input
    };

  return (
    <>
    <div className='mt-1'>
        <label className='p-2 m-2 mr-20 '> Enter Task </label>

        <input 
        onChange={(e)=>{setInput(e.target.value)}}
        required
        value={input}
        className='p-2 border rounded m-2 hover:border-blue-500'
        placeholder='Task Name'
        type="text" />

        <button
        onClick={handleTask}
        className='bg-blue-500 p-2 mr-14 m-2 text-white rounded hover:bg-blue-700'    
        >Add Task</button>
        <button onClick={handleReset} className='bg-red-600 font-medium p-1 px-2 m-2 rounded text-white hover:bg-red-700'>Reset Number of Persons</button>
      <input
            className='bg-red-600 text-3xl p-4 ml-20 rounded text-taupe-50 mt-2'
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
                            <button onClick={()=>handleIncrement(i)} className='p-1 m-2 rounded bg-gray-500 text-white hover:bg-gray-700'>+</button>

                            <button onClick={()=>handleDecrement(i)} className='px-2 p-1 m-2 mr-6 rounded bg-gray-500 text-white hover:bg-gray-700' >-</button>
                            
                            <span  className={item.value===0 ? "bg-yellow-500 m-2 p-1.5 mr-3":"bg-blue-500 m-2 p-1.5 mr-3"}>{item.value===0? "person: 0":`person : ${item.value}`}</span>

                            {editindex===i?(
                                <>
                                <input type="text"
                                className='border'
                                value={editinput}
                                onChange={(e)=>setEditInput(e.target.value)}
                                />
                                <button className='bg-green-600 font-medium p-1 px-2 m-2 rounded text-white' onClick={ handleSave}>save</button>
                                </>

                            ):(
                                <>
                                <span className='bg-blue-400 text-white px-2 p-1 rounded'>
                                {item.text}
                                </span>

                                <button
                                className='bg-green-600 font-medium p-1 px-2 m-2 rounded text-white'
                                onClick={() => handleEdit(i)}
                                >
                                Edit
                                </button>
                                
                                </>
                            )
                            }
                            

                            <button className='bg-red-600 font-medium p-1 px-2 m-2 rounded text-white hover:bg-red-700' onClick={()=>{handleDelete(i)}}>Delete</button>
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
