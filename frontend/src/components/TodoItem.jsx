import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleColor, deleteTodo, editTodo } from '../redux/actions';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTodo(todo.id, value));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo-item">
      <span
        onClick={() => dispatch(toggleColor(todo.id))}
        style={{ color: todo.color, cursor: 'pointer' }}
      >
        {isEditing ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          todo.text
        )}
      </span>
      <div className="actions">
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </div>
    </div>
  );
}
