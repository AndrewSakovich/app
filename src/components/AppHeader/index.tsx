import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Color} from '../../color';

export const TodoHeader = ({navigation}) => {
  return (
    <View style={style.header}>
      <Text style={style.text}>{'APP TODO'}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddItem');
        }}>
        <FontAwesomeIcon icon={faPlus} size={25} color={Color.white} />
      </TouchableOpacity>
    </View>
  );
};
