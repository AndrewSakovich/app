import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Color} from '../../color';

type ItemAddStylesType = {
  container: ViewStyle;
  button: ViewStyle;
  input: ViewStyle;
  text: TextStyle;
  textDis: TextStyle;
};

export const style = StyleSheet.create<ItemAddStylesType>({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },

  input: {
    paddingHorizontal: 10,
    flex: 1,
    width: '100%',
    backgroundColor: Color.cararra,
    borderRadius: 5,
    height: 40,
  },
  text: {
    fontSize: 18,
    color: Color.sapphire,
  },
  textDis: {
    fontSize: 18,
    color: Color.lemonGrass,
  },
});
