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

      <TodoHeader loading={loading}>
        <TodoCounter
          todosCount={todosCount}
          completedTodosCount={completedTodosCount}
        />
        <TodoSearch searchVal={searchVal} setSearchVal={setSearchVal} />
      </TodoHeader>

      <TodoList
        todosCount={todosCount}
        loading={loading}
        error={error}
        todos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={() => <TodosEmpty />}
        onEmptySearchResults={() => <p>{searchVal} wasn't found</p>}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            toggleCompletion={toggleCompletion}
            deleteTodo={deleteTodo}
          />
        )}
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
