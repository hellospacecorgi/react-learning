import Todo from "../components/Todo";

function TodoPage() {
  //for jest tutorial
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "throw rubbish", completed: true },
  ];

  return (
    <div>
      <div className="container">
        <p className="h1 p-3 mb-2 bg-success text-white">
          Todo List - Array map operation
        </p>

        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default TodoPage;
