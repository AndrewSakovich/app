import {TodoItemType} from '../../../models';
import {TodoActionTypes} from './index';

export const addItemAction = (payload: addItemPayload) => {
  return {
    type: TodoActionTypes.ADD_ITEM,
    payload,
  };
};

export type addItemPayload = {
  newItem: TodoItemType;
};

export type addItemAction = {
  type: TodoActionTypes.ADD_ITEM;
  payload: addItemPayload;
};
