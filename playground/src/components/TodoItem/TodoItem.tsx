import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { ITodo } from "../../interfaces";
import "./style.css";

interface TodoItemProps {
  todo: ITodo;
  toggleCompletion: (text: string) => void;
  deleteTodo: (text: string) => void;
}

export const TodoItem = ({
  todo,
  toggleCompletion,
  deleteTodo,
}: TodoItemProps) => {
  const { text, completed } = todo;

  return (
    <div className="TodoItem">
      <li>
        <FaCheckCircle
          className={`item-check ${completed ? "completed" : "uncompleted"}`}
          onClick={() => toggleCompletion(text)}
        />
        <span className={`${completed ? "item-text-completed" : ""}`}>
          {text}
        </span>
        <FaRegTimesCircle
          className="item-delete"
          onClick={() => deleteTodo(text)}
        />
      </li>
    </div>
  );
};
