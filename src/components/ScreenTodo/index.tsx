import React from 'react';
import {View} from 'react-native';
import {ItemAdd} from '../InputItemScreen';
import {ItemList} from '../ItemList';
import {style} from './style';
import {createStackNavigator} from '@react-navigation/stack';
import {TodoListScreen} from '../TodoListScreen';

export const ScreenTodo: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <View style={style.container}>
      {/*todo check is view requaered?*/}
      <Stack.Navigator>
        <Stack.Screen name={'TodoList'} component={TodoListScreen} />
        <Stack.Screen name={'AddItem'} component={ItemAdd} />
      </Stack.Navigator>
    </View>
  );
};
