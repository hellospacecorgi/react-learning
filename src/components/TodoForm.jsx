import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle, changeDescription, addTodoTask } from "../store";

function TodoForm() {
  const dispatch = useDispatch();
  const { title, description } = useSelector((state) => {
    return {
      title: state.todoForm.title,
      description: state.todoForm.description,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeTitle(event.target.value));
  };

  const handleDescriptionChange = (event) => {
    dispatch(changeDescription(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title: title,
      description: description,
    };
    dispatch(addTodoTask(newTask));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input
            className="form-control"
            value={title}
            onChange={handleNameChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Task Description</label>
          <textarea
            class="form-control"
            rows="3"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
