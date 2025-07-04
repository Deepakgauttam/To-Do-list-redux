export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text,
});

export const toggleColor = (id) => ({
  type: 'TOGGLE_COLOR',
  payload: id,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const editTodo = (id, text) => ({
  type: 'EDIT_TODO',
  payload: { id, text },
});
