import {StyleSheet} from 'react-native';
import {Color} from '../../color';

export const style = StyleSheet.create({
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
