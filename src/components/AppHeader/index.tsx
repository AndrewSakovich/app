import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Color} from '../../color';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const TodoHeader: FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={style.header}>
      <TouchableOpacity
        onPress={() => {
          return navigation.navigate('Add new task');
        }}>
        <FontAwesomeIcon icon={faPlus} size={25} color={Color.white} />
      </TouchableOpacity>
    </View>
  );
};
