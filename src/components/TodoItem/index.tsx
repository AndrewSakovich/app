import {Text, View, Alert, TouchableOpacity, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {style} from './style';
import {useDispatch} from 'react-redux';
import {deleteItemAction} from '../../redux/actions/todoActions/deleteItemActions';
import {TodoItemPropsType} from '../ItemList/types';
import {doneItemActions} from '../../redux/actions/todoActions/doneItemActions';

export const TodoItem: FC<TodoItemPropsType> = props => {
  const {
    todoItem: {id, text, done},
  } = props;

  const dispatch = useDispatch();

  const textStyle = done ? style.doneText : style.text;

  const onPressDone = () => {
    dispatch(doneItemActions({id}));
  };

  const onPressDelete = () => {
    Alert.alert('Delete task', 'Are you sure?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(deleteItemAction({id, done}));
        },
      },
    ]);
  };

  return (
    <View style={style.item}>
      <TouchableOpacity style={style.touch} onPress={onPressDone}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
      <Text style={style.delete} onPress={onPressDelete}>
        {'DELETE'}
      </Text>
    </View>
  );
};
