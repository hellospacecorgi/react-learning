import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";

function TodoPage() {
  return (
    <div>
      <div className="container is-fluid">
        <p className="h1 p-3 mb-2 bg-success text-white">Todo List</p>
        <TodoForm />
        <hr />
        <TodoSearch />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoPage;
