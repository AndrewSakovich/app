import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MainBottomTabNavigation} from '../MainBottomTabNavigation';
import {AddNewItemScreen} from '../../components/AddNewItemScreen';
import {Color} from '../../color';
import {RootStackNavigationParamList} from './type';
import {nameScreen} from '../nameScreen';

export const StackNavigation: React.FC = () => {
  const Stack = createStackNavigator<RootStackNavigationParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={nameScreen.MAIN_BOTTOM_TAB_NAVIGATION}
          component={MainBottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={nameScreen.ADD_NEW_ITEM_SCREEN}
          component={AddNewItemScreen}
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
