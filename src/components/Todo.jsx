import React from "react";

function Todo({ todo }) {
  const { id, title, completed } = todo;
  const h1 = <h1>{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;
  return (
    <div className="hero is-small is-info">
      <div className="hero-body">
        <span className="title">{text}</span>
      </div>
    </div>
  );
}

export default Todo;
