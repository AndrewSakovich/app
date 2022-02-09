import {TodoItemType} from '../../models';
import {ItemAddPayload} from '../actions/todoActions/addItemActions';
import {ItemDeletePayload} from '../actions/todoActions/deleteItemActions';
import {TodoActionTypes} from '../actions/todoActions';
import {ItemDonePayload} from '../actions/todoActions/doneItemActions';
import {DeleteItemDonePayload} from '../actions/todoActions/deleteDoneItemAction';

export type TodoReducerState = {
  todoItems: any[];
  doneItems: any[];
};

const initialState: TodoReducerState = {
  todoItems: [],
  doneItems: [],
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
      const {id, flag}: ItemDeletePayload = action.payload;

      const arrItems = flag ? state.doneItems : state.todoItems;
      const newTodoItems = arrItems.filter((item: TodoItemType) => {
        return item.id !== id;
      });
      if (flag) {
        return {
          ...state,
          doneItems: newTodoItems,
        };
      }
      return {
        ...state,
        todoItems: newTodoItems,
      };
    }
    case TodoActionTypes.DONE_ITEM: {
      const {id}: ItemDonePayload = action.payload;

      const item = state.todoItems.find(item => {
        return item.id === id;
      });
      const newItem = {
        ...item,
        done: !item.done,
      };
      const newTodoItems = state.todoItems.filter((item: TodoItemType) => {
        return item.id !== id;
      });

      return {
        ...state,
        todoItems: newTodoItems,
        doneItems: [...state.doneItems, doneItem],
      };
    }
    case TodoActionTypes.DELETE_DONE_ITEM: {
      const {id}: DeleteItemDonePayload = action.payload;
      const newItem = {
        ...state.doneItems.find(item => {
          return item.id === id;
        }),
        done: false,
      };
      const newDoneItems = state.doneItems.filter((item: TodoItemType) => {
        return item.id !== id;
      });
      return {
        ...state,
        todoItems: [...state.todoItems, newItem],
        doneItems: newDoneItems,
      };
    }
  }
  return state;
};
