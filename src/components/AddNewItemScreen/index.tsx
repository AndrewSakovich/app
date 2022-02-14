import React, {useState} from 'react';
import {
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {style} from './style';
import {useDispatch} from 'react-redux';
import {itemAddAction} from '../../redux/actions/todoActions/addItemActions';
import {Color} from '../../color';
import {v4 as uuid} from 'uuid';
import {TodoItemType} from '../../models';
import {AddNewItemNavigationProps} from './type';

export const AddNewItemScreen: React.FC<AddNewItemNavigationProps> = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [text, setText] = useState<string>('');
  const buttonStyle: ViewStyle = text ? style.button : style.buttonDis;

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
    navigation.goBack();
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
      <TouchableOpacity disabled={!text} style={buttonStyle} onPress={onPress}>
        <Text style={style.text}>{'Add new task'}</Text>
      </TouchableOpacity>
    </View>
  );
};
