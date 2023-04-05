import { ReactNode } from "react";
import "./style.css";

interface TodoListProps {
  children: ReactNode;
}

export const TodoList = ({ children }: TodoListProps) => {
  return (
    <section className="TodoList">
      <ul>{children}</ul>
    </section>
  );
};
