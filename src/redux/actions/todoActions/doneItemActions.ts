import {TodoActionTypes} from './index';

export const doneItemActions = (payload: ItemDonePayload) => {
  return {
    type: TodoActionTypes.DONE_ITEM,
    payload,
  };
};

export type ItemDonePayload = {
  id: string;
};

export type ItemDoneAction = {
  type: TodoActionTypes.DONE_ITEM;
  payload: ItemDonePayload;
};
