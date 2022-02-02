import React from 'react';
import {View} from 'react-native';
import {AppHeader} from '../AppHeader';
import {ItemAdd} from '../ItemAdd';
import {ItemList} from '../ItemList';
import {style} from './style';

export const ScreenTodo = () => {
  return (
    <View style={style.container}>
      <AppHeader />
      <ItemAdd />
      <ItemList />
    </View>
  );
};
