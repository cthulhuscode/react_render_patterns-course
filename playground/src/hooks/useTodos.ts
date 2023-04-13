import { Dispatch, SetStateAction, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { ITodo } from "../interfaces";

interface TodosContextType {
  error: boolean | Error;
  loading: boolean;
  todosCount: number;
  completedTodosCount: number;
  searchedTodos: ITodo[];
  searchVal: string;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setSearchVal: Dispatch<SetStateAction<string>>;
  toggleCompletion: (text: string) => void;
  addTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
}

export const useTodos = () => {
  /* Nos traemos todo el estado y las funciones de
 nuestra aplicación que queremos globales */
  const {
    item: todos,
    loading,
    error,
    setItem: setTodos,
    synchronizeItem: synchronizeTodos,
  } = useLocalStorage("todos_v1", []);
  const [searchVal, setSearchVal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const todosCount = todos.length;

  const completedTodosCount = todos.filter(
    (todo: ITodo) => !!todo.completed
  ).length;

  let searchedTodos: ITodo[] = [];
  if (searchVal.length >= 1) {
    searchedTodos = todos.filter((todo: ITodo) =>
      todo.text.toLowerCase().includes(searchVal.toLowerCase())
    );
  } else {
    searchedTodos = todos;
  }

  const toggleCompletion = (text: string) => {
    const todoIndex = todos.findIndex((todo: ITodo) => todo.text === text);
    const todosTemp = [...todos];

    let status;
    todosTemp[todoIndex].completed ? (status = false) : (status = true);
    todosTemp[todoIndex].completed = status;

    setTodos(todosTemp);
  };

  const addTodo = (text: string) => {
    const newTodo = { completed: false, text };
    const todosTemp = [...todos, newTodo];
    setTodos(todosTemp);
  };

  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo: ITodo) => todo.text === text);
    const todosTemp = [...todos];
    todosTemp.splice(todoIndex, 1);
    setTodos(todosTemp);
  };

  return {
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
    deleteTodo,
    synchronizeTodos,
  };
};
