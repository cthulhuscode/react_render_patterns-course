import React, { ReactElement, ReactNode } from "react";
import "./styles.css";

interface TodoHeaderProps {
  children: ReactNode | ReactNode[];
  loading: boolean;
}

export const TodoHeader = ({ children, loading }: TodoHeaderProps) => {
  return (
    <header className="header">
      {React.Children.map(children, (child, index) =>
        child
          ? React.cloneElement(child as ReactElement, {
              loading,
              key: index,
            })
          : null
      )}
    </header>
  );
};
