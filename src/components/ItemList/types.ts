import {TodoItemType} from '../../models';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs/src/types';
import {TodoListTopNavigationParamList} from '../../navigators/TodoListTopNavigation/type';

export type TodoItemPropsType = {
  todoItem: TodoItemType;
};

export type ItemNavigationProps = MaterialTopTabScreenProps<
  TodoListTopNavigationParamList,
  'Items'
>;
export type DoneItemNavigationProps = MaterialTopTabScreenProps<
  TodoListTopNavigationParamList,
  'DoneItem'
>;
export type ItemListNavigationProps =
  | DoneItemNavigationProps
  | ItemNavigationProps;
