import React, { useState } from "react";
import Header from "./components/header";
import Row from "./components/row";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className='app'>
      <Header setTodo={setTodos} len={todos.length} />
      <Row todoList={todos} setTodo={setTodos} />
    </div>
  );
}

export default App;
