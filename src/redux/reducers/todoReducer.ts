import {TodoItemType} from '../../models';
import {ItemAddPayload} from '../actions/todoActions/addItemActions';
import {ItemDeletePayload} from '../actions/todoActions/deleteItemActions';
import {TodoActionTypes} from '../actions/todoActions';
import {ItemDonePayload} from '../actions/todoActions/doneItemActions';
import {DeleteItemDonePayload} from '../actions/todoActions/deleteDoneItemAction';

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
    case TodoActionTypes.DONE_ITEM: {
      const {id}: ItemDonePayload = action.payload;

      //todo replace findIndex to find
      const idDoneItem = state.todoItems.findIndex((item: TodoItemType) => {
        return item.id === id;
      });
      const newItem = {...state.todoItems[idDoneItem], done: true};
      const newItems = state.todoItems; //todo make copy arr
      const item = state.newItem.splice(idDoneItem, 1, newItem);

      return {
        ...state,
        todoItems: newItems,
      };
    }
    case TodoActionTypes.DELETE_DONE_ITEM: {
      const {id}: DeleteItemDonePayload = action.payload;
      const idDoneItem = state.todoItems.findIndex((item: TodoItemType) => {
        return item.id === id;
      });
      const newItem = {...state.todoItems[idDoneItem], done: false};
      const newItems = state.todoItems;
      const item = state.todoItems.splice(idDoneItem, 1, newItem);

      return {
        ...state,
        todoItems: newItems,
      };
    }
  }
  return state;
};
