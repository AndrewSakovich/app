import React from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type TodoListEmptyComponentType = {
  container: ViewStyle;
  text: TextStyle;
};

export const style = StyleSheet.create<TodoListEmptyComponentType>({
  container: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});
