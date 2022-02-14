import {CompositeNavigationProp} from '@react-navigation/native';
import {MainBottomTabParamList} from '../MainBottomTabNavigation/type';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationParamList} from '../RootStackNavigation/type';

export type TodoListTopNavigationParamList = {
  Items: {done: boolean};
  DoneItem: {done: boolean};
};

export type TodoListTopNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainBottomTabParamList, 'Todo'>,
  StackNavigationProp<RootStackNavigationParamList>
>;
