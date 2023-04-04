import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { useLocalStorage } from '../hooks'
import { ITodo } from '../interfaces'

interface TodosContextType {
  error: boolean | Error
  loading: boolean
  todosCount: number
  completedTodosCount: number
  searchedTodos: ITodo[]
  searchVal: string
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
  setSearchVal: Dispatch<SetStateAction<string>>
  toggleCompletion: (text: string) => void
  addTodo: (text: string) => void
  deleteTodo: (text: string) => void
}

/* Al crear el contexto también podemos pasarle
un valor inicial entre los paréntesis */
export const TodosContext = createContext<TodosContextType>(
  {} as TodosContextType
)

/* El Context devuelve un Provider y un Consumer */
// const { Provider, Consumer } = createContext();

export const TodosProvider = (props: any) => {
  /* Nos traemos todo el estado y las funciones de
 nuestra aplicación que queremos globales */
  const {
    item: todos,
    loading,
    error,
    setItem: setTodos
  } = useLocalStorage('todos_v1', [])

  const [searchVal, setSearchVal] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const completedTodosCount = todos.filter(
    (todo: ITodo) => !!todo.completed
  ).length
  const todosCount = todos.length
  let searchedTodos: ITodo[] = []

  if (searchVal.length >= 1) {
    searchedTodos = todos.filter((todo: ITodo) =>
      todo.text.toLowerCase().includes(searchVal.toLowerCase())
    )
  } else {
    searchedTodos = todos
  }

  const toggleCompletion = (text: string) => {
    const todoIndex = todos.findIndex((todo: ITodo) => todo.text === text)
    const todosTemp = [...todos]

    let status
    todosTemp[todoIndex].completed ? (status = false) : (status = true)
    todosTemp[todoIndex].completed = status

    setTodos(todosTemp)
  }

  const addTodo = (text: string) => {
    const newTodo = { completed: false, text }
    const todosTemp = [...todos, newTodo]
    setTodos(todosTemp)
  }

  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo: ITodo) => todo.text === text)
    const todosTemp = [...todos]
    todosTemp.splice(todoIndex, 1)
    setTodos(todosTemp)
  }

  /* La propiedad value es especial de react y ahí debe
    estar todo lo que se quiera compartir en el context
  */
  /* Retornamos nuestro proveedor con nuestro context
   en la etiqueta value, que recibirá a toda nuestra
  aplicación, por eso necesitamos la prop children */

  return (
    <TodosContext.Provider
      value={{
        error,
        loading,
        todosCount,
        completedTodosCount,
        searchedTodos,
        searchVal,
        openModal,
        setOpenModal,
        setSearchVal,
        toggleCompletion,
        addTodo,
        deleteTodo
      }}
    >
      {props.children}
    </TodosContext.Provider>
  )
}
