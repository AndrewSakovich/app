import {ReduxStoreType} from '../store';

export const doneItemsSelectors =
  (flagDone: boolean) => (state: ReduxStoreType) => {
    return flagDone
      ? state.todoItems.filter(item => {
          return item.done;
        })
      : state.todoItems.filter(item => {
          return !item.done;
        });
  };
