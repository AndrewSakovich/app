import React from 'react';
import {TodoListTopNavigator} from '../TodoListTopNavigator';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faList, faUserCheck} from '@fortawesome/free-solid-svg-icons';
import {LoginScreen} from '../../screens/LoginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Color} from '../../color';
import {TodoListTopNavigatorHeader} from '../../components/TodoListTopNavigatorHeader';
import {MainBottomTabParamList} from './type';
import {nameScreen} from '../nameScreen';

export const MainBottomTabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator<MainBottomTabParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: Color.white,
        headerStyle: {
          backgroundColor: Color.sapphire,
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: Color.jacksonsPurple,
        tabBarInactiveBackgroundColor: Color.sapphire,
      }}>
      <Tab.Screen
        name={nameScreen.TODO_LIST_TOP_NAVIGATOR}
        component={TodoListTopNavigator}
        options={{
          title: 'Todo',
          headerRight: () => {
            return <TodoListTopNavigatorHeader />;
          },
          tabBarIcon: () => {
            return (
              <FontAwesomeIcon icon={faList} size={20} color={Color.white} />
            );
          },
        }}
      />
      <Tab.Screen
        name={nameScreen.LOGIN_SCREEN}
        component={LoginScreen}
        options={{
          title: 'Login',
          tabBarIcon: () => {
            return (
              <FontAwesomeIcon
                icon={faUserCheck}
                size={20}
                color={Color.white}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
