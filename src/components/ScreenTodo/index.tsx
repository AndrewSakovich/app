import React from 'react';
import {View} from 'react-native';
import {AppHeader} from '../AppHeader';
import {ItemAdd} from '../ItemAdd';
import {ItemList} from '../ItemList';
import {style} from './style';
import {store} from '../../redux/store';
import {Provider} from 'react-redux';
import {DoneItemList} from '../DoneItemList';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export const ScreenTodo: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Provider store={store}>
      <View style={style.container}>
        {/*<AppHeader />*/}
        <ItemAdd />
        <Tab.Navigator>
          <Tab.Screen name="all" component={ItemList} />
          <Tab.Screen name="done" component={DoneItemList} />
        </Tab.Navigator>
      </View>
    </Provider>
  );
};
