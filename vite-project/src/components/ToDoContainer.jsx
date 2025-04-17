import React from 'react'
import Todo from './Todo'

function ToDoContainer({toDos, deleteTodo}) {
    console.log("cnde",toDos)
    return (
        <div className='container'>
            {toDos.map((todo, index)=>{
                return (
                    <Todo todo={todo} index={index} deleteTodo={deleteTodo} />
                )
            })}


        </div>
    )
}

export default ToDoContainer;
