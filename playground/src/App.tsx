import {
  CreateTodoButton,
  Modal,
  TodoCounter,
  TodoForm,
  TodoHeader,
  TodoItem,
  TodoList,
  TodoSearch,
  TodosEmpty,
  TodosError,
  TodosLoading,
} from "./components";
import { ITodo } from "./interfaces";
import { useTodos } from "./hooks";

const App = () => {
  const {
    openModal,
    error,
    loading,
    searchedTodos,
    todosCount,
    searchVal,
    completedTodosCount,
    setOpenModal,
    setSearchVal,
    addTodo,
    toggleCompletion,
    deleteTodo,
  } = useTodos();

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>

      <TodoHeader>
        <TodoCounter
          todosCount={todosCount}
          completedTodosCount={completedTodosCount}
        />
        <TodoSearch searchVal={searchVal} setSearchVal={setSearchVal} />
      </TodoHeader>

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {!loading && searchedTodos.length === 0 && !error && <TodosEmpty />}

        {searchedTodos.map((todo: ITodo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            toggleCompletion={toggleCompletion}
            deleteTodo={deleteTodo}
          />
        ))}
      </TodoList>

      {!!openModal && document.getElementById("modal") != null && (
        <Modal closeModal={setOpenModal}>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
        error={error}
        loading={loading}
      />
    </div>
  );
};

export default App;
