import React from 'react';
import {View, Text} from 'react-native';
import {style} from './style';

export const AppHeader = () => {
  return (
    <View style={style.header}>
      <Text style={style.text}>{'APP TODO'}</Text>
    </View>
  );
};
