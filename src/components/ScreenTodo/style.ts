import {StyleSheet, ViewStyle} from 'react-native';

type ScreenTodoStyleType = {
  container: ViewStyle;
};

export const style = StyleSheet.create<ScreenTodoStyleType>({
  container: {
    flex: 1,
  },
});
