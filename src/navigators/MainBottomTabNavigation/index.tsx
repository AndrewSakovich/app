import React from 'react';
import {TodoListScreen} from '../TodoListTopNavigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faList, faUserCheck} from '@fortawesome/free-solid-svg-icons';
import {ScreenLogin} from '../../components/ScreenLogin';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Color} from '../../color';
import {TodoHeader} from '../../components/AppHeader';
import {MainBottomTabParamList} from './type';

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
        name="Todo"
        component={TodoListScreen}
        options={{
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
        name="Login"
        component={ScreenLogin}
        options={{
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
