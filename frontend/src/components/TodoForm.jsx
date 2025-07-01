import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

export default function TodoForm() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== '') {
      dispatch(addTodo(inputRef.current.value));
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input ref={inputRef} placeholder="Enter task" />
      <button type="submit">Submit</button>
    </form>
  );
}
