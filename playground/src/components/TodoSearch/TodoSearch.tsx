import { ChangeEvent, Dispatch, SetStateAction } from "react";
import "./style.css";

interface TodoSearchProps {
  searchVal: string;
  setSearchVal: Dispatch<SetStateAction<string>>;
}

export const TodoSearch = ({ searchVal, setSearchVal }: TodoSearchProps) => {
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
