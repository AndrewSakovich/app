import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {style} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Color} from '../../color';
import {useNavigation} from '@react-navigation/native';
import {AddNewTaskNavigationProp} from '../../navigators/RootStackNavigation/type';

export const TodoHeader: FC = () => {
  const navigation = useNavigation<AddNewTaskNavigationProp>();
  const getNavigate = () => {
    return navigation.navigate('AddNewTask');
  };

  return (
    <View style={style.header}>
      <TouchableOpacity onPress={getNavigate}>
        <FontAwesomeIcon icon={faPlus} size={25} color={Color.white} />
      </TouchableOpacity>
    </View>
  );
};
