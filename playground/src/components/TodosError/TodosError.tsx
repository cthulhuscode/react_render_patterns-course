import React from "react";
import "./style.css";

export const TodosError = () => {
  return (
    <div className="TodosError">
      <h2 className="TodosError-primary_text">
        Sorry, something went wrong x'd
      </h2>
      <p className="TodosError-secondary_text">Try again later</p>
    </div>
  );
};
