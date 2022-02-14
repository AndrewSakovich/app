import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ItemList} from '../../components/ItemList';
import {TodoListTopNavigationParamList} from './type';
import {nameScreen} from '../nameScreen';

export const TodoListTopNavigation: React.FC = () => {
  const Tab = createMaterialTopTabNavigator<TodoListTopNavigationParamList>();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{title: 'Todo'}}
        name={nameScreen.ITEMS}
        component={ItemList}
        initialParams={{done: false}}
      />
      <Tab.Screen
        options={{title: 'Done'}}
        name={nameScreen.DONE_ITEMS}
        component={ItemList}
        initialParams={{done: true}}
      />
    </Tab.Navigator>
  );
};
