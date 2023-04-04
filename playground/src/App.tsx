import { useContext } from "react";
import {
  CreateTodoButton,
  Modal,
  TodoCounter,
  TodoForm,
  TodoList,
  TodoSearch,
} from "./components";
import { TodosContext } from "./context";

const App = () => {
  const { openModal, setOpenModal } = useContext(TodosContext);

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>
      <TodoCounter />

      <TodoSearch />

      <TodoList />

      {!!openModal && document.getElementById("modal") && (
        <Modal closeModal={setOpenModal}>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </div>
  );
};

export default App;
