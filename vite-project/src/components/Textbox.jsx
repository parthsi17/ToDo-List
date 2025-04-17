import React from 'react'

function Textbox({inputVal, inputTodo , addTodo}) {
  return (
    <div className='input-container'>
        <input input type="text" value={inputVal} onChange={inputTodo} />
        <button onClick={addTodo}> + </button>
      </div >
  )
}

export default Textbox
 