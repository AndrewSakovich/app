import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MainBottonTabNavigation} from '../MainBottonTabNavigation';
import {ItemAdd} from '../../components/InputItemScreen';
import {Color} from '../../color';
import {RootStackNavigationParamList} from './type';

export const StackNavigation: React.FC = () => {
  const Stack = createStackNavigator<RootStackNavigationParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'AppTodo'}
          component={MainBottonTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'AddNewTask'}
          component={ItemAdd}
          options={{
            title: 'Add new task',
            headerTintColor: Color.white,
            headerTitleStyle: {
              color: Color.white,
            },
            headerStyle: {
              backgroundColor: Color.sapphire,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
