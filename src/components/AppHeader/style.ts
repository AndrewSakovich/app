import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Color} from '../../color';

type AppHeaderStyleType = {
  header: ViewStyle;
  text: TextStyle;
};

export const style = StyleSheet.create<AppHeaderStyleType>({
  header: {
    height: 45,
    backgroundColor: Color.sapphire,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  text: {
    color: Color.white,
    fontSize: 18,
  },
});
