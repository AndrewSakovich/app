import {TodoActionTypes} from './index';

export const deleteItemAction = (payload: ItemDeletePayload) => {
  return {
    type: TodoActionTypes.DELETE_ITEM,
    payload,
  };
};

export type ItemDeletePayload = {
  id: string;
  flag: boolean;
};

export type ItemDeleteAction = {
  type: TodoActionTypes.DELETE_ITEM;
  payload: ItemDeletePayload;
};
