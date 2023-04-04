import { useContext } from 'react'
import { TodosContext } from '../../context/TodosContext'
import { FaCheckCircle, FaRegTimesCircle } from 'react-icons/fa'
import './style.css'

export const TodoItem = ({ todo }) => {
  const { toggleCompletion, deleteTodo } = useContext(TodosContext)
  const { text, completed } = todo

  return (
    <div className='TodoItem'>
      <li>
        <FaCheckCircle
          className={`item-check ${completed ? 'completed' : 'uncompleted'}`}
          onClick={() => toggleCompletion(text)}
        />
        <span className={`${completed ? 'item-text-completed' : ''}`}>
          {text}
        </span>
        <FaRegTimesCircle
          className='item-delete'
          onClick={() => deleteTodo(text)}
        />
      </li>
    </div>
  )
}
