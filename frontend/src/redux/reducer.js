const initialState = {
  todos: [
    { id: 1, text: 'Go to the Library', color: 'black' },
    { id: 2, text: 'Have Lunch', color: 'black' },
    { id: 3, text: 'Meet friends', color: 'black' }
  ],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            color: 'black',
          },
        ],
      };

    case 'TOGGLE_COLOR':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                color: todo.color === 'black' ? 'green' : 'black',
              }
            : todo
        ),
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    default:
      return state;
  }
}
