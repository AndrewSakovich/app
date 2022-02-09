import {TodoItemType} from '../../models';
import {ItemAddPayload} from '../actions/todoActions/addItemActions';
import {ItemDeletePayload} from '../actions/todoActions/deleteItemActions';
import {TodoActionTypes} from '../actions/todoActions';
import {ItemDonePayload} from '../actions/todoActions/doneItemActions';

export type TodoReducerState = {
  todoItems: TodoItemType[];
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

      const newTodoItems = [
        ...state.todoItems.filter((item: TodoItemType) => {
          return item.id !== id;
        }),
      ];
      return {
        ...state,
        todoItems: newTodoItems,
      };
    }
    case TodoActionTypes.DONE_ITEM: {
      const {id}: ItemDonePayload = action.payload;

      const newTodoItems = state.todoItems.map(item => {
        if (item.id === id) {
          return {...item, done: !item.done};
        }
        return item;
      });

      return {
        ...state,
        todoItems: newTodoItems,
      };
    }
  }
  return state;
};
