import {CompositeNavigationProp} from '@react-navigation/native';
import {MainBottomTabParamList} from '../MainBottomTabNavigator/type';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigationParamList} from '../RootStackNavigator/type';
import {nameScreen} from '../nameScreen';

export type TodoListTopNavigationParamList = {
  ItemsScreen: {done: boolean};
  DoneItemScreen: {done: boolean};
};

export type TodoListTopNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<
    MainBottomTabParamList,
    nameScreen.TODO_LIST_TOP_NAVIGATOR
  >,
  StackNavigationProp<RootStackNavigationParamList>
>;
