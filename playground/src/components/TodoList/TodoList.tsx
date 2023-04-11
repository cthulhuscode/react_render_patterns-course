import { ReactNode } from "react";
import { ITodo } from "../../interfaces";
import "./style.css";

interface TodoListProps {
  todos: ITodo[];
  todosCount: number;
  error: boolean | Error;
  loading: boolean;
  onError: () => ReactNode;
  onLoading: () => ReactNode;
  onEmpty: () => ReactNode;
  onEmptySearchResults: () => ReactNode;
  children?: (todo: ITodo) => ReactNode;
  render?: (todo: ITodo) => ReactNode;
}

export const TodoList = ({
  error,
  loading,
  todos,
  todosCount,
  onError,
  onLoading,
  onEmpty,
  onEmptySearchResults,
  children,
  render,
}: TodoListProps) => {
  const renderFunc = children || render;

  return (
    <section className="TodoList">
      {/* Render props */}
      {error ? (
        onError()
      ) : loading ? (
        onLoading()
      ) : !loading && !todos.length && !!todosCount ? (
        onEmptySearchResults()
      ) : !loading && !todos.length && !todosCount ? (
        onEmpty()
      ) : (
        <ul>
          {/* {todos.map((todo) => render(todo))} */}
          {/* The same as above */}
          {todos.map(renderFunc!)}
        </ul>
      )}
    </section>
  );
};
