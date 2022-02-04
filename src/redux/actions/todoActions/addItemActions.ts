import {TodoItemType} from '../../../models';
import {TodoActionTypes} from './index';

export const addItemAction = (payload: TodoItemType) => {
  return {
    type: TodoActionTypes.ADD_ITEM,
    payload,
  };
};

export type ItemAddAction = {
  type: TodoActionTypes.ADD_ITEM;
  payload: TodoItemType;
};
