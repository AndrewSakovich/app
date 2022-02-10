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
    flexDirection: 'column',
    flex: 1,
  },
  button: {
    height: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Color.sapphire,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
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
