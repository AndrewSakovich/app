import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {style} from './style';
import {Color} from '../../color';

export const ScreenLogin: React.FC = () => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.text}>{'login'}</Text>
        <TextInput
          style={style.input}
          selectionColor={Color.black}
          placeholder="enter login"
          keyboardType="default"
        />
        <Text style={style.text}>{'Password'}</Text>
        <TextInput
          selectionColor={Color.black}
          style={style.input}
          placeholder="enter assword"
          keyboardType="default"
        />
      </View>
      <TouchableOpacity style={style.button}>
        <Text style={style.loginText}>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
};
