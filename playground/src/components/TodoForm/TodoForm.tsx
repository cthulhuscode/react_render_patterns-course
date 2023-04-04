import { useContext, useState } from 'react'
import { TodosContext } from '../../context/TodosContext'
import './style.css'

export const TodoForm = () => {
  const [todoText, setTodoText] = useState('')
  const { setOpenModal, addTodo } = useContext(TodosContext)

  const onCancel = () => {
    /* Así se puede acceder al estado previo del state */
    setOpenModal((prevState) => !prevState)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(todoText)
    setTodoText('')
    onCancel()
  }

  return (
    <form className='TodoForm' onSubmit={onSubmit}>
      <label htmlFor='text'>Write your Todo</label>
      <textarea
        name='text'
        id='text'
        cols='40'
        rows='10'
        placeholder='Cortar el cesped'
        onChange={(e) => {
          setTodoText(e.target.value)
        }}
        value={todoText}
        autoFocus
      />
      <div className='TodoForm-button_container'>
        <button
          className='TodoForm-button_cancel'
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className='TodoForm-button_add' type='submit'>
          Add
        </button>
      </div>
    </form>
  )
}
