import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ItemAdd} from '../InputItemScreen';
import {ItemList} from '../ItemList';
import {style} from './style';
import {createStackNavigator} from '@react-navigation/stack';
import {TodoListScreen} from '../TodoListScreen';
import {TodoHeader} from '../AppHeader';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export const ScreenTodo: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'TodoList'}
        component={TodoListScreen}
        options={{
          header: ({navigation}) => {
            return <TodoHeader navigation={navigation} />;
          },
        }}
      />
      <Stack.Screen name={'AddItem'} component={ItemAdd} />
    </Stack.Navigator>
  );
};
