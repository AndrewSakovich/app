import {ReduxStoreType} from '../store';

export const todoItemsSelectors = (state: ReduxStoreType) => {
  return state.todoItems;
};

export const doneItemsSelectors = (state: ReduxStoreType) => {
  return state.doneItems;
};
