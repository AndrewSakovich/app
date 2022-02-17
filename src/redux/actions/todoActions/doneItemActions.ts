import {TodoActionTypes} from './index';

export const doneItemActions = (payload: doneItemPayload) => {
  return {
    type: TodoActionTypes.DONE_ITEM,
    payload,
  };
};

export type doneItemPayload = {
  id: string;
};

export type DoneItemAction = {
  type: TodoActionTypes.DONE_ITEM;
  payload: doneItemPayload;
};
