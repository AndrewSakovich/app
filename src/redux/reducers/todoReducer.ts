import {TodoItemType} from '../../models';
import {ItemAddAction} from '../actions/todoActions/addItemActions';
import {ItemDeleteAction} from '../actions/todoActions/deleteItemActions';
import {TodoActionTypes} from '../actions/todoActions';

export type TodoReducerState = {
  todoItems: any[];
};

type TodoAction = ItemAddAction | ItemDeleteAction;

const initialState: TodoReducerState = {
  todoItems: [],
};

export const todoReducer = (
  state = initialState,
  action: TodoAction,
): TodoReducerState => {
  switch (action.type) {
    case TodoActionTypes.ADD_ITEM:
      return {
        ...state,
        todoItems: [
          ...state.todoItems,

          {
            ...action.payload,
          },
        ],
      };
    case TodoActionTypes.DELETE_ITEM: {
      const newTodoItems = state.todoItems.filter((item: TodoItemType) => {
        return item.id !== action.payload.id;
      });
      return {
        ...state,
        todoItems: [...newTodoItems],
      };
    }
  }
  return state;
};
