import { ChangeEvent, Dispatch, SetStateAction } from "react";
import "./style.css";

interface TodoSearchProps {
  searchVal: string;
  setSearchVal: Dispatch<SetStateAction<string>>;
  loading?: boolean;
}

export const TodoSearch = ({
  searchVal,
  setSearchVal,
  loading,
}: TodoSearchProps) => {
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
        disabled={loading}
      />
    </div>
  );
};
