import React from 'react'

const TodoForm = () => {
  return (
    <form className='TodoForm'>
      <input type="text" className='todo-input'
       placeholder='Enter Task'/>
       <button type='submit' className='todo-btn'></button>
    </form>
  )
}

export default TodoForm
