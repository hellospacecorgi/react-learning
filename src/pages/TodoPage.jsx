import Todo from "../components/Todo";

function TodoPage() {
  //for jest tutorial
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "throw rubbish", completed: true },
  ];

  return (
    <div>
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default TodoPage;
