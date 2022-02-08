import React from 'react';
import {View, Text} from 'react-native';
import {style} from './style';

export const TodoHeader: React.FC = () => {
  return (
    <View style={style.header}>
      <Text style={style.text}>{'APP TODO'}</Text>
    </View>
  );
};

export const LoginHeader: React.FC = () => {
  return (
    <View style={style.header}>
      <Text style={style.text}>{'Log In'}</Text>
    </View>
  );
};
