import React from 'react';
import {View} from 'react-native';
import {ItemAdd} from '../InputItemScreen';
import {ItemList} from '../ItemList';
import {style} from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export const ScreenTodo: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={style.container}>
      <ItemAdd />
      <Tab.Navigator>
        <Tab.Screen name="all" component={ItemList} />
        <Tab.Screen name="done" component={ItemList} />
      </Tab.Navigator>
    </View>
  );
};
