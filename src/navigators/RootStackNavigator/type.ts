import {NavigatorScreenParams} from '@react-navigation/native';
import {MainBottomTabParamList} from '../MainBottomTabNavigator/type';

export type RootStackNavigationParamList = {
  MainBottomTabNavigator: NavigatorScreenParams<MainBottomTabParamList>;
  AddNewItemScreen: undefined;
};
