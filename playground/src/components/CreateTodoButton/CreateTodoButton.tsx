import { Dispatch, SetStateAction } from "react";
import "./style.css";

interface CreateTodoButtonProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
  error: boolean | Error;
  loading: boolean;
}

export const CreateTodoButton = ({
  setOpenModal,
  openModal,
  error,
  loading,
}: CreateTodoButtonProps) => {
  const onNewTodo = () => {
    setOpenModal(true);
  };

  return (
    <>
      {!error && !loading && (
        <button
          className={`CreateTodoButton ${openModal && "on-modal"}`}
          onClick={() => onNewTodo()}
        >
          New Todo
        </button>
      )}
    </>
  );
};
