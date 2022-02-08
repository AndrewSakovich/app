import {TodoItemType} from '../../models';
import {ItemAddPayload} from '../actions/todoActions/addItemActions';
import {ItemDeletePayload} from '../actions/todoActions/deleteItemActions';
import {TodoActionTypes} from '../actions/todoActions';
import {ItemDonePayload} from '../actions/todoActions/doneItemActions';

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
      const idDoneItem = state.todoItems.findIndex((item: TodoItemType) => {
        return item.id === id;
      });
      const newItem = {...state.todoItems[idDoneItem], done: true};
      const newTodoItems = state.todoItems.splice(idDoneItem, 1, newItem);
      console.log('NEWTODOITEMS', newTodoItems);
      console.log('NEWSTATE', state.todoItems);
      return {
        ...state,
      };
    }
    case TodoActionTypes.DELETE_DONE_ITEM: {
      const {id}: ItemDonePayload = action.payload;
      const idDoneItem = state.todoItems.findIndex((item: TodoItemType) => {
        return item.id === id;
      });
      const newItem = {...state.todoItems[idDoneItem], done: false};
      const newTodoItems = state.todoItems.splice(idDoneItem, 1, newItem);
      console.log('NEWTODOITEMS', newTodoItems);
      console.log('NEWSTATE', state.todoItems);
      return {
        ...state,
      };
    }
  }
  return state;
};
