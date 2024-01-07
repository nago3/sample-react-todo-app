import Todo from "./Todo";

type TodoType = {
  id: string
  name: string
  completed: boolean
}

function TodoList({todos, toggleTodo}: {todos: TodoType[], toggleTodo: (id: string) => void}) {
  return (
    <>
      {/* map(): 変数に1つ1つ取り出して処理をする */}
      {todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />)}
    </>
  );
}

export default TodoList;
