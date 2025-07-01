import React from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';

export default function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="app">
      <div className="todo-container">
        <h2>To-Do List</h2>
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
