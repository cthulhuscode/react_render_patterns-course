import "./style.css";

interface TodoCounterProps {
  todosCount: number;
  completedTodosCount: number;
  loading?: boolean;
}

export const TodoCounter = ({
  todosCount,
  completedTodosCount,
  loading,
}: TodoCounterProps) => {
  return (
    <div className="TodoCounter">
      <h2
        className={`TodoCounter__text ${
          loading ? "TodoCounter__text--loading" : ""
        }`}
      >
        Has completado {completedTodosCount} de {todosCount} To-dos
      </h2>
    </div>
  );
};
