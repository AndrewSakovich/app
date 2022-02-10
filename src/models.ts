import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core/lib/typescript/src/types';
import {ParamListBase} from '@react-navigation/native';

export type TodoItemType = {
  id: string;
  text: string;
  done: boolean;
};
export type NavigationProps = {
  navigation: StackNavigationProp<ParamListBase>;
};
export type RouteNavigationProps = {
  route: any;
};
