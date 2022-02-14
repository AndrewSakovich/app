import {NavigatorScreenParams} from '@react-navigation/native';
import {MainBottomTabParamList} from '../MainBottomTabNavigation/type';

export type RootStackNavigationParamList = {
  MainBottomTabNavigation: NavigatorScreenParams<MainBottomTabParamList>;
  AddNewItemScreen: undefined;
};
