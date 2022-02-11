import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ItemList} from '../../components/ItemList';
import {TodoListTopNavigationParamList} from './type';

export const TodoListScreen: React.FC = () => {
  const Tab = createMaterialTopTabNavigator<TodoListTopNavigationParamList>();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{title: 'Todo'}}
        name="Items"
        component={ItemList}
        initialParams={{done: false}}
      />
      <Tab.Screen
        options={{title: 'Done'}}
        name="DoneItem"
        component={ItemList}
        initialParams={{done: true}}
      />
    </Tab.Navigator>
  );
};
