import {TodoItemType} from '../../models';
import {
  ItemAddAction,
  ItemAddPayload,
} from '../actions/todoActions/addItemActions';
import {
  ItemDeleteAction,
  ItemDeletePayload,
} from '../actions/todoActions/deleteItemActions';
import {TodoActionTypes} from '../actions/todoActions';

export type TodoReducerState = {
  todoItems: any[];
};

const initialState: TodoReducerState = {
  todoItems: [],
};

export const todoReducer = (
  state = initialState,
  action: any,
): TodoReducerState => {
  switch (action.type) {
    case TodoActionTypes.ADD_ITEM: {
      const {newItem}: ItemAddPayload = action.payload;

      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            ...newItem,
          },
        ],
      };
    }
    case TodoActionTypes.DELETE_ITEM: {
      const {id}: ItemDeletePayload = action.payload;

      const newTodoItems = state.todoItems.filter((item: TodoItemType) => {
        return item.id !== id;
      });

      return {
        ...state,
        todoItems: newTodoItems,
      };
    }
  }
  return state;
};
