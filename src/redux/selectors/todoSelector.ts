import {ReduxStoreType} from '../store';

export const todoItemsSelectors = (state: ReduxStoreType) => {
  return state.todoItems;
};
