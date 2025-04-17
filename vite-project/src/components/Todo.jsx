import React from 'react'

function Todo({todo, index, deleteTodo}) {
    console.log("checkkw22", todo)
    return (
        <div className='class-container'>
           
            <div className='ToDo'> 
               <p> {todo}</p>
                <div className='actions'>
                    <input type="checkbox" />
                    <button onClick={()=>deleteTodo(index)}>
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Todo;
