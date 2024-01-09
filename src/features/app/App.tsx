// import React from 'react';
// import { useState, useRef } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// import './App.css';
// import TodoList from "../../components/TodoList"

// type TodoType = {
//   id: string
//   name: string
//   completed: boolean
// };

// function App() {
//   const [todos, setTodos] = useState<TodoType[]>([]);
//   const todoNameRef = useRef<HTMLInputElement>(null!);

//   function handleAddTodo() {
//     const name: string = todoNameRef.current.value;
//     if (name === "") return;

//     setTodos((prevTodos) => {
//       return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
//     });

//     todoNameRef.current.value = "";
//   }

//   const toggleTodo: (id: string) => void = (id) => {
//     const newTodos = [...todos];
//     // find(): 条件に当てはまるものを抽出する関数
//     const todo = newTodos.find((todo) => todo.id === id);
//     // undifined の対応
//     if (todo) {
//       todo.completed = !todo.completed;
//     };
//     setTodos(newTodos);
//   }

//   function handleClear() {
//     const newTodos = todos.filter((todo) => !todo.completed);
//     setTodos(newTodos);
//   }

//   return (
//     <div className="App">
//       <h1>This is TOP page contents.</h1>
//       {/* 値を渡す処理 */}
//       <TodoList todos={todos} toggleTodo={toggleTodo}/>
//       <input type="text" ref={todoNameRef} />
//       <button onClick={handleAddTodo}>タスクを追加</button>
//       <button onClick={handleClear}>完了したタスクの削除</button>
//       {/* filter(): find() と逆で、False を取り出す処理 */}
//       <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
//     </div>
//   );
// }

// export default App;


import { Routes, Route } from 'react-router-dom';
import './App.css';

import About from '../about/About';
import Contact from '../contact/Contact';
import NotFound from '../notFound/NotFound';

function App() {
  return (
    <div>
      <h1>This is header space</h1>
      <Routes>
        <Route index element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <h2>This is footer space</h2>
    </div>
  );
}

export default App;
