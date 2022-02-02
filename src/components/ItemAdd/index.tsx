import React, {useState} from 'react';
import {Text, Keyboard, TextInput, TouchableOpacity, View} from 'react-native';
import {style} from './style';
import {useDispatch} from 'react-redux';
import {addItemAction} from '../../redux/actions/reducerActions/addItemActions';
import {Color} from '../../color';
import {v4 as uuid} from 'uuid';

export const ItemAdd = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const buttonStyle = text ? style.text : style.textDis;

  const createNewItem = text => {
    return {
      id: uuid(),
      text,
    };
  };

  const addItem = (text): void => {
    const newItem = createNewItem(text);

    dispatch(addItemAction(newItem));
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
