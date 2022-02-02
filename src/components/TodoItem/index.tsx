import {Text, View, Alert} from 'react-native';
import React from 'react';
import {style} from './style';
import {useDispatch} from 'react-redux';
import {deleteItemAction} from '../../redux/actions/reducerActions/deleteItemActions';

export const TodoItem = ({text, id}) => {
  const dispath = useDispatch();
  return (
    <View style={style.item}>
      <Text style={style.text}>{text}</Text>
      <Text
        style={style.delete}
        onPress={() => {
          Alert.alert('Delete task', 'Are you sure?', [
            {
              text: 'Cancel',
              // onPress: () => console.log('Cancel Pressed'),
            },
            {
              text: 'OK',
              onPress: () => {
                dispath(deleteItemAction(id));
                console.log('ID', id);
              },
            },
          ]);
        }}>
        {'DELETE'}
      </Text>
    </View>
  );
};
