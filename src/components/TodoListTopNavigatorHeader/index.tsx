import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {style} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Color} from '../../color';
import {useNavigation} from '@react-navigation/native';
import {TodoListTopNavigationProp} from '../../navigators/TodoListTopNavigator/type';

export const TodoListTopNavigatorHeader: FC = () => {
  const navigation = useNavigation<TodoListTopNavigationProp>();

  const getNavigate = () => {
    navigation.navigate('AddNewItemScreen');
  };

  return (
    <View style={style.header}>
      <TouchableOpacity onPress={getNavigate}>
        <FontAwesomeIcon icon={faPlus} size={25} color={Color.white} />
      </TouchableOpacity>
    </View>
  );
};
