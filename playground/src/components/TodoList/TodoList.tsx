import { useContext } from 'react'
import { TodosContext } from '../../context/TodosContext'

import './style.css'
import { ITodo } from '../../interfaces'
import {
  TodoItem,
  TodosEmpty,
  TodosError,
  TodosLoading
} from '../../components'

export const TodoList = () => {
  const { error, loading, searchedTodos } = useContext(TodosContext)

  return (
    <div className='TodoList'>
      <ul>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {!loading && (searchedTodos.length === 0) && !error && <TodosEmpty />}

        {searchedTodos.map((todo: ITodo) => (
          <TodoItem key={todo.text} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
