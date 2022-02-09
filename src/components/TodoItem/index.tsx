import {Text, View, Alert, TouchableOpacity, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {style} from './style';
import {useDispatch} from 'react-redux';
import {deleteItemAction} from '../../redux/actions/todoActions/deleteItemActions';
import {TodoItemPropsType} from '../ItemList/types';
import {doneItemActions} from '../../redux/actions/todoActions/doneItemActions';
import {deleteDoneItemActions} from '../../redux/actions/todoActions/deleteDoneItemAction';

export const TodoItem: FC<TodoItemPropsType> = props => {
  const {
    todoItem: {id, text, done},
  } = props;

  const dispatch = useDispatch();

  const textStyle: TextStyle = done ? style.doneText : style.text;

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
          dispatch(deleteItemAction({id}));
        },
      },
    ]);
  };

  return (
    <View style={style.item}>
      <TouchableOpacity onPress={onPressDone}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>

      <Text style={style.delete} onPress={onPressDelete}>
        {'DELETE'}
      </Text>
    </View>
  );
};
