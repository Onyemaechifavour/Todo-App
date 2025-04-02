import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ToDo = ({task,toggleComplete,deleteTodo,editToDo})=>{
    return(
        <div className='todo'>
            <p onClick={()=> toggleComplete(task.id)} classsName={`${task.complected ? 'complected' : ''}`}>{task.task}</p>
            <div className='icons'>
                <FontAwesomeIcon className="icon" icon={faPenToSquare} onClick={()=> editToDo(task.id)}/>
                <FontAwesomeIcon className="icon" icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
            </div>
        </div>
    )
}