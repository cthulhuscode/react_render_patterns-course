import "./style.css";

interface TodoCounterProps {
  todosCount: number;
  completedTodosCount: number;
}

export const TodoCounter = ({
  todosCount,
  completedTodosCount,
}: TodoCounterProps) => {
  return (
    <div className="TodoCounter">
      <h2>
        Has completado {completedTodosCount} de {todosCount} To-dos
      </h2>
    </div>
  );
};
