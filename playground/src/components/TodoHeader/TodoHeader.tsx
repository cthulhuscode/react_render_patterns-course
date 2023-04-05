import { ReactNode } from "react";
import "./styles.css";

interface TodoHeaderProps {
  children: ReactNode;
}

export const TodoHeader = ({ children }: TodoHeaderProps) => {
  return <header className="header">{children}</header>;
};
