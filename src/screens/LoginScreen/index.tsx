import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {style} from './style';
import {Color} from '../../color';

export const LoginScreen: React.FC = () => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.text}>{'Login'}</Text>
        <TextInput
          style={style.input}
          selectionColor={Color.black}
          placeholder="Enter login"
          keyboardType="default"
        />
        <Text style={style.text}>{'Password'}</Text>
        <TextInput
          selectionColor={Color.black}
          style={style.input}
          placeholder="Enter password"
          keyboardType="default"
        />
      </View>
      <View>
        <TouchableOpacity style={style.registr}>
          <Text style={style.registr}>{'registration'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={style.loginText}>{'Sig in'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
