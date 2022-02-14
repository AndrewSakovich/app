import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

export type RootStackNavigationParamList = {
  AppTodo: {};
  AddNewTask: {};
};
export type AddNewTaskNavigationProp = NativeStackNavigationProp<
  RootStackNavigationParamList,
  'AddNewTask'
>;
