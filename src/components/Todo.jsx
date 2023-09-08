import React from "react";

export default function Todo({ todo }) {
  const { id, title, completed } = todo;
  const h1 = <h2>{title}</h2>;
  const text = completed ? <strike>{h1}</strike> : h1;
  return (
    <div className="hero is-small is-info">
      <div className="hero-body">
        <p className="title">{text}</p>
      </div>
    </div>
  );
}
