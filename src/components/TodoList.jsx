import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodoTask } from "../store";

function TodoList() {
  const dispatch = useDispatch();
  const { todoTasks, title } = useSelector(
    ({ todoForm, todoTasks: { data, searchTerm } }) => {
      // write filtering logic here based on search term
      const filteredTasks = data.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        todoTasks: filteredTasks,
        title: todoForm.title,
      };
    }
  );

  const handleTaskDelete = (task) => {
    dispatch(removeTodoTask(task.id));
  };

  const renderedTasks = todoTasks.map((task) => {
    const bold =
      title && task.title.toLowerCase().includes(title.toLowerCase());
    return (
      <div className="row" key={task.id}>
        <div className="col-10 mb-3 pb-3 bg-secondary text-white rounded">
          <span className="title">
            <h1>{task.title}</h1>
            {task.description}
          </span>
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-info"
            onClick={() => handleTaskDelete(task)}
          >
            Mark as Done
          </button>
        </div>
        <hr />
      </div>
    );
  });

  return (
    <div className="container">
      <div>{renderedTasks}</div>
    </div>
  );
}

export default TodoList;
