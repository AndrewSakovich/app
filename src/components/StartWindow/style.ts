import React from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type StartWindowStyleType = {
  container: ViewStyle;
  text: TextStyle;
};

export const style = StyleSheet.create<StartWindowStyleType>({
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
