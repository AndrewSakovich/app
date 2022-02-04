import {TodoActionTypes} from './index';

export const deleteItemAction = (id: string) => {
  return {
    type: TodoActionTypes.DELETE_ITEM,
    payload: {
      id,
    },
  };
};

export type ItemDeleteAction = {
  type: TodoActionTypes.DELETE_ITEM;
  payload: {
    id: string;
  };
};
