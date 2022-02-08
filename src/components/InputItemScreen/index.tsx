import React, {useState} from 'react';
import {
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
  TextStyle,
} from 'react-native';
import {style} from './style';
import {useDispatch} from 'react-redux';
import {itemAddAction} from '../../redux/actions/todoActions/addItemActions';
import {Color} from '../../color';
import {v4 as uuid} from 'uuid';
import {TodoItemType} from '../../models';

export const ItemAdd: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>('');
  const buttonStyle: TextStyle = text ? style.text : style.textDis;

  const createNewItem = (text: TodoItemType['text']): TodoItemType => {
    return {
      id: uuid(),
      text,
      done: false,
    };
  };

  const addItem = (text: TodoItemType['text']) => {
    const newItem = createNewItem(text);

    dispatch(itemAddAction({newItem}));
  };

  const onPress = () => {
    Keyboard.dismiss();
    addItem(text);
    setText('');
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="New task"
        keyboardType="default"
        onChangeText={setText}
        value={text}
        selectionColor={Color.black}
      />
      <TouchableOpacity disabled={!text} style={style.button} onPress={onPress}>
        <Text style={buttonStyle}>{'Add'}</Text>
      </TouchableOpacity>
    </View>
  );
};
