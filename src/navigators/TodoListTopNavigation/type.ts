import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs/src/types';

export type TodoListTopNavigationParamList = {
  Items: {done: boolean};
  DoneItem: {done: boolean};
};

export type ItemNavigationProps = MaterialTopTabScreenProps<
  TodoListTopNavigationParamList,
  'Items'
>;
export type DoneItemNavigatioProps = MaterialTopTabScreenProps<
  TodoListTopNavigationParamList,
  'DoneItem'
>;
export type ItemListNavigationProps =
  | DoneItemNavigatioProps
  | ItemNavigationProps;
