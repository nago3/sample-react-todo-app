type TodoType = {
  id: string
  name: string
  completed: boolean
}

function Todo({ todo, toggleTodo }: { todo: TodoType, toggleTodo: (id: string) => void }) {
  function handleTodoClick() {
    // ここの todo は、押したチェックボックスのデータ自体のことを指す
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onClick={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  );
}

export default Todo;