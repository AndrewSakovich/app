import {TodoItemType} from '../../../models';
import {TodoActionTypes} from './index';

export const itemAddAction = (payload: ItemAddPayload) => {
  return {
    type: TodoActionTypes.ADD_ITEM,
    payload,
  };
};

export type ItemAddPayload = {
  newItem: TodoItemType;
};

export type ItemAddAction = {
  type: TodoActionTypes.ADD_ITEM;
  payload: TodoItemType;
};
