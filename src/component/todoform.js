import React, {useState} from "react";

export const ToDoForm = ({addTodo})=>{
    const [value,setValue]=useState('')

    const handleSubmit= (e)=>{
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
             type='text' 
             className='todo-input' 
             placeholder='what is the task today ?'
             value={value}
             onChange={(e) => setValue(e.target.value)}
             />
            <button type='sumbit' className='todo-btn'>Add task</button>
        </form>
    )
}