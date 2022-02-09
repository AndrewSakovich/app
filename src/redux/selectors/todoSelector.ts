import {ReduxStoreType} from '../store';

export const doneItemsSelectors =
  (flagDone: boolean) => (state: ReduxStoreType) => {
    return flagDone ? state.doneItems : state.todoItems;
  };
