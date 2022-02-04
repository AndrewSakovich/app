import {Text, View, Alert} from 'react-native';
import React, {FC} from 'react';
import {style} from './style';
import {useDispatch} from 'react-redux';
import {deleteItemAction} from '../../redux/actions/todoActions/deleteItemActions';
import {TodoItemPropsType} from '../ItemList/types';

export const TodoItem: FC<TodoItemPropsType> = props => {
  const {
    todoItem: {id, text},
  } = props;
  const dispatch = useDispatch();

  const onPressDelete = () => {
    Alert.alert('Delete task', 'Are you sure?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(deleteItemAction({id}));
        },
      },
    ]);
  };

  return (
    <View style={style.item}>
      <Text style={style.text}>{text}</Text>
      <Text style={style.delete} onPress={onPressDelete}>
        {'DELETE'}
      </Text>
    </View>
  );
};
