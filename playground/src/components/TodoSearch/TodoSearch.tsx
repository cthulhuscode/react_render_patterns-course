import { ChangeEvent, EventHandler, useContext } from "react";
import { TodosContext } from "../../context/TodosContext";
import "./style.css";

export const TodoSearch = () => {
  const { searchVal, setSearchVal } = useContext(TodosContext);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className="TodoSearch">
      <input
        type="text"
        placeholder="hacer..."
        onChange={onSearch}
        value={searchVal}
      />
    </div>
  );
};
