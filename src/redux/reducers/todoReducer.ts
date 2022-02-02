const initialState = {
  todoItems: [],
};

export const todoReducer = (state = initialState, action) => {
  const newTodoItems = state.todoItems.filter(item => {
    return item.id !== action.id;
  });

  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        todoItems: [...newTodoItems],
      };
  }
  return state;
};
