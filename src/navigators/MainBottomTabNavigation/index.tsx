import React from 'react';
import {TodoListTopNavigation} from '../TodoListTopNavigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faList, faUserCheck} from '@fortawesome/free-solid-svg-icons';
import {ScreenLogin} from '../../components/ScreenLogin';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Color} from '../../color';
import {TodoHeader} from '../../components/AppHeader';
import {MainBottomTabParamList} from './type';
import {nameScreen} from '../nameScreen';

export const MainBottomTabNavigation: React.FC = () => {
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
        name={nameScreen.TODO_LIST_TOP_NAVIGATION}
        component={TodoListTopNavigation}
        options={{
          title: 'Todo',
          headerRight: () => {
            return <TodoHeader />;
          },
          tabBarIcon: () => {
            return (
              <FontAwesomeIcon icon={faList} size={20} color={Color.white} />
            );
          },
        }}
      />
      <Tab.Screen
        name={nameScreen.SCREEN_LOGIN}
        component={ScreenLogin}
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
