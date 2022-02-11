import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

export type RootStackNavigationParamList = {
  AppTodo: {} | undefined;
  AddNewTask: {} | undefined;
};
export type AddNewTaskNavigationProp = NativeStackNavigationProp<
  RootStackNavigationParamList,
  'AddNewTask'
>;
